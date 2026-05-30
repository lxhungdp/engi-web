"use client";

import { motion } from "framer-motion";
import { Map, Search, Siren, Check, type LucideIcon } from "lucide-react";
import { productModels } from "@/lib/data/product-launch/aerovolt-x1";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Map,
  Search,
  Siren,
};

export function ProductModelsSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Configurations"
            title="Choose the X1 configuration for your mission."
            description="Three purpose-built configurations optimized for different field operation requirements."
          />
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {productModels.map((model, i) => {
            const Icon = iconMap[model.icon] ?? Map;
            return (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-8 transition-all",
                  model.highlight
                    ? "border-accent/40 bg-gradient-to-b from-accent/10 to-background-elevated shadow-card-hover"
                    : cn(tc.card, tc.cardHover),
                )}
              >
                {model.highlight && (
                  <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-accent-foreground">
                    Most Popular
                  </span>
                )}

                <div className={cn("mb-5", tc.iconBox)}>
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className={cn("text-xl font-bold", tc.heading)}>{model.name}</h3>
                <p className={cn("mt-2 flex-1 text-sm", tc.body)}>
                  {model.description}
                </p>

                <div className="mt-5 flex items-start gap-2 rounded-lg border border-border bg-background-muted px-4 py-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-foreground-muted">Output</p>
                    <p className="text-sm font-medium text-foreground-secondary">
                      {model.output}
                    </p>
                  </div>
                </div>

                <a
                  href="#cta"
                  className={cn(
                    "mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-all",
                    model.highlight ? tc.btnPrimary : tc.btnSecondary,
                  )}
                >
                  Request Quote
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
