import { ProductPageContent } from "@/components/company/ProductPageContent";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Product — ARGOSDYNE",
  description:
    "Introducing the products of Argosdyne. AQUILA-2, CUNA2, argosALES and more.",
  path: "/product",
});

export default function ProductPage() {
  return <ProductPageContent />;
}
