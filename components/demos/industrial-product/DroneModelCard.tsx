"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Camera } from "lucide-react";
import type { DroneModel } from "@/lib/types/industrial-product";
import { industrialRoutes } from "@/lib/data/industrial-product/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

interface DroneModelCardProps {
  model: DroneModel;
  index?: number;
  variant?: "preview" | "comparison" | "compact";
}

export function DroneModelCard({
  model,
  index = 0,
  variant = "preview",
}: DroneModelCardProps) {
  const detailHref = industrialRoutes.products;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      id={variant === "comparison" ? model.slug : undefined}
      className={cn(
        tc.card,
        tc.cardHover,
        "relative flex flex-col overflow-hidden",
        model.highlighted && "ring-2 ring-accent/40 shadow-card-hover",
      )}
    >
      {model.badge && (
        <div className="absolute right-4 top-4 z-10 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          {model.badge}
        </div>
      )}

      <div className="border-b border-border bg-gradient-to-br from-accent/5 to-transparent p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-accent">
          {model.label}
        </p>
        <h3 className="font-heading mt-2 text-xl font-bold text-foreground">
          {model.name}
        </h3>
        <p className={cn("mt-2 text-sm", tc.body)}>
          {model.bestFor.slice(0, 3).join(" · ")}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="grid gap-3 text-sm">
          <div className="flex items-center gap-2 text-foreground-secondary">
            <Clock className="h-4 w-4 shrink-0 text-accent" />
            <span>{model.flightTime}</span>
          </div>
          <div className="flex items-center gap-2 text-foreground-secondary">
            <Camera className="h-4 w-4 shrink-0 text-accent" />
            <span>{model.camera}</span>
          </div>
          <div className="flex items-center gap-2 text-foreground-secondary">
            <MapPin className="h-4 w-4 shrink-0 text-accent" />
            <span>{model.positioning}</span>
          </div>
        </div>

        {variant !== "compact" && (
          <>
            <p className="mt-4 text-xs font-medium text-foreground-muted">Output</p>
            <p className="mt-1 text-xs text-foreground-secondary">{model.output}</p>
          </>
        )}

        <div className="mt-auto flex flex-col gap-2 pt-6 sm:flex-row">
          <Link href={detailHref} className={cn(tc.btnPrimary, "flex-1 justify-center text-sm")}>
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={industrialRoutes.products}
            className={cn(tc.btnSecondary, "flex-1 justify-center text-sm")}
          >
            Compare
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
