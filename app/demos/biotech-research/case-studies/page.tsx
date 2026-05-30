import type { Metadata } from "next";
import { PageHero } from "@/components/demos/biotech-research/SectionHeading";
import { CaseStudyCard } from "@/components/demos/biotech-research/CaseStudyCard";
import { BiotechCTA } from "@/components/demos/biotech-research/BiotechCTA";
import { caseStudies } from "@/lib/data/biotech-research/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — HelixNova Biosciences",
  description: "Scientific programs and research applications across oncology, rare disease, infectious disease, and pharmacogenomics.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Scientific programs and research applications."
        description="Real-world research scenarios demonstrating HelixNova molecular analysis, interpretation, and reporting workflows."
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {caseStudies.map((s, i) => (
              <CaseStudyCard key={s.id} study={s} index={i} detailed />
            ))}
          </div>
        </div>
      </section>

      <BiotechCTA />
    </>
  );
}
