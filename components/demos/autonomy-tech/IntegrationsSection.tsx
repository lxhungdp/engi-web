"use client";

import { motion } from "framer-motion";
import {
  Box,
  Cloud,
  Database,
  LayoutDashboard,
  Map,
  Webhook,
  type LucideIcon,
} from "lucide-react";
import { integrations } from "@/lib/data/autonomy-tech/nexabot";
import { SectionHeading } from "./SectionHeading";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Box,
  Map,
  Database,
  Cloud,
  LayoutDashboard,
  Webhook,
};

export function IntegrationsSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Integrations"
            title="Connect robotics data with your existing systems."
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {integrations.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Box;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className={cn(
                  tc.cardSubtle,
                  "flex flex-col items-center gap-3 p-5 text-center transition-all hover:border-accent/25 hover:shadow-card",
                )}
              >
                <Icon className="h-6 w-6 text-accent" />
                <span className="text-xs font-medium text-foreground-secondary">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
