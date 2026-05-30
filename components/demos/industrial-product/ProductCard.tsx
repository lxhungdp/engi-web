"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { IndustrialProduct } from "@/lib/types/industrial-product";
import { industrialRoutes } from "@/lib/data/industrial-product/site";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: IndustrialProduct;
  index?: number;
  variant?: "catalog" | "overview" | "related";
}

export function ProductCard({
  product,
  index = 0,
  variant = "overview",
}: ProductCardProps) {
  const Icon = getDemoIcon(product.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={cn(tc.card, tc.cardHover, "group flex flex-col overflow-hidden")}
    >
      <div className="border-b border-border bg-background-muted/40 p-6">
        <div className="flex items-start justify-between gap-3">
          <div className={tc.iconBox}>
            <Icon className="h-5 w-5" />
          </div>
          <span className="rounded-full border border-border bg-background-muted px-2.5 py-0.5 text-xs text-foreground-muted">
            {product.category}
          </span>
        </div>
        <h3 className="font-heading mt-4 text-lg font-semibold text-foreground">
          {product.name}
        </h3>
        <p className={cn("mt-2 text-sm leading-relaxed", tc.body)}>
          {variant === "related" ? product.tagline : product.shortDescription}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {variant === "catalog" && (
          <>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {product.keySpecs.map((s) => (
                <span
                  key={s}
                  className="rounded border border-accent/20 bg-accent/5 px-2 py-0.5 text-xs text-accent"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="text-xs font-medium text-foreground-muted">Applications</p>
            <p className="mt-1 text-xs text-foreground-secondary">
              {product.applications.slice(0, 3).join(" · ")}
            </p>
          </>
        )}

        {variant === "overview" && (
          <ul className="space-y-1.5">
            {product.features.slice(0, 4).map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-foreground-secondary">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={industrialRoutes.products}
          className={cn(
            "mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover",
            variant === "related" && "mt-4",
          )}
        >
          {variant === "catalog" ? "View Details" : "View Product"}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
