"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function TechnologyPlatformDiagram({
  steps,
  title,
}: {
  steps: string[];
  title?: string;
}) {
  return (
    <div className={cn(tc.card, "overflow-hidden p-6 sm:p-8")}>
      {title && (
        <p className="mb-6 text-center text-sm font-medium text-foreground-muted">{title}</p>
      )}
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center"
          >
            <div className="rounded-xl border border-accent/25 bg-accent/5 px-4 py-2.5 text-center">
              <p className="text-xs font-semibold text-foreground sm:text-sm">{step}</p>
            </div>
            {i < steps.length - 1 && (
              <ChevronRight className="mx-1 hidden h-4 w-4 shrink-0 text-accent sm:block" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
