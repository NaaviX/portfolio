---
name: Antoine Legrand — Portfolio
description: Editorial-tech personal portfolio for a senior full-stack engineer based in Paris.
colors:
  bg-app: "#0b161a"
  bg: "#082c36"
  bg-hover: "#003848"
  bg-active: "#004558"
  bg-subtle: "#101b20"
  border-subtle: "#045468"
  border: "#12677e"
  border-hover: "#11809c"
  primary: "#00a2c7"
  primary-hover: "#23afd0"
  primary-dark: "#4ccce6"
  primary-light: "#b6ecf7"
  aurora-deep: "#06121a"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Inter, system-ui, sans-serif"
    fontSize: "clamp(3.75rem, 11vw, 9.5rem)"
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Bricolage Grotesque, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.2em"
rounded:
  none: "0px"
  sm: "0.375rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "5rem"
  section: "9.375rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg-app}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.5rem"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.bg-app}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary-light}"
    rounded: "{rounded.full}"
    padding: "0.75rem 0.75rem"
  chip:
    backgroundColor: "{colors.bg-hover}"
    textColor: "{colors.primary-light}"
    rounded: "{rounded.full}"
    padding: "0.375rem 0.75rem"
    typography: "{typography.body}"
  chip-hover:
    backgroundColor: "{colors.bg-active}"
    textColor: "#ffffff"
  paper:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.primary-light}"
    rounded: "{rounded.lg}"
    padding: "2.5rem"
  navbar:
    backgroundColor: "{colors.bg-app}"
    textColor: "{colors.primary-light}"
    padding: "1rem 1.5rem"
---

# Design System: Antoine Legrand — Portfolio

## 1. Overview

**Creative North Star: "The Engineer's Almanac"**

A single-page portfolio that reads like a printed almanac for a working engineer. Numbered sections (`01`, `02`, `03`) anchor the reader the way chapter heads anchor a book. Big display type — Bricolage Grotesque, semibold, condensed at 85% width — sets the rhythm. The atmosphere is deep teal: a slow-rotating aurora behind the page, a hand-built parallax mesh of stack icons in the hero, and one cyan accent that does almost everything visually expressive on the site. Calm, composed, technical without being cold.

The system explicitly rejects the generic dev-portfolio playbook: emoji wave hello, glassmorphic project cards, particle.js storms, gradient-clip headlines, hero metric grids. It also rejects the opposite extreme — brutalist Times New Roman zero-CSS posturing. This is restraint as composition, not as nihilism.

The page is bilingual French / English at parity. Layout must hold under longer French copy. Motion is exclusively ease-out-quart, never bouncy, and `prefers-reduced-motion` is honored everywhere.

**Key Characteristics:**
- Deep teal-navy ground tone with a single cyan accent
- Editorial numbered sections with thin horizontal rules
- Display type at 85% width stretch, line-height 0.88, tracking -0.045em
- Mono uppercase labels at 0.2em letter-spacing for meta information
- Aurora background and parallax tech-mesh as ambient atmosphere, never as content
- One brand color (`#00a2c7`), used on ≤10% of any screen

## 2. Colors

A single hue (cyan-teal, ~oklch hue 220) carried across nine tinted neutrals plus four saturated steps. The page never uses pure black or pure white; even the deepest background tilts toward teal.

### Primary
- **Cyan Signal** (`#00a2c7`): The one accent. Used on the primary CTA fill, the wordmark dot, the active nav link underline, the live-availability dot, the SVG mesh edges in the hero, and the section-number `01..05` glyphs. Nothing else gets this color.
- **Cyan Signal Hover** (`#23afd0`): Hover state on the primary CTA only.

### Secondary
- **Cyan Mid** (`#4ccce6`): Spotlight stop in the SVG mesh edge gradient and the brighter halo of the parallax nodes. Never used on text.
- **Cyan Mist** (`#b6ecf7`): The actual body and heading color. Reads as "off-white" against the deep teal ground but is firmly inside the brand hue. Most copy is this color at 55–80% opacity for hierarchy.

### Neutral (the deep-teal ground)
- **Aurora Deep** (`#06121a`): The absolute base of the aurora background, behind the radial gradients. Never directly visible as a fill.
- **App Ground** (`#0b161a`): The fixed body color (`bg-app`). What the navbar and footer settle onto.
- **Surface** (`#082c36`): Default surface for `Paper` cards and elevated content. Always with 50% alpha + backdrop-blur, so the aurora reads through.
- **Surface Hover** (`#003848`): Chip default ground (in a 90° gradient with `bg-active`).
- **Surface Active** (`#004558`): Chip hover ground; pressed states.
- **Surface Subtle** (`#101b20`): Skeleton-loader fill at 30% alpha; nowhere else.

### Borders
- **Border Subtle** (`#045468`): Default divider — the thin rule next to section titles, the aside separator in the hero, the inactive social-button outline.
- **Border** (`#12677e`): Default border for `Paper` cards and form inputs.
- **Border Hover** (`#11809c`): Hover border for cards, inputs, and outline buttons.

### Named Rules
**The One Voice Rule.** Cyan Signal (`#00a2c7`) appears on no more than ~10% of any visible screen. Its rarity is what makes it read as a brand mark. If you find yourself adding a second saturated color, stop and remove it.

**The No-Pure-Black Rule.** No element uses `#000` or `#fff`. Every neutral is tinted toward the brand hue; every "white" is `primary-light` (`#b6ecf7`) at varying opacity (40 / 55 / 70 / 80 / 100).

**The Aurora-Visible-Through-Surfaces Rule.** Cards (`Paper`) sit at 50% alpha with `backdrop-blur-sm` — never opaque. The slow aurora drift reading through cards is part of the system's pulse.

## 3. Typography

**Display Font:** Bricolage Grotesque (with Inter, system-ui fallbacks)
**Body Font:** Inter (with system-ui, -apple-system, Segoe UI, sans-serif fallbacks)
**Label/Mono Font:** Stack default monospace (`ui-monospace`, SFMono-Regular, Menlo)

**Character:** A geometric-grotesque pair. Bricolage Grotesque carries the editorial weight — variable, optical-sizing aware, set semibold and condensed (85% font-stretch) at the largest sizes. Inter handles every running word — the OpenType features `cv11`, `ss01`, `ss03` are enabled globally on `#root` for the tabular figures and the single-storey `a` / straight `l`.

### Hierarchy
- **Display** (semibold 600, `clamp(3.75rem, 11vw, 9.5rem)`, line-height 0.88, tracking -0.045em, font-stretch 85%): Hero name only — `Antoine` / `Legrand.` stacked on two lines with a cyan superscript dot.
- **Headline** (semibold 600, `clamp(2.5rem, 7vw, 5rem)`, line-height 1, tracking -0.04em): Section titles — `Expériences`, `Projets principaux`, etc.
- **Body Lead** (regular 400, 1.125rem, line-height ~1.65): Hero tagline and section intros. Capped around 36rem max-width.
- **Body** (regular 400, 1rem, line-height 1.6): Default copy. Cap line length 65–75ch.
- **Label / Meta** (mono, 0.7rem, uppercase, letter-spacing 0.2em): Aside `dt` keys (`BASED IN`, `ROLE`, `STACK`), section numbers (`01`, `02`), the availability tag.

### Named Rules
**The 85%-Stretch Rule.** The hero display always sets `font-stretch: 85%`. Bricolage Grotesque becomes structural at this width — letterforms tighten without compressing the optical weight. Don't override this on any display-scale headline.

**The Mono-For-Meta Rule.** Anything that's a label, a tag, a coordinate, or a system value (section numbers, availability indicator, aside keys) is set in monospace, 0.2em letter-spaced, and uppercase. Anything that's content — sentences, names, descriptions — is in Inter or Bricolage. The two never blur.

**The Opacity-Hierarchy Rule.** Body type uses one color (`primary-light` / `#b6ecf7`) and varies opacity rather than swapping colors: 100% for primary copy, 70–80% for secondary, 40–55% for meta. Don't introduce a second neutral text color.

## 4. Elevation

Mostly flat, with two atmospheric exceptions: the page-wide aurora gradient and the cyan glow that surrounds interactive surfaces on hover. Cards do not stack into z-layers; they sit on the same plane and gain a soft cyan halo when hovered. There is no drop-shadow vocabulary in the traditional sense — every "shadow" is a colored cyan glow at 8–35% alpha.

### Glow Vocabulary
- **Card Resting Glow** (`box-shadow: 0 0 20px rgba(0,162,199,0.08), 0 0 40px rgba(0,162,199,0.04), inset 0 1px 0 rgba(255,255,255,0.05)`): Default `Paper` glow — barely visible, more felt than seen.
- **Card Hover Glow** (`box-shadow: 0 0 30px rgba(0,162,199,0.15), 0 0 60px rgba(0,162,199,0.08), inset 0 1px 0 rgba(255,255,255,0.08)`): On hover only.
- **Chip Hover Glow** (`box-shadow: 0 0 16px rgba(0,162,199,0.35), 0 0 4px rgba(0,162,199,0.2)`): The strongest glow in the system — chips feel "lit" on hover. This is intentional contrast against the otherwise calm motion.

### Aurora (page background)
A multi-layer composition on `#root`: two radial gradients (cyan + cyan-mid at low alpha), two conic gradients with custom `@property --aurora-a/--aurora-b` rotation angles, an SVG noise texture, and a top-edge vignette. Drifts across `--aurora-x`/`--aurora-y` over 22s, rotates over 38s. **Disabled under `prefers-reduced-motion`.**

### Named Rules
**The Glow-Not-Shadow Rule.** Depth is conveyed by colored cyan halos, never grey drop-shadows. If you reach for `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`, stop — that vocabulary doesn't exist here.

**The Flat-Cards Rule.** Cards never nest. A `Paper` inside a `Paper` is always wrong. Use a `Separator`, more whitespace, or a different layout instead.

## 5. Components

### Buttons

- **Shape:** Pill (`rounded-full`).
- **Primary** (`bg-primary` / `text-bg-app`, `px-6 py-3`, `text-sm font-medium`): The CTA. Used once in the hero (`Me contacter` / `Get in touch`), once in the contact form. On hover, the gap between label and arrow icon expands from `gap-2` to `gap-3` over 300ms — a small editorial flourish that signals "forward."
- **Hover:** background shifts to `primary-hover`, gap widens, no scale, no shadow.
- **Ghost / Icon Button** (`h-11 w-11`, circular, `border border-border-subtle`, neutral text): The LinkedIn / social buttons. Hover swaps border to `border-hover` and text from `primary-light/70` to `primary-light`.

### Chips

- **Style:** Pill (`rounded-full`, `px-3 py-1.5`), gradient background `from-bg-hover to-bg-active`, `border border-border-subtle`, body type at `text-sm tracking-widest text-primary-light`.
- **Icon:** Optional 16px SVG slot; on hover the icon rotates 12° and scales to 110% with a color shift to `primary`.
- **State:** Hover swaps the gradient direction (`from-bg-active to-bg-hover`), upgrades border to `border-hover`, scales to 105%, and applies the strongest glow in the system. Cursor is `default` — chips are decorative tags, not buttons.

### Cards (Paper)

- **Corner Style:** `rounded-2xl` (1rem).
- **Background:** `rgba(8,44,54,0.5)` with `backdrop-blur-sm`. The aurora always reads through.
- **Border:** `1px solid` `border` (`#12677e`); hover swaps to `border-hover`.
- **Shadow Strategy:** See Elevation — colored cyan resting glow, stronger on hover, never grey.
- **Internal Padding:** Responsive — `p-5` on small screens, `p-10` on medium and above.
- **Behavior:** Each `Paper` fades in from below (`y: 24 → 0`, `opacity: 0 → 1`) over 800ms ease-out-quart on first scroll into view.

### Inputs / Fields

- **Style:** Transparent background, `1px solid` `border`, default radius. Focus does not change background — only the border shifts to `border-hover`. Hover behaves the same.
- **Globally enforced** in `index.css` via `!important` on `input`, `textarea`, `button` — bypasses any inherited Chakra/Radix defaults still present from earlier iterations.

### Navigation

- **Position:** Fixed top, full-width, `z-1000`, `backdrop-blur-md`, `border-b`.
- **Background:** Computed in `useNavbar` — animates from transparent to a tinted teal as the user scrolls past the hero.
- **Typography:** Body font, `text-sm`, `tracking-wide`. Active link gets a 1px cyan underline at the baseline; hover lifts the link's opacity from 70% to 100%.
- **Mobile:** Separate `_NavbarMobile` component, identical color logic, hamburger toggle.
- **Language Switcher:** Dedicated `_LanguageSwitcher` — two-letter codes (`FR` / `EN`), mono uppercase 0.2em tracking, the active locale gets `primary-light` and a thin underline.

### Section Header

A signature pattern. Three elements on one baseline:
1. **Number** (`01`–`05`): mono, `text-xs`, `tracking-[0.2em]`, `text-primary/70`.
2. **Title**: display headline, semibold, `clamp(2.5rem, 7vw, 5rem)`, tracking -0.04em.
3. **Hairline**: a `1px` horizontal rule (`bg-border-subtle/60`) that fills the rest of the row, vertically nudged up by `-0.4em` to sit on the cap height.

A subtitle, when present, sits beneath the title indented by the width of the number column. Whole header fades in from below on first view.

### Tech Field (signature component)

The hero atmosphere. 20 stack icons (Java, Spring, TypeScript, Angular, React, Vue, JS, CSS, Node, Express, SQL, Docker, Git, Postgres, Supabase, Tailwind, Vite, Firebase, Linux, Android) positioned by `(x%, y%)` with a `depth` value driving parallax on pointer movement. Adjacent icons (within 24% Euclidean distance) are connected by faint cyan SVG lines on a base mesh; a brighter "spotlight" mesh follows the cursor through a circular CSS mask. Each icon floats vertically over 8.5–12s and rotates ±1.2°. Whole field is `aria-hidden`, masked to fade at the edges, and disables motion under `prefers-reduced-motion`.

## 6. Do's and Don'ts

### Do

- **Do** use Cyan Signal (`#00a2c7`) on at most ~10% of any screen — primary CTA fill, wordmark dot, active nav, section numbers. Treat it as the only saturated voice.
- **Do** set every "white" as `primary-light` (`#b6ecf7`) and vary opacity (40 / 55 / 70 / 80 / 100) for hierarchy. Don't introduce a second neutral text color.
- **Do** keep all transitions on ease-out-quart `[0.25, 1, 0.5, 1]` over 0.8–1.2s. Long, calm, exponential.
- **Do** number every section in mono `01`, `02`, `03`, `04`, `05`. The numbering is the editorial signature.
- **Do** set the hero display at `font-stretch: 85%`, line-height `0.88`, tracking `-0.045em`. Bricolage Grotesque was chosen for this exact configuration.
- **Do** use mono uppercase 0.2em-tracked labels for all meta — section numbers, aside keys, language codes, the availability tag.
- **Do** honor `prefers-reduced-motion` everywhere: aurora, tech-mesh float, edge breathing, node pulse, fade-ins. The hooks already exist (`useReducedMotion`, the `@media` block in `App.css`) — match the pattern.
- **Do** keep `Paper` cards at 50% alpha with `backdrop-blur-sm`. The aurora reading through is part of the design.
- **Do** ensure French copy fits the same layout as English — French is on average 15–20% longer. Test before shipping.
- **Do** use cyan glow halos for elevation (the `0_0_20px_rgba(0,162,199,0.08)` family).

### Don't

- **Don't** use `#000` or `#fff` anywhere. Tinted neutrals only.
- **Don't** introduce a second saturated color (no purple, no pink, no orange, no green). One accent, period.
- **Don't** use grey drop shadows (`rgba(0,0,0,...)`). Depth is colored cyan glow, not neutral shadow.
- **Don't** nest cards. A `Paper` inside a `Paper` is always wrong. Use whitespace or a `Separator`.
- **Don't** use gradient-clip text (`background-clip: text`). The hero, the section titles, and every CTA are solid `primary-light` or solid `primary`. Period.
- **Don't** use side-stripe borders (`border-left: 4px solid X`) as accents. Full borders, leading numbers, or nothing.
- **Don't** use glassmorphism as decoration. The one place backdrop-blur lives is the navbar and `Paper` cards — both purposeful, both at carefully chosen alpha. No other glass surfaces.
- **Don't** add bouncy or elastic motion (`spring`, overshoot, `easeOutBack`). Ease-out-quart only.
- **Don't** stack hero metric tiles ("8 years · 12 projects · 3 stacks"). The tagline + aside grid in the header is the format — copy in the aside dl, not big numbers.
- **Don't** add emoji to copy (`Hi 👋`, `Let's connect 🚀`). Voice is editorial first-person. Numerals and punctuation only.
- **Don't** scroll-jack (`overscroll-behavior` lock, scroll-snap on the page, custom wheel handling beyond `react-lenis`). The smooth-scroll already in place is the limit.
- **Don't** use em dashes in copy. Commas, colons, parentheses, periods. (See `coding-style`-style guidance — applies to UX copy too.)
- **Don't** ship a project card that's a 1:1 grid clone of the others. The `BentoProjectCard` exists specifically so the projects section avoids the identical-cards trap.
