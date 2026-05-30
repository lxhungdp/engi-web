import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/demos/industrial-product/SectionHeading";
import { SolutionCard } from "@/components/demos/industrial-product/SolutionCard";
import { SectionHeading } from "@/components/demos/industrial-product/SectionHeading";
import {
  featuredSolution,
  solutions,
  solutionsHero,
} from "@/lib/data/industrial-product/solutions-data";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Solutions — Vertex Systems",
  description: solutionsHero.description,
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={solutionsHero.title}
        description="Industry-focused workflows combining Vertex hardware for inspection, monitoring, mapping, and safety."
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <SolutionCard key={s.id} solution={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-16 lg:py-20", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured"
            title={featuredSolution.title}
            description={featuredSolution.challenge}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className={cn(tc.card, "p-6")}>
              <h3 className="font-semibold text-foreground">Recommended products</h3>
              <ul className="mt-3 space-y-2">
                {featuredSolution.products.map((p) => (
                  <li key={p} className="text-sm text-accent">• {p}</li>
                ))}
              </ul>
              <h3 className="mt-6 font-semibold text-foreground">Workflow</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {featuredSolution.workflow.map((w) => (
                  <span key={w} className="rounded-full border border-border px-3 py-1 text-xs text-foreground-secondary">
                    {w}
                  </span>
                ))}
              </div>
            </div>
            <div className={cn(tc.card, "p-6")}>
              <h3 className="font-semibold text-foreground">Outputs</h3>
              <ul className="mt-3 space-y-2">
                {featuredSolution.outputs.map((o) => (
                  <li key={o} className="text-sm text-foreground-secondary">✓ {o}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:pb-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className={cn("rounded-2xl px-8 py-10", tc.ctaPanel)}>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Build a product website for your technical business
            </h2>
            <Link href="/contact" className={cn(tc.btnPrimary, "mt-6 inline-flex")}>
              Contact EngiWeb
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
