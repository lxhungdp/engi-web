"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { servicePackages } from "@/lib/data/services";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 section-tint" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className={tc.eyebrow}>Productized Services</p>
          <h2 className={cn("mt-3", tc.headingLg)}>
            Website packages built for technical teams
          </h2>
          <p className={cn("mx-auto mt-4 max-w-2xl", tc.body)}>
            Clear scopes, transparent deliverables, and packages designed for
            engineering and technical businesses.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {servicePackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 transition-all duration-300",
                pkg.highlight
                  ? "border-accent/40 bg-accent/5 shadow-lg shadow-accent/10"
                  : cn(tc.card, tc.cardHover),
              )}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-accent-foreground">
                  Most Popular
                </span>
              )}
              <h3 className={cn("font-heading text-lg font-semibold", tc.heading)}>
                {pkg.name}
              </h3>
              <p className={cn("mt-2 flex-1 text-sm leading-relaxed", tc.body)}>
                {pkg.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground-secondary"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={cn(
                  "mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                  pkg.highlight ? tc.btnPrimary : tc.btnSecondary,
                )}
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
