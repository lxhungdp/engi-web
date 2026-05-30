"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CompanyProduct } from "@/lib/types/company";
import { companyRoutes } from "@/lib/data/company/site";
import { ProductImage } from "@/components/company/DroneVisual";
import { CTASection } from "@/components/company/CTASection";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ProductDetailContent({ product }: { product: CompanyProduct }) {
  return (
    <>
      <section className="relative pt-28 pb-12 lg:pt-32">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {product.image ? (
            <ProductImage
              src={product.image}
              alt={product.name}
              className="aspect-[4/3] rounded-2xl border border-border"
              priority
            />
          ) : null}
          <div>
            <span className={cn(tc.eyebrow, "uppercase")}>{product.category}</span>
            <h1 className="font-heading mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {product.name}
            </h1>
            <p className={cn("mt-2 text-lg text-accent", tc.body)}>{product.tagline}</p>
            <p className={cn("mt-4", tc.body)}>{product.description}</p>
            <Link href={companyRoutes.contact} className={cn(tc.btnPrimary, "mt-8 inline-flex gap-2")}>
              Inquiry
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {product.specs && (
        <section className={cn(tc.section, tc.sectionAlt)}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <dl className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", tc.card, "p-6")}>
              {product.specs.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <dt className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
                    {s.label}
                  </dt>
                  <dd className="font-heading mt-1 text-xl font-bold text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {product.detailSections?.map((section) => (
        <section
          key={section.title}
          className={cn(tc.section, product.detailSections!.indexOf(section) % 2 === 0 ? "" : tc.sectionAlt)}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className={section.image ? "order-2 lg:order-1" : ""}>
              <h2 className={tc.headingLg}>{section.title}</h2>
              <p className={cn("mt-4", tc.body)}>{section.description}</p>
              {section.specs && (
                <dl className="mt-6 space-y-3">
                  {section.specs.map((s) => (
                    <div key={s.label} className="flex justify-between gap-4 text-sm">
                      <dt className="text-foreground-muted">{s.label}</dt>
                      <dd className="font-medium text-foreground">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
            {section.image && (
              <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-xl border border-border bg-background-muted/20 lg:order-2">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
        </section>
      ))}

      {product.gallery && product.gallery.length > 0 && (
        <section className={cn(tc.section, tc.sectionAlt)}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className={cn("text-center", tc.headingLg)}>Key features</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.gallery.map((img) => (
                <div
                  key={img}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-background-muted/20"
                >
                  <Image src={img} alt={product.name} fill className="object-contain p-2" sizes="33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {!product.gallery && product.features.length > 0 && (
        <section className={cn(tc.section, tc.sectionAlt)}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className={cn("text-center", tc.headingLg)}>Key features</h2>
            <ul className="mt-8 space-y-2.5">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTASection
        title={`Interested in ${product.name}?`}
        description="Submit an inquiry and our team will respond to your product request."
        primaryLabel="Inquiry"
      />
    </>
  );
}
