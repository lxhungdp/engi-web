"use client";

import Link from "next/link";
import { industrialRoutes } from "@/lib/data/industrial-product/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

interface DroneCTAProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "engiweb" | "demo";
}

export function DroneCTA({
  title = "Like this smartphone product website?",
  description = "EngiWeb builds product-focused websites for device brands and consumer technology companies.",
  primaryLabel = "Back to EngiWeb",
  primaryHref = "/",
  secondaryLabel = "Request a Website Like This",
  secondaryHref = "/contact",
  variant = "engiweb",
}: DroneCTAProps) {
  if (variant === "demo") {
    return (
      <section id="contact" className="pb-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className={cn("rounded-2xl px-8 py-10", tc.ctaPanel)}>
            <h2 className="font-heading text-2xl font-bold text-foreground">{title}</h2>
            <p className={cn("mt-3 text-sm", tc.body)}>{description}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href={industrialRoutes.contact} className={tc.btnPrimary}>
                Pre-order
              </Link>
              <Link href={industrialRoutes.products} className={tc.btnSecondary}>
                View Models
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className={cn("rounded-3xl px-8 py-14", tc.ctaPanel)}>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className={cn("mx-auto mt-4 max-w-xl", tc.body)}>{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className={tc.btnPrimary}>
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className={tc.btnSecondary}>
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
