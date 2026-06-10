import { SolutionPageContent } from "@/components/company/SolutionPageContent";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Solution — ARGOSDYNE",
  description: "Discover the various solutions provided by Argosdyne.",
  path: "/solution",
});

export default function SolutionPage() {
  return <SolutionPageContent />;
}
