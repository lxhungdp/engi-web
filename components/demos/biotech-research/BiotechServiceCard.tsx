"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { BiotechService } from "@/lib/types/biotech-research";
import { biotechRoutes } from "@/lib/data/biotech-research/site";
import { getDemoIcon } from "@/lib/demo-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function BiotechServiceCard({
  service,
  index = 0,
  detailed = false,
}: {
  service: BiotechService;
  index?: number;
  detailed?: boolean;
}) {
  const Icon = getDemoIcon(service.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={cn(tc.card, tc.cardHover, "flex flex-col p-6")}
    >
      <div className={tc.iconBox}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-heading mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
      <p className={cn("mt-2 flex-1 text-sm leading-relaxed", tc.body)}>
        {detailed ? service.longDescription : service.shortDescription}
      </p>

      {detailed && (
        <>
          <p className="mt-4 text-xs font-medium text-foreground-muted">Who it helps</p>
          <p className="mt-1 text-xs text-foreground-secondary">{service.whoItHelps}</p>
          <p className="mt-3 text-xs font-medium text-foreground-muted">Deliverables</p>
          <ul className="mt-1 space-y-1">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 text-xs text-foreground-secondary">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-accent">{service.relatedTechnologies.join(" · ")}</p>
        </>
      )}

      <Link
        href={biotechRoutes.services}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
      >
        {detailed ? "All services" : "View services"}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
