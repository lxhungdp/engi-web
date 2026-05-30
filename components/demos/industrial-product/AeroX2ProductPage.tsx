"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  aeroX2Applications,
  aeroX2Highlights,
  aeroX2Info,
  aeroX2Specs,
  aeroX2Workflow,
  droneOutputs,
  dronePayloads,
} from "@/lib/data/industrial-product/drone-data";
import { industrialRoutes } from "@/lib/data/industrial-product/site";
import { getDemoIcon } from "@/lib/demo-icons";
import { DroneApplicationCard } from "./DroneApplicationCard";
import { DroneComparisonTable } from "./DroneComparisonTable";
import { DroneCTA } from "./DroneCTA";
import { DronePayloadCard } from "./DronePayloadCard";
import { DroneProductShowcase } from "./DroneProductShowcase";
import { DroneWorkflow } from "./DroneWorkflow";
import { ProductSpecTable } from "./ProductSpecTable";
import { SectionHeading } from "./SectionHeading";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function AeroX2ProductPage() {
  return (
    <>
      <section className={cn(tc.pageHero, "overflow-hidden")}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-[500px] w-[600px] rounded-full hero-glow-1 blur-[100px]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
              Vertex Aero Series · Flagship
            </span>
            <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              {aeroX2Info.name}
            </h1>
            <p className="font-heading mt-3 text-xl text-accent">{aeroX2Info.tagline}</p>
            <p className={cn("mt-4 text-base leading-relaxed", tc.body)}>
              {aeroX2Info.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={industrialRoutes.contact} className={tc.btnPrimary}>
                Request Drone Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={industrialRoutes.products} className={tc.btnSecondary}>
                Compare Models
              </Link>
              <a href="#specifications" className={cn(tc.btnSecondary, "text-center")}>
                View Technical Specs
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <DroneProductShowcase variant="product" />
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            title="Designed for demanding technical missions."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {aeroX2Highlights.map((h, i) => {
              const Icon = getDemoIcon(h.icon);
              return (
                <motion.div
                  key={h.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={cn(tc.card, tc.cardHover, "p-8")}
                >
                  <div className={tc.iconBox}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading mt-5 text-xl font-semibold text-foreground">
                    {h.title}
                  </h3>
                  <p className={cn("mt-3 text-base leading-relaxed", tc.body)}>
                    {h.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={cn("py-16 lg:py-20", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title="Compare Vertex Aero models." />
          <p className={cn("mt-2 max-w-2xl", tc.body)}>
            Aero X2 is our recommended model for balanced professional inspection, mapping, and thermal missions.
          </p>
          <div className="mt-10">
            <DroneComparisonTable highlightSlug="aero-x2" />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            title="One drone platform. Multiple industrial applications."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aeroX2Applications.map((app, i) => (
              <DroneApplicationCard
                key={app.id}
                application={app}
                index={i}
                variant="detail"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="specifications" className={cn("py-16 lg:py-20", tc.sectionAlt)}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title="Technical specifications" />
          <div className="mt-10">
            <ProductSpecTable specs={aeroX2Specs} />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title="Configure the drone for your mission." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dronePayloads.map((p, i) => (
              <DronePayloadCard key={p.id} payload={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-16 lg:py-20", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            title="Turn flight data into technical deliverables."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {droneOutputs.map((output, i) => {
              const Icon = getDemoIcon(output.icon);
              return (
                <motion.div
                  key={output.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={cn(tc.card, "p-5")}
                >
                  <Icon className="h-5 w-5 text-accent" />
                  <h3 className="font-heading mt-3 font-semibold text-foreground">
                    {output.title}
                  </h3>
                  <p className={cn("mt-2 text-sm", tc.body)}>{output.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title="Drone inspection workflow." />
          <div className="mt-12">
            <DroneWorkflow steps={aeroX2Workflow} columns={5} />
          </div>
        </div>
      </section>

      <DroneCTA />
    </>
  );
}
