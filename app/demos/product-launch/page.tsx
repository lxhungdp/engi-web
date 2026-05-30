import type { Metadata } from "next";
import { DemoNavbar } from "@/components/demos/product-launch/DemoNavbar";
import { HeroSection } from "@/components/demos/product-launch/HeroSection";
import { MetricsStrip } from "@/components/demos/product-launch/MetricsStrip";
import { FeaturesSection } from "@/components/demos/product-launch/FeaturesSection";
import { UseCasesSection } from "@/components/demos/product-launch/UseCasesSection";
import { SpecsSection } from "@/components/demos/product-launch/SpecsSection";
import { WorkflowSection } from "@/components/demos/product-launch/WorkflowSection";
import { ProductModelsSection } from "@/components/demos/product-launch/ProductModelsSection";
import { CTASection } from "@/components/demos/product-launch/CTASection";
import { DemoFooter } from "@/components/demos/product-launch/DemoFooter";
import { productInfo } from "@/lib/data/product-launch/aerovolt-x1";
import { tc } from "@/lib/theme-classes";

export const metadata: Metadata = {
  title: `${productInfo.name} — Autonomous Industrial Drone`,
  description: productInfo.positioning,
};

export default function ProductLaunchDemoPage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 grid-bg-sm" />
      <div className="pointer-events-none fixed top-0 inset-x-0 h-px glow-line" />

      <DemoNavbar />

      <main className={`relative min-h-screen ${tc.page}`}>
        <HeroSection />
        <MetricsStrip />
        <FeaturesSection />
        <UseCasesSection />
        <SpecsSection />
        <WorkflowSection />
        <ProductModelsSection />
        <CTASection />
      </main>

      <DemoFooter />
    </>
  );
}
