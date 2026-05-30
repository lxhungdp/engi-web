"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/lib/types/construction-engineering";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => {
        const Icon = getDemoIcon(step.icon);
        return (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={cn(tc.card, "relative p-6")}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background-muted">
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
