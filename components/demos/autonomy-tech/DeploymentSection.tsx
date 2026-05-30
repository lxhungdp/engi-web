"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/data/autonomy-tech/pricing-data";
import { autonomyRoutes } from "@/lib/data/autonomy-tech/site";
import { SectionHeading } from "./SectionHeading";
import { SectionLink } from "./PageHero";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

interface DeploymentSectionProps {
  preview?: boolean;
}

export function DeploymentSection({ preview = false }: DeploymentSectionProps) {
  return (
    <section id="pricing" className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 section-tint" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Deployment"
            title="Choose the deployment model for your team."
          />
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8 transition-all",
                plan.highlight
                  ? "border-accent/40 bg-gradient-to-b from-accent/10 to-card shadow-card-hover"
                  : cn(tc.card, tc.cardHover),
              )}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-accent-foreground">
                  Most Popular
                </span>
              )}

              <h3 className="font-heading text-xl font-bold text-foreground">
                {plan.name}
              </h3>
              <p className={cn("mt-2 flex-1 text-sm", tc.body)}>
                {plan.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {plan.features.slice(0, preview ? 4 : undefined).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground-secondary"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={preview ? autonomyRoutes.pricing : "#cta"}
                className={cn(
                  "mt-8 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-all",
                  plan.highlight ? tc.btnPrimary : tc.btnSecondary,
                )}
              >
                Talk to Sales
              </a>
            </motion.div>
          ))}
        </div>

        {preview && (
          <SectionLink
            href={autonomyRoutes.pricing}
            label="Compare plans and FAQ"
          />
        )}
      </div>
    </section>
  );
}
