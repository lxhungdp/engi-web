"use client";

import { motion } from "framer-motion";
import { credibilityLogos } from "@/lib/data/autonomy-tech/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function CredibilityStrip() {
  return (
    <section className={cn("border-y border-border py-10", tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={cn("mb-8 text-center text-sm", tc.body)}
        >
          Built for teams working at the edge of automation.
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {credibilityLogos.map((logo, i) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="font-heading text-lg font-semibold tracking-tight text-foreground-muted/60 transition-colors hover:text-foreground-muted"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
