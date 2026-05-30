"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import type { Resource } from "@/lib/types/autonomy-tech";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ResourceCard({
  resource,
  index = 0,
}: {
  resource: Resource;
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
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-xs font-medium text-accent">
          {resource.type}
        </span>
        <span className="text-xs text-foreground-muted">{resource.readTime}</span>
      </div>
      <div className={cn(tc.iconBox, "mt-4")}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-heading mt-4 text-base font-semibold text-foreground">
        {resource.title}
      </h3>
      <p className={cn("mt-2 flex-1 text-sm leading-relaxed", tc.body)}>
        {resource.description}
      </p>
      <button
        type="button"
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        <Download className="h-4 w-4" />
        Read More
        <span className="text-xs text-foreground-muted">(demo)</span>
      </button>
    </motion.div>
  );
}
