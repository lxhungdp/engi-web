"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { companyInfo, biotechRoutes } from "@/lib/data/biotech-research/site";
import { heroFloatingCards } from "@/lib/data/biotech-research/homepage";
import { DNAHelixVisual } from "./BioTechVisuals";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

function BioTechHeroVisual() {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl", tc.mockup)}>
      <div className={cn("px-4 py-2.5 text-xs text-foreground-muted", tc.mockupInner)}>
        helixnova.com · Genomic Intelligence Platform
      </div>
      <div className="relative aspect-[4/3] p-4 sm:p-6">
        <DNAHelixVisual className="absolute right-4 top-1/2 h-3/4 w-auto -translate-y-1/2 text-accent opacity-60" />

        <div className="relative z-10 max-w-[55%] space-y-3">
          <div className={cn(tc.cardSubtle, "p-3")}>
            <p className="text-[10px] text-foreground-muted">Genomic report</p>
            <p className="text-xs font-semibold text-foreground">Variant Review — Demo</p>
            <div className="mt-2 space-y-1">
              {["BRAF V600E", "TP53 R248Q", "EGFR amp"].map((v) => (
                <div key={v} className="flex justify-between text-[10px] text-foreground-secondary">
                  <span>{v}</span>
                  <span className="text-accent">Reviewed</span>
                </div>
              ))}
            </div>
          </div>
          <div className={cn(tc.cardSubtle, "p-3")}>
            <p className="text-[10px] text-foreground-muted">Sample QC</p>
            <div className="mt-1 flex gap-2">
              {["Coverage", "Quality", "Depth"].map((m) => (
                <span key={m} className="rounded bg-accent/10 px-1.5 py-0.5 text-[9px] text-accent">
                  {m} ✓
                </span>
              ))}
            </div>
          </div>
        </div>

        {heroFloatingCards.slice(0, 3).map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className={cn(
              "absolute hidden rounded-lg border border-border bg-card/95 px-2.5 py-1.5 shadow-card backdrop-blur-sm sm:block",
              i === 0 && "bottom-4 right-4",
              i === 1 && "top-4 left-4",
              i === 2 && "bottom-16 left-1/3",
            )}
          >
            <p className="text-[9px] text-foreground-muted">{card.label}</p>
            <p className="text-[10px] font-medium text-foreground">{card.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function BioTechHero() {
  return (
    <section className={tc.homeHero}>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className={cn("mb-5", tc.badge)}>
            <span className={tc.badgeDot} />
            <span className={tc.badgeText}>Molecular Diagnostics & Research</span>
          </div>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {companyInfo.tagline}
          </h1>
          <p className={cn("mt-5 max-w-lg text-base leading-relaxed sm:text-lg", tc.body)}>
            {companyInfo.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={biotechRoutes.research} className={tc.btnPrimary}>
              Explore Research
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={biotechRoutes.services} className={tc.btnSecondary}>
              View Diagnostic Services
            </Link>
            <Link href={biotechRoutes.contact} className={tc.btnSecondary}>
              Request Consultation
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12 }}
        >
          <BioTechHeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
