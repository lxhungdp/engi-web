/** Shared EngiWeb design system — theme-aware Tailwind class strings.
 *  Aesthetic: Linear / Vercel minimal. Tight tracking, generous whitespace,
 *  hairline borders, one blue/cyan accent. */
export const tc = {
  page: "bg-background text-foreground transition-colors duration-300",

  // Typography
  heading: "font-heading text-foreground tracking-tight",
  headingXl:
    "font-heading text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl",
  headingLg:
    "font-heading text-2xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-3xl lg:text-[2.125rem]",
  headingMd:
    "font-heading text-lg font-semibold leading-snug tracking-tight text-foreground",
  eyebrow: "text-xs font-semibold uppercase tracking-[0.14em] text-accent",
  body: "text-[15px] leading-relaxed text-foreground-muted",
  bodyLg: "text-base leading-relaxed text-foreground-muted sm:text-lg",
  bodySecondary: "text-[15px] leading-relaxed text-foreground-secondary",
  link: "text-sm text-foreground-muted transition-colors hover:text-foreground",
  linkAccent: "text-sm text-accent transition-colors hover:text-accent-hover",

  // Rhythm — airier, Linear-style whitespace
  section: "py-20 sm:py-24 lg:py-32",

  /** Clears fixed demo navbar (h-16) — use on demo layout `<main>` */
  demoMain: "pt-16",
  /** Inner page hero — additional spacing below demoMain */
  pageHero: "relative pt-10 pb-12 lg:pt-16 lg:pb-20",
  /** Demo homepage hero — additional spacing below demoMain */
  homeHero: "relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-28",

  // Surfaces
  card: "rounded-xl border border-border bg-card shadow-card transition-all duration-200",
  cardHover: "hover:border-accent/40 hover:shadow-card-hover",
  cardSubtle:
    "rounded-xl border border-border bg-card transition-all duration-200",

  navScrolled: "border-b border-border bg-nav/80 backdrop-blur-xl",
  navMobile: "border-b border-border bg-nav/95 backdrop-blur-xl",

  badge: "badge-accent",
  badgeDot: "h-1.5 w-1.5 rounded-full bg-accent",
  badgeText:
    "text-xs font-medium tracking-wide text-foreground-secondary",

  gradientText: "text-gradient-accent",
  btnPrimary: "btn-primary",
  btnSecondary: "btn-secondary",
  input: "input-field",

  iconBox:
    "flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/15 transition-colors group-hover:bg-accent/15",
  iconBoxSm:
    "flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/15",

  sectionAlt: "bg-background-muted",
  ctaPanel:
    "overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[var(--cta-gradient-from)] via-[var(--cta-gradient-via)] to-[var(--cta-gradient-to)]",

  mockup:
    "rounded-xl border border-[var(--mockup-border)] bg-[var(--mockup-bg)] shadow-mockup",
  mockupInner: "border-b border-border bg-[var(--mockup-inner)]",

  tableRow: "border-b border-border transition-colors hover:bg-accent/5",
  tableHeader: "border-b border-border bg-background-muted",
} as const;
