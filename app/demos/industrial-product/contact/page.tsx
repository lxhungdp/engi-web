import { PageHero } from "@/components/demos/industrial-product/SectionHeading";
import { QuoteRequestForm } from "@/components/demos/industrial-product/QuoteRequestForm";
import { contactInfo } from "@/lib/data/industrial-product/resources-data";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Contact — Vertex Systems",
  description: "Request a product consultation for Vertex Industrial Systems hardware.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a product consultation."
        description="Tell us about your field operation, and our team will recommend the right product configuration."
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <QuoteRequestForm />
            </div>
            <div className="lg:col-span-2">
              <div className={cn(tc.card, "sticky top-24 space-y-6 p-6")}>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
                    Typical response time
                  </p>
                  <p className="mt-1 font-heading text-lg font-semibold text-accent">
                    {contactInfo.responseTime}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
                    What happens next
                  </p>
                  <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-foreground-secondary">
                    {contactInfo.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                </div>
                <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
                  <p className="text-xs font-medium text-accent">Demo notice</p>
                  <p className={cn("mt-2 text-xs", tc.body)}>
                    This is a fictional company demo created by EngiWeb. Form
                    submissions are not sent anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
