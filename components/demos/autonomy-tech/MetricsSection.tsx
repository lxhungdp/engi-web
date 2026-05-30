"use client";

import { motion } from "framer-motion";
import { metrics } from "@/lib/data/autonomy-tech/nexabot";
import { SectionHeading } from "./SectionHeading";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function MetricsSection() {
  return (
    <section className={cn("relative py-20 lg:py-28", tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Impact"
            title="Built to make robotics operations measurable."
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={cn(tc.card, "p-6 text-center")}
            >
              <p className={cn("font-heading text-3xl font-bold sm:text-4xl", tc.gradientText)}>
                {metric.value}
              </p>
              <p className={cn("mt-2 text-sm", tc.body)}>{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
