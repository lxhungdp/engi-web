# EngiWeb Project Structure

This document describes the current EngiWeb codebase layout and where to place new code.

## Stack

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first tokens in `app/globals.css`)
- **next-themes** for light/dark mode
- **Framer Motion** for section animations
- **lucide-react** for icons

## Top-level layout

```text
engi-web/
├── app/                    # Next.js App Router pages and layouts
├── components/             # React components (marketing + demos + ui)
├── lib/                    # Data, types, utilities, theme helpers
├── docs/                   # Project rules and documentation (this folder)
├── public/                 # Static assets
├── AGENTS.md               # AI agent entry point (references docs/)
└── package.json
```

## App folder (`app/`)

```text
app/
├── globals.css             # Design tokens, utility classes, theme variables
├── layout.tsx              # Root layout: fonts, ThemeProvider
├── page.tsx                # Marketing homepage
├── contact/page.tsx
├── services/page.tsx
└── demos/
    ├── page.tsx            # Demo gallery index
    ├── autonomy-tech/      # Multi-page demo + layout.tsx
    ├── construction-engineering/
    ├── biotech-research/
    ├── industrial-product/
    └── product-launch/     # Single-page demo (legacy showcase)
```

### Marketing routes

| Route | File |
|-------|------|
| `/` | `app/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/demos` | `app/demos/page.tsx` |

### Demo route pattern

Every active multi-page demo follows:

```text
app/demos/{demo-slug}/
├── layout.tsx              # Shared navbar, footer, background effects
├── page.tsx                # Demo homepage
└── {section}/page.tsx      # Inner pages
```

Dynamic routes use `[slug]` folders (e.g. `projects/[slug]`, `products/[slug]`).

## Components folder (`components/`)

```text
components/
├── ThemeProvider.tsx       # next-themes wrapper
├── ThemeToggle.tsx         # Light/dark toggle
├── Navbar.tsx, Footer.tsx  # Marketing site chrome
├── HeroSection.tsx, ...    # Marketing sections
├── ui/
│   ├── Buttons.tsx         # PrimaryButton / SecondaryButton wrappers
│   └── SectionHeading.tsx  # Shared SectionHeading + PageHero
└── demos/
    ├── autonomy-tech/      # Demo-specific components only
    ├── construction-engineering/
    ├── biotech-research/
    ├── industrial-product/
    └── product-launch/
```

### Placement rules

| What | Where |
|------|-------|
| Shared UI used across demos or marketing | `components/ui/` |
| Marketing-only sections | `components/` (root) |
| Demo-specific UI | `components/demos/{demo-slug}/` |
| Never | Put one demo's components in another demo's folder |

## Data folder (`lib/data/`)

```text
lib/data/
├── demos.ts                # Demo gallery registry (active demos only)
├── theme-modes.ts          # Homepage style preview modes
├── services.ts             # EngiWeb service packages
├── industries.ts, process.ts, why-engiweb.ts
├── autonomy-tech/          # Per-demo data modules
├── construction-engineering/
├── biotech-research/
├── industrial-product/
└── product-launch/
```

Each demo data folder typically contains:

- `site.ts` — company info, route map (`*Routes`), nav links
- Section-specific files (`services.ts`, `homepage.ts`, etc.)
- `index.ts` — re-exports (optional)

## Types folder (`lib/types/`)

- `lib/types.ts` — shared marketing types
- `lib/types/{demo-slug}.ts` — demo-specific interfaces

## Utilities

| File | Purpose |
|------|---------|
| `lib/theme-classes.ts` | `tc` object — theme-aware Tailwind class strings |
| `lib/utils.ts` | `cn()` — clsx + tailwind-merge |
| `lib/demo-icons.ts` | Lucide icon map for demo data |

## Naming conventions

### Files and folders

- **Demo slug:** kebab-case (`biotech-research`, `construction-engineering`)
- **Components:** PascalCase (`BioTechDemoNavbar.tsx`, `DroneModelCard.tsx`)
- **Data files:** kebab-case or descriptive camelCase (`use-cases-data.ts`, `site.ts`)
- **Page files:** always `page.tsx` (App Router convention)
- **Layout files:** always `layout.tsx`

### Demo component naming

- Navbar: `{Demo}DemoNavbar.tsx` or `DemoNavbar.tsx` (product-launch)
- Footer: `{Demo}DemoFooter.tsx` or `DemoFooter.tsx`
- Hero: `{Demo}Hero.tsx` or domain-specific (`DroneHero.tsx`)
- CTA: `{Demo}CTA.tsx` or `CTASection.tsx`

### Route constants

Each demo defines a route map in `lib/data/{demo}/site.ts`:

```ts
export const biotechRoutes = {
  home: "/demos/biotech-research",
  research: "/demos/biotech-research/research",
  // ...
} as const;
```

Always use these constants — never hardcode demo paths in JSX.

## Rules for new work

1. **Shared UI** → `components/ui/` or root `components/`
2. **Demo-specific UI** → `components/demos/{demo-slug}/`
3. **Repeated content** → `lib/data/` arrays, not inline JSX
4. **New demo pages** → follow `app/demos/{slug}/layout.tsx` + `page.tsx` pattern
5. **Page files stay thin** — compose sections from smaller components
6. **Register new gallery demos** in `lib/data/demos.ts`
7. **Add route map** in `lib/data/{demo}/site.ts` before building nav links

## Related docs

- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
- [DEMO_PAGE_RULES.md](./DEMO_PAGE_RULES.md)
- [COMPONENT_RULES.md](./COMPONENT_RULES.md)
- [AI_GENERATION_RULES.md](./AI_GENERATION_RULES.md)
