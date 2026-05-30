"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  Bot,
  Route,
  ScanEye,
  type LucideIcon,
} from "lucide-react";
import { previewPanels } from "@/lib/data/autonomy-tech/nexabot";
import { autonomyRoutes } from "@/lib/data/autonomy-tech/site";
import { SectionHeading } from "./SectionHeading";
import { SectionLink } from "./PageHero";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const panelIcons: Record<string, LucideIcon> = {
  Route,
  Bot,
  ScanEye,
  Bell,
  BarChart3,
};

export function ProductPreviewSection() {
  return (
    <section id="platform" className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 section-tint" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Platform"
            title="One platform to manage autonomous operations."
            description="Mission planning, fleet monitoring, AI vision, and analytics — unified in a single control interface."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className={cn("mt-14 overflow-hidden", tc.mockup)}
        >
          <div className={cn("flex items-center gap-2 px-4 py-3", tc.mockupInner)}>
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400/70" />
              <span className="h-2 w-2 rounded-full bg-amber-400/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
            </div>
            <span className="ml-2 text-xs text-foreground-muted">
              nexabot.ai/dashboard
            </span>
          </div>

          <div className="grid gap-0 lg:grid-cols-5">
            <div className="border-b border-border p-4 lg:col-span-1 lg:border-b-0 lg:border-r">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-widest text-foreground-muted">
                Modules
              </p>
              <div className="space-y-1">
                {previewPanels.map((panel, i) => {
                  const Icon = panelIcons[panel.icon] ?? Bot;
                  return (
                    <div
                      key={panel.id}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                        i === 0
                          ? "bg-accent/10 text-accent"
                          : "text-foreground-secondary hover:bg-background-muted",
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="truncate">{panel.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-4 lg:col-span-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-foreground-muted">Active mission</p>
                  <p className="font-heading text-lg font-semibold text-foreground">
                    Zone B — Perimeter Patrol
                  </p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  In progress
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-background-muted/50 p-4">
                  <p className="text-[10px] text-foreground-muted">Robots active</p>
                  <p className="font-heading text-2xl font-bold text-foreground">4</p>
                </div>
                <div className="rounded-xl border border-border bg-background-muted/50 p-4">
                  <p className="text-[10px] text-foreground-muted">Objects detected</p>
                  <p className="font-heading text-2xl font-bold text-accent">127</p>
                </div>
                <div className="rounded-xl border border-border bg-background-muted/50 p-4">
                  <p className="text-[10px] text-foreground-muted">Risk alerts</p>
                  <p className="font-heading text-2xl font-bold text-amber-500 dark:text-amber-400">2</p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-background-muted/30 p-4">
                  <p className="mb-2 text-xs font-medium text-foreground-secondary">
                    AI Vision Stream
                  </p>
                  <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-background-muted/50">
                    <ScanEye className="h-8 w-8 text-accent/40" />
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-background-muted/30 p-4">
                  <p className="mb-2 text-xs font-medium text-foreground-secondary">
                    Performance Analytics
                  </p>
                  <div className="flex h-full min-h-[120px] items-end gap-1 pt-4">
                    {[40, 65, 50, 80, 70, 90, 75, 85].map((h, j) => (
                      <div
                        key={j}
                        className="flex-1 rounded-sm bg-gradient-to-t from-accent/80 to-accent/30"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <SectionLink href={autonomyRoutes.platform} label="Explore the full platform" />
      </div>
    </section>
  );
}
