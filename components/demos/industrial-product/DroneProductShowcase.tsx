"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  droneHeroLabels,
  droneModels,
} from "@/lib/data/industrial-product/drone-data";
import type { DroneModel } from "@/lib/types/industrial-product";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

function PremiumDroneVisual({ model }: { model: DroneModel }) {
  const scale = model.slug === "aero-m3" ? 1.1 : model.slug === "aero-s1" ? 0.85 : 1;

  return (
    <motion.div
      key={model.slug}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="relative flex aspect-[4/3] items-center justify-center"
    >
      <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" />
      <svg
        viewBox="0 0 240 180"
        className="relative w-full max-w-md text-accent"
        fill="none"
      >
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {[
            [60, 50],
            [180, 50],
            [60, 130],
            [180, 130],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <motion.ellipse
                cx={cx}
                cy={cy}
                rx="22"
                ry="5"
                stroke="currentColor"
                strokeOpacity="0.4"
                animate={{ rotate: 360 }}
                transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
              <circle cx={cx} cy={cy} r="4" className="fill-accent" />
              <line
                x1="120"
                y1="90"
                x2={cx}
                y2={cy}
                stroke="currentColor"
                strokeOpacity="0.25"
              />
            </g>
          ))}
          <rect
            x="95"
            y="78"
            width="50"
            height="28"
            rx="8"
            className="fill-accent/15 stroke-accent/50"
            strokeWidth="1.5"
          />
          <rect x="108" y="68" width="24" height="12" rx="4" className="fill-accent/25" />
          <circle cx="120" cy="118" r="6" className="fill-accent/30 stroke-accent/60" strokeWidth="1" />
          {model.lidarReady && (
            <motion.circle
              cx="120"
              cy="90"
              r="30"
              stroke="currentColor"
              strokeOpacity="0.2"
              animate={{ r: [30, 55], opacity: [0.4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          )}
        </motion.g>
      </svg>
    </motion.div>
  );
}

interface DroneProductShowcaseProps {
  variant?: "home" | "product";
  floatingSpecs?: { label: string; value: string }[];
}

export function DroneProductShowcase({
  variant = "home",
  floatingSpecs,
}: DroneProductShowcaseProps) {
  const [activeModel, setActiveModel] = useState(
    droneModels.find((m) => m.highlighted)?.slug ?? "aero-x2",
  );
  const model = droneModels.find((m) => m.slug === activeModel) ?? droneModels[1];

  const specs =
    floatingSpecs ??
    (variant === "product"
      ? [
          { label: "Flight time", value: model.flightTime.replace("Up to ", "") },
          { label: "Range", value: model.range.replace("Up to ", "") },
          { label: "Camera", value: "8K inspection" },
          { label: "Positioning", value: model.positioning },
          { label: "Thermal", value: "Optional" },
          { label: "AI", value: "Defect detection" },
        ]
      : [
          { label: "Flight", value: model.flightTime.replace("Up to ", "") },
          { label: "Range", value: model.range.replace("Up to ", "") },
          { label: "Camera", value: model.camera.split(" ")[0] },
        ]);

  const floatPositions = [
    "top-4 left-2 sm:left-4",
    "top-1/4 right-2 sm:right-4",
    "bottom-1/3 left-4",
    "bottom-8 right-6",
    "top-12 left-1/3",
    "bottom-16 left-1/4",
  ];

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="pointer-events-none absolute inset-0 rounded-full hero-glow-1 blur-3xl" />
      <div className={cn("relative overflow-hidden rounded-3xl", tc.mockup)}>
        <div className={cn("flex items-center justify-between px-5 py-3", tc.mockupInner)}>
          <span className="text-xs text-foreground-muted">vertex-systems.com/aero</span>
          <div className="flex gap-1">
            {droneModels.map((m) => (
              <button
                key={m.slug}
                type="button"
                onClick={() => setActiveModel(m.slug)}
                className={cn(
                  "pointer-events-auto rounded-full px-2.5 py-1 text-[10px] font-medium transition-all sm:px-3 sm:text-xs",
                  activeModel === m.slug
                    ? "bg-accent/15 text-accent ring-1 ring-accent/30"
                    : "text-foreground-muted hover:text-foreground",
                )}
              >
                {m.name.replace("Vertex Aero ", "Aero ")}
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[320px] p-4 sm:min-h-[380px] sm:p-6">
          <AnimatePresence mode="wait">
            <PremiumDroneVisual key={model.slug} model={model} />
          </AnimatePresence>

          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className={cn(
                "absolute hidden rounded-xl border border-border bg-card/90 px-3 py-2 shadow-card backdrop-blur-sm sm:block",
                floatPositions[i % floatPositions.length],
              )}
            >
              <p className="text-[10px] text-foreground-muted">{spec.label}</p>
              <p className="text-xs font-semibold text-foreground">{spec.value}</p>
            </motion.div>
          ))}
        </div>

        {variant === "home" && (
          <div className="flex flex-wrap gap-2 border-t border-border px-5 py-3">
            {droneHeroLabels.map((label) => (
              <span
                key={label}
                className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-[10px] text-accent sm:text-xs"
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
