"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { NexaBotDeploymentPlan } from "@/lib/types/autonomy-tech";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function PricingCard({
  plan,
  index = 0,
}: {
  plan: NexaBotDeploymentPlan;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "relative flex flex-col rounded-2xl border p-8",
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
      <h3 className="font-heading text-xl font-bold text-foreground">{plan.name}</h3>
      <p className={cn("mt-2 flex-1 text-sm", tc.body)}>{plan.description}</p>
      <ul className="mt-6 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-foreground-secondary">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {f}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={cn(
          "mt-8 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-all",
          plan.highlight ? tc.btnPrimary : tc.btnSecondary,
        )}
      >
        Talk to Sales
      </button>
    </motion.div>
  );
}
