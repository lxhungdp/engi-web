import { AutonomyDemoNavbar } from "@/components/demos/autonomy-tech/AutonomyDemoNavbar";
import { DemoFooter } from "@/components/demos/autonomy-tech/DemoFooter";
import { tc } from "@/lib/theme-classes";

export default function AutonomyTechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 grid-bg-sm" />
      <div className="pointer-events-none fixed top-0 inset-x-0 h-px glow-line" />
      <AutonomyDemoNavbar />
      <main className={`relative min-h-screen ${tc.page}`}>{children}</main>
      <DemoFooter />
    </>
  );
}
