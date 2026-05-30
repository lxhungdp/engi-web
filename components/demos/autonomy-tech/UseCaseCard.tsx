"use client";

import { motion } from "framer-motion";
import type { DetailedUseCase } from "@/lib/types/autonomy-tech";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function UseCaseCard({
  useCase,
  index = 0,
}: {
  useCase: DetailedUseCase;
  index?: number;
}) {
  const Icon = getDemoIcon(useCase.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={cn(tc.card, tc.cardHover, "p-6")}
    >
      <div className="flex items-start justify-between gap-3">
        <div className={tc.iconBox}>
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-xs text-accent">
          {useCase.category}
        </span>
      </div>
      <h3 className="font-heading mt-4 text-lg font-semibold text-foreground">
        {useCase.title}
      </h3>
      <p className="text-xs text-foreground-muted">{useCase.industry}</p>
      <p className={cn("mt-3 text-sm", tc.body)}>{useCase.problem}</p>

      <div className="mt-4 space-y-3 border-t border-border pt-4">
        <div>
          <p className="text-xs font-medium text-foreground-muted">Workflow</p>
          <ol className="mt-1.5 list-inside list-decimal space-y-1 text-xs text-foreground-secondary">
            {useCase.workflow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div>
          <p className="text-xs font-medium text-foreground-muted">Result</p>
          <p className="mt-1 text-xs text-accent">{useCase.result}</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {useCase.modules.map((m) => (
            <span
              key={m}
              className="rounded border border-border px-2 py-0.5 text-[10px] text-foreground-muted"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
