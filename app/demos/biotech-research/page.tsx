import type { Metadata } from "next";
import { BioTechHero } from "@/components/demos/biotech-research/BioTechHero";
import { ScientificMetricStrip } from "@/components/demos/biotech-research/ScientificMetricCard";
import { BiotechCTA } from "@/components/demos/biotech-research/BiotechCTA";
import {
  CaseStudiesPreviewSection,
  LabWorkflowSection,
  ResearchAreasSection,
  ServicesOverviewSection,
  TechnologySection,
  TrustSection,
} from "@/components/demos/biotech-research/HomeSections";
import { scientificMetrics } from "@/lib/data/biotech-research/homepage";
import { companyInfo } from "@/lib/data/biotech-research/site";

export const metadata: Metadata = {
  title: `${companyInfo.name} — BioTech Research`,
  description: companyInfo.positioning,
};

export default function BioTechHomePage() {
  return (
    <>
      <BioTechHero />
      <ScientificMetricStrip
        metrics={scientificMetrics}
        title="Built for research teams, laboratories, and clinical innovation."
      />
      <ResearchAreasSection />
      <ServicesOverviewSection />
      <TechnologySection />
      <LabWorkflowSection />
      <CaseStudiesPreviewSection />
      <TrustSection />
      <BiotechCTA />
    </>
  );
}
