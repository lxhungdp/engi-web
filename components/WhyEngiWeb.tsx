"use client";

import { motion } from "framer-motion";
import { Cog, LayoutGrid, Layers, Zap, type LucideIcon } from "lucide-react";
import { whyPoints } from "@/lib/data/why-engiweb";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Cog,
  LayoutGrid,
  Zap,
  Layers,
};

export function WhyEngiWeb() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className={tc.eyebrow}>Why EngiWeb</p>
          <h2 className={cn("mt-3", tc.headingLg)}>
            Most websites look good. Technical websites must also explain
            complex products clearly.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {whyPoints.map((point, i) => {
            const Icon = iconMap[point.icon] ?? Cog;
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn("p-6 transition-colors", tc.card, "hover:border-accent/20")}
              >
                <div className={cn("mb-4", tc.iconBox)}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={cn("font-heading text-lg font-semibold", tc.heading)}>
                  {point.title}
                </h3>
                <p className={cn("mt-2 text-sm leading-relaxed", tc.body)}>
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
