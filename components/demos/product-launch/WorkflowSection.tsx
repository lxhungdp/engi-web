"use client";

import { motion } from "framer-motion";
import {
  Camera,
  ClipboardList,
  FileOutput,
  Plane,
  type LucideIcon,
} from "lucide-react";
import { workflowSteps } from "@/lib/data/product-launch/aerovolt-x1";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  ClipboardList,
  Plane,
  Camera,
  FileOutput,
};

export function WorkflowSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="section-tint absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Workflow"
            title="From mission planning to engineering-ready data."
            description="A streamlined four-step process from field deployment to deliverable output."
          />
        </motion.div>

        <div className="relative mt-16 hidden lg:block">
          <div className="absolute top-10 right-0 left-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="grid grid-cols-4 gap-6">
            {workflowSteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? ClipboardList;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div
                    className={cn(
                      tc.card,
                      "mx-auto flex h-20 w-20 items-center justify-center shadow-card",
                    )}
                  >
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="absolute -top-1 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {step.step}
                  </div>
                  <h3 className={cn("mt-5 text-lg font-semibold", tc.heading)}>
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
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-accent/30 via-accent/20 to-transparent" />
          <div className="space-y-8">
            {workflowSteps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? ClipboardList;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex gap-6 pl-14"
                >
                  <div className="absolute left-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {step.step}
                  </div>
                  <div className={cn(tc.card, "flex-1 p-5")}>
                    <div className={cn("mb-3", tc.iconBoxSm)}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className={cn("text-base font-semibold", tc.heading)}>
                      {step.title}
                    </h3>
                    <p className={cn("mt-1.5 text-sm", tc.body)}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
