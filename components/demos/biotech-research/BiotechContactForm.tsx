"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { contactFormOptions } from "@/lib/data/biotech-research/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function BiotechContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(tc.card, "p-8 text-center")}
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Send className="h-6 w-6" />
        </div>
        <h3 className="font-heading mt-4 text-xl font-semibold text-foreground">Inquiry received</h3>
        <p className={cn("mt-2 text-sm", tc.body)}>
          This is demo content — no data was sent. In production, this form would connect to your CRM or email service.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className={cn(tc.card, "space-y-4 p-6 sm:p-8")}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-foreground-muted">Name</label>
          <input id="name" required className={tc.input} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-foreground-muted">Email</label>
          <input id="email" type="email" required className={tc.input} placeholder="you@organization.com" />
        </div>
      </div>
      <div>
        <label htmlFor="org" className="mb-1.5 block text-xs font-medium text-foreground-muted">Organization</label>
        <input id="org" className={tc.input} placeholder="Organization name" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className="mb-1.5 block text-xs font-medium text-foreground-muted">Project type</label>
          <select id="projectType" className={cn(tc.input, "bg-input")}>
            {contactFormOptions.projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="researchArea" className="mb-1.5 block text-xs font-medium text-foreground-muted">Research area</label>
          <select id="researchArea" className={cn(tc.input, "bg-input")}>
            {contactFormOptions.researchAreas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-xs font-medium text-foreground-muted">Service interest</label>
        <select id="service" className={cn(tc.input, "bg-input")}>
          {contactFormOptions.serviceInterests.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-foreground-muted">Message</label>
        <textarea
          id="message"
          rows={4}
          className={cn(tc.input, "resize-none")}
          placeholder="Describe your scientific objective, sample type, and data needs..."
        />
      </div>
      <button type="submit" className={cn(tc.btnPrimary, "w-full sm:w-auto")}>
        Submit inquiry
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
