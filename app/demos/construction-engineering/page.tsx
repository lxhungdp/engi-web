import type { Metadata } from "next";
import { ConstructionHero } from "@/components/demos/construction-engineering/ConstructionHero";
import { StatsStrip } from "@/components/demos/construction-engineering/StatsStrip";
import { ConstructionCTA } from "@/components/demos/construction-engineering/ConstructionCTA";
import {
  CapabilitiesSection,
  DeliveryProcessSection,
  FeaturedProjectsSection,
  SafetyQualitySection,
  SectorsOverviewSection,
  ServicesOverviewSection,
} from "@/components/demos/construction-engineering/HomeSections";
import { constructionStats } from "@/lib/data/construction-engineering/homepage";
import { companyInfo } from "@/lib/data/construction-engineering/site";

export const metadata: Metadata = {
  title: `${companyInfo.name} — Construction & Infrastructure Engineering`,
  description: companyInfo.positioning,
};

export default function ConstructionEngineeringHomePage() {
  return (
    <>
      <ConstructionHero />
      <StatsStrip
        stats={constructionStats}
        title="Trusted for complex engineering and construction delivery."
      />
      <ServicesOverviewSection />
      <FeaturedProjectsSection />
      <SectorsOverviewSection />
      <DeliveryProcessSection />
      <CapabilitiesSection />
      <SafetyQualitySection />
      <ConstructionCTA />
    </>
  );
}
