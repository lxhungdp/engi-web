import type { Metadata } from "next";
import { DroneHero } from "@/components/demos/industrial-product/DroneHero";
import {
  IndustriesSection,
  IndustrialCTA,
  PhoneFeaturesSection,
  PhoneModelPreviewSection,
} from "@/components/demos/industrial-product/PhoneHomeSections";
import { phoneSeriesInfo } from "@/lib/data/industrial-product/phone-data";
import { companyInfo } from "@/lib/data/industrial-product/site";

export const metadata: Metadata = {
  title: `${companyInfo.shortName} — ${phoneSeriesInfo.name}`,
  description: phoneSeriesInfo.description,
};

export default function IndustrialProductHomePage() {
  return (
    <>
      <DroneHero />
      <PhoneModelPreviewSection />
      <PhoneFeaturesSection />
      <IndustriesSection />
      <IndustrialCTA
        title="Like this smartphone product website?"
        description="EngiWeb builds product-focused websites for device brands, hardware companies, and consumer technology businesses."
      />
    </>
  );
}
