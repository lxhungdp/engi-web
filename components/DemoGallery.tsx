"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { demos } from "@/lib/data/demos";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function DemoGallery() {
  return (
    <section id="demos" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 section-tint" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className={tc.eyebrow}>Demo Gallery</p>
          <h2 className={cn("mt-3", tc.headingLg)}>
            Explore Website Demos
          </h2>
          <p className={cn("mx-auto mt-4 max-w-2xl", tc.body)}>
            Preview website styles tailored for different technical industries.
            Explore live demo pages to experience each style.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, i) => (
            <motion.article
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={cn(
                "group flex flex-col overflow-hidden transition-all",
                tc.card,
                "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5",
              )}
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-accent/10 via-background-muted to-accent-secondary/10">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-xl border border-border bg-background/80 px-6 py-4 backdrop-blur-sm">
                    <div className="mb-2 flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400/60" />
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/60 dark:bg-emerald-400/60" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-24 rounded bg-accent/30" />
                      <div className="h-1.5 w-32 rounded bg-border" />
                      <div className="h-1.5 w-20 rounded bg-border" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex w-fit rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {demo.styleTag}
                </span>
                <h3 className={cn("font-heading mt-3 text-lg font-semibold", tc.heading)}>
                  {demo.title}
                </h3>
                <p className={cn("mt-2 flex-1 text-sm leading-relaxed", tc.body)}>
                  {demo.description}
                </p>
                {demo.href ? (
                  <Link href={demo.href} className={cn("mt-5 inline-flex items-center gap-2", tc.linkAccent)}>
                    View Demo
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                ) : (
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-foreground-muted">
                    Coming soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
