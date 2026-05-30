import { IndustrialDemoNavbar } from "@/components/demos/industrial-product/IndustrialDemoNavbar";
import { IndustrialDemoFooter } from "@/components/demos/industrial-product/IndustrialDemoFooter";
import { tc } from "@/lib/theme-classes";

export default function IndustrialProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 grid-bg-sm" />
      <div className="pointer-events-none fixed top-0 inset-x-0 h-px glow-line" />
      <IndustrialDemoNavbar />
      <main className={`relative min-h-screen ${tc.page}`}>{children}</main>
      <IndustrialDemoFooter />
    </>
  );
}
