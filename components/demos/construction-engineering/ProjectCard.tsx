"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import type { ConstructionProject } from "@/lib/types/construction-engineering";
import { constructionRoutes } from "@/lib/data/construction-engineering/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: ConstructionProject;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={cn(tc.card, tc.cardHover, "group flex flex-col overflow-hidden")}
    >
      <div className="relative aspect-[16/10] border-b border-border bg-gradient-to-br from-accent/8 via-background-muted to-background-muted">
        <div className="absolute inset-0 blueprint-lines opacity-40" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="rounded border border-border bg-card/90 px-2 py-0.5 text-xs text-foreground-muted backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {project.name}
        </h3>
        <p className={cn("mt-2 text-sm", tc.body)}>{project.shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-foreground-muted">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {project.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {project.year}
          </span>
        </div>
        <p className="mt-3 text-xs text-foreground-secondary">
          <span className="font-medium text-foreground-muted">Scope: </span>
          {project.scope}
        </p>
        <p className="mt-2 text-xs text-foreground-secondary">
          {project.services.join(" · ")}
        </p>
        <Link
          href={constructionRoutes.project(project.slug)}
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-accent hover:text-accent-hover"
        >
          View Project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
