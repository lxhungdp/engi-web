"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { phoneSeriesInfo } from "@/lib/data/industrial-product/phone-data";
import { industrialRoutes } from "@/lib/data/industrial-product/site";
import { PhoneProductShowcase } from "./PhoneProductShowcase";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function DroneHero() {
  return (
    <section className={tc.homeHero}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full hero-glow-1 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className={cn("mb-5", tc.badge)}>
            <span className={tc.badgeDot} />
            <span className={tc.badgeText}>{phoneSeriesInfo.name}</span>
          </div>
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {phoneSeriesInfo.tagline}
          </h1>
          <p className={cn("mt-5 max-w-lg text-base leading-relaxed sm:text-lg", tc.body)}>
            {phoneSeriesInfo.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={industrialRoutes.products} className={tc.btnPrimary}>
              View Models
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={industrialRoutes.contact} className={tc.btnSecondary}>
              Pre-order
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12 }}
        >
          <PhoneProductShowcase />
        </motion.div>
      </div>
    </section>
  );
}
