"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Briefcase,
  Code2,
  Factory,
  Landmark,
  Microscope,
  Plane,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/lib/data/industries";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  Drone: Plane,
  Code2,
  Microscope,
  Factory,
  Briefcase,
};

export function IndustriesSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className={tc.eyebrow}>Industries</p>
          <h2 className={cn("mt-3", tc.headingLg)}>
            Built for technical businesses
          </h2>
          <p className={cn("mx-auto mt-4 max-w-2xl", tc.body)}>
            EngiWeb understands the language, workflows, and expectations of
            engineering-focused industries.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] ?? Building2;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className={cn(
                  "group rounded-xl border p-5 transition-colors",
                  tc.card,
                  tc.cardHover,
                )}
              >
                <div className={cn("mb-4", tc.iconBox)}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={cn("font-heading text-sm font-semibold", tc.heading)}>
                  {industry.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
