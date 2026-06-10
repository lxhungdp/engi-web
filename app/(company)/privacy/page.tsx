import { PrivacyPageContent } from "@/components/company/PrivacyPageContent";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Privacy Policy — ARGOSDYNE",
  description: "Privacy policy for ARGOSDYNE website inquiries and customer data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}
