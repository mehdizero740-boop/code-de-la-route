# Activer les comptes multi-appareils (Supabase)

Sans configuration, l'app fonctionne quand même : la progression est juste
enregistrée dans le navigateur (pas de compte, pas de synchro entre appareils).
Pour activer les vrais comptes :

## 1. Créer le projet (gratuit)
1. Va sur https://supabase.com → "New project"
2. Choisis un nom, un mot de passe de base de données, une région proche (ex. Europe)
3. Attends ~2 minutes que le projet soit prêt

## 2. Créer la table
1. Dans le dashboard Supabase : **SQL Editor** → **New query**
2. Colle le contenu du fichier `supabase/schema.sql` de ce projet
3. Clique **Run**

## 3. Récupérer les clés
1. **Project Settings** (icône ⚙️) → **API**
2. Copie **Project URL** et la clé **anon public**

## 4. Configurer le projet
1. Copie `.env.example` en `.env`
2. Colle les deux valeurs :
   ```
   VITE_SUPABASE_URL=https://xxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=xxxx
   ```
3. Redémarre `npm run dev`

## 5. Vérifier
1. Crée un compte depuis l'app (email + mot de passe)
2. Fais quelques questions
3. Ouvre l'app dans un autre navigateur (ou en navigation privée), connecte-toi
   avec le même email → la progression doit être identique

## 6. Déployer sur Netlify
Ajoute les mêmes variables d'environnement dans Netlify :
**Site settings → Environment variables** → `VITE_SUPABASE_URL` et
`VITE_SUPABASE_ANON_KEY`, puis redéploie.

⚠️ Par défaut, Supabase envoie un email de confirmation à l'inscription.
Pour les tests, tu peux désactiver ça dans **Authentication → Providers → Email
→ "Confirm email"** (à réactiver avant une vraie mise en production).
