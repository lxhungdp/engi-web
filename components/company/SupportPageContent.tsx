"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import {
  argosCarePlans,
  inquiryProducts,
  supportItems,
  warrantyTerms,
  companyInfo,
  companyRoutes,
} from "@/lib/adapters/company";
import { SupportCard } from "@/components/company/SupportCard";
import { PageHero } from "@/components/ui/SectionHeading";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function SupportPageContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="SUPPORT"
        title="Customer Service"
        description="ArgosCare, Assurance, and Inquiry"
        glow
        className="pt-28"
      />

      <section className={cn(tc.section)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supportItems.map((item) => (
              <SupportCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="argoscare" className={cn(tc.section, tc.sectionAlt)}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className={cn("text-center", tc.headingLg)}>ArgosCare</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {argosCarePlans.map((plan) => (
              <article key={plan.id} className={cn("p-6", tc.card)}>
                <h3 className={cn("font-heading text-xl font-bold", tc.heading)}>{plan.name}</h3>
                <p className={cn("mt-2 text-sm", tc.body)}>
                  <span className="font-medium text-foreground-secondary">Service Period: </span>
                  {plan.servicePeriod}
                </p>
                <p className={cn("mt-1 text-sm", tc.body)}>
                  <span className="font-medium text-foreground-secondary">Service Cost: </span>
                  {plan.serviceCost}
                </p>
                <div className="mt-4">
                  <h4 className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
                    Service Conditions
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {plan.serviceConditions.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-foreground-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
                    Service Details
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {plan.serviceDetails.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-foreground-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="warranty" className={cn(tc.section)}>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className={cn("text-center", tc.headingLg)}>Assurance</h2>
          <ul className="mt-8 space-y-3">
            {warrantyTerms.map((term) => (
              <li key={term} className="flex items-start gap-3 text-sm text-foreground-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {term}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="inquiry" className={cn(tc.section, tc.sectionAlt)}>
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <h2 className={cn("text-center", tc.headingLg)}>Inquiry</h2>
          {submitted ? (
            <div className={cn("mt-8 rounded-xl border border-accent/20 bg-accent/5 p-8 text-center", tc.card)}>
              <p className={cn("font-heading font-semibold", tc.heading)}>Inquiry received</p>
              <p className={cn("mt-2 text-sm", tc.body)}>We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={cn("mt-8 space-y-4 rounded-xl border p-6", tc.card)}>
              {[
                { id: "name", label: "Name*", type: "text", required: true },
                { id: "email", label: "Email*", type: "email", required: true },
                { id: "company", label: "Company*", type: "text", required: true },
                { id: "phone", label: "Phone Number*", type: "tel", required: true },
                { id: "region", label: "Region*", type: "text", required: true },
                { id: "country", label: "Country*", type: "text", required: true },
                { id: "address", label: "Address*", type: "text", required: true },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="mb-1.5 block text-xs text-foreground-muted">
                    {field.label}
                  </label>
                  <input id={field.id} type={field.type} required={field.required} className={tc.input} />
                </div>
              ))}
              <div>
                <label htmlFor="industry" className="mb-1.5 block text-xs text-foreground-muted">
                  Industry*
                </label>
                <select id="industry" required className={tc.input}>
                  <option value="">Select -</option>
                  <option>Public Safety</option>
                  <option>Highway / Transportation</option>
                  <option>Industrial / Infrastructure</option>
                  <option>Construction / Surveying</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="product" className="mb-1.5 block text-xs text-foreground-muted">
                  Interested Product*
                </label>
                <select id="product" required className={tc.input}>
                  <option value="">Select product</option>
                  {inquiryProducts.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="details" className="mb-1.5 block text-xs text-foreground-muted">
                  Inquiry Details*
                </label>
                <textarea id="details" rows={4} required className={cn(tc.input, "resize-none")} />
              </div>
              <label className="flex items-start gap-2 text-xs text-foreground-secondary">
                <input type="checkbox" required className="mt-0.5" />
                I agree to the Privacy Policy *
              </label>
              <button type="submit" className={cn(tc.btnPrimary, "w-full")}>
                Submit <Send className="h-4 w-4" />
              </button>
            </form>
          )}
          <div className={cn("mt-4 space-y-2 text-center text-sm", tc.body)}>
            <p>
              <span className="font-semibold text-foreground-secondary">Factory </span>
              {companyInfo.factory}
            </p>
            <p>
              <span className="font-semibold text-foreground-secondary">FAX </span>
              {companyInfo.fax}
            </p>
            <p>
              <span className="font-semibold text-foreground-secondary">TEL </span>
              {companyInfo.phone} ({companyInfo.phoneHours})
            </p>
            <p>
              <span className="font-semibold text-foreground-secondary">MAIL </span>
              <a href={`mailto:${companyInfo.email}`} className={tc.linkAccent}>
                {companyInfo.email}
              </a>
            </p>
          </div>
          <div className="mt-6 text-center">
            <Link href={companyRoutes.product} className={tc.linkAccent}>
              Explore products →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
