"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { companyRoutes } from "@/lib/data/company/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "Ready to modernize your field operations?",
  description = "Talk with our team about drone platforms, autonomous stations, and mission control for your environment.",
  primaryLabel = "Contact Us",
  primaryHref = companyRoutes.contact,
  secondaryLabel = "Explore Products",
  secondaryHref = companyRoutes.product,
}: CTASectionProps) {
  return (
    <section className={cn(tc.section)}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className={cn("rounded-2xl px-8 py-14", tc.ctaPanel)}>
          <h2 className={tc.headingLg}>{title}</h2>
          <p className={cn("mx-auto mt-4 max-w-lg", tc.body)}>{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className={tc.btnPrimary}>
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
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
