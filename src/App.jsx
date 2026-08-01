import React, { useState, useCallback, useEffect, useMemo } from "react";
import { THEMES, QUESTIONS, getQuestionsByTheme } from "./data/questions.js";
import { COURSES, getCourse } from "./data/courses.js";
import {
  cloudEnabled, getSessionProfile, subscribeAuth, signUpCloud, signInCloud,
  createLocalProfile, signOutProfile, getStats, recordAnswer, pickAdaptive, computeMastery,
  touchStreak, getStreak, hasPracticedToday, recordReadinessSnapshot, getReadinessHistory,
  recordExamPass, hasPassedExam,


} from "./storage.js";


/* ---------- Photos réelles par thème (illustration "en situation") ---------- */
const THEME_PHOTOS = {
  signalisation: "https://images.unsplash.com/photo-1717339701000-990a1682f200?auto=format&fit=crop&w=800&q=70",
  priorites: "https://images.unsplash.com/photo-1717339701000-990a1682f200?auto=format&fit=crop&w=800&q=70",
  vitesse: "https://images.unsplash.com/photo-1657047799158-dc11bdab5f8d?auto=format&fit=crop&w=800&q=70",
  conducteur: "https://images.unsplash.com/photo-1756664825114-03ea24c8d195?auto=format&fit=crop&w=800&q=70",
  usagers: "https://images.unsplash.com/photo-1754608263952-54fdff74637b?auto=format&fit=crop&w=800&q=70",
  secours: "https://images.unsplash.com/photo-1657047799158-dc11bdab5f8d?auto=format&fit=crop&w=800&q=70",
  mecanique: "https://images.unsplash.com/photo-1756664825114-03ea24c8d195?auto=format&fit=crop&w=800&q=70",
  environnement: "https://images.unsplash.com/photo-1657047799158-dc11bdab5f8d?auto=format&fit=crop&w=800&q=70",
  securite: "https://images.unsplash.com/photo-1756664825114-03ea24c8d195?auto=format&fit=crop&w=800&q=70",
  divers: "https://images.unsplash.com/photo-1721775776140-021982db0f88?auto=format&fit=crop&w=800&q=70",
};
/* ---------- Score de préparation à l'examen ---------- */
function computeReadiness(stats) {
  const themeScores = THEMES.map((t) => {
    const pool = getQuestionsByTheme(t.id);
    const { attempted, mastered } = computeMastery(stats, pool);
    const coverage = Math.min(1, attempted / Math.min(pool.length, 20));
    const accuracy = attempted > 0 ? mastered / attempted : 0;
    const score = 0.4 * coverage + 0.6 * accuracy;
    return { ...t, attempted, mastered, score };
  });
  const pct = Math.round(
    (themeScores.reduce((sum, t) => sum + t.score, 0) / themeScores.length) * 100
  );
  const weakest = themeScores.reduce((min, t) => (t.score < min.score ? t : min), themeScores[0]);
  let message;
  if (pct < 40) message = "Continue à t'entraîner, tu as encore du chemin.";
  else if (pct < 70) message = "Tu progresses bien, poursuis sur ta lancée.";
  else if (pct < 90) message = "Tu es presque prêt·e pour l'examen !";
  else message = "Tu es prêt·e pour l'examen !";
    return { pct, message, weakest };
}

/* ---------- Badges / succès ---------- */
function computeBadges({ mastery, streak, readiness, examPassed }) {
  return [
    { id: "first-step", icon: "🎯", label: "Premier pas", unlocked: mastery.attempted >= 1 },
    { id: "streak-3", icon: "🔥", label: "3 jours d'affilée", unlocked: streak >= 3 },
    { id: "streak-7", icon: "🔥", label: "7 jours d'affilée", unlocked: streak >= 7 },
    { id: "streak-30", icon: "🔥", label: "30 jours d'affilée", unlocked: streak >= 30 },
    { id: "mastered-50", icon: "🏅", label: "50 questions maîtrisées", unlocked: mastery.mastered >= 50 },
    { id: "mastered-200", icon: "🏅", label: "200 questions maîtrisées", unlocked: mastery.mastered >= 200 },
    { id: "mastered-500", icon: "🥇", label: "500 questions maîtrisées", unlocked: mastery.mastered >= 500 },
    { id: "exam-passed", icon: "✅", label: "Examen blanc réussi", unlocked: examPassed },
    { id: "ready-90", icon: "💯", label: "Prêt·e à 90 %", unlocked: readiness.pct >= 90 },
  ];
}

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
               <input className="profile-input" placeholder="Ton prénom" aria-label="Ton prénom" value={name} onChange={(e) => setName(e.target.value)} maxLength={30} />
      )}
      <input className="profile-input" type="email" placeholder="Email" aria-label="Adresse email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input className="profile-input" type="password" placeholder="Mot de passe (6 caractères min.)" aria-label="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required />

      {error && <p className="auth-error">{error}</p>}
      <button type="submit" className="btn-primary profile-submit" disabled={loading} style={{ width: "100%" }}>
        {loading ? "…" : mode === "signup" ? "Créer mon compte" : "Se connecter"}
      </button>
      {mode === "signup" && <p className="auth-hint">Utilise le même email + mot de passe sur un autre appareil pour retrouver ta progression.</p>}
    </form>
  );
}

function ProfileBar({ profile, mastery, readiness, onLocalProfile, onCloudDone, onOpenProgress, onLogout }) {

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
                        <input className="profile-input" placeholder="Ton prénom" aria-label="Ton prénom" value={name} onChange={(e) => setName(e.target.value)} autoFocus maxLength={30} />

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
            {mastery.attempted > 0 && (
        <span className="readiness-pill" title={readiness.message}>🎯 {readiness.pct}% prêt·e</span>
      )}
           <button className="profile-logout" onClick={onLogout} title="Se déconnecter" aria-label="Se déconnecter">⤴</button>

    </div>
  );
}

function Home({ onStartExam, onOpenThemes, onOpenCourses, onStartTheme, onStartReview, reviewCount, profile, mastery, readiness, streak, practicedToday, onLocalProfile, onCloudDone, onOpenProgress, onLogout, onOpenLegal }) {

  return (
    <div className="home">
      <ProfileBar profile={profile} mastery={mastery} readiness={readiness} onLocalProfile={onLocalProfile} onCloudDone={onCloudDone} onOpenProgress={onOpenProgress} onLogout={onLogout} />

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
             {streak > 0 && practicedToday && (
          <div className="streak-badge">
            🔥 {streak} jour{streak > 1 ? "s" : ""} d'affilée !
          </div>
        )}
        {streak > 0 && !practicedToday && (
          <div className="streak-badge streak-reminder">
            ⏰ Ta série de {streak} jour{streak > 1 ? "s" : ""} est en jeu -- entraîne-toi aujourd'hui pour la garder !
          </div>
        )}

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
          {reviewCount > 0 && (
            <button className="btn-ghost-light btn-hero btn-review" onClick={onStartReview}>
              ❌ Réviser mes erreurs ({reviewCount})
            </button>
          )}
        </div>

        <div className="hero-trust">
          <span className="hero-trust-item">🔁 Entraînement illimité</span>
          <span className="hero-trust-item">🚫 0 pub</span>
          <span className="hero-trust-item">⚖️ Questions mises à jour selon le code en vigueur</span>
        </div>
      </header>


      <button className="course-banner" onClick={onOpenCourses}>
        <span className="course-banner-icon">📚</span>
        <span className="course-banner-text">
          <span className="course-banner-title">Fiches de cours</span>
          <span className="course-banner-sub">{Object.keys(COURSES).length} thèmes expliqués en détail avant de t'entraîner</span>
        </span>
        <span className="course-banner-arrow">→</span>
      </button>

           <h2 className="section-title">En situation réelle</h2>
      <div className="situ-grid">
        {THEMES.map((t) => (
          <button
            key={t.id}
            className="situ-card"
            style={{ backgroundImage: `url(${THEME_PHOTOS[t.id]})` }}
            onClick={() => onStartTheme(t.id)}
          >
            <span className="situ-card-label">{t.label}</span>
          </button>
        ))}
           </div>
      <footer className="home-footer">
        <button className="home-footer-link" onClick={onOpenLegal}>Mentions légales</button>
      </footer>
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

/* ---------- Liste des cours (écran dédié) ---------- */
function CourseList({ onOpenCourse, onHome }) {
  return (
    <div className="theme-list-screen">
      <div className="quiz-topbar">
        <button className="btn-ghost" onClick={onHome}>← Accueil</button>
      </div>
      <h1 className="progress-title">Cours par thème</h1>
      <p className="hero-sub" style={{ color: "var(--ink-soft)", marginBottom: 20 }}>
        Les notions essentielles à connaître avant de t'entraîner. De nouvelles fiches arrivent régulièrement.
      </p>
      <div className="theme-grid">
        {THEMES.map((t) => {
          const available = !!COURSES[t.id];
          return (
            <button key={t.id} className="theme-card" onClick={() => available && onOpenCourse(t.id)} disabled={!available}>
              <SignBadge tone="blue" icon accent={t.color} size={38}>{t.icon}</SignBadge>
              <span className="theme-label">{t.label}</span>
              <span className="theme-count mono">{available ? "Fiche disponible" : "Bientôt disponible"}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Détail d'un cours ---------- */
function CourseDetail({ themeId, onHome, onBackToCourses, onStartTheme }) {
  const theme = THEMES.find((t) => t.id === themeId);
  const course = getCourse(themeId);
  if (!theme || !course) return null;
  return (
    <div className="course-screen">
      <div className="quiz-topbar">
        <button className="btn-ghost" onClick={onBackToCourses}>← Cours</button>
      </div>
      <div className="course-header">
        <SignBadge tone="blue" icon accent={theme.color} size={44}>{theme.icon}</SignBadge>
        <h1 className="progress-title" style={{ margin: 0 }}>{theme.label}</h1>
      </div>
      <p className="hero-sub" style={{ color: "var(--ink-soft)" }}>{course.intro}</p>
      <div className="course-sections">
        {course.sections.map((s, i) => (
          <div className="course-section" key={i}>
            <h2 className="course-section-title">{s.heading}</h2>
            {s.body.map((p, j) => (
              <p className="course-section-body" key={j}>{p}</p>
            ))}
          </div>
        ))}
      </div>
      <button className="btn-primary btn-hero" onClick={() => onStartTheme(themeId)}>
        S'entraîner sur ce thème
      </button>
    </div>
  );
}
/* ---------- Mentions légales ---------- */
function LegalScreen({ onHome }) {
  return (
    <div className="legal-screen">
      <div className="quiz-topbar">
        <button className="btn-ghost" onClick={onHome}>← Accueil</button>
      </div>
      <h1 className="progress-title">Mentions légales</h1>
      <div className="course-sections">
        <div className="course-section">
          <h2 className="course-section-title">Éditeur du site</h2>
          <p className="course-section-body">
            Ce site est édité à titre personnel par Sami, développeur indépendant, agissant en tant que particulier.
          </p>
          <p className="course-section-body">
            Contact : [email à compléter]
          </p>
        </div>
        <div className="course-section">
          <h2 className="course-section-title">Hébergement</h2>
          <p className="course-section-body">
            Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis -- vercel.com
          </p>
          <p className="course-section-body">
            L'authentification et les données de compte (email, statistiques de progression) sont hébergées par Supabase Inc., utilisant une infrastructure cloud sécurisée.
          </p>
        </div>
        <div className="course-section">
          <h2 className="course-section-title">Données personnelles</h2>
          <p className="course-section-body">
            Si vous créez un compte, seules votre adresse email et vos statistiques de progression (questions vues, réussies) sont conservées, dans le seul but de synchroniser votre avancement entre appareils.
          </p>
          <p className="course-section-body">
            Aucune donnée n'est vendue, partagée avec des tiers à des fins commerciales, ni utilisée pour de la publicité. Vous pouvez demander la suppression de votre compte et de vos données à tout moment via l'adresse de contact ci-dessus.
          </p>
        </div>
        <div className="course-section">
          <h2 className="course-section-title">Cookies et stockage local</h2>
          <p className="course-section-body">
            Le site utilise le stockage local de votre navigateur (localStorage) pour mémoriser votre progression si vous n'êtes pas connecté, ainsi que vos préférences d'affichage. Aucun cookie publicitaire ou traceur tiers n'est utilisé.
          </p>
        </div>
        <div className="course-section">
          <h2 className="course-section-title">Propriété intellectuelle</h2>
          <p className="course-section-body">
            Le contenu pédagogique (questions, explications, fiches de cours) est proposé à titre d'entraînement et ne constitue pas un document officiel de l'administration. Les questions s'appuient sur le code de la route en vigueur, sans garantie d'exhaustivité.
          </p>
        </div>
      </div>
    </div>
  );
}
/* ---------- Graphique d'évolution du score ---------- */
function ProgressChart({ history }) {
  if (!history || history.length < 2) return null;
  const width = 300, height = 90, pad = 8;
  const points = history
    .map((h, i) => {
      const x = pad + (i / (history.length - 1)) * (width - pad * 2);
      const y = height - pad - (h.pct / 100) * (height - pad * 2);
      return `${x},${y}`;
    })
    .join(" ");
  const first = history[0];
  const last = history[history.length - 1];
  return (
    <div className="progress-chart-card">
      <h2 className="course-section-title" style={{ marginBottom: 4 }}>Évolution du score de préparation</h2>
      <svg viewBox={`0 0 ${width} ${height}`} className="progress-chart-svg" preserveAspectRatio="none">
        <polyline points={points} fill="none" stroke="var(--violet-bright)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="progress-chart-labels">
        <span>{first.date.slice(5)}</span>
        <span>{last.date.slice(5)}</span>
      </div>
    </div>
  );
}

/* ---------- Progression ---------- */

function Progress({ profile, stats, readiness, badges, onHome, onLogout }) {

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
      <div className="readiness-card">
        <div className="score-ring readiness-ring" style={{ "--pct": readiness.pct }}>
          <div className="score-ring-inner">
            <span className="results-score-num">{readiness.pct}%</span>
          </div>
        </div>
        <div className="readiness-card-text">
          <strong>{readiness.message}</strong>
          {readiness.weakest && readiness.weakest.score < 0.8 && (
            <p>Le thème à travailler en priorité : <strong>{readiness.weakest.label}</strong>.</p>
          )}
        </div>
      </div>
      <ProgressChart history={getReadinessHistory(profile)} />
      <h2 className="section-title">Succès</h2>
      <div className="badges-grid">
        {badges.map((b) => (
          <div key={b.id} className={"badge-chip " + (b.unlocked ? "unlocked" : "locked")}>
            <span className="badge-chip-icon">{b.icon}</span>
            <span className="badge-chip-label">{b.label}</span>
          </div>
        ))}
      </div>

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
 const shuffledAnswers = useMemo(() => {
    const arr = qc.answers.map((a) => ({ ...a }));
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [qc]);
  const multi = shuffledAnswers.filter((a) => a.correct).length > 1;


  const toggleAnswer = (i) => {
    if (revealed) return;
    if (multi) setSelected((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));
    else setSelected([i]);
  };

  const validate = () => {
    if (selected.length === 0) return;
    const correctSet = shuffledAnswers.map((a, i) => (a.correct ? i : null)).filter((x) => x !== null);
    const isCorrect = correctSet.length === selected.length && correctSet.every((i) => selected.includes(i));
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((a) => [...a, { question: qc, selected, correct: isCorrect }]);
    onAnswer(qc.id, isCorrect);
    setRevealed(true);
  };
const next = () => {
    if (!hintDismissed) { setHintDismissed(true); try { localStorage.setItem("swipeHintSeen", "1"); } catch {} }
    if (index + 1 >= questions.length) onFinish({ score, total: questions.length, answers });
    else { setIndex((i) => i + 1); setSelected([]); setRevealed(false); }
  };

  const [hintDismissed, setHintDismissed] = useState(() => {
    try { return localStorage.getItem("swipeHintSeen") === "1"; } catch { return true; }
  });

  const lastAnswer = answers[answers.length - 1];

  useEffect(() => {
    if (!revealed) return;
    let startX = null;
    let triggered = false;
    const onStart = (e) => { startX = e.touches[0].clientX; triggered = false; };
    const onMove = (e) => {
      if (startX === null || triggered) return;
      const deltaX = e.touches[0].clientX - startX;
      if (deltaX < -50) { triggered = true; next(); }
    };
    document.addEventListener("touchstart", onStart, { capture: true, passive: true });
    document.addEventListener("touchmove", onMove, { capture: true, passive: true });
    return () => {
      document.removeEventListener("touchstart", onStart, { capture: true });
      document.removeEventListener("touchmove", onMove, { capture: true });
    };
  }, [revealed, index]);



  return (
      <div className="quiz">
      <div className="quiz-topbar">
        <button className="btn-ghost" onClick={onExit}>← Quitter</button>
        <RoadProgress current={index + 1} total={questions.length} />
      </div>
  <div
      className="quiz-card"
        key={index}
  >

              <span className="quiz-theme-tag">{THEMES.find((t) => t.id === qc.theme)?.label}</span>
        {!qc.image && (
          <div className="quiz-photo" style={{ backgroundImage: `url(${THEME_PHOTOS[qc.theme] || THEME_PHOTOS.divers})` }} />
        )}
        <h2 className="quiz-question">{qc.question}</h2>
        {multi && <p className="quiz-hint">Plusieurs réponses possibles</p>}
        <QuestionImage src={qc.image} alt={qc.question} />
               <div className="answers">
          {shuffledAnswers.map((a, i) => {
            let cls = "answer";
            if (selected.includes(i)) cls += " selected";
            if (revealed) { if (a.correct) cls += " correct"; else if (selected.includes(i)) cls += " wrong"; }
            const isLastSelected = !revealed && selected.length > 0 && i === selected[selected.length - 1];
            return (
              <React.Fragment key={i}>
                <button className={cls} onClick={() => toggleAnswer(i)}>
                  <span className="answer-marker">
                    {multi ? (selected.includes(i) ? "☑" : "☐") : (selected.includes(i) ? "●" : "○")}
                  </span>{a.text}
                </button>
                {isLastSelected && (
                  <button className="btn-primary answer-validate" onClick={validate}>Valider</button>
                )}
              </React.Fragment>
            );
          })}
        </div>
        {revealed && (
          <div className={"explanation " + (lastAnswer?.correct ? "ok" : "ko")}>
            <strong>{lastAnswer?.correct ? "Bonne réponse !" : "Pas tout à fait."}</strong>
            <p>{qc.explanation}</p>
          </div>
        )}
              {revealed && !hintDismissed && (
          <div className="swipe-hint">
            <span className="swipe-hint-arrow">👈</span> Balayez l'écran vers la gauche pour continuer
          </div>
        )}

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

  const handleShare = () => {
    const url = "https://code-de-la-route-ten.vercel.app/";
    const text = passed
      ? `J'ai eu ${score}/${total} au code de la route sur cette appli gratuite et sans pub ! Essaie toi aussi 👉`
      : `Je m'entraîne au code de la route avec cette appli gratuite et sans pub (${score}/${total} pour l'instant) -- essaie toi aussi 👉`;
    if (navigator.share) {
      navigator.share({ title: "Code de la Route", text, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${text} ${url}`)
        .then(() => alert("Lien copié ! Colle-le où tu veux le partager."))
        .catch(() => {});
    }
  };


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
        <button className="btn-ghost" onClick={handleShare}>📤 Partager</button>
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
  const [courseThemeId, setCourseThemeId] = useState(null);
  const [streak, setStreak] = useState(0);
   const [practicedToday, setPracticedToday] = useState(true);
  const [examPassed, setExamPassed] = useState(false);

  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("cdlr_theme") || "light"; } catch { return "light"; }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("cdlr_theme", theme); } catch {}
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);


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
        setStreak(getStreak(profile));
        setPracticedToday(hasPracticedToday(profile));
    setExamPassed(hasPassedExam(profile));


    return () => { active = false; };
  }, [profile]);

  const mastery = useMemo(() => computeMastery(stats, QUESTIONS), [stats]);
  const readiness = useMemo(() => computeReadiness(stats), [stats]);
  const badges = useMemo(
    () => computeBadges({ mastery, streak, readiness, examPassed }),
    [mastery, streak, readiness, examPassed]
  );


  useEffect(() => {
    if (mastery.attempted > 0) recordReadinessSnapshot(profile, readiness.pct);
  }, [profile, mastery.attempted, readiness.pct]);

  const reviewPool = useMemo(
    () => QUESTIONS.filter((q) => (stats[q.id]?.wrong || 0) > 0 && (stats[q.id]?.streak || 0) < 3),
    [stats]
  );

  const startExam = useCallback(() => {
    setQuestions(pickAdaptive(QUESTIONS, 40, stats));
    setScreen("quiz");
  }, [stats]);

  const startTheme = useCallback((themeId) => {
    const pool = getQuestionsByTheme(themeId);
    setQuestions(pickAdaptive(pool, Math.min(20, pool.length), stats));
    setScreen("quiz");
  }, [stats]);

  const startReview = useCallback(() => {
    if (reviewPool.length === 0) return;
    setQuestions(pickAdaptive(reviewPool, Math.min(20, reviewPool.length), stats));
    setScreen("quiz");
  }, [reviewPool, stats]);


  const handleAnswer = useCallback((questionId, correct) => {
    setStats((current) => {
      recordAnswer(profile, questionId, correct, current).then(setStats);
      return current;
    });
    setStreak(touchStreak(profile));
    setPracticedToday(true);

  }, [profile]);

  const finish = useCallback((r) => {
    setResult(r);
    setScreen("results");
    if (r.total === 40 && r.score >= 35) {
      recordExamPass(profile);
      setExamPassed(true);
    }
  }, [profile]);


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
      <button className="theme-toggle" onClick={toggleTheme} title="Changer de thème" aria-label="Changer de thème">
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      {screen === "home" && (
              <Home
          onStartExam={startExam}
          onOpenThemes={() => setScreen("themes")}
          onOpenCourses={() => setScreen("courses")}
          onStartTheme={startTheme}
          onStartReview={startReview}
          reviewCount={reviewPool.length}
          profile={profile}
          mastery={mastery}
          readiness={readiness}
          streak={streak}
          practicedToday={practicedToday}
          onLocalProfile={handleLocalProfile}
          onCloudDone={handleCloudDone}
          onOpenProgress={() => setScreen("progress")}

                    streak={streak}
          practicedToday={practicedToday}

          onLogout={logout}
          onOpenLegal={() => setScreen("legal")}
        />
      )}
      {screen === "legal" && (

        <LegalScreen onHome={() => setScreen("home")} />
      )}
      {screen === "themes" && (

        <ThemeList onStartTheme={startTheme} onHome={() => setScreen("home")} />
      )}
      {screen === "courses" && (
        <CourseList
          onOpenCourse={(id) => { setCourseThemeId(id); setScreen("course"); }}
          onHome={() => setScreen("home")}
        />
      )}
      {screen === "course" && courseThemeId && (
        <CourseDetail
          themeId={courseThemeId}
          onHome={() => setScreen("home")}
          onBackToCourses={() => setScreen("courses")}
          onStartTheme={startTheme}
        />
      )}
      {screen === "progress" && profile && (
            <Progress profile={profile} stats={stats} readiness={readiness} badges={badges} onHome={() => setScreen("home")} onLogout={logout} />


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
