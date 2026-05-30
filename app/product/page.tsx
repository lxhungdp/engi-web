import type { Metadata } from "next";
import { MainNavbar } from "@/components/MainNavbar";
import { MainFooter } from "@/components/MainFooter";
import { ProductPageContent } from "@/components/company/ProductPageContent";

export const metadata: Metadata = {
  title: "Product — ARGOSDYNE",
  description: "Introducing the products of Argosdyne. AQUILA-2, CUNA2, argosALES and more.",
};

export default function ProductPage() {
  return (
    <>
      <MainNavbar />
      <main className="relative flex-1">
        <ProductPageContent />
      </main>
      <MainFooter />
    </>
  );
}
