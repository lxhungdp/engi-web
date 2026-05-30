"use client";

import { motion } from "framer-motion";
import { Bell, Bot, ScanEye } from "lucide-react";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const robots = [
  { id: "R-01", name: "Patrol Unit A", status: "Active", battery: "82%" },
  { id: "R-02", name: "Inspect Unit B", status: "Active", battery: "67%" },
  { id: "R-03", name: "Survey Unit C", status: "Idle", battery: "94%" },
  { id: "R-04", name: "Patrol Unit D", status: "Charging", battery: "41%" },
];

const timeline = [
  { time: "09:00", event: "Zone A patrol started", type: "mission" },
  { time: "09:42", event: "Object detected — Gate 3", type: "alert" },
  { time: "10:15", event: "Mission checkpoint reached", type: "mission" },
  { time: "10:30", event: "Risk zone warning cleared", type: "safety" },
];

export function PlatformInterfacePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("overflow-hidden", tc.mockup)}
    >
      <div className={cn("flex items-center gap-2 px-4 py-3", tc.mockupInner)}>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-amber-400/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        </div>
        <span className="ml-2 text-xs text-foreground-muted">
          nexabot.ai/operations
        </span>
      </div>

      <div className="grid gap-0 lg:grid-cols-12">
        {/* Fleet map */}
        <div className="border-b border-border p-4 lg:col-span-5 lg:border-b-0 lg:border-r">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-foreground-muted">
            Fleet Map
          </p>
          <div className="relative aspect-[4/3] rounded-xl border border-border bg-background-muted/50">
            <div className="absolute inset-0 grid-bg-sm opacity-60" />
            {[20, 45, 70, 35, 60].map((x, i) => (
              <div
                key={i}
                className="absolute h-3 w-3 rounded-full bg-accent ring-2 ring-accent/30"
                style={{ left: `${x}%`, top: `${25 + i * 12}%` }}
              />
            ))}
            <div className="absolute bottom-2 left-2 rounded bg-card/90 px-2 py-1 text-[10px] text-foreground-muted backdrop-blur-sm">
              4 robots tracked
            </div>
          </div>
        </div>

        {/* Right panels */}
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2">
            {/* Mission timeline */}
            <div className="border-b border-border p-4 sm:border-r">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-foreground-muted">
                Mission Timeline
              </p>
              <div className="space-y-2">
                {timeline.map((item) => (
                  <div
                    key={item.time + item.event}
                    className="flex gap-2 text-xs"
                  >
                    <span className="shrink-0 font-mono text-foreground-muted">
                      {item.time}
                    </span>
                    <span className="text-foreground-secondary">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Robot list */}
            <div className="border-b border-border p-4">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-foreground-muted">
                Robot / Device List
              </p>
              <div className="space-y-2">
                {robots.map((r) => (
                  <div
                    key={r.id}
                    className="flex items-center justify-between rounded-lg border border-border bg-background-muted/30 px-3 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <Bot className="h-3.5 w-3.5 text-accent" />
                      <div>
                        <p className="text-xs font-medium text-foreground">{r.name}</p>
                        <p className="text-[10px] text-foreground-muted">{r.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-foreground-muted">{r.status}</p>
                      <p className="text-[10px] text-accent">{r.battery}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI detection */}
            <div className="border-b border-border p-4 sm:border-r lg:border-b-0">
              <p className="mb-3 flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-foreground-muted">
                <ScanEye className="h-3.5 w-3.5" /> Live AI Detection
              </p>
              <div className="space-y-2">
                {["Person — Zone B", "Vehicle — Perimeter", "Asset — Gate 3"].map(
                  (d) => (
                    <div
                      key={d}
                      className="flex items-center justify-between rounded border border-border px-3 py-2 text-xs"
                    >
                      <span className="text-foreground-secondary">{d}</span>
                      <span className="text-emerald-500 dark:text-emerald-400">98%</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Alerts + analytics */}
            <div className="p-4">
              <p className="mb-3 flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-foreground-muted">
                <Bell className="h-3.5 w-3.5" /> Alerts & Analytics
              </p>
              <div className="mb-3 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-xs text-amber-600 dark:text-amber-400">
                Risk zone proximity — Unit B
              </div>
              <div className="flex h-16 items-end gap-1">
                {[40, 55, 48, 72, 65, 88, 78].map((h, j) => (
                  <div
                    key={j}
                    className="flex-1 rounded-sm bg-gradient-to-t from-accent to-accent/40"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <p className="mt-2 text-[10px] text-foreground-muted">
                Mission throughput — last 7 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
