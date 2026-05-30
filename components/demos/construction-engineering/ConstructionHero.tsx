"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { companyInfo } from "@/lib/data/construction-engineering/site";
import { constructionRoutes } from "@/lib/data/construction-engineering/site";
import { heroFloatingCards } from "@/lib/data/construction-engineering/homepage";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

function ConstructionHeroVisual() {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl", tc.mockup)}>
      <div className={cn("px-4 py-2.5 text-xs text-foreground-muted", tc.mockupInner)}>
        terrabuild.com · Project Dashboard
      </div>
      <div className="relative aspect-[4/3] p-6">
        <svg
          viewBox="0 0 400 280"
          className="h-full w-full text-accent/80"
          fill="none"
          aria-hidden
        >
          <line x1="0" y1="220" x2="400" y2="220" stroke="currentColor" strokeOpacity="0.2" />
          <path
            d="M40 220 L120 180 L200 200 L280 160 L360 190 L360 220 Z"
            fill="currentColor"
            fillOpacity="0.08"
            stroke="currentColor"
            strokeOpacity="0.3"
          />
          <rect x="140" y="130" width="80" height="50" rx="2" stroke="currentColor" strokeOpacity="0.4" fill="currentColor" fillOpacity="0.06" />
          <line x1="60" y1="40" x2="340" y2="40" stroke="currentColor" strokeOpacity="0.15" strokeDasharray="4 4" />
          <line x1="60" y1="80" x2="340" y2="80" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="4 4" />
          <line x1="60" y1="120" x2="340" y2="120" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="4 4" />
          <path d="M180 130 L200 100 L220 130" stroke="currentColor" strokeOpacity="0.5" fill="none" />
          <circle cx="200" cy="95" r="3" fill="currentColor" fillOpacity="0.6" />
        </svg>

        {heroFloatingCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className={cn(
              "absolute rounded-lg border border-border bg-card/95 px-3 py-2 shadow-card backdrop-blur-sm",
              i === 0 && "top-4 left-4",
              i === 1 && "top-4 right-4",
              i === 2 && "bottom-16 left-4",
              i === 3 && "bottom-4 right-4 hidden sm:block",
            )}
          >
            <p className="text-[10px] text-foreground-muted">{card.label}</p>
            <p className="text-xs font-semibold text-foreground">{card.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ConstructionHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className={cn("mb-5", tc.badge)}>
            <span className={tc.badgeDot} />
            <span className={tc.badgeText}>Construction & Infrastructure Engineering</span>
          </div>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {companyInfo.tagline}
          </h1>
          <p className={cn("mt-5 max-w-lg text-base leading-relaxed sm:text-lg", tc.body)}>
            {companyInfo.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={constructionRoutes.projects} className={tc.btnPrimary}>
              Explore Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={constructionRoutes.services} className={tc.btnSecondary}>
              View Services
            </Link>
            <Link href={constructionRoutes.contact} className={tc.btnSecondary}>
              Request Consultation
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12 }}
        >
          <ConstructionHeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
