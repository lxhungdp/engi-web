"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Plane } from "lucide-react";
import { aeroSeriesInfo } from "@/lib/data/industrial-product/drone-data";
import { industrialRoutes } from "@/lib/data/industrial-product/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function FeaturedDroneBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/10 via-card to-card p-8 sm:p-10",
            "shadow-card",
          )}
        >
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className={tc.iconBoxSm}>
                  <Plane className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-accent">
                  Featured product line
                </span>
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                {aeroSeriesInfo.name}
              </h2>
              <p className={cn("mt-3 max-w-xl text-base", tc.body)}>
                Industrial drones built for inspection, mapping, monitoring, and technical field operations.
              </p>
            </div>
            <Link
              href={industrialRoutes.products}
              className={cn(tc.btnPrimary, "shrink-0 justify-center")}
            >
              Explore Aero Series
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
