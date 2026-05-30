# AI Generation Rules

Instructions for AI coding assistants (Cursor, Copilot, etc.) working on EngiWeb.

## Before writing any code

1. Read the documentation in `/docs/`:
   - [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
   - [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
   - [COMPONENT_RULES.md](./COMPONENT_RULES.md)
   - [DEMO_PAGE_RULES.md](./DEMO_PAGE_RULES.md)
   - [THEME_RULES.md](./THEME_RULES.md)
   - [CODE_STYLE.md](./CODE_STYLE.md)
2. Read `AGENTS.md` for Next.js 16 breaking changes
3. Inspect existing similar components before creating new ones
4. Follow the **current** visual style — do not redesign

## Core rules

### Structure

- Follow the existing folder layout (see PROJECT_STRUCTURE.md)
- New demo pages go in `app/demos/{slug}/`
- Demo components go in `components/demos/{slug}/`
- Shared components go in `components/ui/` or root `components/`
- Data goes in `lib/data/{slug}/`
- Types go in `lib/types/{slug}.ts`

### Design

- Use the global design system — `tc` from `lib/theme-classes.ts`
- Reuse existing components (`SectionHeading`, `*Card`, `*CTA`, navbars, footers)
- Do **not** create new visual styles, color palettes, or button variants
- Do **not** introduce gradient primary buttons
- Do **not** use hardcoded hex colors in Tailwind classes
- Industry accents: small background patterns only

### Data

- Do **not** hardcode repeated content in JSX
- Use data arrays in `lib/data/` and map into components
- Use route constants from `site.ts` (`biotechRoutes`, etc.)
- Register new gallery demos in `lib/data/demos.ts`

### Demos

- Every demo must have **Back to EngiWeb** (navbar + footer → `/`)
- Every demo must support **light and dark mode**
- Every demo must use `ThemeToggle` in navbar
- Use shared `tc.btnPrimary` / `tc.btnSecondary` for all buttons
- Do **not** add CAD / Engineering Software as an active demo
- Demo content must be fictional and demo-safe

### Routes

- Do **not** invent new route patterns if one exists
- Pattern: `/demos/{demo-slug}/{section}`
- Dynamic: `/demos/{demo-slug}/projects/[slug]`
- EngiWeb marketing: `/`, `/contact`, `/services`, `/demos`

### Code quality

- TypeScript types for all props
- Clean imports — no unused imports
- Run build after significant changes
- No dead routes or broken links
- Mobile responsive layout required
- Prefer minimal diffs — do not refactor unrelated code

## Reusable components to prefer

| Need | Use |
|------|-----|
| Primary button | `tc.btnPrimary` on `<Link>` or `<button>`, or `PrimaryButton` from `components/ui/Buttons.tsx` |
| Secondary button | `tc.btnSecondary` |
| Section heading | `SectionHeading` from `components/ui/SectionHeading.tsx` |
| Inner page hero | `PageHero` from `components/ui/SectionHeading.tsx` |
| Cards | `tc.card` + `tc.cardHover` |
| Forms | `tc.input` |
| Icons in data | string key → `getDemoIcon()` from `lib/demo-icons.ts` |

Do not duplicate these patterns in demo folders.

## Pre-completion checklist

Before finishing any task, verify:

```text
1. Does this follow the global design system?
2. Does it support dark and light themes?
3. Are buttons/cards/navbars consistent?
4. Are repeated contents stored in data arrays?
5. Are routes and links correct?
6. Is mobile layout acceptable?
7. Are imports clean?
8. Is there any unused code?
9. Does it preserve the current EngiWeb brand style?
```

## What NOT to do

- Do not redesign the homepage or demos from scratch
- Do not change `--btn-primary-*` colors without explicit approval
- Do not create per-demo CSS override files
- Do not add new font families
- Do not create monolithic 500-line page files
- Do not copy-paste entire sections between demos — extract shared patterns
- Do not commit unless the user asks

## Next.js 16 note

This project uses Next.js 16 with breaking changes. Read `node_modules/next/dist/docs/` before using APIs that may differ from older Next.js versions.

## Related docs

All files in `/docs/` are authoritative for this project.
