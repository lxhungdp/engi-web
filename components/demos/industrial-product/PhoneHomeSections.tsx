"use client";

import { motion } from "framer-motion";
import { phoneFeatures, phoneModels, phoneColors } from "@/lib/data/industrial-product/phone-data";
import { industries } from "@/lib/data/industrial-product/homepage";
import { getDemoIcon } from "@/lib/demo-icons";
import { SectionHeading } from "./SectionHeading";
import { PhoneModelCard } from "./PhoneModelCard";
import { DroneCTA } from "./DroneCTA";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function PhoneModelPreviewSection() {
  return (
    <section id="products" className={cn("py-20 lg:py-28", tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Choose your Vertex Phone." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {phoneModels.map((model, i) => (
            <PhoneModelCard key={model.slug} model={model} index={i} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {phoneColors.map((c) => (
            <div key={c.name} className="flex items-center gap-2 text-sm text-foreground-secondary">
              <span
                className="h-5 w-5 rounded-full ring-1 ring-border"
                style={{ backgroundColor: c.hex }}
              />
              {c.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PhoneFeaturesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Built for how you work and create." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {phoneFeatures.map((feature, i) => {
            const Icon = getDemoIcon(feature.icon);
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={cn(tc.card, "p-6")}
              >
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="font-heading mt-3 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className={cn("mt-1.5 text-sm", tc.body)}>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className={cn("py-20 lg:py-28", tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Made for every kind of user." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = getDemoIcon(ind.icon);
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={cn(tc.cardSubtle, "flex items-center gap-3 p-4")}
              >
                <Icon className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-foreground">{ind.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { DroneCTA as IndustrialCTA };
