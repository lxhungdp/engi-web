import type { Metadata } from "next";
import { HeroSection } from "@/components/demos/product-launch/HeroSection";
import { MetricsStrip } from "@/components/demos/product-launch/MetricsStrip";
import { FeaturesSection } from "@/components/demos/product-launch/FeaturesSection";
import { UseCasesSection } from "@/components/demos/product-launch/UseCasesSection";
import { SpecsSection } from "@/components/demos/product-launch/SpecsSection";
import { WorkflowSection } from "@/components/demos/product-launch/WorkflowSection";
import { ProductModelsSection } from "@/components/demos/product-launch/ProductModelsSection";
import { CTASection } from "@/components/demos/product-launch/CTASection";
import { productInfo } from "@/lib/data/product-launch/aerovolt-x1";

export const metadata: Metadata = {
  title: `${productInfo.name} — Autonomous Industrial Drone`,
  description: productInfo.positioning,
};

export default function ProductLaunchDemoPage() {
  return (
    <>
      <HeroSection />
      <MetricsStrip />
      <FeaturesSection />
      <UseCasesSection />
      <SpecsSection />
      <WorkflowSection />
      <ProductModelsSection />
      <CTASection />
    </>
  );
}
