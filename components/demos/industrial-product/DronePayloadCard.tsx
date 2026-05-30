"use client";

import { motion } from "framer-motion";
import type { DronePayload } from "@/lib/types/industrial-product";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function DronePayloadCard({
  payload,
  index = 0,
}: {
  payload: DronePayload;
  index?: number;
}) {
  const Icon = getDemoIcon(payload.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={cn(tc.card, tc.cardHover, "p-5")}
    >
      <div className={tc.iconBoxSm}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-heading mt-4 font-semibold text-foreground">
        {payload.name}
      </h3>
      <p className={cn("mt-2 text-sm", tc.body)}>{payload.purpose}</p>
      <p className="mt-3 text-xs font-medium text-accent">{payload.bestUseCase}</p>
    </motion.div>
  );
}
