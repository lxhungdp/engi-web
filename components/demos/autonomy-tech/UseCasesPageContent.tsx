"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/demos/autonomy-tech/PageHero";
import { UseCaseCard } from "@/components/demos/autonomy-tech/UseCaseCard";
import {
  detailedUseCases,
  useCaseCategories,
  useCasesHero,
} from "@/lib/data/autonomy-tech/use-cases-data";
import type { UseCaseCategory } from "@/lib/types/autonomy-tech";
import { cn } from "@/lib/utils";

export function UseCasesPageContent() {
  const [filter, setFilter] = useState<UseCaseCategory | "All">("All");

  const filtered =
    filter === "All"
      ? detailedUseCases
      : detailedUseCases.filter((uc) => uc.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Use Cases"
        title={useCasesHero.title}
        description={useCasesHero.description}
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {(["All", ...useCaseCategories] as const).map((cat) => (
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

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-10 grid gap-6 md:grid-cols-2"
            >
              {filtered.map((uc, i) => (
                <UseCaseCard key={uc.id} useCase={uc} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
