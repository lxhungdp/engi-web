"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  constructionServices,
} from "@/lib/data/construction-engineering/services";
import {
  deliveryProcess,
  safetyQualitySustainability,
  technicalCapabilities,
} from "@/lib/data/construction-engineering/homepage";
import { homepageSectors } from "@/lib/data/construction-engineering/sectors";
import { getFeaturedProjects } from "@/lib/data/construction-engineering/projects";
import { constructionRoutes } from "@/lib/data/construction-engineering/site";
import { constructionSectors } from "@/lib/data/construction-engineering/sectors";
import { ServiceCard } from "./ServiceCard";
import { ProjectCard } from "./ProjectCard";
import { SectorCard } from "./SectorCard";
import { ProcessTimeline } from "./ProcessTimeline";
import { CapabilityCard, PillarCardView } from "./CapabilityCard";
import { SectionHeading } from "./SectionHeading";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ServicesOverviewSection() {
  const featured = constructionServices.filter((s) => s.featured);
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Integrated engineering and construction services." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={constructionRoutes.services}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjectsSection() {
  const projects = getFeaturedProjects();
  return (
    <section className={cn("py-20 lg:py-28", tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Selected infrastructure and construction projects." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={constructionRoutes.projects}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
          >
            View full portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SectorsOverviewSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Built for the sectors that shape modern infrastructure." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homepageSectors.map((s, i) => {
            const sector = constructionSectors.find((cs) => cs.id === s.id)!;
            return <SectorCard key={s.id} sector={sector} index={i} />;
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={constructionRoutes.sectors}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
          >
            Explore sectors <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function DeliveryProcessSection() {
  return (
    <section className={cn("py-20 lg:py-28", tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="From concept to construction-ready delivery." />
        <div className="mt-14">
          <ProcessTimeline steps={deliveryProcess} />
        </div>
      </div>
    </section>
  );
}

export function CapabilitiesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical capability for complex project environments." />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {technicalCapabilities.map((c, i) => (
            <CapabilityCard key={c.id} capability={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SafetyQualitySection() {
  return (
    <section className={cn("py-20 lg:py-28", tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Built on safety, quality, and long-term value." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {safetyQualitySustainability.map((p, i) => (
            <PillarCardView key={p.id} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
