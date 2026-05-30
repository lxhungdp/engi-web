import type { Metadata } from "next";
import { UseCasesPageContent } from "@/components/demos/autonomy-tech/UseCasesPageContent";
import { useCasesHero } from "@/lib/data/autonomy-tech/use-cases-data";

export const metadata: Metadata = {
  title: "Use Cases — NexaBot AI",
  description: useCasesHero.description,
};

export default function UseCasesPage() {
  return <UseCasesPageContent />;
}
