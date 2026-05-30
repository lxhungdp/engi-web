import { BioTechDemoNavbar } from "@/components/demos/biotech-research/BioTechDemoNavbar";
import { BioTechDemoFooter } from "@/components/demos/biotech-research/BioTechDemoFooter";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export default function BioTechResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 molecule-pattern opacity-80" />
      <div className="pointer-events-none fixed inset-0 grid-bg-sm opacity-30" />
      <BioTechDemoNavbar />
      <main className={cn("relative min-h-screen", tc.page, tc.demoMain)}>{children}</main>
      <BioTechDemoFooter />
    </>
  );
}
