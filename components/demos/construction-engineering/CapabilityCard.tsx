"use client";

import { motion } from "framer-motion";
import type { Capability, PillarCard } from "@/lib/types/construction-engineering";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function CapabilityCard({ capability, index = 0 }: { capability: Capability; index?: number }) {
  const Icon = getDemoIcon(capability.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className={cn(tc.cardSubtle, "flex items-center gap-3 p-4")}
    >
      <Icon className="h-5 w-5 shrink-0 text-accent" />
      <span className="text-sm font-medium text-foreground">{capability.title}</span>
    </motion.div>
  );
}

export function PillarCardView({ pillar, index = 0 }: { pillar: PillarCard; index?: number }) {
  const Icon = getDemoIcon(pillar.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={cn(tc.card, tc.cardHover, "p-8")}
    >
      <div className={tc.iconBox}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-heading mt-5 text-xl font-semibold text-foreground">{pillar.title}</h3>
      <p className={cn("mt-3 text-sm leading-relaxed", tc.body)}>{pillar.description}</p>
    </motion.div>
  );
}
