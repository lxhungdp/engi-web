import type { Metadata } from "next";
import { PageHero } from "@/components/demos/autonomy-tech/PageHero";
import { ArchitectureLayerCard } from "@/components/demos/autonomy-tech/ArchitectureLayerCard";
import { DataFlowDiagram } from "@/components/demos/autonomy-tech/DataFlowDiagram";
import { SectionHeading } from "@/components/demos/autonomy-tech/SectionHeading";
import {
  architectureHero,
  architectureIntegrations,
  architectureLayers,
  dataFlowSteps,
  securityFeatures,
} from "@/lib/data/autonomy-tech/architecture-data";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Architecture — NexaBot AI",
  description: architectureHero.description,
};

export default function ArchitecturePage() {
  return (
    <>
      <PageHero
        eyebrow="Architecture"
        title={architectureHero.title}
        description={architectureHero.description}
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Architecture layers" />
          <div className="mt-10 space-y-5">
            {architectureLayers.map((layer, i) => (
              <ArchitectureLayerCard key={layer.id} layer={layer} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-16", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Data flow" />
          <div className="mt-10">
            <DataFlowDiagram steps={dataFlowSteps} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Security and reliability" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((f) => {
              const Icon = getDemoIcon(f.icon);
              return (
                <div key={f.id} className={cn(tc.card, "p-6")}>
                  <Icon className="h-6 w-6 text-accent" />
                  <h3 className="font-heading mt-3 font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className={cn("mt-2 text-sm", tc.body)}>{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={cn("py-16 lg:pb-20", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Integrations" />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {architectureIntegrations.map((item) => {
              const Icon = getDemoIcon(item.icon);
              return (
                <div
                  key={item.id}
                  className={cn(
                    tc.cardSubtle,
                    "flex flex-col items-center gap-2 p-5 text-center",
                  )}
                >
                  <Icon className="h-6 w-6 text-accent" />
                  <span className="text-xs font-medium text-foreground-secondary">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
