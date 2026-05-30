"use client";

import { motion } from "framer-motion";
import type { WorkflowStep } from "@/lib/types/industrial-product";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function DroneWorkflow({
  steps,
  columns = 4,
}: {
  steps: WorkflowStep[];
  columns?: 4 | 5;
}) {
  const gridClass =
    columns === 5
      ? "sm:grid-cols-2 lg:grid-cols-5"
      : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={cn("grid gap-6", gridClass)}>
      {steps.map((step, i) => {
        const Icon = getDemoIcon(step.icon);
        return (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={cn(tc.card, "relative p-6 text-center")}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10">
              <Icon className="h-6 w-6 text-accent" />
            </div>
            <p className="font-heading mt-4 text-sm font-bold text-accent">
              {String(step.step).padStart(2, "0")}
            </p>
            <h3 className="font-heading mt-1 font-semibold text-foreground">
              {step.title}
            </h3>
            <p className={cn("mt-2 text-sm", tc.body)}>{step.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
