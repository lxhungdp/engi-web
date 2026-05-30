"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { productInfo } from "@/lib/data/product-launch/aerovolt-x1";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";
import { DroneVisual } from "./DroneVisual";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow-1 absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-[120px]" />
        <div className="hero-glow-2 absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={cn("mb-5", tc.badge)}>
            <span className={tc.badgeDot} />
            <span className={tc.badgeText}>Industrial Autonomous Platform</span>
          </div>

          <h1 className={cn("text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl", tc.heading)}>
            {productInfo.name}
          </h1>

          <p className={cn("mt-4 text-xl font-medium sm:text-2xl", tc.gradientText)}>
            {productInfo.tagline}
          </p>

          <p className={cn("mt-5 max-w-lg text-base leading-relaxed sm:text-lg", tc.body)}>
            {productInfo.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#cta" className={tc.btnPrimary}>
              Request Product Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#specs" className={tc.btnSecondary}>
              <FileText className="h-4 w-4" />
              View Technical Specs
            </a>
          </div>
        </motion.div>

        <DroneVisual />
      </div>
    </section>
  );
}
