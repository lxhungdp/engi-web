import type { Metadata } from "next";
import { PageHero } from "@/components/demos/construction-engineering/SectionHeading";
import { SectionHeading } from "@/components/demos/construction-engineering/SectionHeading";
import { SustainabilityCard } from "@/components/demos/construction-engineering/SustainabilityCard";
import { ConstructionCTA } from "@/components/demos/construction-engineering/ConstructionCTA";
import {
  sustainabilityActions,
  sustainabilityPillars,
} from "@/lib/data/construction-engineering/sustainability";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sustainability — TerraBuild Engineering",
  description:
    "TerraBuild Engineering sustainability commitments including durable design, efficient materials, and lifecycle infrastructure value.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Designing infrastructure for long-term value."
        description="Practical sustainability embedded in engineering decisions, construction planning, and digital documentation workflows."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Sustainability pillars" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sustainabilityPillars.map((item, i) => (
              <SustainabilityCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-16", tc.sectionAlt)}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Practical actions" />
          <div className="mt-10 space-y-4">
            {sustainabilityActions.map((action) => (
              <div key={action.id} className={cn(tc.card, "p-5")}>
                <h3 className="font-heading font-semibold text-foreground">{action.title}</h3>
                <p className={cn("mt-2 text-sm", tc.body)}>{action.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConstructionCTA />
    </>
  );
}
