import type { Metadata } from "next";
import { PageHero } from "@/components/demos/construction-engineering/SectionHeading";
import { SectionHeading } from "@/components/demos/construction-engineering/SectionHeading";
import { ConstructionCTA } from "@/components/demos/construction-engineering/ConstructionCTA";
import {
  aboutStory,
  companyMilestones,
  companyValues,
  leadershipTeam,
} from "@/lib/data/construction-engineering/about";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About — TerraBuild Engineering",
  description:
    "Learn about TerraBuild Engineering — a multidisciplinary construction and infrastructure engineering company.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Engineering experience built on practical project delivery."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground">{aboutStory.title}</h2>
          {aboutStory.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className={cn("mt-4 text-base leading-relaxed", tc.body)}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className={cn("py-16", tc.sectionAlt)}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title="Company timeline" />
          <div className="mt-10 space-y-8">
            {companyMilestones.map((m) => (
              <div key={m.year} className="flex gap-6">
                <span className="font-heading shrink-0 text-lg font-bold text-accent">{m.year}</span>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{m.title}</h3>
                  <p className={cn("mt-1 text-sm", tc.body)}>{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Leadership team" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((member) => (
              <div key={member.id} className={cn(tc.card, "p-6")}>
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  {member.role}
                </p>
                <h3 className="font-heading mt-2 text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className={cn("mt-2 text-sm", tc.body)}>{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-16", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our values" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((v) => (
              <div key={v.id} className={cn(tc.card, "p-6")}>
                <h3 className="font-heading font-semibold text-foreground">{v.title}</h3>
                <p className={cn("mt-2 text-sm", tc.body)}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConstructionCTA />
    </>
  );
}
