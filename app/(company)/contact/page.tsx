import { ContactPageContent } from "@/components/company/ContactPageContent";
import { getInquiryProducts } from "@/lib/adapters/company";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Inquiry — ARGOSDYNE",
  description: "Submit a product inquiry to ARGOSDYNE.",
  path: "/contact",
});

export default async function ContactPage() {
  const inquiryProducts = await getInquiryProducts();
  return <ContactPageContent inquiryProducts={inquiryProducts} />;
}
