"use client";

import { motion } from "framer-motion";
import type { ArchitectureLayer } from "@/lib/types/autonomy-tech";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ArchitectureLayerCard({
  layer,
  index = 0,
}: {
  layer: ArchitectureLayer;
  index?: number;
}) {
  const Icon = getDemoIcon(layer.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={cn(tc.card, "p-6")}
    >
      <div className="flex items-center gap-3">
        <div className={tc.iconBoxSm}>
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {layer.name}
        </h3>
      </div>
      <p className={cn("mt-3 text-sm leading-relaxed", tc.body)}>
        {layer.description}
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium text-foreground-muted">Example data</p>
          <ul className="mt-1 space-y-0.5">
            {layer.exampleData.map((d) => (
              <li key={d} className="text-xs text-foreground-secondary">
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium text-foreground-muted">Technologies</p>
          <div className="mt-1 flex flex-wrap gap-1">
            {layer.technologies.map((t) => (
              <span
                key={t}
                className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs">
        <span className="text-foreground-muted">Output: </span>
        <span className="font-medium text-foreground">{layer.output}</span>
      </p>
    </motion.div>
  );
}
