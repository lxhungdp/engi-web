# Code Style

Formatting, quality, and conventions for EngiWeb.

## TypeScript

- **Strict mode** enabled via `tsconfig.json`
- Define interfaces for all component props and data shapes
- Demo types live in `lib/types/{demo}.ts`
- Shared marketing types in `lib/types.ts`
- Use `as const` for route maps and static config
- Prefer `type` for unions, `interface` for object shapes
- Avoid `any` — use proper types or `unknown`

## React components

- **Default:** function components with named exports
- **Client components:** add `"use client"` only when using hooks, motion, or browser APIs
- **Server components:** preferred for static demo pages (no interactivity)
- Page files export `metadata` for SEO where applicable
- Keep page files under ~100 lines — delegate to section components

## Import ordering

1. React / Next.js (`import type`, `import Link from "next/link"`)
2. Third-party (`framer-motion`, `lucide-react`)
3. Internal components (`@/components/...`)
4. Data and types (`@/lib/data/...`, `@/lib/types/...`)
5. Utilities (`@/lib/theme-classes`, `@/lib/utils`)

Use `@/` path alias for all internal imports.

## Naming

| Item | Convention |
|------|------------|
| Files | PascalCase for components, camelCase for data/utils |
| Variables | camelCase |
| Constants | camelCase or SCREAMING_SNAKE for true constants |
| Route maps | `{demo}Routes` |
| Nav links | `demoNavLinks` |
| Company info | `companyInfo` or `productInfo` |

## Data files

- One concern per file (`services.ts`, `homepage.ts`)
- Export typed arrays with stable `id` fields for React keys
- Route maps and nav links in `site.ts`
- Icon names as strings mapped via `lib/demo-icons.ts`
- No JSX in data files

## Tailwind class rules

- Use `cn()` from `lib/utils` to merge conditional classes
- Prefer `tc.*` tokens over repeating long class strings
- Semantic colors only: `bg-background`, `text-foreground`, `border-border`
- Responsive: mobile-first (`sm:`, `md:`, `lg:`)
- Spacing: stick to Tailwind scale; section padding via `tc.section`

## When to create components

| Situation | Action |
|-----------|--------|
| JSX repeated 2+ times | Extract component |
| Page section > 40 lines | Extract section component |
| Card pattern reused | Extract `*Card.tsx` |
| One-off layout | Keep inline |

## When to create data arrays

| Situation | Action |
|-----------|--------|
| 3+ similar items in JSX | Move to data file |
| Content might change | Data file |
| Single static sentence | OK inline |

## Avoid

- Inline magic numbers/colors (`bg-[#2563eb]`)
- Duplicated content across demos
- Unused imports
- Dead routes or broken links
- Inconsistent demo naming (`BioTech` vs `Biotech` — use folder slug `biotech-research`)
- Committing secrets or `.env` files

## Responsive design

- Test at mobile (375px), tablet (768px), desktop (1280px)
- Navbars must have mobile menu
- Tables: `overflow-x-auto` wrapper
- Grids: `grid gap-6 md:grid-cols-2 lg:grid-cols-3`

## Accessibility basics

- Use semantic HTML (`<nav>`, `<main>`, `<footer>`, `<section>`)
- Headings in order (`h1` once per page, then `h2`, `h3`)
- Icon-only buttons need `aria-label`
- Form inputs need `<label>` or `aria-label`
- Sufficient color contrast in both themes

## Build and lint

```bash
npm run dev      # Local development
npm run build    # Production build — run after significant changes
npm run lint     # ESLint
```

After significant changes:

1. Run `npm run build` — fix TypeScript and build errors
2. Run `npm run lint` — fix lint issues
3. Remove unused imports and dead files
4. Verify links manually or via build

## Git hygiene

- Do not commit `.env`, credentials, or `node_modules`
- Keep commits focused on one concern
- Do not leave WIP console.logs

## Related docs

- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
- [COMPONENT_RULES.md](./COMPONENT_RULES.md)
- [AI_GENERATION_RULES.md](./AI_GENERATION_RULES.md)
