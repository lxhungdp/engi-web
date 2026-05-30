"use client";

import { motion } from "framer-motion";
import type { Solution } from "@/lib/types/industrial-product";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function SolutionCard({
  solution,
  index = 0,
}: {
  solution: Solution;
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
        {solution.title}
      </h3>
      <p className={cn("mt-2 text-sm", tc.body)}>{solution.problem}</p>
      <div className="mt-4 flex-1 space-y-3 border-t border-border pt-4">
        <div>
          <p className="text-xs font-medium text-foreground-muted">Products</p>
          <p className="mt-1 text-xs text-accent">{solution.products.join(" · ")}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-foreground-muted">Output</p>
          <p className="mt-1 text-xs text-foreground-secondary">
            {solution.output.join(", ")}
          </p>
        </div>
        <p className="text-xs font-medium text-accent">{solution.value}</p>
      </div>
    </motion.div>
  );
}
