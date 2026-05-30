"use client";

import { motion } from "framer-motion";
import type { SustainabilityItem } from "@/lib/types/construction-engineering";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function SustainabilityCard({
  item,
  index = 0,
}: {
  item: SustainabilityItem;
  index?: number;
}) {
  const Icon = getDemoIcon(item.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={cn(tc.card, tc.cardHover, "p-6")}
    >
      <div className={tc.iconBoxSm}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-heading mt-4 font-semibold text-foreground">{item.title}</h3>
      <p className={cn("mt-2 text-sm", tc.body)}>{item.description}</p>
    </motion.div>
  );
}
