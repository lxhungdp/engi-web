"use client";

import { motion } from "framer-motion";
import type { WorkflowStep } from "@/lib/types/biotech-research";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function WorkflowTimeline({
  steps,
  columns = 5,
}: {
  steps: WorkflowStep[];
  columns?: 4 | 5 | 6;
}) {
  const grid =
    columns === 6
      ? "lg:grid-cols-6"
      : columns === 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-5";

  return (
    <div className={cn("grid gap-6 sm:grid-cols-2", grid)}>
      {steps.map((step, i) => {
        const Icon = getDemoIcon(step.icon);
        return (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={cn(tc.card, "p-6 text-center")}
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <p className="font-heading mt-4 text-sm font-bold text-accent">
              {String(step.step).padStart(2, "0")}
            </p>
            <h3 className="font-heading mt-1 font-semibold text-foreground">{step.title}</h3>
            <p className={cn("mt-2 text-sm", tc.body)}>{step.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
