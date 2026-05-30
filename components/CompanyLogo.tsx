import Link from "next/link";
import { companyInfo, companyRoutes } from "@/lib/data/company/site";

/** Logo as plain img to preserve PNG transparency (Next/Image can flatten alpha). */
export function CompanyLogo({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href={companyRoutes.home} className="inline-flex shrink-0 items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={companyInfo.logo}
        alt={companyInfo.shortName}
        width={80}
        height={72}
        className={className}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
      />
    </Link>
  );
}
