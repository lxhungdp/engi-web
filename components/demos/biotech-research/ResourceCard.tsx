"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import type { BiotechResource } from "@/lib/types/biotech-research";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ResourceCard({
  resource,
  index = 0,
}: {
  resource: BiotechResource;
  index?: number;
}) {
  const Icon = getDemoIcon(resource.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={cn(tc.card, tc.cardHover, "flex flex-col p-6")}
    >
      <div className="flex items-start justify-between gap-3">
        <div className={tc.iconBoxSm}>
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded border border-border bg-background-muted px-2 py-0.5 text-xs text-foreground-muted">
          {resource.type}
        </span>
      </div>
      <h3 className="font-heading mt-4 font-semibold text-foreground">{resource.title}</h3>
      <p className={cn("mt-2 flex-1 text-sm", tc.body)}>{resource.description}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-foreground-muted">
        <span>{resource.topic}</span>
        <span>{resource.readTime}</span>
      </div>
      <button
        type="button"
        className={cn(tc.btnSecondary, "mt-6 w-full justify-center text-sm")}
      >
        Download / Read More
        <Download className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
