"use client";

import { motion } from "framer-motion";
import type { ScientificMetric } from "@/lib/types/biotech-research";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ScientificMetricStrip({
  metrics,
  title,
}: {
  metrics: ScientificMetric[];
  title?: string;
}) {
  return (
    <section className={cn("py-16 lg:py-20", tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="font-heading mb-10 text-center text-xl font-semibold text-foreground sm:text-2xl">
            {title}
          </h2>
        )}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={cn(tc.card, "p-5 text-center")}
            >
              <p className="font-heading text-2xl font-bold text-accent sm:text-3xl">{m.value}</p>
              <p className={cn("mt-2 text-sm", tc.body)}>{m.label}</p>
              {m.note && <p className="mt-1 text-[10px] text-foreground-muted">{m.note}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
