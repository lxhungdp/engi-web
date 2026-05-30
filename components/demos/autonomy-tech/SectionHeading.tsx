import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
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
