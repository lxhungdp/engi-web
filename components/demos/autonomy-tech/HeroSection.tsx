"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { productInfo } from "@/lib/data/autonomy-tech/site";
import { DashboardMockup } from "./DashboardMockup";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className={tc.homeHero}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full hero-glow-1 blur-[120px]" />
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full hero-glow-2 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={cn("mb-5", tc.badge)}>
            <span className={tc.badgeDot} />
            <span className={tc.badgeText}>Autonomous Robotics Platform</span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {productInfo.tagline}
          </h1>

          <p className={cn("mt-5 max-w-lg text-base leading-relaxed sm:text-lg", tc.body)}>
            {productInfo.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#cta" className={tc.btnPrimary}>
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#platform" className={tc.btnSecondary}>
              <Layers className="h-4 w-4" />
              Explore Platform
            </a>
          </div>
        </motion.div>

        <DashboardMockup />
      </div>
    </section>
  );
}
