"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const mockCards = [
  {
    icon: Cpu,
    title: "System Status",
    value: "Operational",
    detail: "All nodes online",
    color: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    ring: "ring-emerald-500/20",
  },
  {
    icon: BarChart3,
    title: "Performance",
    value: "98.4%",
    detail: "Uptime this month",
    color: "text-accent",
    bg: "bg-accent/10",
    ring: "ring-accent/20",
  },
  {
    icon: Layers,
    title: "Active Projects",
    value: "24",
    detail: "3 launching this week",
    color: "text-violet-500 dark:text-violet-400",
    bg: "bg-violet-500/10",
    ring: "ring-violet-500/20",
  },
  {
    icon: CheckCircle2,
    title: "Deployment",
    value: "Ready",
    detail: "Production build passed",
    color: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-500/10",
    ring: "ring-amber-500/20",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full hero-glow-1 blur-[120px]" />
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full hero-glow-2 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={cn("mb-6", tc.badge)}>
            <span className={tc.badgeDot} />
            <span className={tc.badgeText}>Web studio for technical businesses</span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Technical websites for{" "}
            <span className={tc.gradientText}>engineering products.</span>
          </h1>

          <p className={cn("mt-6 max-w-lg text-lg leading-relaxed", tc.body)}>
            EngiWeb helps engineering, construction, drone, biotech, and
            technical companies turn complex products into clear, modern, and
            conversion-focused websites.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#style-switcher" className={tc.btnPrimary}>
              Explore Demo Styles
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className={tc.btnSecondary}>
              Start a Project
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className={cn("relative p-1", tc.mockup)}>
            <div className={cn("flex items-center gap-2 px-4 py-3", tc.mockupInner)}>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <span className="ml-2 text-xs text-foreground-muted">
                engi-web.com/dashboard
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 p-4">
              {mockCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={cn("rounded-xl p-4 ring-1", card.bg, card.ring)}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <card.icon className={cn("h-4 w-4", card.color)} />
                    <span className="text-[10px] uppercase tracking-wider text-foreground-muted">
                      Live
                    </span>
                  </div>
                  <p className="text-xs text-foreground-muted">{card.title}</p>
                  <p className={cn("mt-1 font-heading text-xl font-bold", card.color)}>
                    {card.value}
                  </p>
                  <p className="mt-1 text-[11px] text-foreground-muted">{card.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mx-4 mb-4 rounded-xl border border-accent/20 bg-gradient-to-r from-accent/10 to-accent-secondary/10 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-foreground-muted">Conversion Rate</p>
                  <p className="font-heading text-2xl font-bold text-foreground">
                    +34%
                  </p>
                </div>
                <div className="flex h-16 w-24 items-end gap-1">
                  {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.4 }}
                      className="flex-1 rounded-sm bg-gradient-to-t from-accent to-accent/60"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-2xl border border-accent/10 bg-accent/5" />
        </motion.div>
      </div>
    </section>
  );
}
