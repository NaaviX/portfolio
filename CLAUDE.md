# CLAUDE.md

Concise project guide for Claude Code. Keep this file small; load `PRODUCT.md` or `DESIGN.md` only for product, copy, or visual-design work.

## Commands

```bash
npm start        # Vite dev server on :3000 (--host)
npm run build    # TypeScript check, then Vite build
npm run serve    # Preview production build on :3000
npm run lint     # ESLint
npm run lint:fix # ESLint --fix
npm run format   # Prettier
npm test         # Jest
```

## Stack

React 18, TypeScript, Vite, Tailwind CSS v4, Radix UI, Framer Motion, Lenis, react-scroll, Swiper, Jest. The app is bilingual (`fr`/`en`) and uses `@/*` as `src/*`.

## Structure

- Entry: `src/index.tsx`
- App shell and section rendering: `src/App.tsx`
- Sections registry: `src/pages/sections.data.ts`
- Section wrappers: `src/pages/*Section.tsx`, `src/pages/components/`
- Feature code: `src/components/{feature}/`
- Shared UI: `src/components/common/`
- Shared motion/utilities: `src/lib/motion.ts`, `src/lib/utils.ts`
- i18n provider and copy: `src/i18n/LanguageContext.tsx`, `src/i18n/translations.ts`
- Main data files: `src/components/*/*.data.ts`
- Contact API hook: `src/hooks/useContact.ts`

## Working Rules

- Add user-facing copy to both locales in `src/i18n/translations.ts`.
- Use `cn()` from `src/lib/utils.ts` for conditional Tailwind classes.
- Follow existing feature folder patterns: component, `*.data.ts`, `*.type.ts`, barrel export.
- Private subcomponents use `_ComponentName.tsx`.
- Treat `PRODUCT.md` and `DESIGN.md` as on-demand context, not startup context.
- Run `npm run build` for behavior-affecting changes; run targeted lint/tests when relevant.
