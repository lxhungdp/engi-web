import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/demos/biotech-research/SectionHeading";
import { BiotechServiceCard } from "@/components/demos/biotech-research/BiotechServiceCard";
import { WorkflowTimeline } from "@/components/demos/biotech-research/WorkflowTimeline";
import { biotechServices, serviceProcess } from "@/lib/data/biotech-research/services";
import { biotechRoutes } from "@/lib/data/biotech-research/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services — HelixNova Biosciences",
  description: "Molecular research and diagnostic support services for biotech and clinical research teams.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Molecular research and diagnostic support services."
        description="From NGS analysis to biomarker discovery and research database curation — structured support for molecular research programs."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {biotechServices.map((s, i) => (
              <BiotechServiceCard key={s.id} service={s} index={i} detailed />
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-16", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How we work with research and clinical teams." />
          <div className="mt-14">
            <WorkflowTimeline steps={serviceProcess} columns={6} />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className={cn("text-lg font-medium text-foreground", tc.heading)}>
            Request service consultation
          </p>
          <Link href={biotechRoutes.contact} className={cn(tc.btnPrimary, "mt-6 inline-flex")}>
            Contact HelixNova
          </Link>
        </div>
      </section>
    </>
  );
}
