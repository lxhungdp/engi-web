"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CompanyProduct } from "@/lib/types/company";
import { companyRoutes } from "@/lib/data/company/site";
import { ProductVisualPlaceholder } from "@/components/company/DroneVisual";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: CompanyProduct }) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden",
        tc.card,
        tc.cardHover,
        product.highlighted && "ring-1 ring-accent/30",
      )}
    >
      <ProductVisualPlaceholder label={product.name} image={product.image} />
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium uppercase tracking-wide text-accent">
          {product.category}
        </span>
        <h3 className={cn("font-heading mt-2 text-lg font-semibold", tc.heading)}>
          {product.name}
        </h3>
        <p className={cn("mt-2 flex-1 text-sm", tc.body)}>{product.description}</p>
        <Link
          href={companyRoutes.productDetail(product.slug)}
          className={cn("mt-5 inline-flex items-center gap-2 text-sm", tc.linkAccent)}
        >
          View more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
