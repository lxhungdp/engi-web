/** Shared EngiWeb design system — theme-aware Tailwind class strings */
export const tc = {
  page: "bg-background text-foreground transition-colors duration-300",
  heading: "font-heading text-foreground",
  headingLg: "font-heading text-3xl font-bold text-foreground sm:text-4xl",
  eyebrow: "text-sm font-medium tracking-widest text-accent uppercase",
  body: "text-foreground-muted",
  bodySecondary: "text-foreground-secondary",
  link: "text-sm text-foreground-muted transition-colors hover:text-foreground",
  linkAccent: "text-sm text-accent transition-colors hover:text-accent-hover",

  section: "py-20 lg:py-28",

  /** Clears fixed demo navbar (h-16) — use on demo layout `<main>` */
  demoMain: "pt-16",
  /** Inner page hero — additional spacing below demoMain */
  pageHero: "relative pt-8 pb-12 lg:pt-12 lg:pb-16",
  /** Demo homepage hero — additional spacing below demoMain */
  homeHero: "relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24",

  card: "rounded-2xl border border-border bg-card shadow-card backdrop-blur-sm transition-all duration-300",
  cardHover:
    "hover:border-accent/30 hover:shadow-card-hover hover:bg-background-elevated",
  cardSubtle:
    "rounded-2xl border border-border bg-card backdrop-blur-sm transition-all duration-300",

  navScrolled: "border-b border-border bg-nav/90 backdrop-blur-xl",
  navMobile: "border-b border-border bg-nav/95 backdrop-blur-xl",

  badge: "badge-accent",
  badgeDot: "h-1.5 w-1.5 rounded-full bg-accent animate-pulse",
  badgeText: "text-xs font-medium tracking-wide text-accent uppercase",

  gradientText: "text-gradient-accent",
  btnPrimary: "btn-primary",
  btnSecondary: "btn-secondary",
  input: "input-field",

  iconBox:
    "flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-all group-hover:bg-accent/15",
  iconBoxSm:
    "flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20",

  sectionAlt: "bg-background-muted",
  ctaPanel:
    "overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-[var(--cta-gradient-from)] via-[var(--cta-gradient-via)] to-[var(--cta-gradient-to)]",

  mockup:
    "rounded-2xl border border-[var(--mockup-border)] bg-[var(--mockup-bg)] shadow-mockup backdrop-blur-sm",
  mockupInner: "border-b border-border bg-[var(--mockup-inner)]",

  tableRow: "border-b border-border transition-colors hover:bg-accent/5",
  tableHeader: "border-b border-border bg-background-muted",
} as const;
