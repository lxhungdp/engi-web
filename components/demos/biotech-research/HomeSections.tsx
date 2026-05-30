"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { researchAreas } from "@/lib/data/biotech-research/research";
import { biotechServices } from "@/lib/data/biotech-research/services";
import { platformCapabilities } from "@/lib/data/biotech-research/technology";
import { getFeaturedCaseStudies } from "@/lib/data/biotech-research/case-studies";
import { labWorkflow, trustCards } from "@/lib/data/biotech-research/homepage";
import { platformPipeline } from "@/lib/data/biotech-research/site";
import { biotechRoutes } from "@/lib/data/biotech-research/site";
import { ResearchAreaCard } from "./ResearchAreaCard";
import { BiotechServiceCard } from "./BiotechServiceCard";
import { TechnologyPlatformDiagram } from "./TechnologyPlatformDiagram";
import { WorkflowTimeline } from "./WorkflowTimeline";
import { CaseStudyCard } from "./CaseStudyCard";
import { SectionHeading } from "./SectionHeading";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function ResearchAreasSection() {
  return (
    <section className={cn(tc.section)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Research areas focused on high-impact medicine." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((a, i) => (
            <ResearchAreaCard key={a.id} area={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesOverviewSection() {
  return (
    <section className={cn(tc.section, tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="From samples to scientific insight." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {biotechServices.slice(0, 6).map((s, i) => (
            <BiotechServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href={biotechRoutes.services} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TechnologySection() {
  return (
    <section className={cn(tc.section)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technology platform built for modern molecular research." />
        <div className="mt-14">
          <TechnologyPlatformDiagram steps={platformPipeline} />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platformCapabilities.map((cap, i) => {
            const Icon = getDemoIcon(cap.icon);
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={cn(tc.cardSubtle, "p-5")}
              >
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="font-heading mt-3 font-semibold text-foreground">{cap.title}</h3>
                <p className={cn("mt-1 text-sm", tc.body)}>{cap.description}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link href={biotechRoutes.technology} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover">
            Explore technology <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LabWorkflowSection() {
  return (
    <section className={cn(tc.section, tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Clear workflow from biological sample to decision-ready report." />
        <div className="mt-14">
          <WorkflowTimeline steps={labWorkflow} columns={5} />
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesPreviewSection() {
  const studies = getFeaturedCaseStudies();
  return (
    <section className={cn(tc.section)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Scientific programs and research applications." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {studies.map((s, i) => (
            <CaseStudyCard key={s.id} study={s} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href={biotechRoutes.caseStudies} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover">
            View all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className={cn(tc.section, tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Designed for accuracy, traceability, and scientific clarity." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustCards.map((card, i) => {
            const Icon = getDemoIcon(card.icon);
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={cn(tc.card, "p-6")}
              >
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="font-heading mt-3 font-semibold text-foreground">{card.title}</h3>
                <p className={cn("mt-2 text-sm", tc.body)}>{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
