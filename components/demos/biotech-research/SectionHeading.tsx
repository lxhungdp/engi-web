import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl")}>
      {eyebrow && <p className={tc.eyebrow}>{eyebrow}</p>}
      <h2 className={cn("mt-3", tc.headingLg)}>{title}</h2>
      {description && <p className={cn("mt-4", tc.body)}>{description}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16">
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
