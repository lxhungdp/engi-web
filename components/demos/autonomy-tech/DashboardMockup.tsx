"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  Eye,
  Factory,
  ListTodo,
  Map,
  ScanEye,
  ShieldAlert,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import {
  dashboardModules,
  floatingStats,
} from "@/lib/data/autonomy-tech/nexabot";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const statIcons: Record<string, LucideIcon> = {
  TrendingUp,
  Eye,
  Bot,
  Factory,
};

const moduleIcons: Record<string, LucideIcon> = {
  Bot,
  ListTodo,
  ScanEye,
  ShieldAlert,
  Activity,
  Map,
};

const floatPositions = [
  "top-0 -left-2 sm:left-0",
  "top-12 -right-2 sm:right-0",
  "bottom-20 -left-4 sm:left-0",
  "bottom-4 -right-2 sm:right-4",
];

const statusColors = {
  ok: "text-emerald-500 dark:text-emerald-400",
  warn: "text-amber-500 dark:text-amber-400",
  active: "text-accent",
};

export function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div className="pointer-events-none absolute inset-0 rounded-full hero-glow-1 blur-3xl" />

      {floatingStats.map((stat, i) => {
        const Icon = statIcons[stat.icon] ?? TrendingUp;
        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className={cn("absolute z-10 hidden sm:block", floatPositions[i])}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={cn("flex items-center gap-2 px-3 py-2", tc.cardSubtle, "shadow-card")}
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-accent" />
              <span className="whitespace-nowrap text-xs font-medium text-foreground-secondary">
                {stat.label}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className={cn("relative p-1", tc.mockup)}
      >
        <div className={cn("flex items-center gap-2 px-4 py-3", tc.mockupInner)}>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-amber-400/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
          </div>
          <span className="ml-2 text-xs text-foreground-muted">
            app.nexabot.ai/control
          </span>
          <span className="ml-auto flex items-center gap-1.5 text-[10px] text-emerald-500 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-3 sm:gap-3 sm:p-4">
          {dashboardModules.map((mod, i) => {
            const Icon = moduleIcons[mod.icon] ?? Bot;
            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                className={cn(
                  "rounded-xl border border-border bg-background-muted/50 p-3",
                  mod.id === "map" && "col-span-2 sm:col-span-1",
                )}
              >
                <div className="mb-2 flex items-center justify-between">
                  <Icon className="h-3.5 w-3.5 text-accent" />
                  {mod.status && (
                    <span
                      className={cn(
                        "text-[9px] font-medium uppercase tracking-wider",
                        statusColors[mod.status],
                      )}
                    >
                      {mod.status === "active" ? "Running" : "OK"}
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-foreground-muted">{mod.title}</p>
                <p className="font-heading text-sm font-bold text-foreground">
                  {mod.value}
                </p>
                <p className="mt-0.5 text-[10px] text-foreground-muted">
                  {mod.detail}
                </p>
                {mod.id === "map" && (
                  <div className="mt-2 grid grid-cols-4 gap-1">
                    {[1, 2, 3, 4].map((z) => (
                      <div
                        key={z}
                        className={cn(
                          "aspect-square rounded border border-border bg-accent/10",
                          z === 2 && "bg-accent/25 ring-1 ring-accent/30",
                        )}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mx-3 mb-3 rounded-lg border border-accent/20 bg-gradient-to-r from-accent/5 to-accent-secondary/5 px-3 py-2 sm:mx-4 sm:mb-4 sm:px-4 sm:py-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-foreground-muted">Mission throughput</p>
              <p className="font-heading text-lg font-bold text-foreground">+42%</p>
            </div>
            <div className="flex h-10 w-20 items-end gap-0.5 sm:h-12 sm:w-24">
              {[35, 50, 45, 65, 55, 80, 70].map((h, j) => (
                <motion.div
                  key={j}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.9 + j * 0.04, duration: 0.35 }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-accent to-accent/50"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-4 flex flex-wrap justify-center gap-2 sm:hidden">
        {floatingStats.map((stat) => (
          <span
            key={stat.id}
            className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs text-accent"
          >
            {stat.label}
          </span>
        ))}
      </div>
    </div>
  );
}
