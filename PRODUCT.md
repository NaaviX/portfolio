# Product

## Register

brand

## Users

Recruiters, hiring managers, tech leads, and potential freelance clients evaluating Antoine Legrand for engineering work — full-time roles or freelance missions. They land here from LinkedIn, an email signature, or a job application, usually with five to ninety seconds of attention before deciding whether to keep reading or move on. They want fast answers to three questions: what does he build, how seriously, and is he available.

The audience is bilingual (French / English). Many viewers are non-technical recruiters who need to grasp seniority and stack at a glance; some are senior engineers who will scrutinize project depth and the actual code linked from project cards.

## Product Purpose

A single-page personal portfolio for **Antoine Legrand** — a full-stack engineer based in Paris, currently a Java engineer at Amundi (Europe's largest asset manager) with eight years of experience across Java, TypeScript, React, Node, and SQL.

The site exists to:
1. Communicate seniority and craft without a CV download — the interface itself is the proof of work.
2. Surface availability (freelance + full-time) prominently, so a recruiter never has to ask.
3. Make it trivial to skim experiences, projects, skills, education, and reach out — in either French or English.

Success looks like a recruiter or client sending a contact-form message or LinkedIn DM within their first visit, having read no more than the header and one section.

## Brand Personality

**Three words: editorial, technical, calm.**

Editorial in layout — numbered sections (`01`, `02`, `03`), big tracking-tight display type, mono labels, generous gutters. The page reads like a print magazine spread, not a SaaS landing.

Technical in atmosphere — a subtle parallax mesh of stack icons (Java, React, TypeScript, Spring, Postgres…) drifts behind the hero, connected by faint lines that brighten under the cursor. The aesthetic says "this person ships software" without one bullet point claiming it.

Calm in pacing — long ease-out-quart transitions, no bouncing, no scroll-jacking, no glassmorphism stacks. The aurora background breathes slowly. Hover states are subtle: a 0.35-strength cyan glow, a 5% scale on chips, no more.

Voice in copy is bilingual, first-person, French-origin English. Direct without being terse. Never marketing-speak.

## Anti-references

- **Generic dev-portfolio templates** — the kind with a hero "Hi, I'm X 👋" emoji line, a horizontal row of skill icons, a card grid of projects, and "Let's connect!" CTA. The "Vercel theme starter" look.
- **AI-tool aesthetics** — purple/pink gradient blobs, glassmorphism cards, hero metric tiles ("8 years · 12 projects · 3 stacks"), gradient-clip text headlines.
- **Bootcamp-graduate flexes** — animated typewriter intros, particle.js storms, scroll-jacking, "wizard" themed hero, glowing neon outlines on every element.
- **Corporate consulting sites** — navy-and-grey, photo of a handshake, three identical service cards, accordions of FAQ.
- **Brutalist-by-default** — raw HTML, Times New Roman, no color, no motion. (Restraint here is *editorial* — composed and intentional, not aggressive.)

## Design Principles

1. **The interface is the resume.** Everything visible — typography pairing, spacing rhythm, custom tech-mesh, micro-interactions — is the actual evidence of craft. If a recruiter doesn't read a single word, the page should still feel like a working engineer made it.
2. **Editorial over dashboard.** Numbered sections, asymmetric grids, long copy with a measured line length, big display type. Resist the temptation to "card-grid everything" — most sections shouldn't be cards.
3. **Calm motion, never loud.** Every transition is ease-out-quart over 0.8–1.2s. No bounce, no elastic, no parallax tricks beyond the hero mesh. `prefers-reduced-motion` respected everywhere.
4. **Bilingual parity.** French and English are equal first-class citizens. Layout must not break under longer French copy. Never hide content from one locale.
5. **One accent color, used sparingly.** Cyan (`#00a2c7`) is the single brand voice — a subtle dot in the wordmark, the primary CTA fill, the active link, the spotlight in the tech mesh. Everything else is tinted teal-navy neutrals. The accent appears on roughly 5–10% of any screen.

## Accessibility & Inclusion

- Target **WCAG 2.1 AA** for contrast on all text. The deep teal background (`#082c36`) plus the very-light cyan body text (`#b6ecf7`) clears 4.5:1 by a wide margin; verify any `text-primary-light/40` and lighter opacities case by case.
- **`prefers-reduced-motion`** must disable: aurora rotation/drift, tech-icon float and rotate, edge-line breathing, node pulse. Already wired in `App.css` and `TechField.tsx`; honor the same pattern in any new motion.
- Keyboard navigation: every CTA, nav link, project card, social link, and language switcher reachable via Tab with a visible focus ring (cyan, 2px, 4px offset). Don't rely on hover-only affordances.
- Semantic landmarks: one `<header>`, one `<main>` (the sections wrapper), one `<footer>`. Each section is a labeled `<section>` with the section title as its accessible name.
- Form (`ContactSection`) — label every field explicitly, validate on blur, surface errors next to the field with `aria-describedby`, never with toast-only feedback.
- Tech-mesh and aurora background are decorative — `aria-hidden="true"` (already done on `TechField`), no information conveyed by color alone.
