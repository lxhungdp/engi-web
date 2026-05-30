"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data/industrial-product/products";
import { industrialRoutes } from "@/lib/data/industrial-product/site";
import {
  comparisonRows,
  homepageWorkflow,
  industries,
  useCasePreviews,
} from "@/lib/data/industrial-product/homepage";
import { getDemoIcon } from "@/lib/demo-icons";
import { ProductCard } from "./ProductCard";
import { ProductComparisonTable } from "./ProductComparisonTable";
import { SectionHeading } from "./SectionHeading";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ProductOverviewSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products"
          title="One product ecosystem for field intelligence."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href={industrialRoutes.products} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover">
            View full product catalog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className={cn("py-20 lg:py-28", tc.sectionAlt)}>
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

export function UseCasesPreviewSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="From inspection to digital twins." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCasePreviews.map((uc, i) => {
            const Icon = getDemoIcon(uc.icon);
            return (
              <motion.div key={uc.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className={cn(tc.card, tc.cardHover, "p-6")}>
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="font-heading mt-3 font-semibold text-foreground">{uc.title}</h3>
                <p className={cn("mt-2 text-sm", tc.body)}>{uc.description}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link href={industrialRoutes.products} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover">
            View products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ComparisonPreviewSection() {
  return (
    <section className={cn("py-20 lg:py-28", tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Compare Vertex product lines." description="Find the right hardware for your field workflow." />
        <div className="mt-10">
          <ProductComparisonTable rows={comparisonRows} compact />
        </div>
      </div>
    </section>
  );
}

export function WorkflowSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Capture, process, and deliver engineering-ready data." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homepageWorkflow.map((step, i) => {
            const Icon = getDemoIcon(step.icon);
            return (
              <motion.div key={step.step} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <p className="mt-2 font-heading text-sm font-bold text-accent">{step.step}</p>
                <h3 className="font-heading mt-1 font-semibold text-foreground">{step.title}</h3>
                <p className={cn("mt-2 text-sm", tc.body)}>{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function IndustrialCTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className={cn("rounded-3xl px-8 py-14", tc.ctaPanel)}>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Need a technical product website like this?
          </h2>
          <p className={cn("mx-auto mt-4 max-w-xl", tc.body)}>
            This demo shows how EngiWeb can present complex industrial products with
            clear structure, strong visuals, technical specifications, and
            product-focused storytelling.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className={tc.btnPrimary}>Back to EngiWeb</Link>
            <Link href="/contact" className={tc.btnSecondary}>Request a Website</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
