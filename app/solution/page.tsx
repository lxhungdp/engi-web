import type { Metadata } from "next";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { SolutionPageContent } from "@/components/company/SolutionPageContent";

export const metadata: Metadata = {
  title: "Solution — ARGOSDYNE",
  description: "Discover the various solutions provided by Argosdyne.",
};

export default function SolutionPage() {
  return (
    <>
      <MainNavbar />
      <main className="relative flex-1">
        <SolutionPageContent />
      </main>
      <MainFooter />
    </>
  );
}
