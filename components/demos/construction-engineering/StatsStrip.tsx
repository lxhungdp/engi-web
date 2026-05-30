"use client";

import { motion } from "framer-motion";
import type { ConstructionStat } from "@/lib/types/construction-engineering";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function StatsStrip({
  stats,
  title,
}: {
  stats: ConstructionStat[];
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={cn(tc.card, "p-6 text-center")}
            >
              <p className="font-heading text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className={cn("mt-2 text-sm", tc.body)}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
