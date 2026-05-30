"use client";

import Image from "next/image";
import { newsItems } from "@/lib/data/companyContent";
import { PageHero } from "@/components/ui/SectionHeading";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function NewsGrid({ limit }: { limit?: number }) {
  const items = limit ? newsItems.slice(0, limit) : newsItems;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.id} className={cn("overflow-hidden", tc.card, tc.cardHover)}>
          {item.image && (
            <div className="relative aspect-[16/10] bg-background-muted/30">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          )}
          <div className="p-5">
            <p className="text-xs text-foreground-muted">
              {item.date} · {item.category}
            </p>
            <h3 className={cn("font-heading mt-2 font-semibold leading-snug", tc.heading)}>
              {item.title}
            </h3>
          </div>
        </article>
      ))}
    </div>
  );
}

export function NewsPageContent() {
  return (
    <>
      <PageHero
        eyebrow="NEWS"
        title="Discover the latest news from Argosdyne"
        description="We deliver the fastest information about Argos Dyne Co., Ltd."
        glow
        className="pt-28"
      />

      <section className={cn(tc.section)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <NewsGrid />
        </div>
      </section>
    </>
  );
}
