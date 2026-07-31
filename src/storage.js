// Progression : stockée dans Supabase (compte multi-appareils) si configuré,
// sinon repli automatique sur le navigateur local (localStorage) pour que
// l'app reste utilisable sans backend.

import { supabase, cloudEnabled } from "./supabaseClient.js";

const LOCAL_PROFILE_KEY = "cdlr_profile";
const LOCAL_STATS_PREFIX = "cdlr_stats_";

export { cloudEnabled };

/* ============ Repli local (pas de compte / pas de Supabase) ============ */

function localGetProfile() {
  try {
    const raw = localStorage.getItem(LOCAL_PROFILE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function localSaveProfile(name) {
  const profile = { id: `local-${Date.now().toString(36)}`, name: name.trim(), cloud: false };
  localStorage.setItem(LOCAL_PROFILE_KEY, JSON.stringify(profile));
  return profile;
}

function localClearProfile() {
  const p = localGetProfile();
  localStorage.removeItem(LOCAL_PROFILE_KEY);
  if (p) localStorage.removeItem(LOCAL_STATS_PREFIX + p.id);
}

function localGetStats(profile) {
  try {
    const raw = localStorage.getItem(LOCAL_STATS_PREFIX + profile.id);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function localSaveStats(profile, stats) {
  localStorage.setItem(LOCAL_STATS_PREFIX + profile.id, JSON.stringify(stats));
}

/* ============ API publique (utilisée par App.jsx) ============ */

function userToProfile(user) {
  if (!user) return null;
  return { id: user.id, name: user.user_metadata?.full_name || user.email, email: user.email, cloud: true };
}

// Récupère le profil actif au chargement (session Supabase si connecté, sinon profil local).
export async function getSessionProfile() {
  if (cloudEnabled) {
    const { data } = await supabase.auth.getSession();
    return userToProfile(data.session?.user);
  }
  return localGetProfile();
}

// Écoute les changements de connexion (connexion depuis un autre onglet, expiration, etc.)
export function subscribeAuth(callback) {
  if (!cloudEnabled) return () => {};
  const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(userToProfile(session?.user));
  });
  return () => sub.subscription.unsubscribe();
}

export async function signUpCloud(email, password, name) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: name.trim() } },
  });
  if (error) throw error;
  return userToProfile(data.user);
}

export async function signInCloud(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return userToProfile(data.user);
}

export function createLocalProfile(name) {
  return localSaveProfile(name);
}

export async function signOutProfile(profile) {
  if (profile?.cloud && cloudEnabled) {
    await supabase.auth.signOut();
  } else {
    localClearProfile();
  }
}

export async function getStats(profile) {
  if (!profile) return {};
  if (profile.cloud && cloudEnabled) {
    const { data, error } = await supabase.from("question_stats").select("*").eq("user_id", profile.id);
    if (error) { console.error(error); return {}; }
    const map = {};
    for (const row of data) {
      map[row.question_id] = { seen: row.seen, correct: row.correct, wrong: row.wrong, streak: row.streak };
    }
    return map;
  }
  return localGetStats(profile);
}

// Enregistre une réponse et renvoie la carte de stats mise à jour.
export async function recordAnswer(profile, questionId, correct, currentStats) {
  const prev = currentStats[questionId] || { seen: 0, correct: 0, wrong: 0, streak: 0 };
  const next = {
    seen: prev.seen + 1,
    correct: prev.correct + (correct ? 1 : 0),
    wrong: prev.wrong + (correct ? 0 : 1),
    streak: correct ? prev.streak + 1 : 0,
  };
  const updated = { ...currentStats, [questionId]: next };

  if (profile.cloud && cloudEnabled) {
    const { error } = await supabase.from("question_stats").upsert({
      user_id: profile.id,
      question_id: questionId,
      ...next,
      updated_at: new Date().toISOString(),
    });
    if (error) console.error(error);
  } else {
    localSaveStats(profile, updated);
  }
  return updated;
}

/* ============ Tirage adaptatif & calcul de maîtrise (pures, inchangées) ============ */

function weightFor(s) {
  if (!s) return 1;
  let w = 1 + s.wrong * 1.6;
  w -= Math.min(s.streak, 4) * 0.5;
  return Math.max(w, 0.15);
}

// Tirage pondéré sans remise (algorithme A-Res) : les questions ratées / mal
// maîtrisées ont statistiquement plus de chances d'être choisies, sans que
// le tirage soit pour autant déterministe.
export function pickAdaptive(pool, count, stats) {
  const withKeys = pool.map((q) => {
    const w = weightFor(stats[q.id]);
    const key = Math.pow(Math.random(), 1 / w);
    return { q, key };
  });
  withKeys.sort((a, b) => b.key - a.key);
  return withKeys.slice(0, count).map((x) => x.q);
}

export function computeMastery(stats, pool) {
  const attempted = pool.filter((q) => stats[q.id]);
  const mastered = attempted.filter((q) => (stats[q.id]?.streak || 0) >= 3);
  const toReview = attempted.filter((q) => (stats[q.id]?.wrong || 0) > 0 && (stats[q.id]?.streak || 0) < 3);
  return {
    attempted: attempted.length,
    mastered: mastered.length,
    toReview: toReview.length,
    total: pool.length,
  };
}

/* ============ Série de jours consécutifs (streak) ============ */
const STREAK_KEY_PREFIX = "cdlr_streak_";

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function streakKey(profile) {
  return STREAK_KEY_PREFIX + (profile?.id || "guest");
}

// Enregistre une activité aujourd'hui et met à jour la série de jours consécutifs.
export function touchStreak(profile) {
  const key = streakKey(profile);
  const today = todayStr();
  let data;
  try {
    data = JSON.parse(localStorage.getItem(key)) || { count: 0, lastDate: null };
  } catch {
    data = { count: 0, lastDate: null };
  }
  if (data.lastDate === today) return data.count;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;
  const newCount = data.lastDate === yStr ? data.count + 1 : 1;
  const next = { count: newCount, lastDate: today };
  localStorage.setItem(key, JSON.stringify(next));
  return newCount;
}

// Lit la série actuelle sans la modifier (pour l'affichage).
export function getStreak(profile) {
  try {
    const data = JSON.parse(localStorage.getItem(streakKey(profile))) || { count: 0, lastDate: null };
    const today = todayStr();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;
    // Si la dernière activité remonte à avant-hier ou plus, la série est rompue à l'affichage.
    if (data.lastDate !== today && data.lastDate !== yStr) return 0;
    return data.count;
   } catch {
    return 0;
  }
}

/* ============ Historique du score de préparation (pour le graphique) ============ */
const HISTORY_KEY_PREFIX = "cdlr_readiness_history_";
const HISTORY_MAX_POINTS = 30;

function historyKey(profile) {
  return HISTORY_KEY_PREFIX + (profile?.id || "guest");
}

// Enregistre un point (date du jour, score) ; un seul point par jour est conservé (le plus récent).
export function recordReadinessSnapshot(profile, pct) {
  const key = historyKey(profile);
  const today = todayStr();
  let history;
  try {
    history = JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    history = [];
  }
  const withoutToday = history.filter((h) => h.date !== today);
  const next = [...withoutToday, { date: today, pct }].slice(-HISTORY_MAX_POINTS);
  localStorage.setItem(key, JSON.stringify(next));
}

// Lit l'historique du score de préparation, du plus ancien au plus récent.
export function getReadinessHistory(profile) {
  try {
    return JSON.parse(localStorage.getItem(historyKey(profile))) || [];
  } catch {
    return [];
  }
}

