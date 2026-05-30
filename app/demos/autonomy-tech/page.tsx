import type { Metadata } from "next";
import { HeroSection } from "@/components/demos/autonomy-tech/HeroSection";
import { CredibilityStrip } from "@/components/demos/autonomy-tech/CredibilityStrip";
import { ProductPreviewSection } from "@/components/demos/autonomy-tech/ProductPreviewSection";
import { CapabilitiesSection } from "@/components/demos/autonomy-tech/CapabilitiesSection";
import { UseCasesSection } from "@/components/demos/autonomy-tech/UseCasesSection";
import { ArchitectureSection } from "@/components/demos/autonomy-tech/ArchitectureSection";
import { MetricsSection } from "@/components/demos/autonomy-tech/MetricsSection";
import { IntegrationsSection } from "@/components/demos/autonomy-tech/IntegrationsSection";
import { DeploymentSection } from "@/components/demos/autonomy-tech/DeploymentSection";
import { CTASection } from "@/components/demos/autonomy-tech/CTASection";
import { productInfo } from "@/lib/data/autonomy-tech/site";

export const metadata: Metadata = {
  title: `${productInfo.name} — Autonomous Robotics Platform`,
  description: productInfo.positioning,
};

export default function AutonomyTechHomePage() {
  return (
    <>
      <HeroSection />
      <CredibilityStrip />
      <ProductPreviewSection />
      <CapabilitiesSection />
      <UseCasesSection preview />
      <ArchitectureSection preview />
      <MetricsSection />
      <IntegrationsSection />
      <DeploymentSection preview />
      <CTASection />
    </>
  );
}
