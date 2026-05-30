"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Crosshair,
  HardHat,
  Route,
  ScanEye,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { features } from "@/lib/data/product-launch/aerovolt-x1";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Route,
  Shield,
  Crosshair,
  ScanEye,
  Cloud,
  HardHat,
};

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Capabilities"
            title="Built for technical missions, not casual flights."
            description="Every system on the X1 platform is engineered for precision field operations, not consumer recreation."
          />
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Shield;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={cn(tc.card, tc.cardHover, "group p-6")}
              >
                <div className={cn("mb-4", tc.iconBox)}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={cn("text-lg font-semibold", tc.heading)}>
                  {feature.title}
                </h3>
                <p className={cn("mt-2 text-sm leading-relaxed", tc.body)}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
