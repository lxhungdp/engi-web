import Link from "next/link";
import Image from "next/image";
import { companyInfo, companyRoutes } from "@/lib/data/company/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const footerContact = [
  { label: "Factory", value: companyInfo.factory },
  { label: "FAX", value: companyInfo.fax },
  {
    label: "TEL",
    value: `${companyInfo.phone} (${companyInfo.phoneHours})`,
  },
  { label: "MAIL", value: companyInfo.email, href: `mailto:${companyInfo.email}` },
] as const;

export function MainFooter() {
  return (
    <footer className="border-t border-border bg-footer">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
          <Link href={companyRoutes.home} className="shrink-0">
            <Image
              src={companyInfo.logo}
              alt={companyInfo.name}
              width={80}
              height={72}
              className="h-14 w-auto object-contain"
            />
          </Link>

          <ul className="space-y-3 text-sm">
            {footerContact.map((item) => (
              <li key={item.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                <span className="shrink-0 font-semibold text-foreground-secondary">
                  {item.label}
                </span>
                {"href" in item && item.href ? (
                  <a href={item.href} className={cn(tc.linkAccent, "break-all")}>
                    {item.value}
                  </a>
                ) : (
                  <span className={cn("text-foreground-secondary", tc.body)}>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-foreground-muted">{companyInfo.copyright}</p>
          <Link href={companyRoutes.contact} className="text-xs text-foreground-muted hover:text-foreground">
            privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
