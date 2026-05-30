import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/demos/industrial-product/ProductCard";
import { ProductSpecTable } from "@/components/demos/industrial-product/ProductSpecTable";
import { ProductVisual } from "@/components/demos/industrial-product/ProductVisual";
import { SectionHeading } from "@/components/demos/industrial-product/SectionHeading";
import { getProductBySlug } from "@/lib/data/industrial-product/products";
import type { IndustrialProduct } from "@/lib/types/industrial-product";
import { industrialRoutes } from "@/lib/data/industrial-product/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function GenericProductPage({ product }: { product: IndustrialProduct }) {
  const related = product.relatedProducts
    .map((s) => getProductBySlug(s))
    .filter(Boolean);

  return (
    <>
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                {product.category}
              </span>
              <h1 className="font-heading mt-4 text-4xl font-bold text-foreground sm:text-5xl">
                {product.name}
              </h1>
              <p className="font-heading mt-3 text-xl text-accent">{product.tagline}</p>
              <p className={cn("mt-4 text-base leading-relaxed", tc.body)}>
                {product.longDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={industrialRoutes.contact} className={tc.btnPrimary}>
                  Request Quote
                </Link>
                <Link href={industrialRoutes.products} className={tc.btnSecondary}>
                  Compare Products
                </Link>
              </div>
            </div>
            <ProductVisual product={product} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title="Key features" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((f) => (
              <div key={f} className={cn(tc.card, "p-5")}>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <p className="mt-3 text-sm font-medium text-foreground">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-16", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title="Applications" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.applications.map((app) => (
              <div
                key={app}
                className={cn(tc.cardSubtle, "p-4 text-sm font-medium text-foreground")}
              >
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title="Technical specifications" />
          <div className="mt-10">
            <ProductSpecTable specs={product.specifications} />
          </div>
        </div>
      </section>

      <section className={cn("py-16", tc.sectionAlt)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading align="left" title="Field workflow" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.workflow.map((step) => (
              <div key={step.step} className={cn(tc.card, "p-5")}>
                <span className="font-heading text-2xl font-bold text-accent">
                  {step.step}
                </span>
                <h3 className="font-heading mt-2 font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className={cn("mt-2 text-sm", tc.body)}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading align="left" title="Related products" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map(
                (p, i) =>
                  p && (
                    <ProductCard key={p.slug} product={p} index={i} variant="related" />
                  ),
              )}
            </div>
          </div>
        </section>
      )}

      <section className="pb-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className={cn("rounded-2xl px-8 py-10", tc.ctaPanel)}>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Request a product consultation
            </h2>
            <Link
              href={industrialRoutes.contact}
              className={cn(tc.btnPrimary, "mt-6 inline-flex")}
            >
              Contact Vertex Systems
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
