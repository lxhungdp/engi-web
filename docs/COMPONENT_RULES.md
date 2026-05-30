# Component Rules

How to write and organize React components in EngiWeb.

## General principles

1. **Composition over monoliths** — pages compose sections; sections compose cards
2. **Data drives UI** — map arrays from `lib/data/` into reusable card components
3. **Theme-aware by default** — use `tc` tokens, never hardcoded hex colors
4. **Typed props** — every component exports an interface for its props
5. **Focused files** — one primary export per file; split when a file exceeds ~200 lines

## Naming

| Item | Convention | Example |
|------|------------|---------|
| Component | PascalCase | `DroneModelCard` |
| File | Match component name | `DroneModelCard.tsx` |
| Props interface | `{Component}Props` | `DroneModelCardProps` |
| Data types | In `lib/types/` | `DroneModel` |

Demo-specific components must live in `components/demos/{demo-slug}/`.

## Component categories

### Shared UI (`components/ui/`)

Use for patterns reused across demos or marketing:

- `Buttons.tsx` — `PrimaryButton`, `SecondaryButton`
- `SectionHeading.tsx` — `SectionHeading`, `PageHero`

Prefer `tc.btnPrimary` on `<Link>` directly when a wrapper adds no value.

### Marketing sections (`components/`)

Homepage-only: `HeroSection`, `DemoGallery`, `ServicesSection`, etc.

### Demo sections (`components/demos/{demo}/`)

- `{Demo}DemoNavbar.tsx` — fixed nav with theme toggle
- `{Demo}DemoFooter.tsx` — disclaimer + Back to EngiWeb
- `{Demo}Hero.tsx` — homepage hero
- `{Demo}CTA.tsx` — bottom CTA band
- `HomeSections.tsx` — homepage section composition
- Card components: `*Card.tsx`, `*Table.tsx`

## Props typing

Always define props with TypeScript:

```tsx
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index?: number;
}

export function FeatureCard({ title, description, icon, index = 0 }: FeatureCardProps) {
  // ...
}
```

For data-driven components, import types from `lib/types/{demo}.ts`.

## Data mapping pattern

```tsx
// page.tsx — thin composition
export default function ServicesPage() {
  return (
    <>
      <PageHero title={servicesHero.title} description={servicesHero.description} />
      <section className={tc.section}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

**Do not** embed long content arrays inside page files.

## Section components

Standard section structure:

```tsx
<section className={cn("relative", tc.section)}>
  <div className="pointer-events-none absolute inset-0 section-tint" /> {/* optional */}
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <SectionHeading eyebrow="..." title="..." description="..." />
    {/* content grid */}
  </div>
</section>
```

Use shared `SectionHeading` from `@/components/ui/SectionHeading`.

## Navbar components

Every demo navbar must include:

1. Link to demo home (logo / company name)
2. `demoNavLinks` from `lib/data/{demo}/site.ts`
3. "Back to EngiWeb" → `/`
4. `ThemeToggle`
5. Mobile responsive menu

Pattern: `"use client"` with scroll state for border/blur.

## Footer components

Every demo footer must include:

1. Demo disclaimer ("This is a demo … created by EngiWeb")
2. **Back to EngiWeb** → `/` using `tc.btnSecondary` + `ArrowLeft` icon
3. Optional copyright line for fictional company

## CTA components

Demo CTAs (`*CTA.tsx`) accept configurable props:

```tsx
interface DemoCTAProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}
```

Defaults should funnel to EngiWeb (`/` or `/contact`) when appropriate.

## Form components

- Use `tc.input` for all inputs
- Wrap in `tc.card` container
- Submit button: `tc.btnPrimary`
- Demo forms are non-functional (no backend) — show success state on submit

## Table components

- Use semantic `<table>` with `tc.tableHeader` / `tc.tableRow`
- Responsive: wrap in `overflow-x-auto`
- Highlight column/row via accent classes, not custom colors

## Animation usage

```tsx
"use client";

import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.05 }}
>
```

- Use on cards and section blocks, not on every element
- `"use client"` only when motion or interactivity is required
- Prefer server components for static pages when possible

## Theme-aware styling

**Do:**

```tsx
className={cn(tc.card, tc.cardHover, "p-6")}
className={tc.btnPrimary}
className="text-accent"
className="border-border bg-card"
```

**Don't:**

```tsx
className="bg-blue-600 text-white"       // hardcoded color
className="bg-[#2563eb]"                 // magic hex
style={{ backgroundColor: "#0ea5e9" }}   // inline color
```

## When to extract a component

Extract when:

- The same JSX pattern appears 2+ times
- A page section exceeds ~40 lines of JSX
- A card/table/form pattern is reused within a demo

Do **not** extract when:

- It would create a one-line wrapper with no reuse
- Abstraction hides the data flow

## Related docs

- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
- [DEMO_PAGE_RULES.md](./DEMO_PAGE_RULES.md)
- [THEME_RULES.md](./THEME_RULES.md)
