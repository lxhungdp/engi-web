"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { DataFlowStep } from "@/lib/types/autonomy-tech";

export function DataFlowDiagram({ steps }: { steps: DataFlowStep[] }) {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-max items-center gap-2 px-2 sm:gap-3">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-center gap-2 sm:gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-accent/25 bg-accent/5 px-4 py-3 text-center sm:px-5"
            >
              <p className="whitespace-nowrap text-xs font-semibold text-foreground sm:text-sm">
                {step.label}
              </p>
            </motion.div>
            {i < steps.length - 1 && (
              <ArrowRight className="h-4 w-4 shrink-0 text-accent/50" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
