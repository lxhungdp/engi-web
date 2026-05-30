# Demo Page Rules

Rules for all EngiWeb demo websites (fictional company showcases).

## Universal demo requirements

Every demo must:

1. Include a **Back to EngiWeb** link (navbar and footer → `/`)
2. Use the **shared theme system** (`ThemeProvider`, `ThemeToggle`, CSS variables)
3. Support **light and dark mode**
4. Use **consistent navbar/footer** treatment (see [COMPONENT_RULES.md](./COMPONENT_RULES.md))
5. Feel like a **real company/product website** with realistic but fictional content
6. Use **structured data files** in `lib/data/{demo}/` — not hardcoded JSX content
7. Follow the **route pattern** `/demos/{demo-slug}/...`
8. Use **shared button/card/typography** from the global design system

Content must be clearly demo-safe (fictional companies, no real claims).

## Active demo gallery

Registered in `lib/data/demos.ts` (shown on homepage and `/demos`):

| Demo | Route | Style tag |
|------|-------|-----------|
| AutonomyTech Landing Page | `/demos/autonomy-tech` | Tech Mode |
| Construction Engineering Company | `/demos/construction-engineering` | Engineering Mode |
| BioTech Research Website | `/demos/biotech-research` | BioTech Mode |
| Industrial Product Website | `/demos/industrial-product` | Product Mode |

## Legacy / non-gallery demo

| Demo | Route | Notes |
|------|-------|-------|
| Product Launch (AeroVolt X1) | `/demos/product-launch` | Single-page showcase; not in gallery registry |

## Removed demos

**CAD / Engineering Software** — removed from active demo list. Do not re-add without explicit approval. CAD/BIM may appear in demo *content* (integration lists, service descriptions) but not as a separate demo route.

---

## Demo details

### 1. AutonomyTech Landing Page

| Field | Value |
|-------|-------|
| **Company** | NexaBot AI |
| **Route** | `/demos/autonomy-tech` |
| **Purpose** | SaaS-style landing for robotics/AI/automation companies |
| **Industry** | Robotics, AI, autonomous systems |
| **Layout** | `app/demos/autonomy-tech/layout.tsx` |
| **Data** | `lib/data/autonomy-tech/` |
| **Components** | `components/demos/autonomy-tech/` |
| **Routes map** | `autonomyRoutes` in `site.ts` |

**Subpages:**

- `/platform` — Platform modules
- `/solutions` — Solution packages
- `/use-cases` — Use case library with filters
- `/architecture` — System architecture
- `/resources` — Docs and resources
- `/pricing` — Deployment/pricing tiers

**Background:** `grid-bg-sm` + `glow-line`

---

### 2. Construction Engineering Company

| Field | Value |
|-------|-------|
| **Company** | TerraBuild Engineering |
| **Route** | `/demos/construction-engineering` |
| **Purpose** | Corporate website for construction/civil engineering firms |
| **Industry** | Construction, infrastructure, civil engineering |
| **Layout** | `app/demos/construction-engineering/layout.tsx` |
| **Data** | `lib/data/construction-engineering/` |
| **Components** | `components/demos/construction-engineering/` |
| **Routes map** | `constructionRoutes` in `site.ts` |

**Subpages:**

- `/services` — Engineering services
- `/projects` — Project portfolio with category filter
- `/projects/[slug]` — Project detail (6 projects)
- `/sectors` — Industry sectors served
- `/about` — Company story and team
- `/sustainability` — ESG and sustainability
- `/contact` — Contact form

**Background:** `blueprint-lines`

---

### 3. BioTech Research Website

| Field | Value |
|-------|-------|
| **Company** | HelixNova Biosciences |
| **Route** | `/demos/biotech-research` |
| **Purpose** | Scientific website for biotech/diagnostics/life science |
| **Industry** | Biotech, molecular diagnostics, research |
| **Layout** | `app/demos/biotech-research/layout.tsx` |
| **Data** | `lib/data/biotech-research/` |
| **Components** | `components/demos/biotech-research/` |
| **Routes map** | `biotechRoutes` in `site.ts` |

**Subpages:**

- `/research` — Research areas
- `/services` — Lab and research services
- `/technology` — Technology platform
- `/case-studies` — Case studies
- `/resources` — Publications and resources
- `/contact` — Contact form

**Background:** `molecule-pattern` + `grid-bg-sm`

---

### 4. Industrial Product Website

| Field | Value |
|-------|-------|
| **Company** | Vertex Industrial Systems |
| **Route** | `/demos/industrial-product` |
| **Purpose** | Multi-product technical website (drone-focused) |
| **Industry** | Industrial equipment, drones, field inspection |
| **Layout** | `app/demos/industrial-product/layout.tsx` |
| **Data** | `lib/data/industrial-product/` |
| **Components** | `components/demos/industrial-product/` |
| **Routes map** | `industrialRoutes` in `site.ts` |

**Subpages:**

- `/products` — Product catalog with filters
- `/products/[slug]` — Product detail pages
- `/products/smart-inspection-drone` — Flagship Aero X2 page
- `/drone-comparison` — Drone model comparison
- `/solutions` — Industry solutions
- `/resources` — Technical resources
- `/contact` — Quote request form

**Background:** `grid-bg-sm` + `glow-line`

---

## Demo layout pattern

Every multi-page demo uses a shared layout:

```tsx
export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* optional background effects */}
      <DemoNavbar />
      <main className={`relative min-h-screen ${tc.page}`}>{children}</main>
      <DemoFooter />
    </>
  );
}
```

## CTA behavior

| Context | Expected behavior |
|---------|-------------------|
| Demo footer | Back to EngiWeb → `/` |
| Demo navbar | Back to EngiWeb text link → `/` |
| EngiWeb funnel CTAs | Contact EngiWeb → `/contact` |
| In-demo product CTAs | Link within demo routes or `#anchors` |
| Product Launch | Anchor links on single page |

## Adding a new demo

1. Create `app/demos/{slug}/layout.tsx` + `page.tsx`
2. Create `lib/data/{slug}/site.ts` with routes and nav links
3. Create `lib/types/{slug}.ts`
4. Create `components/demos/{slug}/` with navbar, footer, hero
5. Register in `lib/data/demos.ts`
6. Verify light/dark mode, mobile layout, all links

## Related docs

- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
- [AI_GENERATION_RULES.md](./AI_GENERATION_RULES.md)
