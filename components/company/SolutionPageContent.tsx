"use client";

import Image from "next/image";
import { solutions } from "@/lib/adapters/company";
import { YouTubeEmbed } from "@/components/company/YouTubeEmbed";
import { CTASection } from "@/components/company/CTASection";
import { PageHero } from "@/components/ui/SectionHeading";
import { getCompanyIcon } from "@/lib/company-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function SolutionPageContent() {
  return (
    <>
      <PageHero
        eyebrow="SOLUTION"
        title="Discover the various solutions provided by Argosdyne"
        glow
        className="pt-28"
      />

      <div className="pb-20">
        {solutions.map((solution, index) => {
          const Icon = getCompanyIcon(solution.icon);
          return (
            <section
              key={solution.slug}
              id={solution.slug}
              className={cn(tc.section, index % 2 === 1 && tc.sectionAlt)}
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-start gap-10 lg:grid-cols-2">
                  <div>
                    <div className={tc.iconBox}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className={cn("font-heading mt-4 text-3xl font-bold", tc.heading)}>
                      {solution.name}
                    </h2>
                    <p className={cn("mt-4 text-lg", tc.body)}>{solution.description}</p>
                    {solution.problem && (
                      <p className={cn("mt-4", tc.bodySecondary)}>{solution.problem}</p>
                    )}
                    {solution.benefits && (
                      <ul className="mt-6 space-y-3">
                        {solution.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-3 text-sm text-foreground-secondary"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    )}
                    {solution.technology && (
                      <p className={cn("mt-6 text-sm", tc.body)}>
                        <span className="font-medium text-foreground-secondary">Related Products: </span>
                        {solution.technology}
                      </p>
                    )}
                  </div>

                  {solution.image && (
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border">
                      <Image
                        src={solution.image}
                        alt={solution.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>

                {solution.videos && solution.videos.length > 0 && (
                  <div className="mt-14 grid gap-8 lg:grid-cols-2">
                    {solution.videos.map((video) => (
                      <article key={video.youtubeId} className={cn("overflow-hidden", tc.card)}>
                        <YouTubeEmbed youtubeId={video.youtubeId} title={video.title} />
                        <div className="p-5">
                          <h3 className={cn("font-heading font-semibold", tc.heading)}>{video.title}</h3>
                          {video.description && (
                            <p className={cn("mt-2 text-sm", tc.body)}>{video.description}</p>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>

      <CTASection secondaryLabel="View Support" secondaryHref="/support" primaryLabel="Inquiry" />
    </>
  );
}
