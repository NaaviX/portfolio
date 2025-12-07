# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm start           # Start dev server on port 3000 (Vite)
npm run build       # TypeScript check + Vite production build
npm run serve       # Preview production build on port 3000

# Quality
npm run lint        # ESLint check
npm run lint:fix    # ESLint with auto-fix
npm run format      # Prettier formatting

# Testing
npm test            # Run Jest tests
npm test:watch      # Jest in watch mode
npm test:coverage   # Jest with coverage report
```

## Architecture

This is a **React 18 + TypeScript + Vite** portfolio/resume single-page application using **Chakra UI** for styling and **Framer Motion** for animations.

### Core Structure

- **Entry**: `src/index.tsx` - Sets up ChakraProvider with custom theme, React Router, Navbar, and Footer
- **App**: `src/App.tsx` - Renders sections dynamically from `sections.data.ts` using `react-scroll` Elements
- **Theme**: Defined inline in `index.tsx` using `extendTheme()` - dark mode with cyan color palette

### Section Pattern

Sections are data-driven via `src/pages/sections.data.ts`:
```typescript
{ name: 'Section Name', target: 'scroll-target', element: SectionComponent }
```

Each section component lives in `src/pages/*Section.tsx` and is wrapped by `SectionLayout`.

### Component Organization

- `src/components/common/` - Reusable UI: Chip, Modal, Paper, Separator, Timeline, typography, magnetic buttons
- `src/components/{feature}/` - Feature components with `index.ts` barrel exports
- Feature folders contain: component files, `*.data.ts` (content), `*.type.ts` (types)
- Private sub-components use underscore prefix: `_ComponentName.tsx`

### Data Files

Content is centralized in `*.data.ts` files:
- `src/components/user/user.data.ts` - Personal info
- `src/components/experiences/experiences.data.ts` - Work history
- `src/components/projects/projects.data.ts` - Project showcase
- `src/components/skills/skills.data.ts` - Technical skills
- `src/components/courses/courses.data.ts` - Education

### Key Libraries

- **Chakra UI** - Component library with custom theme
- **Framer Motion** - Animations and transitions
- **react-scroll** - Section navigation
- **react-lenis** - Smooth scrolling
- **Swiper** - Project gallery carousel
- **tsparticles** - Background particle effects
- **dayjs** - Date handling (French locale)

### Path Aliases

`@/*` maps to `src/*` (configured in tsconfig.json + vite-tsconfig-paths)

### Backend Integration

Contact form submits to `https://antoine-legrand.dev/backend/` via `src/hooks/useContact.ts`
