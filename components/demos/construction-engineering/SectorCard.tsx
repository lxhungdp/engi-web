"use client";

import { motion } from "framer-motion";
import type { ConstructionSector } from "@/lib/types/construction-engineering";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function SectorCard({
  sector,
  index = 0,
  detailed = false,
}: {
  sector: ConstructionSector;
  index?: number;
  detailed?: boolean;
}) {
  const Icon = getDemoIcon(sector.icon);

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
      <h3 className="font-heading mt-4 font-semibold text-foreground">
        {detailed ? sector.name : sector.shortName}
      </h3>

      {detailed ? (
        <>
          <p className="mt-3 text-xs font-medium text-foreground-muted">Typical projects</p>
          <p className="mt-1 text-sm text-foreground-secondary">
            {sector.typicalProjects.join(" · ")}
          </p>
          <p className="mt-3 text-xs font-medium text-foreground-muted">Main challenges</p>
          <p className="mt-1 text-sm text-foreground-secondary">
            {sector.challenges.join(" · ")}
          </p>
          <p className="mt-4 rounded-lg border border-accent/15 bg-accent/5 px-3 py-2 text-sm text-foreground-secondary">
            <span className="font-medium text-accent">TerraBuild support: </span>
            {sector.support}
          </p>
          <p className="mt-3 text-xs text-foreground-muted">
            {sector.relatedServices.join(" · ")}
          </p>
        </>
      ) : (
        <p className={cn("mt-2 text-sm", tc.body)}>
          {sector.typicalProjects.slice(0, 2).join(" · ")}
        </p>
      )}
    </motion.div>
  );
}
