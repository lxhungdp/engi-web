import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { ProductDetailContent } from "@/components/company/ProductDetailContent";
import { getProductBySlug, products } from "@/lib/data/companyContent";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product — ARGOSDYNE" };
  return {
    title: `${product.name} — ARGOSDYNE`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <MainNavbar />
      <main className="relative flex-1">
        <ProductDetailContent product={product} />
      </main>
      <MainFooter />
    </>
  );
}
