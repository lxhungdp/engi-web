# EngiWeb Style Reference

Portable design spec for reusing the EngiWeb look on other websites.  
Source of truth: `app/globals.css`, `lib/theme-classes.ts`.

**Aesthetic:** Linear / Vercel minimal — neutral palette, hairline borders, tight typography, one blue/cyan accent. Light and dark are each complete systems (not simple inversions).

---

## Quick start (other websites)

1. Load fonts (Inter + Space Grotesk).
2. Copy the **CSS variables** block below into your stylesheet.
3. Toggle theme by adding/removing the `dark` class on `<html>`.
4. Copy the **component CSS** (buttons, cards, inputs) or map tokens into your framework.

```html
<html class="dark"> <!-- or no class for light -->
```

---

## Fonts

| Role | Family | Weight usage | Letter-spacing |
|------|--------|--------------|----------------|
| Body | **Inter** | 400 body, 500–600 UI | `-0.011em` on `body` |
| Headings | **Space Grotesk** | 600–700 | `-0.022em` on `.font-heading` |

### Google Fonts link

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
  rel="stylesheet"
/>
```

### CSS

```css
:root {
  --font-inter: "Inter", system-ui, sans-serif;
  --font-space-grotesk: "Space Grotesk", system-ui, sans-serif;
}

body {
  font-family: var(--font-inter), system-ui, sans-serif;
  letter-spacing: -0.011em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

.font-heading {
  font-family: var(--font-space-grotesk), system-ui, sans-serif;
  letter-spacing: -0.022em;
}
```

---

## Typography scale

| Token / class | Size | Weight | Line-height | Color token | Usage |
|---------------|------|--------|-------------|-------------|-------|
| `headingXl` | `1.875rem` → `2.25rem` → `3rem` (sm/lg) | 700 | 1.1 | `--foreground` | Page hero |
| `headingLg` | `1.5rem` → `1.875rem` → `2.125rem` | 700 | 1.15 | `--foreground` | Section title |
| `headingMd` | `1.125rem` | 600 | snug | `--foreground` | Card / panel title |
| `eyebrow` | `0.75rem` (12px) | 600 | default | `--accent` | Uppercase label, `tracking: 0.14em` |
| `body` | `15px` | 400 | relaxed (1.625) | `--foreground-muted` | Default body |
| `bodyLg` | `1rem` → `1.125rem` | 400 | relaxed | `--foreground-muted` | Lead paragraph |
| `bodySecondary` | `15px` | 400 | relaxed | `--foreground-secondary` | Secondary copy |
| `link` | `0.875rem` | 400 | default | `--foreground-muted` → hover `--foreground` | Nav links |
| `linkAccent` | `0.875rem` | 400 | default | `--accent` → hover `--accent-hover` | Accent links |
| `badgeText` | `0.75rem` | 500 | default | `--foreground-secondary` | Small labels |

### Gradient text (hero highlights only)

```css
.text-gradient-accent {
  background: linear-gradient(to right, var(--accent), var(--accent-secondary));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

---

## Color tokens — Light theme (`:root`)

| Token | Hex / value | Usage |
|-------|-------------|-------|
| `--background` | `#ffffff` | Page background |
| `--background-muted` | `#fafafa` | Alternate sections, table header |
| `--background-alt` | `#ffffff` | Alt page areas |
| `--background-elevated` | `#ffffff` | Raised surfaces |
| `--foreground` | `#0a0a0a` | Primary text |
| `--foreground-secondary` | `#404040` | Secondary text |
| `--foreground-muted` | `#6b7280` | Muted / placeholder text |
| `--accent` | `#2563eb` | Links, badges, focus ring |
| `--accent-secondary` | `#0ea5e9` | Gradient secondary |
| `--accent-cyan` | `#06b6d4` | Decorative cyan |
| `--accent-hover` | `#1d4ed8` | Accent hover |
| `--accent-foreground` | `#ffffff` | Text on accent surfaces |
| `--accent-muted` | `rgba(37, 99, 235, 0.07)` | Focus glow, tint backgrounds |
| `--accent-border` | `rgba(37, 99, 235, 0.22)` | Card hover border |
| `--border` | `#ededee` | Default border (hairline) |
| `--border-subtle` | `#f4f4f5` | Subtle dividers |
| `--card` | `#ffffff` | Card background |
| `--card-hover` | `#ffffff` | Card hover bg |
| `--nav-bg` | `rgba(255, 255, 255, 0.72)` | Navbar (with backdrop blur) |
| `--input-bg` | `#ffffff` | Form inputs |
| `--footer-bg` | `#fafafa` | Footer |
| `--mockup-bg` | `#ffffff` | Device mockup shell |
| `--mockup-border` | `#ededee` | Mockup border |
| `--mockup-inner` | `#fafafa` | Mockup inner bar |
| `--btn-primary-bg` | `#0ea5e9` | Primary button |
| `--btn-primary-hover-bg` | `#0284c7` | Primary button hover |
| `--btn-primary-foreground` | `#ffffff` | Primary button text |
| `--btn-primary-shadow` | `0 6px 18px -6px rgb(14 165 233 / 0.4)` | Primary hover shadow |
| `--btn-secondary-bg` | `#ffffff` | Secondary button |
| `--btn-secondary-border` | `#e4e4e7` | Secondary border |
| `--btn-secondary-hover-bg` | `#fafafa` | Secondary hover |
| `--shadow-card` | `0 1px 2px rgba(16,24,40,0.04), 0 1px 1px rgba(16,24,40,0.03)` | Card shadow |
| `--shadow-card-hover` | `0 4px 14px -4px rgba(16,24,40,0.1), 0 2px 6px -3px rgba(16,24,40,0.06)` | Card hover |
| `--shadow-accent` | `0 6px 20px -6px rgb(37 99 235 / 0.35)` | Accent glow |
| `--shadow-mockup` | `0 24px 60px -22px rgba(16,24,40,0.18), 0 8px 24px -14px rgba(16,24,40,0.1)` | Mockup depth |
| `--grid-line` | `rgba(15, 23, 42, 0.04)` | Grid backgrounds |
| `--glow-line-color` | `rgba(37, 99, 235, 0.16)` | Horizontal glow line |
| `--hero-glow-1` | `rgba(37, 99, 235, 0.07)` | Hero blob 1 |
| `--hero-glow-2` | `rgba(6, 182, 212, 0.05)` | Hero blob 2 |
| `--section-tint` | `rgba(15, 23, 42, 0.018)` | Section gradient tint |
| `--cta-gradient-from` | `rgba(37, 99, 235, 0.06)` | CTA panel gradient start |
| `--cta-gradient-via` | `#fafafa` | CTA panel gradient mid |
| `--cta-gradient-to` | `rgba(6, 182, 212, 0.05)` | CTA panel gradient end |
| `--selection-bg` | `rgba(37, 99, 235, 0.16)` | Text selection bg |
| `--selection-color` | `#0a0a0a` | Text selection color |
| `--toggle-bg` | `#f4f4f5` | Theme toggle track |
| `--toggle-border` | `#e4e4e7` | Theme toggle border |

---

## Color tokens — Dark theme (`.dark`)

| Token | Hex / value | Usage |
|-------|-------------|-------|
| `--background` | `#08090a` | Page background |
| `--background-muted` | `#0e0f11` | Alternate sections |
| `--background-alt` | `#08090a` | Alt page areas |
| `--background-elevated` | `#111214` | Raised surfaces |
| `--foreground` | `#f7f8f8` | Primary text |
| `--foreground-secondary` | `#b4b9c1` | Secondary text |
| `--foreground-muted` | `#8a8f98` | Muted text |
| `--accent` | `#38bdf8` | Links, badges, focus |
| `--accent-secondary` | `#22d3ee` | Gradient secondary |
| `--accent-cyan` | `#22d3ee` | Decorative cyan |
| `--accent-hover` | `#7dd3fc` | Accent hover |
| `--accent-foreground` | `#08090a` | Text on accent surfaces |
| `--accent-muted` | `rgba(56, 189, 248, 0.1)` | Focus glow |
| `--accent-border` | `rgba(56, 189, 248, 0.24)` | Card hover border |
| `--border` | `rgba(255, 255, 255, 0.08)` | Hairline border |
| `--border-subtle` | `rgba(255, 255, 255, 0.05)` | Subtle dividers |
| `--card` | `rgba(255, 255, 255, 0.021)` | Card background |
| `--card-hover` | `rgba(255, 255, 255, 0.045)` | Card hover |
| `--nav-bg` | `rgba(8, 9, 10, 0.72)` | Navbar |
| `--input-bg` | `rgba(255, 255, 255, 0.03)` | Form inputs |
| `--footer-bg` | `#08090a` | Footer |
| `--mockup-bg` | `#0e0f11` | Mockup shell |
| `--mockup-border` | `rgba(255, 255, 255, 0.09)` | Mockup border |
| `--mockup-inner` | `rgba(255, 255, 255, 0.025)` | Mockup inner |
| `--btn-primary-bg` | `#38bdf8` | Primary button |
| `--btn-primary-hover-bg` | `#7dd3fc` | Primary hover |
| `--btn-primary-foreground` | `#08090a` | Primary text (dark on cyan) |
| `--btn-primary-shadow` | `0 6px 20px -6px rgba(56, 189, 248, 0.4)` | Primary hover shadow |
| `--btn-secondary-bg` | `rgba(255, 255, 255, 0.04)` | Secondary button |
| `--btn-secondary-border` | `rgba(255, 255, 255, 0.1)` | Secondary border |
| `--btn-secondary-hover-bg` | `rgba(255, 255, 255, 0.08)` | Secondary hover |
| `--shadow-card` | `none` | Cards rely on border in dark |
| `--shadow-card-hover` | `0 12px 32px -16px rgba(0, 0, 0, 0.7)` | Card hover depth |
| `--shadow-accent` | `0 6px 20px -6px rgba(56, 189, 248, 0.35)` | Accent glow |
| `--shadow-mockup` | `0 28px 64px -24px rgba(0, 0, 0, 0.75)` | Mockup depth |
| `--grid-line` | `rgba(255, 255, 255, 0.035)` | Grid backgrounds |
| `--glow-line-color` | `rgba(56, 189, 248, 0.32)` | Glow line |
| `--hero-glow-1` | `rgba(56, 189, 248, 0.09)` | Hero blob 1 |
| `--hero-glow-2` | `rgba(59, 130, 246, 0.07)` | Hero blob 2 |
| `--section-tint` | `rgba(255, 255, 255, 0.015)` | Section tint |
| `--cta-gradient-from` | `rgba(56, 189, 248, 0.08)` | CTA gradient start |
| `--cta-gradient-via` | `#0e0f11` | CTA gradient mid |
| `--cta-gradient-to` | `rgba(59, 130, 246, 0.07)` | CTA gradient end |
| `--selection-bg` | `rgba(56, 189, 248, 0.28)` | Selection bg |
| `--selection-color` | `#ffffff` | Selection text |
| `--toggle-bg` | `rgba(255, 255, 255, 0.05)` | Toggle track |
| `--toggle-border` | `rgba(255, 255, 255, 0.1)` | Toggle border |

---

## Copy-paste CSS variables

```css
:root {
  --background: #ffffff;
  --background-muted: #fafafa;
  --background-alt: #ffffff;
  --background-elevated: #ffffff;
  --foreground: #0a0a0a;
  --foreground-secondary: #404040;
  --foreground-muted: #6b7280;
  --accent: #2563eb;
  --accent-secondary: #0ea5e9;
  --accent-cyan: #06b6d4;
  --accent-hover: #1d4ed8;
  --accent-foreground: #ffffff;
  --accent-muted: rgba(37, 99, 235, 0.07);
  --accent-border: rgba(37, 99, 235, 0.22);
  --border: #ededee;
  --border-subtle: #f4f4f5;
  --card: #ffffff;
  --card-hover: #ffffff;
  --nav-bg: rgba(255, 255, 255, 0.72);
  --input-bg: #ffffff;
  --footer-bg: #fafafa;
  --mockup-bg: #ffffff;
  --mockup-border: #ededee;
  --mockup-inner: #fafafa;
  --btn-secondary-bg: #ffffff;
  --btn-secondary-border: #e4e4e7;
  --btn-secondary-hover-bg: #fafafa;
  --btn-primary-bg: #0ea5e9;
  --btn-primary-hover-bg: #0284c7;
  --btn-primary-foreground: #ffffff;
  --btn-primary-shadow: 0 6px 18px -6px rgb(14 165 233 / 0.4);
  --shadow-card: 0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 1px rgba(16, 24, 40, 0.03);
  --shadow-card-hover: 0 4px 14px -4px rgba(16, 24, 40, 0.1), 0 2px 6px -3px rgba(16, 24, 40, 0.06);
  --shadow-accent: 0 6px 20px -6px rgb(37 99 235 / 0.35);
  --shadow-mockup: 0 24px 60px -22px rgba(16, 24, 40, 0.18), 0 8px 24px -14px rgba(16, 24, 40, 0.1);
  --grid-line: rgba(15, 23, 42, 0.04);
  --glow-line-color: rgba(37, 99, 235, 0.16);
  --hero-glow-1: rgba(37, 99, 235, 0.07);
  --hero-glow-2: rgba(6, 182, 212, 0.05);
  --section-tint: rgba(15, 23, 42, 0.018);
  --cta-gradient-from: rgba(37, 99, 235, 0.06);
  --cta-gradient-via: #fafafa;
  --cta-gradient-to: rgba(6, 182, 212, 0.05);
  --selection-bg: rgba(37, 99, 235, 0.16);
  --selection-color: #0a0a0a;
  --toggle-bg: #f4f4f5;
  --toggle-border: #e4e4e7;
}

.dark {
  --background: #08090a;
  --background-muted: #0e0f11;
  --background-alt: #08090a;
  --background-elevated: #111214;
  --foreground: #f7f8f8;
  --foreground-secondary: #b4b9c1;
  --foreground-muted: #8a8f98;
  --accent: #38bdf8;
  --accent-secondary: #22d3ee;
  --accent-cyan: #22d3ee;
  --accent-hover: #7dd3fc;
  --accent-foreground: #08090a;
  --accent-muted: rgba(56, 189, 248, 0.1);
  --accent-border: rgba(56, 189, 248, 0.24);
  --border: rgba(255, 255, 255, 0.08);
  --border-subtle: rgba(255, 255, 255, 0.05);
  --card: rgba(255, 255, 255, 0.021);
  --card-hover: rgba(255, 255, 255, 0.045);
  --nav-bg: rgba(8, 9, 10, 0.72);
  --input-bg: rgba(255, 255, 255, 0.03);
  --footer-bg: #08090a;
  --mockup-bg: #0e0f11;
  --mockup-border: rgba(255, 255, 255, 0.09);
  --mockup-inner: rgba(255, 255, 255, 0.025);
  --btn-secondary-bg: rgba(255, 255, 255, 0.04);
  --btn-secondary-border: rgba(255, 255, 255, 0.1);
  --btn-secondary-hover-bg: rgba(255, 255, 255, 0.08);
  --btn-primary-bg: #38bdf8;
  --btn-primary-hover-bg: #7dd3fc;
  --btn-primary-foreground: #08090a;
  --btn-primary-shadow: 0 6px 20px -6px rgba(56, 189, 248, 0.4);
  --shadow-card: none;
  --shadow-card-hover: 0 12px 32px -16px rgba(0, 0, 0, 0.7);
  --shadow-accent: 0 6px 20px -6px rgba(56, 189, 248, 0.35);
  --shadow-mockup: 0 28px 64px -24px rgba(0, 0, 0, 0.75);
  --grid-line: rgba(255, 255, 255, 0.035);
  --glow-line-color: rgba(56, 189, 248, 0.32);
  --hero-glow-1: rgba(56, 189, 248, 0.09);
  --hero-glow-2: rgba(59, 130, 246, 0.07);
  --section-tint: rgba(255, 255, 255, 0.015);
  --cta-gradient-from: rgba(56, 189, 248, 0.08);
  --cta-gradient-via: #0e0f11;
  --cta-gradient-to: rgba(59, 130, 246, 0.07);
  --selection-bg: rgba(56, 189, 248, 0.28);
  --selection-color: #ffffff;
  --toggle-bg: rgba(255, 255, 255, 0.05);
  --toggle-border: rgba(255, 255, 255, 0.1);
}

html { color-scheme: light; }
html.dark { color-scheme: dark; }

body {
  background: var(--background);
  color: var(--foreground);
  transition: background-color 0.3s ease, color 0.3s ease;
}

::selection {
  background: var(--selection-bg);
  color: var(--selection-color);
}
```

---

## Components

### Buttons

| Property | Primary (`.btn-primary`) | Secondary (`.btn-secondary`) |
|----------|--------------------------|------------------------------|
| Display | `inline-flex`, centered | same |
| Gap | `0.5rem` | same |
| Padding | `0.625rem 1.25rem` (10px 20px) | same |
| Font size | `0.875rem` (14px) | same |
| Font weight | `600` | `600` |
| Letter-spacing | `-0.01em` | `-0.01em` |
| Border radius | `0.5rem` (8px) | `0.5rem` |
| Border | none | `1px solid var(--btn-secondary-border)` |
| Background | `var(--btn-primary-bg)` | `var(--btn-secondary-bg)` |
| Text color | `var(--btn-primary-foreground)` | `var(--foreground)` |
| Hover bg | `var(--btn-primary-hover-bg)` | `var(--btn-secondary-hover-bg)` |
| Hover extra | `box-shadow: var(--btn-primary-shadow)` | `border-color: var(--accent-border)` |
| Active | `transform: translateY(0.5px)` | same |
| Focus | `outline: 2px solid var(--accent); outline-offset: 2px` | same |

**Compact navbar CTA:** same classes + `padding: 0.5rem 1rem` (`px-4 py-2`).

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  background: var(--btn-primary-bg);
  color: var(--btn-primary-foreground);
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  transition: background-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;
}
.btn-primary:hover {
  background: var(--btn-primary-hover-bg);
  box-shadow: var(--btn-primary-shadow);
}
.btn-primary:active { transform: translateY(0.5px); }

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--btn-secondary-border);
  background: var(--btn-secondary-bg);
  color: var(--foreground);
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  transition: border-color 0.18s ease, background-color 0.18s ease, transform 0.18s ease;
}
.btn-secondary:hover {
  border-color: var(--accent-border);
  background: var(--btn-secondary-hover-bg);
}
.btn-secondary:active { transform: translateY(0.5px); }
```

### Cards

| Property | Value |
|----------|-------|
| Border radius | `0.75rem` (`rounded-xl`) |
| Border | `1px solid var(--border)` |
| Background | `var(--card)` |
| Shadow | `var(--shadow-card)` |
| Transition | `border-color, box-shadow, background 0.2s ease` |
| Hover border | accent at 40% opacity (`--accent-border` equivalent) |
| Hover shadow | `var(--shadow-card-hover)` |

```css
.surface-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  box-shadow: var(--shadow-card);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}
.surface-card:hover {
  border-color: var(--accent-border);
  box-shadow: var(--shadow-card-hover);
}
```

**CTA panel:** `border-radius: 1rem`, gradient:

```css
.cta-panel {
  border-radius: 1rem;
  border: 1px solid var(--border);
  background: linear-gradient(
    to bottom right,
    var(--cta-gradient-from),
    var(--cta-gradient-via),
    var(--cta-gradient-to)
  );
}
```

### Forms (`.input-field`)

| Property | Value |
|----------|-------|
| Width | `100%` |
| Padding | `0.625rem 0.875rem` |
| Font size | `0.875rem` |
| Border radius | `0.5rem` |
| Border | `1px solid var(--border)` |
| Background | `var(--input-bg)` |
| Text | `var(--foreground)` |
| Placeholder | `var(--foreground-muted)` |
| Focus border | `var(--accent)` |
| Focus ring | `0 0 0 3px var(--accent-muted)` |

### Badges (`.badge-accent`)

| Property | Light | Dark |
|----------|-------|------|
| Shape | pill (`border-radius: 9999px`) | same |
| Padding | `0.3125rem 0.75rem` | same |
| Font size | `0.75rem` | same |
| Border | `1px solid var(--border)` | same |
| Background | `var(--background-muted)` | `rgba(255,255,255,0.03)` |

**Icon box** (feature tiles):

- Size: `2.5rem × 2.5rem` (sm: `2.25rem`)
- Radius: `0.5rem`
- Background: accent at 10% opacity
- Ring: `1px` accent at 15% opacity
- Icon color: `var(--accent)`

### Tables

| Part | Styles |
|------|--------|
| Header | `border-bottom: 1px solid var(--border); background: var(--background-muted)` |
| Row | `border-bottom: 1px solid var(--border); hover: background accent at 5%` |

### Navbar

| Property | Value |
|----------|-------|
| Height | `4rem` (64px) |
| Max width | `80rem` (1280px) |
| Horizontal padding | `1.5rem` → `2rem` on lg |
| Scrolled state | `border-bottom: 1px solid var(--border); background: var(--nav-bg); backdrop-filter: blur(24px)` |

### Footer

- `border-top: 1px solid var(--border)`
- `background: var(--footer-bg)`

---

## Layout & spacing

| Token | Value | Usage |
|-------|-------|-------|
| Container max-width | `80rem` (`max-w-7xl`) | Page content |
| Container padding | `1rem` → `1.5rem` → `2rem` (sm/lg) | Horizontal gutters |
| Section vertical | `5rem` → `6rem` → `8rem` (base/sm/lg) | `py-20 sm:py-24 lg:py-32` |
| Page hero top | `2.5rem` → `4rem` below navbar | Inner pages |
| Home hero bottom | `4rem` → `7rem` | Homepage |
| Fixed navbar offset | `padding-top: 4rem` | Demo layouts |
| Grid gap | `1.5rem` (`gap-6`) | Card grids |
| Card internal padding | `1.5rem` (`p-6`) typical | Cards |

---

## Border radius reference

| Element | Radius |
|---------|--------|
| Buttons, inputs | `0.5rem` (8px) |
| Cards, mockups | `0.75rem` (12px) |
| CTA panel | `1rem` (16px) |
| Badges | `9999px` (pill) |
| Icon boxes | `0.5rem` |
| Nav mobile menu items | `0.5rem` |

---

## Background patterns (optional)

```css
.grid-bg {
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 64px 64px;
}

.grid-bg-sm { background-size: 48px 48px; /* same image as .grid-bg */ }

.blueprint-lines { background-size: 28px 28px; /* same image as .grid-bg */ }

.glow-line {
  background: linear-gradient(90deg, transparent, var(--glow-line-color), transparent);
}
```

---

## Tailwind v4 mapping (if using Tailwind)

Add to your `@theme inline` block:

```css
@theme inline {
  --color-background: var(--background);
  --color-background-muted: var(--background-muted);
  --color-foreground: var(--foreground);
  --color-foreground-secondary: var(--foreground-secondary);
  --color-foreground-muted: var(--foreground-muted);
  --color-accent: var(--accent);
  --color-accent-secondary: var(--accent-secondary);
  --color-accent-hover: var(--accent-hover);
  --color-border: var(--border);
  --color-card: var(--card);
  --color-nav: var(--nav-bg);
  --color-input: var(--input-bg);
  --color-footer: var(--footer-bg);
  --font-sans: var(--font-inter);
  --font-heading: var(--font-space-grotesk);
}
```

Then use: `bg-background`, `text-foreground`, `text-foreground-muted`, `border-border`, `bg-card`, `text-accent`, etc.

---

## Theme toggle (minimal JS)

```js
function setTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  localStorage.setItem("theme", theme);
}

const saved = localStorage.getItem("theme");
if (saved === "dark" || saved === "light") setTheme(saved);
else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
```

EngiWeb default: **dark mode** (via `next-themes` in this repo).

---

## Do / Don't

**Do**

- Use CSS variables for every color
- Use Inter for body, Space Grotesk for headings
- Keep borders hairline (`--border`)
- Use sky/cyan primary buttons exactly as specified
- Test both light and dark before shipping

**Don't**

- Hardcode `bg-blue-500`, `#2563eb` in components (use tokens)
- Use pure `#000` background or `#fff` text outside the token system
- Create per-page button color overrides
- Invert dark mode manually — use the full `.dark` token set

---

## Source files in this repo

| File | Contents |
|------|----------|
| `app/globals.css` | All CSS variables + component classes |
| `lib/theme-classes.ts` | Tailwind class strings (`tc` object) |
| `docs/DESIGN_SYSTEM.md` | Internal design rules |
| `docs/THEME_RULES.md` | Theme implementation guide |
