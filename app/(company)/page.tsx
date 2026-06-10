import {
  HomeHero,
  ProductPreviewSection,
  SolutionPreviewSection,
  PartnersSection,
  NewsSection,
  SupportPreviewSection,
} from "@/components/company/HomeSections";
import { CTASection } from "@/components/company/CTASection";
import { getProducts } from "@/lib/adapters/company";
import { buildPageMetadata, siteMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: siteMetadata.title,
  description: siteMetadata.description,
  path: "/",
});

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <HomeHero />
      <ProductPreviewSection products={products} />
      <SolutionPreviewSection />
      <PartnersSection />
      <NewsSection />
      <SupportPreviewSection />
      <CTASection
        title="INNOVATING DRONE TECHNOLOGY"
        description="ARGOSDYNE, an autonomous flying drone control solution company."
        primaryLabel="Inquiry"
      />
    </>
  );
}
