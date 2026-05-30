"use client";

import { motion } from "framer-motion";
import {
  Factory,
  FlaskConical,
  HardHat,
  Search,
  Shield,
  Siren,
  type LucideIcon,
} from "lucide-react";
import { useCases } from "@/lib/data/autonomy-tech/nexabot";
import { autonomyRoutes } from "@/lib/data/autonomy-tech/site";
import { SectionHeading } from "./SectionHeading";
import { SectionLink } from "./PageHero";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Factory,
  Shield,
  HardHat,
  FlaskConical,
  Siren,
};

interface UseCasesSectionProps {
  preview?: boolean;
}

export function UseCasesSection({ preview = false }: UseCasesSectionProps) {
  const items = preview ? useCases.slice(0, 3) : useCases;

  return (
    <section id="solutions" className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 section-tint" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Solutions"
            title="Designed for real-world technical operations."
          />
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((uc, i) => {
            const Icon = iconMap[uc.icon] ?? Search;
            return (
              <motion.div
                key={uc.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className={cn(tc.card, tc.cardHover, "group p-6")}
              >
                <div className={tc.iconBox}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading mt-4 text-base font-semibold text-foreground">
                  {uc.title}
                </h3>
                <p className={cn("mt-2 text-sm leading-relaxed", tc.body)}>
                  {uc.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {preview && (
          <SectionLink
            href={autonomyRoutes.useCases}
            label="View all use cases"
          />
        )}
      </div>
    </section>
  );
}
