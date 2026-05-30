import type { Metadata } from "next";
import { PageHero, PageCTA } from "@/components/demos/autonomy-tech/PageHero";
import { PlatformModuleCard } from "@/components/demos/autonomy-tech/PlatformModuleCard";
import { PlatformInterfacePreview } from "@/components/demos/autonomy-tech/PlatformInterfacePreview";
import { SectionHeading } from "@/components/demos/autonomy-tech/SectionHeading";
import {
  platformBenefits,
  platformHero,
  platformModules,
} from "@/lib/data/autonomy-tech/platform-data";
import { autonomyRoutes } from "@/lib/data/autonomy-tech/site";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Platform — NexaBot AI",
  description: platformHero.description,
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title={platformHero.title}
        description={platformHero.description}
      />

      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            title="Platform modules"
            description="Eight connected modules that power mission planning, fleet operations, AI vision, and data integration."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {platformModules.map((mod, i) => (
              <PlatformModuleCard key={mod.id} module={mod} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-16 lg:py-20", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Product interface preview" />
          <div className="mt-10">
            <PlatformInterfacePreview />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Platform benefits" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {platformBenefits.map((b) => {
              const Icon = getDemoIcon(b.icon);
              return (
                <div key={b.id} className={cn(tc.card, "p-6")}>
                  <Icon className="h-6 w-6 text-accent" />
                  <h3 className="font-heading mt-3 font-semibold text-foreground">
                    {b.title}
                  </h3>
                  <p className={cn("mt-2 text-sm", tc.body)}>{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PageCTA
        title="See how NexaBot AI applies across industries"
        primaryLabel="Explore Solutions"
        primaryHref={autonomyRoutes.solutions}
      />
    </>
  );
}
