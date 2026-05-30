"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ResearchArea } from "@/lib/types/biotech-research";
import { biotechRoutes } from "@/lib/data/biotech-research/site";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ResearchAreaCard({
  area,
  index = 0,
  detailed = false,
}: {
  area: ResearchArea;
  index?: number;
  detailed?: boolean;
}) {
  const Icon = getDemoIcon(area.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={cn(tc.card, tc.cardHover, "flex flex-col p-6")}
    >
      <div className={tc.iconBox}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-heading mt-4 text-lg font-semibold text-foreground">{area.title}</h3>
      <p className={cn("mt-2 flex-1 text-sm leading-relaxed", tc.body)}>
        {detailed ? area.longDescription : area.shortDescription}
      </p>

      {detailed ? (
        <>
          <p className="mt-4 text-xs font-medium text-foreground-muted">Key methods</p>
          <p className="mt-1 text-xs text-foreground-secondary">{area.keyMethods.join(" · ")}</p>
          <p className="mt-3 text-xs font-medium text-foreground-muted">Data types</p>
          <p className="mt-1 text-xs text-foreground-secondary">{area.dataTypes.join(" · ")}</p>
          <p className="mt-3 text-xs font-medium text-foreground-muted">Example outputs</p>
          <ul className="mt-1 space-y-1">
            {area.exampleOutputs.map((o) => (
              <li key={o} className="text-xs text-accent">· {o}</li>
            ))}
          </ul>
        </>
      ) : (
        <p className="mt-3 text-xs text-foreground-secondary">{area.keyMethods.slice(0, 3).join(" · ")}</p>
      )}

      <Link
        href={biotechRoutes.research}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
      >
        {detailed ? "All research areas" : "Learn more"}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
