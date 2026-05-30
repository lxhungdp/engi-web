"use client";

import { motion } from "framer-motion";
import type { DroneApplication } from "@/lib/types/industrial-product";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

interface DroneApplicationCardProps {
  application: DroneApplication;
  index?: number;
  variant?: "home" | "detail";
}

export function DroneApplicationCard({
  application,
  index = 0,
  variant = "home",
}: DroneApplicationCardProps) {
  const Icon = getDemoIcon(application.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={cn(tc.card, tc.cardHover, "flex flex-col p-6")}
    >
      <div className={tc.iconBoxSm}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-heading mt-4 font-semibold text-foreground">
        {application.title}
      </h3>

      {variant === "home" ? (
        <>
          <p className={cn("mt-2 text-sm", tc.body)}>
            <span className="font-medium text-foreground-secondary">Problem: </span>
            {application.problem}
          </p>
          <p className={cn("mt-3 text-sm", tc.body)}>
            <span className="font-medium text-foreground-secondary">How drones help: </span>
            {application.howItHelps}
          </p>
        </>
      ) : (
        <>
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-foreground-muted">
            Mission goal
          </p>
          <p className={cn("mt-1 text-sm", tc.body)}>{application.problem}</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wider text-foreground-muted">
            Data captured
          </p>
          <p className={cn("mt-1 text-sm", tc.body)}>{application.howItHelps}</p>
        </>
      )}

      <div className="mt-4 rounded-lg border border-accent/15 bg-accent/5 px-3 py-2">
        <p className="text-xs font-medium text-accent">Typical output</p>
        <p className="mt-1 text-xs text-foreground-secondary">
          {application.typicalOutput}
        </p>
      </div>
    </motion.div>
  );
}
