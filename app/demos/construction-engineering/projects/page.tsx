"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/demos/construction-engineering/SectionHeading";
import { ProjectCard } from "@/components/demos/construction-engineering/ProjectCard";
import { getProjectsByCategory } from "@/lib/data/construction-engineering/projects";
import { projectCategories } from "@/lib/data/construction-engineering/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = getProjectsByCategory(filter);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects that connect people, places, and industries."
      />

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm transition-all",
                  filter === cat
                    ? "border-accent/40 bg-accent/10 font-medium text-accent"
                    : "border-border text-foreground-muted hover:border-accent/20",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className={cn("text-lg font-medium text-foreground", tc.heading)}>
            See how a structured project portfolio can build trust.
          </p>
          <Link href="/" className={cn(tc.btnPrimary, "mt-6 inline-flex")}>
            Back to EngiWeb
          </Link>
        </div>
      </section>
    </>
  );
}
