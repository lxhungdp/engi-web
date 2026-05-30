"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data/process";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  return (
    <section id="process" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 section-tint" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className={tc.eyebrow}>Process</p>
          <h2 className={cn("mt-3", tc.headingLg)}>
            From discovery to launch
          </h2>
          <p className={cn("mx-auto mt-4 max-w-2xl", tc.body)}>
            A straightforward process designed for technical teams who value
            clarity and precision.
          </p>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute top-8 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center lg:text-left"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 lg:mx-0">
                  <span className="font-heading text-2xl font-bold text-accent">
                    {step.step}
                  </span>
                </div>
                <h3 className={cn("font-heading mt-5 text-lg font-semibold", tc.heading)}>
                  {step.title}
                </h3>
                <p className={cn("mt-2 text-sm leading-relaxed", tc.body)}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
