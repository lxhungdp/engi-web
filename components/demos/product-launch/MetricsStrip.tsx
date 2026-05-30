"use client";

import { motion } from "framer-motion";
import { metrics } from "@/lib/data/product-launch/aerovolt-x1";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function MetricsStrip() {
  return (
    <section className="relative border-y border-border bg-background-muted/60 py-8 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={cn(
                tc.card,
                "p-5 text-center hover:border-accent/25 hover:bg-accent/5",
              )}
            >
              <p className={cn("text-3xl font-bold sm:text-4xl", tc.gradientText)}>
                {metric.value}
              </p>
              <p className={cn("mt-1 text-sm", tc.body)}>{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
