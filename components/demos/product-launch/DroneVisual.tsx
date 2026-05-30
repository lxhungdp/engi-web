"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Clock,
  MapPin,
  Radio,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { floatingSpecs } from "@/lib/data/product-launch/aerovolt-x1";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Radio,
  Camera,
  MapPin,
  Shield,
};

const cardPositions = [
  "top-0 left-0 -translate-x-2",
  "top-8 right-0 translate-x-2",
  "bottom-16 left-0 -translate-x-4",
  "bottom-8 right-4 translate-x-2",
  "top-1/2 -right-2 -translate-y-1/2 translate-x-4",
];

export function DroneVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
      <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" />

      {floatingSpecs.map((spec, i) => {
        const Icon = iconMap[spec.icon] ?? Shield;
        return (
          <motion.div
            key={spec.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
            className={`absolute ${cardPositions[i]} z-10 hidden sm:block`}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={cn(
                tc.cardSubtle,
                "flex items-center gap-2 px-3 py-2 shadow-card",
              )}
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-accent" />
              <span className="whitespace-nowrap text-xs font-medium text-foreground-secondary">
                {spec.label}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative flex h-full items-center justify-center"
      >
        <div className="relative w-full max-w-[280px] lg:max-w-[320px]">
          <div
            className={cn(
              tc.mockup,
              "relative mx-auto aspect-[4/3] overflow-hidden p-6",
            )}
          >
            <div className="absolute inset-0 grid-bg-sm rounded-2xl opacity-30" />

            <svg
              viewBox="0 0 200 160"
              className="relative z-10 mx-auto w-full text-accent"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="100"
                y1="80"
                x2="40"
                y2="40"
                stroke="currentColor"
                strokeOpacity="0.4"
                strokeWidth="2"
              />
              <line
                x1="100"
                y1="80"
                x2="160"
                y2="40"
                stroke="currentColor"
                strokeOpacity="0.4"
                strokeWidth="2"
              />
              <line
                x1="100"
                y1="80"
                x2="40"
                y2="120"
                stroke="currentColor"
                strokeOpacity="0.4"
                strokeWidth="2"
              />
              <line
                x1="100"
                y1="80"
                x2="160"
                y2="120"
                stroke="currentColor"
                strokeOpacity="0.4"
                strokeWidth="2"
              />

              {[
                [40, 40],
                [160, 40],
                [40, 120],
                [160, 120],
              ].map(([cx, cy], i) => (
                <g key={i}>
                  <motion.ellipse
                    cx={cx}
                    cy={cy}
                    rx="18"
                    ry="4"
                    stroke="currentColor"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                    fill="none"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 0.8 + i * 0.1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ transformOrigin: `${cx}px ${cy}px` }}
                  />
                  <circle cx={cx} cy={cy} r="3" className="fill-accent" />
                </g>
              ))}

              <rect
                x="75"
                y="65"
                width="50"
                height="30"
                rx="8"
                className="fill-accent/15 stroke-accent/50"
                strokeWidth="1.5"
              />
              <rect x="85" y="72" width="30" height="16" rx="4" className="fill-accent/30" />

              <circle
                cx="100"
                cy="105"
                r="6"
                className="fill-accent/20 stroke-accent/60"
                strokeWidth="1.5"
              />
              <circle cx="100" cy="105" r="2.5" className="fill-accent" />

              <motion.circle
                cx="100"
                cy="68"
                r="2"
                className="fill-emerald-500"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </svg>

            <div
              className={cn(
                tc.mockupInner,
                "relative z-10 mt-4 flex items-center justify-between rounded-lg px-3 py-2",
              )}
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-foreground-muted">Mission Ready</span>
              </div>
              <span className="font-mono text-[10px] text-accent">RTK LOCKED</span>
            </div>
          </div>

          <div className="absolute -bottom-4 left-1/2 h-2 w-3/4 -translate-x-1/2 rounded-full bg-accent/20 blur-md" />
        </div>
      </motion.div>

      <div className="mt-6 flex flex-wrap justify-center gap-2 sm:hidden">
        {floatingSpecs.map((spec) => (
          <span
            key={spec.id}
            className={cn(tc.badge, "px-3 py-1 text-xs normal-case tracking-normal text-accent")}
          >
            {spec.label}
          </span>
        ))}
      </div>
    </div>
  );
}
