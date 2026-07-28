import React, { useState, useCallback, useEffect, useMemo } from "react";
import { THEMES, QUESTIONS, getQuestionsByTheme } from "./data/questions.js";
import {
  cloudEnabled, getSessionProfile, subscribeAuth, signUpCloud, signInCloud,
  createLocalProfile, signOutProfile, getStats, recordAnswer, pickAdaptive, computeMastery,
} from "./storage.js";

/* ---------- Splash ---------- */
function Splash() {
  return (
    <div className="splash">
      <div className="splash-badge"><span>🚗</span></div>
      <div className="splash-dashes" />
      <p className="splash-label">Chargement du code de la route…</p>
    </div>
  );
}

function SignBadge({ children, tone = "red", size = 44, icon = false, accent }) {
  return (
    <span
      className={"sign-badge" + (tone ? ` tone-${tone}` : "") + (icon ? " icon-badge" : "")}
      style={{ "--size": `${size}px`, "--accent": accent }}
    >
      {children}
    </span>
  );
}

function RoadProgress({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="road-progress">
      <div className="road-track">
        <div className="road-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="road-progress-label mono">{current}/{total}</span>
    </div>
  );
}

/* ---------- Auth / profil (compte multi-appareils si Supabase est configuré) ---------- */
function AuthPanel({ onDone }) {
  const [mode, setMode] = useState("signup"); // signup | signin
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (mode === "signup") {
        const profile = await signUpCloud(email, password, name || email.split("@")[0]);
        onDone(profile);
      } else {
        const profile = await signInCloud(email, password);
        onDone(profile);
      }
    } catch (err) {
      setError(err.message === "Invalid login credentials" ? "Email ou mot de passe incorrect." : err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="auth-form" onSubmit={submit}>
      <div className="auth-tabs">
        <button type="button" className={"auth-tab" + (mode === "signup" ? " active" : "")} onClick={() => setMode("signup")}>Créer un compte</button>
        <button type="button" className={"auth-tab" + (mode === "signin" ? " active" : "")} onClick={() => setMode("signin")}>Se connecter</button>
      </div>
      {mode === "signup" && (
        <input className="profile-input" placeholder="Ton prénom" value={name} onChange={(e) => setName(e.target.value)} maxLength={30} />
      )}
      <input className="profile-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input className="profile-input" type="password" placeholder="Mot de passe (6 caractères min.)" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required />
      {error && <p className="auth-error">{error}</p>}
      <button type="submit" className="btn-primary profile-submit" disabled={loading} style={{ width: "100%" }}>
        {loading ? "…" : mode === "signup" ? "Créer mon compte" : "Se connecter"}
      </button>
      {mode === "signup" && <p className="auth-hint">Utilise le même email + mot de passe sur un autre appareil pour retrouver ta progression.</p>}
    </form>
  );
}

function ProfileBar({ profile, mastery, onLocalProfile, onCloudDone, onOpenProgress, onLogout }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  if (!profile) {
    return (
      <div className="profile-bar guest">
        {!open ? (
          <button className="profile-bar-cta" onClick={() => setOpen(true)}>
            <SignBadge tone="yellow" size={30}>👤</SignBadge>
            <span>{cloudEnabled ? "Se connecter pour suivre ta progression partout" : "Créer un profil pour suivre ta progression"}</span>
          </button>
        ) : cloudEnabled ? (
          <AuthPanel onDone={(p) => { onCloudDone(p); setOpen(false); }} />
        ) : (
          <form
            className="profile-form"
            onSubmit={(e) => { e.preventDefault(); if (name.trim()) { onLocalProfile(name); setOpen(false); } }}
          >
            <input className="profile-input" placeholder="Ton prénom" value={name} onChange={(e) => setName(e.target.value)} autoFocus maxLength={30} />
            <button type="submit" className="btn-primary profile-submit" disabled={!name.trim()}>OK</button>
            <button type="button" className="btn-ghost profile-cancel" onClick={() => setOpen(false)}>Annuler</button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="profile-bar signed-in">
      <button className="profile-summary" onClick={onOpenProgress}>
        <SignBadge tone="green" size={34}>{profile.name.charAt(0).toUpperCase()}</SignBadge>
        <span className="profile-summary-text">
          <strong>{profile.name}</strong>
          <span className="mono">{mastery.mastered}/{mastery.attempted} maîtrisées{profile.cloud ? " · compte" : " · local"}</span>
        </span>
      </button>
      <button className="profile-logout" onClick={onLogout} title="Se déconnecter">⤴</button>
    </div>
  );
}

function Home({ onStartExam, onOpenThemes, onStartTheme, profile, mastery, onLocalProfile, onCloudDone, onOpenProgress, onLogout }) {
  return (
    <div className="home">
      <ProfileBar profile={profile} mastery={mastery} onLocalProfile={onLocalProfile} onCloudDone={onCloudDone} onOpenProgress={onOpenProgress} onLogout={onLogout} />
      <header className="hero">
        <div className="hero-top">
          <div>
            <span className="hero-eyebrow">Examen du permis B</span>
            <h1>Code de<br />la Route</h1>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">{QUESTIONS.length}</span>
            <span className="hero-stat-label">Questions</span>
          </div>
        </div>
        <p className="hero-sub">
          Vrais panneaux, corrections détaillées, conditions d'examen réelles.
          Entraîne-toi thème par thème ou passe directement un blanc chronométré.
        </p>
        <div className="hero-actions">
          <button className="btn-primary btn-hero" onClick={onStartExam}>
            Démarrer l'examen blanc -- 40 questions
          </button>
          <button className="btn-ghost-light btn-hero" onClick={onOpenThemes}>
            Découvrir par thème
          </button>
        </div>
        <div className="hero-trust">
          <span className="hero-trust-item">🔁 Entraînement illimité</span>
          <span className="hero-trust-item">⚖️ Questions mises à jour selon le code en vigueur</span>
        </div>
      </header>

      <h2 className="section-title">En situation réelle</h2>
      <div className="situ-grid">
        <button className="situ-card situ-priorites" onClick={() => onStartTheme("priorites")}>
          <span className="situ-card-label">Priorités &amp; intersections</span>
        </button>
        <button className="situ-card situ-vitesse" onClick={() => onStartTheme("vitesse")}>
          <span className="situ-card-label">Vitesse &amp; autoroute</span>
        </button>
      </div>
    </div>
  );
}

/* ---------- Liste des thèmes (écran dédié) ---------- */
function ThemeList({ onStartTheme, onHome }) {
  return (
    <div className="theme-list-screen">
      <div className="quiz-topbar">
        <button className="btn-ghost" onClick={onHome}>← Accueil</button>
      </div>
      <h1 className="progress-title">Choisis un thème</h1>
      <p className="hero-sub" style={{ color: "var(--ink-soft)", marginBottom: 20 }}>
        Séries de 20 questions, ciblées sur ce que tu maîtrises le moins.
      </p>
      <div className="theme-grid">
        {THEMES.map((t) => {
          const n = getQuestionsByTheme(t.id).length;
          return (
            <button key={t.id} className="theme-card" onClick={() => onStartTheme(t.id)} disabled={n === 0}>
              <SignBadge tone="blue" icon accent={t.color} size={38}>{t.icon}</SignBadge>
              <span className="theme-label">{t.label}</span>
              <span className="theme-count mono">{n} question{n > 1 ? "s" : ""}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Progression ---------- */
function Progress({ profile, stats, onHome, onLogout }) {
  const byTheme = THEMES.map((t) => {
    const pool = getQuestionsByTheme(t.id);
    return { ...t, ...computeMastery(stats, pool) };
  });
  const overall = computeMastery(stats, QUESTIONS);

  return (
    <div className="progress-screen">
      <div className="quiz-topbar">
        <button className="btn-ghost" onClick={onHome}>← Accueil</button>
      </div>
      <h1 className="progress-title">Progression de {profile.name}</h1>
      {profile.cloud && <p className="auth-hint" style={{ margin: "-10px 0 18px" }}>Synchronisée sur tous tes appareils via {profile.email}.</p>}
      <div className="progress-overview">
        <div className="score-ring small" style={{ "--pct": overall.total ? Math.round((overall.mastered / overall.total) * 100) : 0 }}>
          <div className="score-ring-inner">
            <span className="results-score-num">{overall.mastered}</span>
            <span className="results-score-total mono">/ {overall.total}</span>
          </div>
        </div>
        <p className="hero-sub" style={{ color: "var(--ink-soft)" }}>
          Questions maîtrisées (3 bonnes réponses d'affilée). {overall.attempted} questions déjà rencontrées, {overall.toReview} à revoir en priorité.
        </p>
      </div>
      <h2 className="section-title">Par thème</h2>
      <div className="progress-theme-list">
        {byTheme.map((t) => (
          <div className="progress-theme-row" key={t.id}>
            <SignBadge tone="blue" icon accent={t.color} size={32}>{t.icon}</SignBadge>
            <div className="progress-theme-info">
              <span className="theme-label">{t.label}</span>
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: `${t.total ? (t.mastered / t.total) * 100 : 0}%`, background: t.color }} />
              </div>
            </div>
            <span className="progress-theme-count mono">{t.mastered}/{t.total}</span>
          </div>
        ))}
      </div>
      <button className="btn-ghost profile-reset" onClick={onLogout}>Se déconnecter</button>
    </div>
  );
}

function QuestionImage({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return (
    <div className="question-image-wrap">
      <img src={src} alt={alt} className="question-image" onError={() => setFailed(true)} loading="lazy" />
    </div>
  );
}

function Quiz({ questions, onFinish, onExit, onAnswer }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const qc = questions[index];
  const multi = qc.answers.filter((a) => a.correct).length > 1;

  const toggleAnswer = (i) => {
    if (revealed) return;
    if (multi) setSelected((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));
    else setSelected([i]);
  };

  const validate = () => {
    if (selected.length === 0) return;
    const correctSet = qc.answers.map((a, i) => (a.correct ? i : null)).filter((x) => x !== null);
    const isCorrect = correctSet.length === selected.length && correctSet.every((i) => selected.includes(i));
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((a) => [...a, { question: qc, selected, correct: isCorrect }]);
    onAnswer(qc.id, isCorrect);
    setRevealed(true);
  };

  const next = () => {
    if (index + 1 >= questions.length) onFinish({ score, total: questions.length, answers });
    else { setIndex((i) => i + 1); setSelected([]); setRevealed(false); }
  };

  const lastAnswer = answers[answers.length - 1];

  return (
    <div className="quiz">
      <div className="quiz-topbar">
        <button className="btn-ghost" onClick={onExit}>← Quitter</button>
        <RoadProgress current={index + 1} total={questions.length} />
      </div>
      <div className="quiz-card">
        <span className="quiz-theme-tag">{THEMES.find((t) => t.id === qc.theme)?.label}</span>
        <h2 className="quiz-question">{qc.question}</h2>
        {multi && <p className="quiz-hint">Plusieurs réponses possibles</p>}
        <QuestionImage src={qc.image} alt={qc.question} />
        <div className="answers">
          {qc.answers.map((a, i) => {
            let cls = "answer";
            if (selected.includes(i)) cls += " selected";
            if (revealed) { if (a.correct) cls += " correct"; else if (selected.includes(i)) cls += " wrong"; }
            return (
              <button key={i} className={cls} onClick={() => toggleAnswer(i)} disabled={revealed}>
                <span className="answer-marker">
                  {multi ? (selected.includes(i) ? "☑" : "☐") : (selected.includes(i) ? "●" : "○")}
                </span>{a.text}
              </button>
            );
          })}
        </div>
        {revealed && (
          <div className={"explanation " + (lastAnswer?.correct ? "ok" : "ko")}>
            <strong>{lastAnswer?.correct ? "Bonne réponse !" : "Pas tout à fait."}</strong>
            <p>{qc.explanation}</p>
          </div>
        )}
        <div className="quiz-actions">
          {!revealed ? (
            <button className="btn-primary" onClick={validate} disabled={selected.length === 0}>Valider</button>
          ) : (
            <button className="btn-primary" onClick={next}>
              {index + 1 >= questions.length ? "Voir les résultats" : "Question suivante"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function useCountUp(target, duration = 900) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

function Confetti() {
  const pieces = Array.from({ length: 18 });
  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((_, i) => (
        <span key={i} className={"confetti-piece c" + (i % 4)} style={{ left: `${(i * 97) % 100}%`, animationDelay: `${(i % 6) * 0.12}s` }} />
      ))}
    </div>
  );
}

function Results({ result, profile, onRestart, onHome, onOpenProgress }) {
  const { score, total, answers } = result;
  const pct = Math.round((score / total) * 100);
  const passed = total === 40 ? score >= 35 : pct >= 80;
  const animatedScore = useCountUp(score);

  const byTheme = THEMES.map((t) => {
    const inTheme = answers.filter((a) => a.question.theme === t.id);
    if (inTheme.length === 0) return null;
    const correct = inTheme.filter((a) => a.correct).length;
    return { ...t, correct, total: inTheme.length, pct: correct / inTheme.length };
  }).filter(Boolean);

  const weakest = byTheme.length
    ? byTheme.reduce((worst, t) => (t.pct < worst.pct ? t : worst), byTheme[0])
    : null;

  const statusMsg = total === 40
    ? (passed
        ? "Admis ! Tu passerais l'examen officiel (seuil : 35/40)."
        : `Pas encore. Il faut 35/40 pour valider -- encore ${35 - score} bonnes réponses à trouver.`)
    : (passed ? "Belle série, continue comme ça !" : "Continue de t'entraîner, tu progresses.");

  const focusMsg = weakest && weakest.pct < 1
    ? `Ton point faible sur cette série : ${weakest.label.toLowerCase()} (${weakest.correct}/${weakest.total}).`
    : null;

  return (
    <div className="results">
      <div className={"results-card " + (passed ? "pass" : "fail")}>
        {passed && <Confetti />}
        <div className="score-ring" style={{ "--pct": Math.round((score / total) * 100) }}>
          <div className="score-ring-inner">
            <span className="results-score-num">{animatedScore}</span>
            <span className="results-score-total mono">/ {total}</span>
          </div>
        </div>
        <p className="results-status">{statusMsg}</p>
        {focusMsg && <p className="results-focus">{focusMsg}</p>}
      </div>

      <h2 className="section-title">Détail par thème</h2>
      <div className="results-theme-list">
        {byTheme.map((t) => (
          <div className="results-theme-row" key={t.id}>
            <SignBadge tone="blue" icon accent={t.color} size={30}>{t.icon}</SignBadge>
            <div className="progress-theme-info">
              <span className="theme-label">{t.label}</span>
              <div className="progress-bar-track">
                <div className="progress-bar-fill" style={{ width: `${t.pct * 100}%`, background: t.pct === 1 ? "var(--green)" : t.color }} />
              </div>
            </div>
            <span className="progress-theme-count mono">{t.correct}/{t.total}</span>
          </div>
        ))}
      </div>

      <h2 className="section-title">Revoir les erreurs</h2>
      <div className="review-list">
        {answers.filter((a) => !a.correct).map((a, i) => (
          <div className="review-item" key={i}>
            <p className="review-q">{a.question.question}</p>
            <p className="review-explanation">{a.question.explanation}</p>
          </div>
        ))}
        {answers.every((a) => a.correct) && <p className="review-perfect">Aucune erreur, sans faute ! 👏</p>}
      </div>
      <div className="quiz-actions results-actions">
        <button className="btn-ghost" onClick={onHome}>Accueil</button>
        {profile && <button className="btn-ghost" onClick={onOpenProgress}>Ma progression</button>}
        <button className="btn-primary" onClick={onRestart}>Recommencer</button>
      </div>
    </div>
  );
}

export default function App() {
  const [booting, setBooting] = useState(true);
  const [screen, setScreen] = useState("home");
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState(null);
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState({});

  // Charge la session au démarrage + écoute les changements de connexion.
  useEffect(() => {
    let active = true;
    (async () => {
      const p = await getSessionProfile();
      if (active) setProfile(p);
    })();
    const unsubscribe = subscribeAuth((p) => { if (active) setProfile(p); });
    const t = setTimeout(() => setBooting(false), 900);
    return () => { active = false; unsubscribe(); clearTimeout(t); };
  }, []);

  // Recharge les stats à chaque changement de profil (connexion / déconnexion).
  useEffect(() => {
    let active = true;
    (async () => {
      const s = await getStats(profile);
      if (active) setStats(s);
    })();
    return () => { active = false; };
  }, [profile]);

  const mastery = useMemo(() => computeMastery(stats, QUESTIONS), [stats]);

  const startExam = useCallback(() => {
    setQuestions(pickAdaptive(QUESTIONS, 40, stats));
    setScreen("quiz");
  }, [stats]);

  const startTheme = useCallback((themeId) => {
    const pool = getQuestionsByTheme(themeId);
    setQuestions(pickAdaptive(pool, Math.min(20, pool.length), stats));
    setScreen("quiz");
  }, [stats]);

  const handleAnswer = useCallback((questionId, correct) => {
    setStats((current) => {
      recordAnswer(profile, questionId, correct, current).then(setStats);
      return current;
    });
  }, [profile]);

  const finish = useCallback((r) => { setResult(r); setScreen("results"); }, []);

  const handleLocalProfile = useCallback((name) => {
    setProfile(createLocalProfile(name));
  }, []);

  const handleCloudDone = useCallback((p) => {
    setProfile(p);
  }, []);

  const logout = useCallback(() => {
    signOutProfile(profile);
    setProfile(null);
    setStats({});
    setScreen("home");
  }, [profile]);

  if (booting) return <Splash />;

  return (
    <div className="app app-in">
      {screen === "home" && (
        <Home
          onStartExam={startExam}
          onOpenThemes={() => setScreen("themes")}
          onStartTheme={startTheme}
          profile={profile}
          mastery={mastery}
          onLocalProfile={handleLocalProfile}
          onCloudDone={handleCloudDone}
          onOpenProgress={() => setScreen("progress")}
          onLogout={logout}
        />
      )}
      {screen === "themes" && (
        <ThemeList onStartTheme={startTheme} onHome={() => setScreen("home")} />
      )}
      {screen === "progress" && profile && (
        <Progress profile={profile} stats={stats} onHome={() => setScreen("home")} onLogout={logout} />
      )}
      {screen === "quiz" && (
        <Quiz questions={questions} onFinish={finish} onExit={() => setScreen("home")} onAnswer={handleAnswer} />
      )}
      {screen === "results" && (
        <Results result={result} profile={profile} onRestart={() => setScreen("home")} onHome={() => setScreen("home")} onOpenProgress={() => setScreen("progress")} />
      )}
    </div>
  );
}
