"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/types/biotech-research";
import { biotechRoutes } from "@/lib/data/biotech-research/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function CaseStudyCard({
  study,
  index = 0,
  detailed = false,
}: {
  study: CaseStudy;
  index?: number;
  detailed?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={cn(tc.card, tc.cardHover, "flex flex-col p-6")}
    >
      <span className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-xs text-accent">
        {study.field}
      </span>
      <h3 className="font-heading mt-4 text-lg font-semibold text-foreground">{study.title}</h3>
      <p className={cn("mt-2 text-sm", tc.body)}>
        <span className="font-medium text-foreground-secondary">Challenge: </span>
        {study.challenge}
      </p>
      {detailed && study.approach && (
        <p className={cn("mt-3 text-sm", tc.body)}>
          <span className="font-medium text-foreground-secondary">Approach: </span>
          {study.approach}
        </p>
      )}
      <div className="mt-4 space-y-2 text-xs text-foreground-secondary">
        <p><span className="font-medium text-foreground-muted">Method: </span>{study.method}</p>
        <p><span className="font-medium text-foreground-muted">Output: </span>{study.output}</p>
        {detailed && (
          <p><span className="font-medium text-foreground-muted">Impact: </span>{study.impact}</p>
        )}
      </div>
      <Link
        href={biotechRoutes.caseStudies}
        className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-accent hover:text-accent-hover"
      >
        View Case Study
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
