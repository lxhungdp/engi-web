import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn("relative pt-28 pb-12 lg:pt-36 lg:pb-16", className)}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full hero-glow-1 blur-[100px]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && <p className={tc.eyebrow}>{eyebrow}</p>}
        <h1 className="font-heading mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className={cn("mx-auto mt-5 max-w-2xl text-lg leading-relaxed", tc.body)}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

interface SectionLinkProps {
  href: string;
  label?: string;
}

export function SectionLink({ href, label = "Explore more" }: SectionLinkProps) {
  return (
    <div className="mt-10 text-center">
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

interface PageCTAProps {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function PageCTA({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PageCTAProps) {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className={cn("rounded-2xl px-8 py-12", tc.ctaPanel)}>
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            {title}
          </h2>
          {description && <p className={cn("mt-3", tc.body)}>{description}</p>}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className={tc.btnPrimary}>
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className={tc.btnSecondary}>
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
