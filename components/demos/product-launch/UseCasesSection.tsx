"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Eye,
  HardHat,
  Map,
  Siren,
  Zap,
  Check,
  type LucideIcon,
} from "lucide-react";
import { useCases } from "@/lib/data/product-launch/aerovolt-x1";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Map,
  Siren,
  HardHat,
  Zap,
  Eye,
};

export function UseCasesSection() {
  const [activeId, setActiveId] = useState(useCases[0].id);
  const active = useCases.find((uc) => uc.id === activeId)!;
  const ActiveIcon = iconMap[active.icon] ?? Building2;

  return (
    <section id="use-cases" className="relative py-20 lg:py-28">
      <div className="section-tint absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Applications"
            title="One platform. Multiple technical missions."
            description="Select a mission type to see how AeroVolt X1 adapts to your operational requirements."
          />
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:col-span-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {useCases.map((uc) => {
              const Icon = iconMap[uc.icon] ?? Building2;
              const isActive = activeId === uc.id;
              return (
                <button
                  key={uc.id}
                  type="button"
                  onClick={() => setActiveId(uc.id)}
                  className={cn(
                    "flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200",
                    isActive
                      ? "border-accent/40 bg-accent/10 text-foreground shadow-card"
                      : cn(
                          tc.card,
                          "text-foreground-muted hover:border-accent/30 hover:text-foreground",
                        ),
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 shrink-0",
                      isActive ? "text-accent" : "text-foreground-muted",
                    )}
                  />
                  <span className="whitespace-nowrap text-sm font-medium lg:whitespace-normal">
                    {uc.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
                className={cn(tc.card, "bg-background-elevated p-8 shadow-card")}
              >
                <div className="flex items-start gap-4">
                  <div className={tc.iconBoxSm}>
                    <ActiveIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className={cn("text-2xl font-bold", tc.heading)}>
                      {active.title}
                    </h3>
                    <p className={cn("mt-2", tc.body)}>{active.description}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="mb-3 text-xs font-medium tracking-widest text-foreground-muted uppercase">
                    Key applications
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-3">
                    {active.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-foreground-secondary"
                      >
                        <Check className="h-4 w-4 shrink-0 text-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#cta"
                  className="mt-8 inline-flex items-center rounded-lg bg-accent/10 px-4 py-2 text-sm font-medium text-accent ring-1 ring-accent/25 transition-all hover:bg-accent/15"
                >
                  Request demo for {active.title.split(" ")[0]} missions →
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
