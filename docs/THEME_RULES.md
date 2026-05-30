# Theme Rules

How light/dark theming works in EngiWeb and how to stay theme-safe.

## Implementation

| Piece | Location |
|-------|----------|
| Provider | `components/ThemeProvider.tsx` |
| Toggle | `components/ThemeToggle.tsx` |
| CSS variables | `app/globals.css` (`:root` + `.dark`) |
| Tailwind mapping | `@theme inline` block in `globals.css` |
| Class helper | `lib/theme-classes.ts` → `tc` object |
| Root wrapper | `app/layout.tsx` wraps children in `ThemeProvider` |

## How it works

1. `next-themes` toggles the `dark` class on `<html>`
2. CSS variables swap between `:root` (light) and `.dark` selectors
3. Tailwind semantic colors (`bg-background`, `text-foreground`, `text-accent`) map to those variables
4. Components use `tc.*` helpers or semantic Tailwind classes — never raw hex

### ThemeProvider config

```tsx
<NextThemesProvider
  attribute="class"
  defaultTheme="dark"
  enableSystem
  disableTransitionOnChange={false}
>
```

- Default: **dark mode**
- System preference respected when user selects "system"
- Theme persists in localStorage via next-themes

## Theme toggle placement

Present in:

- Marketing `Navbar.tsx`
- Every demo navbar (`*DemoNavbar.tsx`, product-launch `DemoNavbar.tsx`)

Not in footers.

## Styling guide

### Backgrounds

```tsx
// Page wrapper
className={tc.page}                    // bg-background text-foreground

// Alternate section
className={tc.sectionAlt}              // bg-background-muted

// Decorative (demo layouts only)
className="grid-bg-sm"                 // subtle grid
className="blueprint-lines"            // construction demo
className="molecule-pattern"           // biotech demo
```

### Cards

```tsx
className={cn(tc.card, tc.cardHover, "p-6")}
```

Never use `bg-white dark:bg-gray-900` — use `bg-card`.

### Buttons

Always use global button classes:

```tsx
className={tc.btnPrimary}    // → .btn-primary (sky/cyan solid)
className={tc.btnSecondary}  // → .btn-secondary
```

**Never** create demo-specific button CSS or override `--btn-primary-*` tokens.

### Tables

```tsx
<thead className={tc.tableHeader}>
<tr className={tc.tableRow}>
```

### Forms

```tsx
<input className={tc.input} />
```

Focus states are built into `.input-field`.

### Text hierarchy

| Level | Class |
|-------|-------|
| Page title | `font-heading text-4xl font-bold text-foreground` |
| Section title | `tc.headingLg` |
| Eyebrow | `tc.eyebrow` |
| Body | `tc.body` or `tc.bodySecondary` |
| Accent link | `tc.linkAccent` |

## Avoiding inconsistent colors

**Do not:**

- Hardcode Tailwind palette colors (`bg-blue-500`, `text-cyan-400`)
- Use inline `style={{ color: ... }}`
- Create per-demo CSS files with custom accent colors
- Override `.btn-primary` in demo-scoped CSS

**Do:**

- Use semantic tokens: `text-accent`, `bg-accent/10`, `border-border`
- Use opacity modifiers on accent: `bg-accent/5`, `ring-accent/20`
- Use CSS variable references: `from-[var(--cta-gradient-from)]`

## Industry-specific accents

Allowed **only** as:

- Background patterns (`blueprint-lines`, `molecule-pattern`)
- Content-specific SVG/visual components
- Small decorative elements using `accent` at low opacity

Not allowed as separate color palettes or button styles.

## Light mode requirements

Light mode is a full design, not an inversion:

- Slate backgrounds (`#f8fafc`, `#f1f5f9`)
- White cards with real shadows
- Readable navy text (`#0f172a`)
- Accent blue for links and highlights
- Primary buttons: sky blue (`#0ea5e9`)

Test every new component in light mode before finishing.

## Dark mode requirements

- Deep slate background (`#020617`)
- Semi-transparent cards with subtle borders
- Sky/cyan accents with glow on hover
- Primary buttons: cyan (`#06b6d4`) with dark text

## Adding a new theme-safe section

Checklist:

1. Wrap in `tc.page` or place inside a layout that already does
2. Use `text-foreground` / `text-foreground-muted` for text
3. Use `tc.card` for surfaces
4. Use `tc.btnPrimary` / `tc.btnSecondary` for actions
5. Use `border-border` for dividers
6. Preview in both light and dark mode
7. Avoid pure black (`#000`) or pure white text on colored buttons outside the token system

## Related docs

- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)
- [COMPONENT_RULES.md](./COMPONENT_RULES.md)
