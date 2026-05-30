"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const websiteTypes = [
  "Landing Page",
  "Company Website",
  "Product Launch",
  "Web App / Dashboard",
  "Not sure yet",
];

const industries = [
  "Construction",
  "Civil / Bridge Engineering",
  "Drone / Robotics",
  "Engineering Software",
  "BioTech / Research",
  "Manufacturing",
  "Technical Consulting",
  "Other",
];

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={tc.ctaPanel}>
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className={tc.eyebrow}>Get in Touch</p>
                <h2 className={cn("mt-3", tc.headingLg)}>
                  Ready to turn your technical business into a modern web
                  experience?
                </h2>
                <p className={cn("mt-4", tc.body)}>
                  Tell us about your project and we&apos;ll get back to you
                  within 1–2 business days.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className={tc.btnPrimary}>
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="mailto:hello@engi-web.com"
                    className={tc.btnSecondary}
                  >
                    Contact EngiWeb
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="border-t border-border bg-background-muted p-8 lg:border-t-0 lg:border-l lg:p-12">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center text-center"
                >
                  <div className={cn("h-14 w-14 rounded-full", tc.iconBox)}>
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className={cn("font-heading mt-4 text-xl font-semibold", tc.heading)}>
                    Message received!
                  </h3>
                  <p className={cn("mt-2 text-sm", tc.body)}>
                    We&apos;ll be in touch soon. (Form is static for now — backend
                    integration coming next.)
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-xs font-medium text-foreground-muted"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className={tc.input}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-xs font-medium text-foreground-muted"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={tc.input}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-xs font-medium text-foreground-muted"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      className={tc.input}
                      placeholder="Company name"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="industry"
                        className="mb-1.5 block text-xs font-medium text-foreground-muted"
                      >
                        Industry
                      </label>
                      <select id="industry" name="industry" className={tc.input}>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="websiteType"
                        className="mb-1.5 block text-xs font-medium text-foreground-muted"
                      >
                        Website type
                      </label>
                      <select id="websiteType" name="websiteType" className={tc.input}>
                        {websiteTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-medium text-foreground-muted"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className={cn(tc.input, "resize-none")}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button type="submit" className={cn(tc.btnPrimary, "w-full")}>
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
