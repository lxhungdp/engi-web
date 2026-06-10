import { SupportPageContent } from "@/components/company/SupportPageContent";
import { getInquiryProducts } from "@/lib/adapters/company";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Support — ARGOSDYNE",
  description: "ArgosCare plans, warranty terms, and product support from ARGOSDYNE.",
  path: "/support",
});

export default async function SupportPage() {
  const inquiryProducts = await getInquiryProducts();
  return <SupportPageContent inquiryProducts={inquiryProducts} />;
}
