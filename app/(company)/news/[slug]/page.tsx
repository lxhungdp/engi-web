import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsDetailContent } from "@/components/company/NewsDetailContent";
import {
  getAllNewsSlugs,
  getNewsBySlug,
} from "@/lib/adapters/company";
import { buildPageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return { title: "News — ARGOSDYNE" };

  return buildPageMetadata({
    title: `${article.title} — ARGOSDYNE`,
    description: article.excerpt ?? article.title,
    path: `/news/${slug}`,
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  return <NewsDetailContent article={article} />;
}
