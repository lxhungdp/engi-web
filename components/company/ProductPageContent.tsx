"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductCategory } from "@/lib/types/company";
import { products, productCategories } from "@/lib/data/companyContent";
import { companyRoutes } from "@/lib/data/company/site";
import { ProductCard } from "@/components/company/ProductCard";
import { CTASection } from "@/components/company/CTASection";
import { PageHero } from "@/components/ui/SectionHeading";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ProductPageContent() {
  const [filter, setFilter] = useState<ProductCategory | "All">("All");
  const filtered =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="PRODUCT"
        title="Introducing the products of Argosdyne."
        description="DRONE · STATION · SOFTWARE"
        glow
        className="pt-28"
      />

      <section className="pb-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4 sm:px-6 lg:px-8">
          {(["All", ...productCategories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm uppercase transition-colors",
                filter === cat
                  ? "bg-accent/15 text-accent ring-1 ring-accent/30"
                  : "text-foreground-muted hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className={cn(tc.section, tc.sectionAlt)}>
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <Link href={companyRoutes.contact} className={cn(tc.btnPrimary, "inline-flex gap-2")}>
            Request Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection primaryLabel="Inquiry" />
    </>
  );
}
