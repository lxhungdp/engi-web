import { SupportPageContent } from "@/components/company/SupportPageContent";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Support — ARGOSDYNE",
  description: "ArgosCare plans, warranty terms, and product support from ARGOSDYNE.",
  path: "/support",
});

export default function SupportPage() {
  return <SupportPageContent />;
}
