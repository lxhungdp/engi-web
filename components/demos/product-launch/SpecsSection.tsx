"use client";

import { motion } from "framer-motion";
import { specifications } from "@/lib/data/product-launch/aerovolt-x1";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

export function SpecsSection() {
  return (
    <section id="specs" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Specifications"
            title="Technical specifications"
            description="Engineering-grade performance metrics for mission-critical field operations."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={cn(tc.card, "mt-14 overflow-hidden backdrop-blur-sm")}
        >
          <div
            className={cn(
              tc.tableHeader,
              "hidden grid-cols-[1fr_2fr] px-6 py-3 sm:grid",
            )}
          >
            <span className="text-xs font-medium tracking-widest text-foreground-muted uppercase">
              Parameter
            </span>
            <span className="text-xs font-medium tracking-widest text-foreground-muted uppercase">
              Specification
            </span>
          </div>

          {specifications.map((spec, i) => (
            <div
              key={spec.label}
              className={cn(
                tc.tableRow,
                "grid grid-cols-1 gap-1 px-6 py-4 sm:grid-cols-[1fr_2fr] sm:gap-4 sm:py-3.5",
                i === specifications.length - 1 && "border-b-0",
              )}
            >
              <span className="text-sm font-medium text-foreground-muted">
                {spec.label}
              </span>
              <span className="text-sm font-medium text-foreground">
                {spec.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
