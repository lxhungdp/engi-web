"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  phoneHeroLabels,
  phoneModels,
} from "@/lib/data/industrial-product/phone-data";
import type { PhoneModel } from "@/lib/types/industrial-product";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

function PhoneVisual({ model }: { model: PhoneModel }) {
  const scale = model.slug === "phone-max" ? 1.05 : model.slug === "phone-lite" ? 0.92 : 1;

  return (
    <motion.div
      key={model.slug}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="relative flex aspect-[9/16] max-h-[340px] items-center justify-center"
    >
      <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" />
      <div
        className={cn(
          "relative w-[160px] overflow-hidden rounded-[2rem] border-2 border-border bg-background-muted shadow-mockup sm:w-[180px]",
          model.slug === "phone-max" && "w-[190px] sm:w-[200px]",
        )}
      >
        <div className="h-6 bg-[var(--mockup-inner)]" />
        <div className="flex flex-col items-center justify-center gap-3 px-4 py-10">
          <div className="h-16 w-16 rounded-full bg-accent/15 ring-1 ring-accent/25" />
          <p className="font-heading text-sm font-bold text-foreground">{model.name.replace("Vertex ", "")}</p>
          <p className="text-center text-[10px] text-foreground-muted">{model.display}</p>
        </div>
        <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-border" />
      </div>
    </motion.div>
  );
}

export function PhoneProductShowcase() {
  const [activeModel, setActiveModel] = useState(
    phoneModels.find((m) => m.highlighted)?.slug ?? "phone-pro",
  );
  const model = phoneModels.find((m) => m.slug === activeModel) ?? phoneModels[1];

  const specs = [
    { label: "Battery", value: model.battery.split(" · ")[0] },
    { label: "Camera", value: model.camera.split(" ")[0] },
    { label: "Display", value: model.display.split(" · ")[0] },
  ];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className={cn("relative overflow-hidden rounded-2xl", tc.mockup)}>
        <div className={cn("flex items-center justify-between px-4 py-2.5", tc.mockupInner)}>
          <span className="text-xs text-foreground-muted">vertex-mobile.com</span>
          <div className="flex gap-1">
            {phoneModels.map((m) => (
              <button
                key={m.slug}
                type="button"
                onClick={() => setActiveModel(m.slug)}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-medium transition-all sm:text-xs",
                  activeModel === m.slug
                    ? "bg-accent/15 text-accent ring-1 ring-accent/30"
                    : "text-foreground-muted hover:text-foreground",
                )}
              >
                {m.name.replace("Vertex Phone ", "")}
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[360px] items-center justify-center p-6">
          <AnimatePresence mode="wait">
            <PhoneVisual key={model.slug} model={model} />
          </AnimatePresence>

          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className={cn(
                "absolute hidden rounded-lg border border-border bg-card/90 px-2.5 py-1.5 shadow-card backdrop-blur-sm sm:block",
                i === 0 && "top-6 left-4",
                i === 1 && "top-1/3 right-4",
                i === 2 && "bottom-8 left-6",
              )}
            >
              <p className="text-[10px] text-foreground-muted">{spec.label}</p>
              <p className="text-xs font-semibold text-foreground">{spec.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 border-t border-border px-4 py-3">
          {phoneHeroLabels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-[10px] text-accent sm:text-xs"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
