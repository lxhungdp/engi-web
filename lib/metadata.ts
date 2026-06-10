import type { Metadata } from "next";
import { companyInfo } from "@/lib/data/company/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://argosdyne.com";

export const siteMetadata = {
  name: companyInfo.name,
  title: `${companyInfo.name} — ${companyInfo.tagline}`,
  description: companyInfo.description,
  url: siteUrl,
} as const;

export function buildPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteMetadata.url}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: siteMetadata.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
