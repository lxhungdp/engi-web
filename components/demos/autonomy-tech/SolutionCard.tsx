"use client";

import { motion } from "framer-motion";
import type { SolutionCategory } from "@/lib/types/autonomy-tech";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function SolutionCard({
  solution,
  index = 0,
}: {
  solution: SolutionCategory;
  index?: number;
}) {
  const Icon = getDemoIcon(solution.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={cn(tc.card, tc.cardHover, "flex flex-col p-6")}
    >
      <div className={tc.iconBox}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-heading mt-4 text-lg font-semibold text-foreground">
        {solution.industry}
      </h3>
      <div className="mt-4 space-y-3 flex-1">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
            Challenge
          </p>
          <p className={cn("mt-1 text-sm", tc.body)}>{solution.problem}</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
            NexaBot AI solution
          </p>
          <p className={cn("mt-1 text-sm", tc.bodySecondary)}>{solution.solution}</p>
        </div>
      </div>
      <div className="mt-4 border-t border-border pt-4">
        <p className="text-xs text-foreground-muted">Example outputs</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {solution.outputs.map((o) => (
            <span
              key={o}
              className="rounded-full border border-border bg-background-muted px-2.5 py-0.5 text-xs text-foreground-secondary"
            >
              {o}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
