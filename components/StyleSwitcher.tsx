"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Building2,
  FlaskConical,
  Layers,
  Package,
} from "lucide-react";
import { themeModes } from "@/lib/data/theme-modes";
import type { ThemeModeId } from "@/lib/types";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const modeIcons: Record<ThemeModeId, React.ElementType> = {
  tech: Bot,
  engineering: Building2,
  product: Package,
  biotech: FlaskConical,
  premium: Layers,
};

interface StyleSwitcherProps {
  selected: ThemeModeId;
  onSelect: (mode: ThemeModeId) => void;
}

export function StyleSwitcher({ selected, onSelect }: StyleSwitcherProps) {
  return (
    <section id="style-switcher" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className={tc.eyebrow}>Interactive Preview</p>
          <h2 className={cn("mt-3", tc.headingLg)}>
            Choose Your Website Style
          </h2>
          <p className={cn("mx-auto mt-4 max-w-2xl", tc.body)}>
            Switch between modes to see how EngiWeb adapts layout, tone, and
            visual language for different technical industries.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {themeModes.map((mode, i) => {
            const Icon = modeIcons[mode.id];
            const isSelected = selected === mode.id;

            return (
              <motion.button
                key={mode.id}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => onSelect(mode.id)}
                className={cn(
                  "group relative rounded-xl border p-4 text-left transition-all duration-300",
                  isSelected
                    ? "border-accent/50 bg-accent/10 shadow-lg shadow-accent/10"
                    : cn(tc.cardSubtle, "hover:border-accent/30 hover:bg-background-elevated"),
                )}
              >
                <div
                  className={cn(
                    "mb-3 flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                    isSelected
                      ? "bg-accent/20 text-accent"
                      : "bg-background-muted text-foreground-muted group-hover:text-foreground-secondary",
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <p className={cn("font-heading text-sm font-semibold", tc.heading)}>
                  {mode.name}
                </p>
                <p className="mt-1 text-xs text-foreground-muted">{mode.tag}</p>
                {isSelected && (
                  <motion.div
                    layoutId="mode-indicator"
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-gradient-to-r from-accent to-accent-secondary"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={cn("mt-8 p-6", tc.cardSubtle)}
        >
          <p className={cn("text-sm leading-relaxed", tc.body)}>
            {themeModes.find((m) => m.id === selected)?.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {themeModes
              .find((m) => m.id === selected)
              ?.forIndustries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-border bg-background-muted px-3 py-1 text-xs text-foreground-muted"
                >
                  {industry}
                </span>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
