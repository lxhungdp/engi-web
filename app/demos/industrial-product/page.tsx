import type { Metadata } from "next";
import { DroneHero } from "@/components/demos/industrial-product/DroneHero";
import {
  ComparisonPreviewSection,
  DroneApplicationsSection,
  DroneModelPreviewSection,
  DroneWorkflowSection,
  IndustriesSection,
  IndustrialCTA,
  ProductEcosystemSection,
} from "@/components/demos/industrial-product/DroneHomeSections";
import { aeroSeriesInfo } from "@/lib/data/industrial-product/drone-data";
import { companyInfo } from "@/lib/data/industrial-product/site";

export const metadata: Metadata = {
  title: `${companyInfo.shortName} — ${aeroSeriesInfo.name}`,
  description: aeroSeriesInfo.description,
};

export default function IndustrialProductHomePage() {
  return (
    <>
      <DroneHero />
      <ProductEcosystemSection />
      <DroneModelPreviewSection />
      <IndustriesSection />
      <DroneApplicationsSection />
      <ComparisonPreviewSection />
      <DroneWorkflowSection />
      <IndustrialCTA />
    </>
  );
}
