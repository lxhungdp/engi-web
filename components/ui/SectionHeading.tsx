import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && <p className={tc.eyebrow}>{eyebrow}</p>}
      <h2 className={cn("mt-3", tc.headingLg)}>{title}</h2>
      {description && <p className={cn("mt-4", tc.body)}>{description}</p>}
    </div>
  );
}

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  glow?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  glow = false,
}: PageHeroProps) {
  return (
    <section className={cn(tc.pageHero, className)}>
      {glow && (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full hero-glow-1 blur-[100px]" />
        </div>
      )}
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
