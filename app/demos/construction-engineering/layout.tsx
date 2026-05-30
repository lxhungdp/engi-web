import { ConstructionDemoNavbar } from "@/components/demos/construction-engineering/ConstructionDemoNavbar";
import { ConstructionDemoFooter } from "@/components/demos/construction-engineering/ConstructionDemoFooter";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export default function ConstructionEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 blueprint-lines opacity-40" />
      <ConstructionDemoNavbar />
      <main className={cn("relative min-h-screen", tc.page, tc.demoMain)}>{children}</main>
      <ConstructionDemoFooter />
    </>
  );
}
