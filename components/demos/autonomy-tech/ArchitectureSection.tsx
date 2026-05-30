"use client";

import { motion } from "framer-motion";
import {
  Brain,
  GitBranch,
  LayoutDashboard,
  Radio,
  type LucideIcon,
} from "lucide-react";
import { architectureSteps } from "@/lib/data/autonomy-tech/nexabot";
import { autonomyRoutes } from "@/lib/data/autonomy-tech/site";
import { SectionHeading } from "./SectionHeading";
import { SectionLink } from "./PageHero";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Radio,
  Brain,
  GitBranch,
  LayoutDashboard,
};

interface ArchitectureSectionProps {
  preview?: boolean;
}

export function ArchitectureSection({ preview = false }: ArchitectureSectionProps) {
  return (
    <section id="architecture" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Architecture"
            title="From sensors to decisions in one connected workflow."
          />
        </motion.div>

        <div className="relative mt-16 hidden lg:block">
          <div className="absolute top-12 right-[12.5%] left-[12.5%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="grid grid-cols-4 gap-6">
            {architectureSteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? Radio;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-accent/25 bg-card shadow-card">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="absolute -top-1 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {step.step}
                  </div>
                  <h3 className="font-heading mt-5 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className={cn("mt-2 text-sm leading-relaxed", tc.body)}>
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-12 lg:hidden">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-accent/30 via-accent/15 to-transparent" />
          <div className="space-y-6">
            {architectureSteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? Radio;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative flex gap-5 pl-14"
                >
                  <div className="absolute left-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {step.step}
                  </div>
                  <div className={cn(tc.cardSubtle, "flex-1 p-5")}>
                    <div className={cn(tc.iconBoxSm, "mb-3")}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className={cn("mt-1.5 text-sm", tc.body)}>{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {preview && (
          <SectionLink
            href={autonomyRoutes.architecture}
            label="View full architecture"
          />
        )}
      </div>
    </section>
  );
}
