"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProductImage({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-background-muted/30", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-4"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
    </div>
  );
}

export function ProductVisualPlaceholder({
  label,
  image,
}: {
  label: string;
  image?: string;
}) {
  if (image) {
    return <ProductImage src={image} alt={label} className="aspect-[4/3] rounded-t-xl" />;
  }

  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-t-xl border-b border-border bg-background-muted/50">
      <p className="text-xs font-medium text-foreground-muted">{label}</p>
    </div>
  );
}
