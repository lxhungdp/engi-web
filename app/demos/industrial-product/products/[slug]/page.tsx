import { notFound } from "next/navigation";
import { AeroX2ProductPage } from "@/components/demos/industrial-product/AeroX2ProductPage";
import { GenericProductPage } from "@/components/demos/industrial-product/GenericProductPage";
import { aeroX2Info } from "@/lib/data/industrial-product/drone-data";
import {
  getProductBySlug,
  products,
} from "@/lib/data/industrial-product/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then((p) => {
    if (p.slug === "smart-inspection-drone") {
      return {
        title: `${aeroX2Info.name} — Vertex Systems`,
        description: aeroX2Info.description,
      };
    }
    const product = getProductBySlug(p.slug);
    if (!product) return { title: "Product Not Found" };
    return {
      title: `${product.name} — Vertex Systems`,
      description: product.shortDescription,
    };
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  if (slug === "smart-inspection-drone") {
    return <AeroX2ProductPage />;
  }

  return <GenericProductPage product={product} />;
}
