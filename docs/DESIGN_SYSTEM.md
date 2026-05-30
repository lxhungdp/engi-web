# EngiWeb Design System

Source of truth: `app/globals.css`, `lib/theme-classes.ts`, and existing component usage.

Do not invent new visual styles. Extend this system when needed.

## Fonts

| Role | Font | CSS variable | Tailwind |
|------|------|--------------|----------|
| Body | Inter | `--font-inter` | default / `font-sans` |
| Headings | Space Grotesk | `--font-space-grotesk` | `font-heading` |

Loaded in `app/layout.tsx` via `next/font/google`.

**Rule:** All headings use `font-heading`. Body text uses default sans.

## Color system (CSS variables)

Defined in `app/globals.css` under `:root` (light) and `.dark` (dark).

### Light theme

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#f8fafc` | Page background |
| `--background-muted` | `#f1f5f9` | Alternate sections |
| `--background-elevated` | `#ffffff` | Elevated surfaces |
| `--foreground` | `#0f172a` | Primary text |
| `--foreground-secondary` | `#475569` | Secondary text |
| `--foreground-muted` | `#64748b` | Muted text |
| `--accent` | `#2563eb` | Links, badges, highlights |
| `--accent-secondary` | `#0ea5e9` | Gradient text secondary |
| `--accent-hover` | `#1d4ed8` | Accent hover |
| `--border` | `#e2e8f0` | Borders |
| `--card` | `#ffffff` | Card backgrounds |

### Dark theme

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#020617` | Page background |
| `--background-muted` | `#0f172a` | Alternate sections |
| `--foreground` | `#f8fafc` | Primary text |
| `--accent` | `#38bdf8` | Links, badges, highlights |
| `--accent-secondary` | `#22d3ee` | Secondary accent |
| `--border` | `rgba(148,163,184,0.25)` | Borders |
| `--card` | `rgba(15,23,42,0.75)` | Card backgrounds |

### Primary buttons (separate from accent)

Buttons use dedicated tokens so they stay consistent across demos:

| Token | Light | Dark |
|-------|-------|------|
| `--btn-primary-bg` | `#0ea5e9` | `#06b6d4` |
| `--btn-primary-hover-bg` | `#0284c7` | `#22d3ee` |
| `--btn-primary-foreground` | `#ffffff` | `#060b14` |

Applied via `.btn-primary` class → `tc.btnPrimary`.

## Theme-aware class helper (`tc`)

Use `lib/theme-classes.ts` instead of hardcoding colors:

```ts
import { tc } from "@/lib/theme-classes";

// Common tokens
tc.page          // bg-background text-foreground
tc.headingLg     // large section heading
tc.eyebrow       // uppercase accent label
tc.body          // muted body text
tc.card          // rounded-2xl bordered card
tc.cardHover     // card hover states
tc.btnPrimary    // primary button
tc.btnSecondary  // secondary button
tc.badge         // accent badge pill
tc.input         // form input
tc.section       // py-20 lg:py-28
tc.ctaPanel      // gradient CTA panel
```

## Cards

- **Radius:** `rounded-2xl` (1rem on `.surface-card`)
- **Border:** `border border-border`
- **Background:** `bg-card`
- **Shadow (light):** `shadow-card` → subtle drop shadow
- **Shadow (dark):** minimal; hover uses accent glow
- **Hover:** `tc.cardHover` — accent border + elevated shadow

## Buttons

### Primary (`.btn-primary` / `tc.btnPrimary`)

- Solid sky/cyan background (not gradient)
- `border-radius: 0.5rem`
- `padding: 0.75rem 1.5rem`
- `font-size: 0.875rem`, `font-weight: 600`
- Hover: darker shade + accent shadow

### Secondary (`.btn-secondary` / `tc.btnSecondary`)

- Transparent/card background with border
- Same padding and radius as primary
- Hover: accent border tint

**Rule:** All demos use `tc.btnPrimary` / `tc.btnSecondary`. No per-demo button color overrides.

## Forms

- Class: `tc.input` → `.input-field`
- `rounded-lg`, bordered, theme-aware background
- Focus: accent border + soft accent ring

## Badges / tags

- Class: `tc.badge` → `.badge-accent`
- Pill shape (`rounded-full`)
- Accent border + muted accent background
- Eyebrow labels: `tc.eyebrow` (uppercase, tracking-widest, accent color)

## Section spacing

- Standard section: `tc.section` → `py-20 lg:py-28`
- Page hero top padding: `pt-28 lg:pt-36` (accounts for fixed navbar)
- Inner page sections often use `py-16 lg:py-20` for secondary blocks
- Container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`

## Grid and layout

- Marketing and demos use responsive CSS grids (`grid gap-6 md:grid-cols-2 lg:grid-cols-3`)
- Background effects (demo layouts):
  - `grid-bg-sm` — subtle grid (Autonomy, Industrial, BioTech)
  - `blueprint-lines` — tighter grid (Construction)
  - `molecule-pattern` — radial accents (BioTech)
  - `glow-line` — top horizontal glow accent

## Navbar

- Fixed top, backdrop blur when scrolled
- Classes: `tc.navScrolled`, `tc.navMobile`
- Contains: logo, demo nav links, "Back to EngiWeb" → `/`, `ThemeToggle`
- Primary CTA uses `tc.btnPrimary` (compact: `px-4 py-2 text-sm`)

## Footer

- `border-t border-border bg-footer`
- Demo disclaimer copy + **Back to EngiWeb** link
- Standard pattern: `tc.btnSecondary` with `ArrowLeft` icon

## Tables

- Header: `tc.tableHeader`
- Rows: `tc.tableRow` with hover accent tint
- Used in comparison tables, spec tables

## Animation

- **Framer Motion** for section entrance: `initial={{ opacity: 0, y: 16–20 }}`, `whileInView`, `viewport={{ once: true }}`
- Stagger via `transition={{ delay: index * 0.05 }}`
- Keep animations subtle — no aggressive motion
- Theme transitions: `transition-colors duration-300` on page wrapper

## Gradient text

- `tc.gradientText` → `.text-gradient-accent` (accent → accent-secondary)
- Use sparingly for hero highlights only

## Design rules

1. **All demos share the same global design language** — same tokens, buttons, cards, fonts
2. **Industry accents** are allowed only as small background patterns (`blueprint-lines`, `molecule-pattern`) or content-specific visuals — not separate color systems
3. **Primary buttons must be consistent** — always `tc.btnPrimary`
4. **Fonts must be consistent** — Inter + Space Grotesk only
5. **Card radius and shadows must be consistent** — `rounded-2xl`, `tc.card`
6. **Light mode** must feel like a complete professional design (slate backgrounds, real shadows, readable contrast) — not a simple dark-mode inversion
7. **Dark mode** must remain polished (slate-950 backgrounds, subtle borders, accent glow on hover)

## Related docs

- [THEME_RULES.md](./THEME_RULES.md)
- [COMPONENT_RULES.md](./COMPONENT_RULES.md)
