"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data/industrial-product/products";
import { droneModels } from "@/lib/data/industrial-product/drone-data";
import { industrialRoutes } from "@/lib/data/industrial-product/site";
import {
  comparisonRows,
  industries,
} from "@/lib/data/industrial-product/homepage";
import { getDemoIcon } from "@/lib/demo-icons";
import { ProductCard } from "./ProductCard";
import { ProductComparisonTable } from "./ProductComparisonTable";
import { SectionHeading } from "./SectionHeading";
import { DroneModelCard } from "./DroneModelCard";
import { DroneApplicationCard } from "./DroneApplicationCard";
import { DroneWorkflow } from "./DroneWorkflow";
import { DroneCTA } from "./DroneCTA";
import { droneApplications, droneWorkflow } from "@/lib/data/industrial-product/drone-data";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ProductEcosystemSection() {
  const droneProduct = products.find((p) => p.isDroneSeries)!;
  const otherProducts = products.filter((p) => !p.isDroneSeries);

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products"
          title="One product ecosystem for field intelligence."
          description="Vertex Aero Series leads our hardware lineup for aerial inspection and mapping."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            tc.card,
            tc.cardHover,
            "relative mt-14 overflow-hidden ring-2 ring-accent/30 lg:col-span-2",
          )}
        >
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
          <div className="grid gap-0 lg:grid-cols-5">
            <div className="border-b border-border p-8 lg:col-span-3 lg:border-b-0 lg:border-r">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                Flagship product line
              </span>
              <h3 className="font-heading mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                {droneProduct.name}
              </h3>
              <p className={cn("mt-3 text-base", tc.body)}>{droneProduct.shortDescription}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {droneProduct.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={industrialRoutes.droneSeries} className={tc.btnPrimary}>
                  Explore Aero X2
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={industrialRoutes.droneComparison} className={tc.btnSecondary}>
                  Compare Models
                </Link>
              </div>
            </div>
            <div className="grid gap-3 p-6 lg:col-span-2">
              {droneModels.map((model) => (
                <div
                  key={model.slug}
                  className={cn(
                    "rounded-xl border border-border bg-background-muted/50 p-4",
                    model.highlighted && "border-accent/30 bg-accent/5",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {model.name.replace("Vertex ", "")}
                    </p>
                    {model.badge && (
                      <span className="text-[10px] font-medium text-accent">{model.badge}</span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-foreground-muted">{model.flightTime}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {otherProducts.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={industrialRoutes.products}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
          >
            View full product catalog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function DroneModelPreviewSection() {
  return (
    <section className={cn("py-20 lg:py-28", tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Choose the right drone for your technical mission." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {droneModels.map((model, i) => (
            <DroneModelCard key={model.slug} model={model} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function DroneApplicationsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Built for real engineering and industrial missions." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {droneApplications.map((app, i) => (
            <DroneApplicationCard key={app.id} application={app} index={i} variant="home" />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={industrialRoutes.droneSeries}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
          >
            Explore the Aero X2 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function DroneWorkflowSection() {
  return (
    <section className={cn("py-20 lg:py-28", tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="From flight mission to engineering-ready data." />
        <div className="mt-14">
          <DroneWorkflow steps={droneWorkflow} />
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Built for technical teams in demanding environments." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const Icon = getDemoIcon(ind.icon);
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={cn(tc.cardSubtle, "flex items-center gap-3 p-4")}
              >
                <Icon className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-foreground">{ind.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ComparisonPreviewSection() {
  return (
    <section className={cn("py-20 lg:py-28", tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Compare Vertex product lines."
          description="Find the right hardware for your field workflow."
        />
        <div className="mt-10">
          <ProductComparisonTable rows={comparisonRows} compact />
        </div>
      </div>
    </section>
  );
}

export { DroneCTA as IndustrialCTA };
