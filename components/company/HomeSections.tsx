"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  companyInfo,
  companyRoutes,
  heroSlides,
  partners,
  solutions,
  supportItems,
} from "@/lib/adapters/company";
import type { CompanyProduct } from "@/lib/types/company";
import { ProductCard } from "@/components/company/ProductCard";
import { SolutionCard } from "@/components/company/SolutionCard";
import { SupportCard } from "@/components/company/SupportCard";
import { NewsGrid } from "@/components/company/NewsPageContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function HomeHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full hero-glow-1 blur-[120px]" />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className={tc.eyebrow}>{companyInfo.shortName}</p>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {slide.headline}
          </h1>
          <AnimatePresence mode="wait">
            <motion.p
              key={slide.subline}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className={cn("mt-5 max-w-lg text-base sm:text-lg", tc.body)}
            >
              {slide.subline}
            </motion.p>
          </AnimatePresence>
          <div className="mt-6 flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === active ? "w-8 bg-accent" : "w-4 bg-foreground-muted/40",
                )}
              />
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={companyRoutes.product} className={tc.btnPrimary}>
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={companyRoutes.solution} className={tc.btnSecondary}>
              View Solutions
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-background-muted/20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.subline}
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export function ProductPreviewSection({ products }: { products: CompanyProduct[] }) {
  const featured = products.filter((p) => p.highlighted);
  return (
    <section className={cn(tc.section, tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PRODUCT"
          title="Introducing the products of Argosdyne."
          description="DRONE · STATION · SOFTWARE"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href={companyRoutes.product} className={cn(tc.linkAccent, "inline-flex items-center gap-2")}>
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SolutionPreviewSection() {
  return (
    <section className={cn(tc.section)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SOLUTION"
          title="Discover the various solutions provided by Argosdyne"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {solutions.map((s) => (
            <SolutionCard key={s.slug} solution={s} compact />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href={companyRoutes.solution} className={cn(tc.linkAccent, "inline-flex items-center gap-2")}>
            Explore solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PartnersSection() {
  return (
    <section className={cn(tc.section, tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PARTNERS"
          title="Check out the companies partnering with Argosdyne"
        />
        <div className="mt-14 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="relative flex aspect-[3/2] items-center justify-center rounded-lg border border-border bg-card p-3"
            >
              <Image
                src={partner.image}
                alt={partner.alt}
                fill
                className="object-contain p-2"
                sizes="120px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsSection() {
  return (
    <section className={cn(tc.section)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="NEWS"
          title="Discover the latest news from Argosdyne"
        />
        <div className="mt-14">
          <NewsGrid />
        </div>
        <div className="mt-10 text-center">
          <Link href={companyRoutes.news} className={cn(tc.linkAccent, "inline-flex items-center gap-2")}>
            View more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SupportPreviewSection() {
  return (
    <section className={cn(tc.section, tc.sectionAlt)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Support"
          title="Customer Service"
          description="ArgosCare, Assurance, and Inquiry"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportItems.map((item) => (
            <SupportCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href={companyRoutes.support} className={cn(tc.linkAccent, "inline-flex items-center gap-2")}>
            View support options <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
