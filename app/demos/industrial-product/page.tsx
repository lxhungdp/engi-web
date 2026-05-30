import type { Metadata } from "next";
import { HomeHero } from "@/components/demos/industrial-product/HomeHero";
import {
  ComparisonPreviewSection,
  IndustrialCTA,
  IndustriesSection,
  ProductOverviewSection,
  UseCasesPreviewSection,
  WorkflowSection,
} from "@/components/demos/industrial-product/HomeSections";
import { companyInfo } from "@/lib/data/industrial-product/site";

export const metadata: Metadata = {
  title: `${companyInfo.shortName} — Industrial Technology Products`,
  description: companyInfo.positioning,
};

export default function IndustrialProductHomePage() {
  return (
    <>
      <HomeHero />
      <ProductOverviewSection />
      <IndustriesSection />
      <UseCasesPreviewSection />
      <ComparisonPreviewSection />
      <WorkflowSection />
      <IndustrialCTA />
    </>
  );
}
