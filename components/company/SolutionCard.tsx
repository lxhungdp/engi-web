"use client";

import Image from "next/image";
import type { CompanySolution } from "@/lib/types/company";
import { getCompanyIcon } from "@/lib/company-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function SolutionCard({
  solution,
  compact = false,
}: {
  solution: CompanySolution;
  compact?: boolean;
}) {
  const Icon = getCompanyIcon(solution.icon);

  if (compact && solution.image) {
    return (
      <article className={cn("group overflow-hidden", tc.card, tc.cardHover)}>
        <div className="relative aspect-[16/9] bg-background-muted/30">
          <Image
            src={solution.image}
            alt={solution.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-6">
          <h3 className={cn("font-heading font-semibold", tc.heading)}>{solution.name}</h3>
          <p className={cn("mt-2 text-sm", tc.body)}>{solution.description}</p>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden",
        tc.card,
        tc.cardHover,
        solution.featured && "ring-1 ring-accent/25",
      )}
    >
      {solution.image && (
        <div className="relative aspect-[16/9] bg-background-muted/30">
          <Image
            src={solution.image}
            alt={solution.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className={tc.iconBox}>
          <Icon className="h-5 w-5" />
        </div>
        <h3 className={cn("font-heading mt-4 font-semibold", tc.heading)}>{solution.name}</h3>
        <p className={cn("mt-2 text-sm", tc.body)}>{solution.description}</p>
        {solution.benefits && (
          <ul className="mt-4 space-y-2">
            {solution.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-xs text-foreground-secondary">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
