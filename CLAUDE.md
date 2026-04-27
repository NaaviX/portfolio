# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start           # Vite dev server on :3000 (--host)
npm run build       # tsc (typecheck) THEN vite build — both must pass
npm run serve       # Preview production build on :3000

npm run lint        # ESLint (.eslintrc.json, all js/jsx/ts/tsx)
npm run lint:fix    # ESLint --fix
npm run format      # Prettier with explicit ./.prettierrc.json config

npm test            # Jest
```

## Architecture

This is a **React 18 + TypeScript + Vite** portfolio/resume single-page app styled with **Tailwind CSS v4**, using **Radix UI** primitives for accessible components and **Framer Motion** for animations. Bilingual (fr/en).

### Core Structure

- **Entry**: `src/index.tsx` — wraps the tree in `LanguageProvider` (i18n), mounts `ScrollProgress`, `Navbar`, `BrowserRouter` (single `/` route, `*` redirects to `/`), and `FooterSection`. Initializes GA4 via `utils/analytics`.
- **App**: `src/App.tsx` — wraps content in `ReactLenis` smooth scroll, renders `GlobalTechField` background + `HeaderSection`, then iterates `sectionsData` rendering each section inside a `react-scroll` `Element`, a numbered `SectionLayout`, and a `Suspense` boundary (sections are lazy-loaded).
- **Theme**: Tailwind v4 via `@tailwindcss/vite`; design tokens live in CSS (`src/index.css` / `App.css`). No Chakra theme — any leftover `--chakra-colors-*` vars in `App.css` are legacy.

### Section Pattern

Sections are data-driven via `src/pages/sections.data.ts`:
```typescript
{ nameKey: 'about', target: 'scroll-target', element: SectionComponent }
```
Each section component lives in `src/pages/*Section.tsx` and is wrapped by `SectionLayout`. Titles/subtitles are looked up from i18n (`t.nav[nameKey]`, `t.sectionSubtitles[nameKey]`).

### Internationalization

- `src/i18n/LanguageContext.tsx` exposes `LanguageProvider` and `useLanguage()` returning `{ language, setLanguage, t }`.
- All user-facing copy lives in `src/i18n/translations.ts`, keyed by locale (fr/en). When adding a new section/feature, add keys to BOTH locales.
- `dayjs` locale is synced to the active language inside `App.tsx`.

### Component Organization

- `src/components/common/` — Reusable UI: Chip, Modal, Paper, Separator, Timeline, typography, magnetic buttons, ScrollProgress, GlobalTechField.
- `src/components/{feature}/` — Feature components with `index.ts` barrel exports.
- Feature folders contain: component files, `*.data.ts` (content), `*.type.ts` (types).
- Private sub-components use underscore prefix: `_ComponentName.tsx`.

### Data Files

Content is centralized in `*.data.ts` files:
- `src/components/user/user.data.ts` — Personal info
- `src/components/experiences/experiences.data.ts` — Work history
- `src/components/projects/projects.data.ts` — Project showcase
- `src/components/skills/skills.data.ts` — Technical skills
- `src/components/courses/courses.data.ts` — Education

### Utilities

- `src/lib/utils.ts` — `cn()` helper combining `clsx` + `tailwind-merge`; use for any conditional Tailwind class composition.
- `src/lib/motion.ts` — shared Framer Motion variants/transitions.
- `src/utils/analytics.ts` — GA4 wrapper (`initGA`, event tracking).
- `src/hooks/` — `useContact` (form submit), `useMagneticButton`, `useNavbar`.

### Key Libraries

- **Tailwind CSS v4** (`@tailwindcss/vite`) — styling
- **Radix UI** (`@radix-ui/react-dialog`, `react-label`, `react-slot`) — primitives
- **class-variance-authority** + **clsx** + **tailwind-merge** — variant styling (see `cn()` in `src/lib/utils.ts`)
- **Framer Motion** — animation primitives, with shared variants in `src/lib/motion.ts`
- **@studio-freight/react-lenis** — smooth scrolling (root-level)
- **react-scroll** — section anchor navigation
- **Swiper** — project gallery carousel
- **react-hot-toast** — toasts (contact form feedback)
- **react-ga4** — analytics, initialized in `utils/analytics.ts`
- **dayjs** — dates, with French + English locales loaded

### Path Aliases

`@/*` maps to `src/*` (configured in `tsconfig.json` + `vite-tsconfig-paths`).

### Backend Integration

Contact form submits to `https://antoine-legrand.dev/backend/` via `src/hooks/useContact.ts`.
