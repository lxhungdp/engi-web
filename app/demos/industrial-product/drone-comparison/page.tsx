import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/demos/industrial-product/SectionHeading";
import { SectionHeading } from "@/components/demos/industrial-product/SectionHeading";
import { DroneModelCard } from "@/components/demos/industrial-product/DroneModelCard";
import { DroneComparisonTable } from "@/components/demos/industrial-product/DroneComparisonTable";
import {
  droneModels,
  droneRecommendations,
  getDroneModelBySlug,
} from "@/lib/data/industrial-product/drone-data";
import { industrialRoutes } from "@/lib/data/industrial-product/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Compare Vertex Aero Drones — Vertex Systems",
  description:
    "Compare Vertex Aero S1, X2, and M3 drone models for inspection, mapping, monitoring, and field intelligence.",
};

export default function DroneComparisonPage() {
  return (
    <>
      <PageHero
        eyebrow="Vertex Aero Series"
        title="Compare Vertex Aero drones."
        description="Find the right drone model for inspection, mapping, monitoring, and field intelligence."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {droneModels.map((model, i) => (
              <DroneModelCard key={model.slug} model={model} index={i} variant="comparison" />
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-16 lg:py-20", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Detailed model comparison" />
          <div className="mt-10">
            <DroneComparisonTable highlightSlug="aero-x2" />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Which model should you choose?" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {droneRecommendations.map((rec) => {
              const model = getDroneModelBySlug(rec.modelSlug);
              return (
                <div
                  key={rec.modelSlug}
                  className={cn(
                    tc.card,
                    model?.highlighted && "ring-2 ring-accent/30",
                    "p-6",
                  )}
                >
                  <h3 className="font-heading font-semibold text-foreground">
                    {rec.title}
                  </h3>
                  <p className={cn("mt-3 text-sm leading-relaxed", tc.body)}>
                    {rec.description}
                  </p>
                  {model && (
                    <p className="mt-4 text-xs font-medium text-accent">
                      {model.name} · {model.flightTime}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className={cn("rounded-2xl px-8 py-10", tc.ctaPanel)}>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Ready to evaluate a drone platform?
            </h2>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href={industrialRoutes.contact} className={tc.btnPrimary}>
                Request Drone Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={industrialRoutes.products} className={tc.btnSecondary}>
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
