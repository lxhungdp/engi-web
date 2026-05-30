import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/demos/biotech-research/SectionHeading";
import { ResearchAreaCard } from "@/components/demos/biotech-research/ResearchAreaCard";
import { WorkflowTimeline } from "@/components/demos/biotech-research/WorkflowTimeline";
import { BiotechCTA } from "@/components/demos/biotech-research/BiotechCTA";
import {
  featuredResearchProgram,
  researchAreas,
  researchWorkflow,
} from "@/lib/data/biotech-research/research";
import { biotechRoutes } from "@/lib/data/biotech-research/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Research — HelixNova Biosciences",
  description:
    "Research programs in oncology genomics, rare disease, infectious disease, pharmacogenomics, and biomarker discovery.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Research programs built around genomic and molecular insight."
        description="HelixNova supports research teams working across oncology, rare disease, infectious disease, pharmacogenomics, and biomarker discovery."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {researchAreas.map((a, i) => (
              <ResearchAreaCard key={a.id} area={a} index={i} detailed />
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-16", tc.sectionAlt)}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title={featuredResearchProgram.title} />
          <div className="mt-10 space-y-6">
            <div>
              <h3 className="font-heading font-semibold text-foreground">Purpose</h3>
              <p className={cn("mt-2 text-sm", tc.body)}>{featuredResearchProgram.purpose}</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">Molecular markers</h3>
              <p className="mt-2 text-sm text-foreground-secondary">
                {featuredResearchProgram.molecularMarkers.join(" · ")}
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">Analysis approach</h3>
              <p className={cn("mt-2 text-sm", tc.body)}>{featuredResearchProgram.analysisApproach}</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">Clinical research relevance</h3>
              <p className={cn("mt-2 text-sm", tc.body)}>{featuredResearchProgram.clinicalRelevance}</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">Example deliverables</h3>
              <ul className="mt-2 space-y-1">
                {featuredResearchProgram.deliverables.map((d) => (
                  <li key={d} className="text-sm text-accent">· {d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Research workflow" />
          <div className="mt-14">
            <WorkflowTimeline steps={researchWorkflow} columns={5} />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className={cn("text-lg font-medium text-foreground", tc.heading)}>
            Discuss a research collaboration
          </p>
          <Link href={biotechRoutes.contact} className={cn(tc.btnPrimary, "mt-6 inline-flex")}>
            Contact HelixNova
          </Link>
        </div>
      </section>
    </>
  );
}
