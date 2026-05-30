import { AutonomyDemoNavbar } from "@/components/demos/autonomy-tech/AutonomyDemoNavbar";
import { DemoFooter } from "@/components/demos/autonomy-tech/DemoFooter";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

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
      <main className={cn("relative min-h-screen", tc.page, tc.demoMain)}>{children}</main>
      <DemoFooter />
    </>
  );
}
