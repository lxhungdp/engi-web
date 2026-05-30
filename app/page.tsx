import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ThemePreviewSection } from "@/components/ThemePreviewSection";
import { ServicesSection } from "@/components/ServicesSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { DemoGallery } from "@/components/DemoGallery";
import { WhyEngiWeb } from "@/components/WhyEngiWeb";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 grid-bg" />
      <div className="pointer-events-none fixed top-0 inset-x-0 h-px glow-line" />

      <Navbar />

      <main className="relative flex-1">
        <HeroSection />
        <ThemePreviewSection />
        <ServicesSection />
        <IndustriesSection />
        <DemoGallery />
        <WhyEngiWeb />
        <ProcessSection />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
