"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SupportItem } from "@/lib/types/company";
import { getCompanyIcon } from "@/lib/company-icons";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function SupportCard({ item }: { item: SupportItem }) {
  const Icon = getCompanyIcon(item.icon);
  const content = (
    <>
      <div className={tc.iconBox}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className={cn("font-heading mt-4 font-semibold", tc.heading)}>{item.title}</h3>
      <p className={cn("mt-2 flex-1 text-sm", tc.body)}>{item.description}</p>
      {item.href && (
        <span className={cn("mt-4 inline-flex items-center gap-1.5 text-sm", tc.linkAccent)}>
          Learn more
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      )}
    </>
  );

  if (item.href) {
    return (
      <Link href={item.href} className={cn("group flex flex-col p-6", tc.card, tc.cardHover)}>
        {content}
      </Link>
    );
  }

  return <article className={cn("flex flex-col p-6", tc.card)}>{content}</article>;
}
