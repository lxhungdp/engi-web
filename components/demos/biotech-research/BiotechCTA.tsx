"use client";

import Link from "next/link";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function BiotechCTA({
  title = "Need a biotech research website like this?",
  description = "This demo shows how EngiWeb can design a modern website for biotech companies, diagnostic labs, research teams, and life science technology businesses.",
  primaryHref = "/",
  primaryLabel = "Back to EngiWeb",
  secondaryHref = "/contact",
  secondaryLabel = "Request a Website Like This",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className={cn(tc.section)}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className={cn("rounded-3xl px-8 py-14", tc.ctaPanel)}>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
          <p className={cn("mx-auto mt-4 max-w-xl", tc.body)}>{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className={tc.btnPrimary}>{primaryLabel}</Link>
            <Link href={secondaryHref} className={tc.btnSecondary}>{secondaryLabel}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
