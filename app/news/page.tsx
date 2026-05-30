import type { Metadata } from "next";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { NewsPageContent } from "@/components/company/NewsPageContent";

export const metadata: Metadata = {
  title: "News — ARGOSDYNE",
  description: "Discover the latest news from Argosdyne.",
};

export default function NewsPage() {
  return (
    <>
      <MainNavbar />
      <main className="relative flex-1">
        <NewsPageContent />
      </main>
      <MainFooter />
    </>
  );
}
