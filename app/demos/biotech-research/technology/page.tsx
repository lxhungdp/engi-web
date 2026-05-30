import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/demos/biotech-research/SectionHeading";
import { TechnologyPlatformDiagram } from "@/components/demos/biotech-research/TechnologyPlatformDiagram";
import { BiotechCTA } from "@/components/demos/biotech-research/BiotechCTA";
import {
  dataVisualizations,
  integrations,
  securityQuality,
  technologyPlatforms,
} from "@/lib/data/biotech-research/technology";
import { technologyArchitecture } from "@/lib/data/biotech-research/site";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Technology — HelixNova Biosciences",
  description: "Scientific data infrastructure for molecular insight, NGS analysis, and research collaboration.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Scientific data infrastructure for molecular insight."
        description="A platform architecture connecting sample metadata, NGS data, bioinformatics pipelines, and structured report output."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TechnologyPlatformDiagram
            steps={technologyArchitecture}
            title="Platform architecture"
          />
        </div>
      </section>

      <section className={cn("py-16", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Technology capabilities" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologyPlatforms.map((cap) => {
              const Icon = getDemoIcon(cap.icon);
              return (
                <div key={cap.id} className={cn(tc.card, "p-5")}>
                  <Icon className="h-5 w-5 text-accent" />
                  <h3 className="font-heading mt-3 font-semibold text-foreground">{cap.title}</h3>
                  <p className={cn("mt-2 text-sm", tc.body)}>{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Data visualization" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dataVisualizations.map((viz) => (
              <div
                key={viz.id}
                className={cn(
                  "relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-background-muted",
                )}
              >
                <div className="absolute inset-0 grid-bg-sm opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-border bg-card/90 p-3 backdrop-blur-sm">
                  <p className="text-xs font-semibold text-foreground">{viz.title}</p>
                  <p className={cn("mt-1 text-[10px]", tc.body)}>{viz.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-16", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Integrations" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((item) => {
              const Icon = getDemoIcon(item.icon);
              return (
                <div key={item.id} className={cn(tc.cardSubtle, "p-5")}>
                  <Icon className="h-5 w-5 text-accent" />
                  <h3 className="font-heading mt-3 font-semibold text-foreground">{item.title}</h3>
                  <p className={cn("mt-1 text-sm", tc.body)}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Security and quality" />
          <div className="mt-10 space-y-4">
            {securityQuality.map((item) => (
              <div key={item.title} className={cn(tc.card, "p-5")}>
                <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                <p className={cn("mt-2 text-sm", tc.body)}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BiotechCTA />
    </>
  );
}
