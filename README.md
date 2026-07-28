# Code de la Route

Appli d'entraînement au code de la route — 1000 questions, 10 thèmes officiels, vrais panneaux.

## Stack

React + Vite. Aucune base de données pour l'instant (les questions sont dans `src/data/questions.js`) — Supabase pourra être ajouté plus tard si besoin (stockage des scores, gestion des questions en dehors du code, etc).

## Mise en ligne avec Working Copy + GitHub + Vercel (depuis iPhone)

### 1. Créer le repo sur GitHub
- App GitHub (ou site mobile) → New repository → nom `code-de-la-route` → Create.
- Ne coche PAS "Add a README" (on a déjà les fichiers).

### 2. Cloner avec Working Copy
- Ouvre Working Copy → "+" → Clone repository → colle l'URL du repo GitHub créé à l'étape 1.

### 3. Copier les fichiers du projet dans le repo cloné
- Dans Working Copy, utilise "Import" ou l'app Fichiers pour copier tous les fichiers de ce dossier (`package.json`, `vite.config.js`, `index.html`, `src/`, `.gitignore`) dans le dossier du repo cloné.

### 4. Commit + push
- Dans Working Copy : sélectionne tous les fichiers ajoutés → Commit → écris un message ("premier import") → Push.

### 5. Connecter Vercel
- Va sur vercel.com (ou l'app Vercel) → New Project → Import depuis GitHub → sélectionne `code-de-la-route`.
- Vercel détecte automatiquement Vite (Framework Preset: Vite). Laisse les réglages par défaut.
- Deploy.

Chaque futur `push` depuis Working Copy redéploiera automatiquement l'appli sur Vercel — plus besoin de rien glisser-déposer manuellement.

## Développement local (si tu as un ordi plus tard)

```bash
npm install
npm run dev
```

## Structure

```
index.html          → point d'entrée Vite
src/
  main.jsx           → bootstrap React
  App.jsx             → toute la logique et les écrans (accueil, quiz, résultats)
  styles.css          → design (thème route, jaune/noir)
  data/
    questions.js      → les 1000 questions, par thème
```
