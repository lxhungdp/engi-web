import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { NewsItem } from "@/lib/types/company";
import { companyRoutes } from "@/lib/adapters/company";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function NewsDetailContent({ article }: { article: NewsItem }) {
  return (
    <article className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href={companyRoutes.news}
          className={cn(tc.linkAccent, "inline-flex items-center gap-2 text-sm")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to News
        </Link>

        <p className="mt-8 text-xs text-foreground-muted">
          {article.date} · {article.category}
        </p>
        <h1 className={cn("mt-3", tc.headingLg)}>{article.title}</h1>

        {article.image && (
          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-xl border border-border bg-background-muted/30">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        <div className={cn("mt-8 space-y-4", tc.bodyLg)}>
          {article.excerpt && (
            <p className="text-foreground-secondary">{article.excerpt}</p>
          )}
          {article.body && <p>{article.body}</p>}
        </div>
      </div>
    </article>
  );
}
