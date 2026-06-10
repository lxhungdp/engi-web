import { ContactPageContent } from "@/components/company/ContactPageContent";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Inquiry — ARGOSDYNE",
  description: "Submit a product inquiry to ARGOSDYNE.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
