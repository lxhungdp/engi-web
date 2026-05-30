"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/demos/industrial-product/SectionHeading";
import { ProductCard } from "@/components/demos/industrial-product/ProductCard";
import { ProductComparisonTable } from "@/components/demos/industrial-product/ProductComparisonTable";
import { SectionHeading } from "@/components/demos/industrial-product/SectionHeading";
import { FeaturedDroneBanner } from "@/components/demos/industrial-product/FeaturedDroneBanner";
import { DroneModelCard } from "@/components/demos/industrial-product/DroneModelCard";
import { DroneComparisonTable } from "@/components/demos/industrial-product/DroneComparisonTable";
import {
  comparisonRows,
  droneModels,
  getProductsByCategory,
  isDroneSeriesCategory,
} from "@/lib/data/industrial-product";
import { productCategories } from "@/lib/data/industrial-product/site";
import { industrialRoutes } from "@/lib/data/industrial-product/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export default function ProductsCatalogPage() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = getProductsByCategory(filter);
  const showDroneModels = filter === "All" || isDroneSeriesCategory(filter);

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Explore the Vertex product ecosystem."
        description="Hardware and intelligent systems for inspection, mapping, monitoring, and automation."
      />

      <FeaturedDroneBanner />

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {productCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition-all",
                  filter === cat
                    ? "border-accent/40 bg-accent/10 font-medium text-accent"
                    : "border-border text-foreground-muted hover:border-accent/20",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {isDroneSeriesCategory(filter) ? (
              <motion.div
                key="drone-series"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="grid gap-6 lg:grid-cols-3"
              >
                {droneModels.map((model, i) => (
                  <DroneModelCard key={model.slug} model={model} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
              >
                {showDroneModels && filter === "All" && (
                  <div className="mb-10">
                    <h3 className="font-heading mb-6 text-lg font-semibold text-foreground">
                      Vertex Aero Series
                    </h3>
                    <div className="grid gap-6 lg:grid-cols-3">
                      {droneModels.map((model, i) => (
                        <DroneModelCard key={model.slug} model={model} index={i} variant="compact" />
                      ))}
                    </div>
                    <div className="my-10 border-t border-border" />
                    <h3 className="font-heading mb-6 text-lg font-semibold text-foreground">
                      Other product lines
                    </h3>
                  </div>
                )}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {(filter === "All"
                    ? filtered.filter((p) => !p.isDroneSeries)
                    : filtered
                  ).map((p, i) => (
                    <ProductCard key={p.slug} product={p} index={i} variant="catalog" />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className={cn("py-16 lg:py-20", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Compare Aero drone models" />
          <div className="mt-10">
            <DroneComparisonTable />
          </div>
        </div>
      </section>

      <section className={cn("py-16 lg:py-20")}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Compare all product lines" />
          <div className="mt-10">
            <ProductComparisonTable rows={comparisonRows} />
          </div>
        </div>
      </section>

      <section className="py-16 lg:pb-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className={cn("text-lg font-medium text-foreground", tc.heading)}>
            Not sure which product fits your workflow?
          </p>
          <Link href={industrialRoutes.contact} className={cn(tc.btnPrimary, "mt-6 inline-flex")}>
            Talk to an Engineer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
