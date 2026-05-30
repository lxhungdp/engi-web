import { ConstructionDemoNavbar } from "@/components/demos/construction-engineering/ConstructionDemoNavbar";
import { ConstructionDemoFooter } from "@/components/demos/construction-engineering/ConstructionDemoFooter";
import { tc } from "@/lib/theme-classes";

export default function ConstructionEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 blueprint-lines opacity-40" />
      <ConstructionDemoNavbar />
      <main className={`relative min-h-screen ${tc.page}`}>{children}</main>
      <ConstructionDemoFooter />
    </>
  );
}
