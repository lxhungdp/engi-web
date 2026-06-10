import { SolutionPageContent } from "@/components/company/SolutionPageContent";
import { getSolutions } from "@/lib/adapters/company";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Solution — ARGOSDYNE",
  description: "Discover the various solutions provided by Argosdyne.",
  path: "/solution",
});

export default async function SolutionPage() {
  const solutions = await getSolutions();
  return <SolutionPageContent solutions={solutions} />;
}
