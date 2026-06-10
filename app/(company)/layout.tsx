import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 grid-bg" />
      <div className="pointer-events-none fixed top-0 inset-x-0 h-px glow-line" />

      <MainNavbar />
      <main className="relative flex-1">{children}</main>
      <MainFooter />
    </>
  );
}
