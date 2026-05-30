import type { Metadata } from "next";
import { PageHero } from "@/components/demos/biotech-research/SectionHeading";
import { ResourceCard } from "@/components/demos/biotech-research/ResourceCard";
import { BiotechCTA } from "@/components/demos/biotech-research/BiotechCTA";
import { biotechResources } from "@/lib/data/biotech-research/resources";

export const metadata: Metadata = {
  title: "Resources — HelixNova Biosciences",
  description: "Scientific resources, whitepapers, guides, and technical documentation for molecular research.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Scientific resources and documentation."
        description="Whitepapers, guides, checklists, and technical notes for genomic research and molecular diagnostics workflows."
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {biotechResources.map((r, i) => (
              <ResourceCard key={r.id} resource={r} index={i} />
            ))}
          </div>
        </div>
      </section>

      <BiotechCTA />
    </>
  );
}
