import type { Metadata } from "next";
import { PageHero } from "@/components/demos/construction-engineering/SectionHeading";
import { ServiceCard } from "@/components/demos/construction-engineering/ServiceCard";
import { ProcessTimeline } from "@/components/demos/construction-engineering/ProcessTimeline";
import {
  constructionServices,
  serviceWorkflow,
} from "@/lib/data/construction-engineering/services";
import { constructionRoutes } from "@/lib/data/construction-engineering/site";
import { SectionHeading } from "@/components/demos/construction-engineering/SectionHeading";
import Link from "next/link";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services — TerraBuild Engineering",
  description:
    "Engineering services for complex construction projects including civil design, structural engineering, BIM, and project delivery support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Engineering services for complex construction projects."
        description="From civil design to digital coordination, TerraBuild supports infrastructure projects with practical engineering, documentation, and delivery expertise."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {constructionServices.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} variant="detailed" />
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-16 lg:py-20", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How we support your project." />
          <div className="mt-14">
            <ProcessTimeline steps={serviceWorkflow} />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className={cn("text-lg font-medium text-foreground", tc.heading)}>
            Discuss your project requirements.
          </p>
          <Link href={constructionRoutes.contact} className={cn(tc.btnPrimary, "mt-6 inline-flex")}>
            Contact TerraBuild
          </Link>
        </div>
      </section>
    </>
  );
}
