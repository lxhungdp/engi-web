import type { Metadata } from "next";
import { PageHero, PageCTA } from "@/components/demos/autonomy-tech/PageHero";
import { SolutionCard } from "@/components/demos/autonomy-tech/SolutionCard";
import { SectionHeading } from "@/components/demos/autonomy-tech/SectionHeading";
import {
  featuredSolution,
  solutionCategories,
  solutionsHero,
} from "@/lib/data/autonomy-tech/solutions-data";
import { autonomyRoutes } from "@/lib/data/autonomy-tech/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Solutions — NexaBot AI",
  description: solutionsHero.description,
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={solutionsHero.title}
        description={solutionsHero.description}
      />

      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionCategories.map((s, i) => (
              <SolutionCard key={s.id} solution={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-16 lg:py-20", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured"
            title={featuredSolution.title}
            description={featuredSolution.challenge}
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className={cn(tc.card, "p-6")}>
              <h3 className="font-heading font-semibold text-foreground">Workflow</h3>
              <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-foreground-secondary">
                {featuredSolution.workflow.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="space-y-6">
              <div className={cn(tc.card, "p-6")}>
                <h3 className="font-heading font-semibold text-foreground">
                  Data captured
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {featuredSolution.dataCaptured.map((d) => (
                    <li key={d} className="text-sm text-foreground-secondary">
                      • {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cn(tc.card, "p-6")}>
                <h3 className="font-heading font-semibold text-foreground">Outputs</h3>
                <ul className="mt-3 space-y-1.5">
                  {featuredSolution.outputs.map((o) => (
                    <li key={o} className="text-sm text-accent">
                      • {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={cn("mt-6", tc.card, "p-6")}>
            <h3 className="font-heading font-semibold text-foreground">Benefits</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-3">
              {featuredSolution.benefits.map((b) => (
                <li key={b} className="text-sm text-foreground-secondary">
                  ✓ {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PageCTA
        title="Explore detailed operational use cases"
        primaryLabel="View Use Cases"
        primaryHref={autonomyRoutes.useCases}
      />
    </>
  );
}
