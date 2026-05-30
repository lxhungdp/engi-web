import type { Metadata } from "next";
import { PageHero } from "@/components/demos/construction-engineering/SectionHeading";
import { SectorCard } from "@/components/demos/construction-engineering/SectorCard";
import { ConstructionCTA } from "@/components/demos/construction-engineering/ConstructionCTA";
import { constructionSectors } from "@/lib/data/construction-engineering/sectors";

export const metadata: Metadata = {
  title: "Sectors — TerraBuild Engineering",
  description:
    "Industries served by TerraBuild Engineering including transportation, bridges, urban development, industrial, energy, water, and smart construction.",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Industries we serve across infrastructure and construction."
        description="TerraBuild supports public agencies, developers, contractors, and industrial clients across seven core infrastructure sectors."
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {constructionSectors.map((s, i) => (
              <SectorCard key={s.id} sector={s} index={i} detailed />
            ))}
          </div>
        </div>
      </section>

      <ConstructionCTA />
    </>
  );
}
