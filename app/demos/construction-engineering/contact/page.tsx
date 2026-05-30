import type { Metadata } from "next";
import { PageHero } from "@/components/demos/construction-engineering/SectionHeading";
import { ContactForm } from "@/components/demos/construction-engineering/ContactForm";
import { contactSteps } from "@/lib/data/construction-engineering/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact — TerraBuild Engineering",
  description:
    "Discuss your next construction engineering project with TerraBuild Engineering.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Discuss your next construction engineering project."
        description="Tell us about your project type, location, and technical requirements. Our team will recommend the right service scope."
      />

      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="space-y-6">
            <div className={cn(tc.card, "p-6")}>
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                Typical response time
              </p>
              <p className="font-heading mt-2 text-2xl font-bold text-foreground">1–2 business days</p>
            </div>
            <div className={cn(tc.card, "p-6")}>
              <h3 className="font-heading font-semibold text-foreground">What happens next</h3>
              <ol className="mt-4 space-y-3">
                {contactSteps.map((step) => (
                  <li key={step.step} className="flex gap-3 text-sm text-foreground-secondary">
                    <span className="font-heading shrink-0 font-bold text-accent">{step.step}.</span>
                    {step.text}
                  </li>
                ))}
              </ol>
            </div>
            <div className={cn(tc.cardSubtle, "p-6")}>
              <p className={cn("text-sm", tc.body)}>
                This is a demo contact page created by EngiWeb. Form submissions are not sent
                to a real server.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
