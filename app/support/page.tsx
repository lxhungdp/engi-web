import type { Metadata } from "next";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { SupportPageContent } from "@/components/company/SupportPageContent";

export const metadata: Metadata = {
  title: "Support — ARGOSDYNE",
  description: "ArgosCare customer service, Assurance warranty, and Inquiry for ARGOSDYNE products.",
};

export default function SupportPage() {
  return (
    <>
      <MainNavbar />
      <main className="relative flex-1">
        <SupportPageContent />
      </main>
      <MainFooter />
    </>
  );
}
