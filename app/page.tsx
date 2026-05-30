import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import {
  HomeHero,
  ProductPreviewSection,
  SolutionPreviewSection,
  PartnersSection,
  NewsSection,
  SupportPreviewSection,
} from "@/components/company/HomeSections";
import { CTASection } from "@/components/company/CTASection";

export default function Home() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 grid-bg" />
      <div className="pointer-events-none fixed top-0 inset-x-0 h-px glow-line" />

      <MainNavbar />

      <main className="relative flex-1">
        <HomeHero />
        <ProductPreviewSection />
        <SolutionPreviewSection />
        <PartnersSection />
        <NewsSection />
        <SupportPreviewSection />
        <CTASection
          title="INNOVATING DRONE TECHNOLOGY"
          description="ARGOSDYNE, an autonomous flying drone control solution company."
          primaryLabel="Inquiry"
        />
      </main>

      <MainFooter />
    </>
  );
}
