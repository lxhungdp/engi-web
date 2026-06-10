import { NewsPageContent } from "@/components/company/NewsPageContent";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "News — ARGOSDYNE",
  description: "Discover the latest news from Argosdyne.",
  path: "/news",
});

export default function NewsPage() {
  return <NewsPageContent />;
}
