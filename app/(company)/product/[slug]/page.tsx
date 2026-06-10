import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailContent } from "@/components/company/ProductDetailContent";
import { getProductBySlug, getProductSlugs } from "@/lib/adapters/company";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  const slugs = await getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Product — ARGOSDYNE" };

  return buildPageMetadata({
    title: `${product.name} — ARGOSDYNE`,
    description: product.description,
    path: `/product/${slug}`,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetailContent product={product} />;
}
