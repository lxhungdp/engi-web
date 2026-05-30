"use client";

import { motion } from "framer-motion";
import type { IndustrialProduct } from "@/lib/types/industrial-product";
import { products } from "@/lib/data/industrial-product/products";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

interface ProductComparisonTableProps {
  rows: {
    productSlug: string;
    bestFor: string;
    dataCaptured: string;
    mobilityType: string;
    output: string;
    typicalUsers: string;
  }[];
  compact?: boolean;
}

export function ProductComparisonTable({ rows, compact = false }: ProductComparisonTableProps) {
  const headers = compact
    ? ["Product", "Best for", "Mobility", "Output"]
    : ["Product", "Best for", "Data captured", "Mobility", "Output", "Typical users"];

  return (
    <div className={cn("overflow-x-auto rounded-2xl border border-border", tc.card)}>
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className={tc.tableHeader}>
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-foreground-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const product = products.find((p) => p.slug === row.productSlug);
            return (
              <tr key={row.productSlug} className={tc.tableRow}>
                <td className="px-4 py-3 font-medium text-foreground">
                  {product?.name ?? row.productSlug}
                </td>
                <td className="px-4 py-3 text-foreground-secondary">{row.bestFor}</td>
                {!compact && (
                  <td className="px-4 py-3 text-foreground-secondary">{row.dataCaptured}</td>
                )}
                <td className="px-4 py-3 text-foreground-secondary">{row.mobilityType}</td>
                <td className="px-4 py-3 text-accent">{row.output}</td>
                {!compact && (
                  <td className="px-4 py-3 text-foreground-secondary">{row.typicalUsers}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
