import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { PageHero } from "@/components/demos/autonomy-tech/PageHero";
import { PricingCard } from "@/components/demos/autonomy-tech/PricingCard";
import { FAQSection } from "@/components/demos/autonomy-tech/FAQSection";
import { SectionHeading } from "@/components/demos/autonomy-tech/SectionHeading";
import {
  pricingComparison,
  pricingFaqs,
  pricingHero,
  pricingPlans,
} from "@/lib/data/autonomy-tech/pricing-data";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing — NexaBot AI",
  description: pricingHero.description,
};

function ComparisonCell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-4 w-4 text-accent" />
    ) : (
      <X className="mx-auto h-4 w-4 text-foreground-muted/40" />
    );
  }
  return <span className="text-sm text-foreground-secondary">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={pricingHero.title}
        description={pricingHero.description}
      />

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-16", tc.sectionAlt)}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Plan comparison" />
          <div className={cn("mt-10 overflow-x-auto rounded-2xl border border-border", tc.card)}>
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className={tc.tableHeader}>
                  <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-foreground-muted">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider text-foreground-muted">
                    Starter
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider text-accent">
                    Professional
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider text-foreground-muted">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((row) => (
                  <tr key={row.feature} className={tc.tableRow}>
                    <td className="px-4 py-3 text-sm font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <ComparisonCell value={row.starter} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <ComparisonCell value={row.professional} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <ComparisonCell value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQSection faqs={pricingFaqs} />
    </>
  );
}
