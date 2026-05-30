"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Network,
  ScanEye,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { capabilities } from "@/lib/data/autonomy-tech/nexabot";
import { SectionHeading } from "./SectionHeading";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  ScanEye,
  Workflow,
  Network,
  Cloud,
  ShieldCheck,
  Code2,
};

export function CapabilitiesSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything your autonomous system needs to operate safely."
          />
        </motion.div>

        <div className="mt-14 grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon] ?? ScanEye;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={cn(
                  "group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300",
                  "hover:border-accent/30 hover:shadow-card-hover",
                  cap.span === "wide" && "lg:col-span-2",
                  cap.span === "tall" && "lg:row-span-2 lg:justify-between",
                )}
              >
                <div className={tc.iconBox}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className={cap.span === "tall" ? "mt-auto" : "mt-4"}>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {cap.title}
                  </h3>
                  <p className={cn("mt-2 text-sm leading-relaxed", tc.body)}>
                    {cap.description}
                  </p>
                </div>
                {cap.span === "tall" && (
                  <div className="mt-6 rounded-xl border border-border bg-background-muted/50 p-4">
                    <div className="space-y-2">
                      {["Robot A — Patrol", "Robot B — Inspect", "Robot C — Standby"].map(
                        (r) => (
                          <div
                            key={r}
                            className="flex items-center justify-between text-xs text-foreground-secondary"
                          >
                            <span>{r}</span>
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
