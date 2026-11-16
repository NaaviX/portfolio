---
# WORKFLOW.md — contrat entre ce dépôt et les agents Hermes (inspiré d'OpenAI Symphony).
# Versionné avec le code : pour changer le comportement des agents, change ce fichier par MR.

# Préparation d'un worktree neuf (lancée une fois, avant Claude Code). Utiliser le cache partagé (~/.npm).
setup:
  - npm ci --prefer-offline --no-audit --no-fund

# Tests CIBLÉS : la commande à lancer pour un fichier de test donné ({files} = chemins).
# Jamais la suite complète : la CI s'en charge.
# --passWithNoTests : le dépôt n'a encore aucun fichier de test.
tests:
  targeted: npx jest --passWithNoTests {files}
  where: src/**/*.test.{ts,tsx}   # test à côté du fichier testé

# Lint / typecheck ciblés ({files} = fichiers modifiés).
# --no-eslintrc : évite qu'ESLint remonte au .eslintrc.json du dépôt parent quand on est dans un worktree.
lint: npx eslint --no-eslintrc -c .eslintrc.json {files} && npx prettier --check --config .prettierrc.json {files}
# tsc ne peut pas cibler des fichiers en gardant tsconfig.json : vérification du projet (noEmit, sans build Vite).
typecheck: npx tsc --noEmit -p tsconfig.json

# Aperçu visuel pour les cartes UI : serveur de dev Vite local, sans secret.
# Ne pas soumettre le formulaire de contact (il appelle l'API réelle).
preview:
  command: npx vite --host 127.0.0.1 --port 5173 --strictPort
  url: http://127.0.0.1:5173/

# Chemins que les agents ne doivent jamais modifier.
protected_paths:
  - .gitlab-ci.yml
  - .env*
  - Dockerfile
  - .dockerignore
  - README.Docker.md
  - sonar-project.properties
---

# Règles pour les agents

- Stack et conventions : voir AGENTS.md / CLAUDE.md (React 18, TypeScript, Vite, Tailwind CSS v4, Radix UI, Framer Motion, Jest ; alias `@/*` → `src/*`). Gestionnaire de paquets : npm (`package-lock.json`). Branche par défaut : `master`.
- Texte visible par l'utilisateur : bilingue `fr` / `en` ; toute nouvelle copie va dans les deux locales de `src/i18n/translations.ts`.
- Conventions : `cn()` de `src/lib/utils.ts` pour les classes Tailwind conditionnelles ; dossiers de feature `component` + `*.data.ts` + `*.type.ts` + barrel ; sous-composants privés `_ComponentName.tsx`.
- Points sensibles du dépôt :
  - `src/hooks/useContact.ts` envoie de vrais e-mails via `https://api.antoine-legrand.dev/` : ne jamais l'appeler en test ni pendant l'aperçu.
  - `PRODUCT.md` / `DESIGN.md` : à lire seulement pour une carte produit, copie ou design.
  - Jest n'a pas de transform TypeScript configuré : un premier test `.ts/.tsx` demande d'ajouter la config adaptée (dans le périmètre de la carte qui l'introduit).
- Définition de « terminé » : lint + typecheck verts sur les fichiers modifiés, tests ciblés verts, copie présente en `fr` et `en`, doc mise à jour si le comportement change.
