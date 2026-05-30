import { DemoNavbar } from "@/components/demos/product-launch/DemoNavbar";
import { DemoFooter } from "@/components/demos/product-launch/DemoFooter";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export default function ProductLaunchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 grid-bg-sm" />
      <div className="pointer-events-none fixed top-0 inset-x-0 h-px glow-line" />
      <DemoNavbar />
      <main className={cn("relative min-h-screen", tc.page, tc.demoMain)}>{children}</main>
      <DemoFooter />
    </>
  );
}
