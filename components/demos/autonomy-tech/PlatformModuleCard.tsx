"use client";

import { motion } from "framer-motion";
import type { PlatformModule } from "@/lib/types/autonomy-tech";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function PlatformModuleCard({
  module,
  index = 0,
}: {
  module: PlatformModule;
  index?: number;
}) {
  const Icon = getDemoIcon(module.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={cn(tc.card, tc.cardHover, "group p-6")}
    >
      <div className={tc.iconBox}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-heading mt-4 text-lg font-semibold text-foreground">
        {module.name}
      </h3>
      <p className={cn("mt-2 text-sm leading-relaxed", tc.body)}>
        {module.description}
      </p>
      <p className="mt-3 text-xs font-medium text-accent">{module.benefit}</p>
    </motion.div>
  );
}
