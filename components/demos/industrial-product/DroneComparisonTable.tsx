"use client";

import { motion } from "framer-motion";
import {
  droneComparisonRows,
  droneModels,
} from "@/lib/data/industrial-product/drone-data";
import type { DroneModel } from "@/lib/types/industrial-product";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

function getCellValue(model: DroneModel, key: string): string {
  if (key === "bestFor") return model.bestFor.slice(0, 2).join(", ");
  if (key === "lidarReady") return model.lidarReady ? "Yes" : "No";
  const value = model[key as keyof DroneModel];
  return typeof value === "string" ? value : String(value);
}

interface DroneComparisonTableProps {
  highlightSlug?: string;
  compact?: boolean;
}

export function DroneComparisonTable({
  highlightSlug = "aero-x2",
  compact = false,
}: DroneComparisonTableProps) {
  const rows = compact
    ? droneComparisonRows.filter((r) =>
        ["bestFor", "flightTime", "camera", "positioning", "output"].includes(r.key),
      )
    : droneComparisonRows;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("overflow-x-auto rounded-2xl border border-border", tc.card)}
    >
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr className={tc.tableHeader}>
            <th className="sticky left-0 z-10 bg-background-muted px-4 py-3 text-xs font-medium uppercase tracking-wider text-foreground-muted">
              Spec
            </th>
            {droneModels.map((model) => (
              <th
                key={model.slug}
                className={cn(
                  "min-w-[160px] px-4 py-3 text-xs font-medium uppercase tracking-wider",
                  model.slug === highlightSlug
                    ? "bg-accent/10 text-accent"
                    : "text-foreground-muted",
                )}
              >
                <span className="block font-heading text-sm normal-case text-foreground">
                  {model.name.replace("Vertex ", "")}
                </span>
                {model.badge && (
                  <span className="mt-1 inline-block rounded-full bg-accent/15 px-2 py-0.5 text-[10px] normal-case text-accent">
                    {model.badge}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className={tc.tableRow}>
              <td className="sticky left-0 z-10 bg-card px-4 py-3 font-medium text-foreground-secondary">
                {row.label}
              </td>
              {droneModels.map((model) => (
                <td
                  key={model.slug}
                  className={cn(
                    "px-4 py-3 text-foreground-secondary",
                    model.slug === highlightSlug && "bg-accent/5 text-foreground",
                    row.key === "output" && "text-accent",
                  )}
                >
                  {getCellValue(model, row.key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
