"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { inquiryProducts } from "@/lib/data/companyContent";
import { companyInfo } from "@/lib/data/company/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <MainNavbar />
      <main className="relative flex-1 pt-28 pb-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <h1 className={cn(tc.headingLg)}>Inquiry</h1>
          <p className={cn("mt-4", tc.body)}>
            Submit a product inquiry to {companyInfo.name}.
          </p>

          {submitted ? (
            <div className={cn("mt-12 rounded-xl border border-accent/20 bg-accent/5 p-8 text-center", tc.card)}>
              <p className={cn("text-xl font-semibold", tc.heading)}>Inquiry received</p>
              <p className={cn("mt-2 text-sm", tc.body)}>Our team will respond within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={cn("mt-12 space-y-5 rounded-xl border p-8", tc.card)}>
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
                  <label htmlFor={field.id} className={cn("mb-1.5 block text-sm", tc.body)}>
                    {field.label}
                  </label>
                  <input id={field.id} type={field.type} required={field.required} className={tc.input} />
                </div>
              ))}
              <div>
                <label htmlFor="industry" className={cn("mb-1.5 block text-sm", tc.body)}>
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
                <label htmlFor="product" className={cn("mb-1.5 block text-sm", tc.body)}>
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
                <label htmlFor="details" className={cn("mb-1.5 block text-sm", tc.body)}>
                  Inquiry Details*
                </label>
                <textarea id="details" rows={5} required className={cn(tc.input, "resize-none")} />
              </div>
              <label className="flex items-start gap-2 text-sm text-foreground-secondary">
                <input type="checkbox" required className="mt-1" />
                I agree to the Privacy Policy *
              </label>
              <button type="submit" className={cn(tc.btnPrimary, "w-full py-3")}>
                Submit <Send className="h-4 w-4" />
              </button>
            </form>
          )}

          <div className={cn("mt-8 space-y-2 text-sm", tc.body)}>
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
        </div>
      </main>
      <MainFooter />
    </>
  );
}
