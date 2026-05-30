"use client";

import { motion } from "framer-motion";
import { ArrowRight, GitBranch } from "lucide-react";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section id="cta" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn("relative overflow-hidden px-8 py-16 text-center sm:px-16", tc.ctaPanel)}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full hero-glow-1 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Ready to launch your autonomous technology platform?
            </h2>
            <p className={cn("mx-auto mt-4 max-w-xl", tc.body)}>
              See how NexaBot AI can help your team turn robotics data into
              safer, faster, and smarter operations.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button type="button" className={tc.btnPrimary}>
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </button>
              <a href="#architecture" className={tc.btnSecondary}>
                <GitBranch className="h-4 w-4" />
                View Platform Architecture
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
