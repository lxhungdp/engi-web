import Link from "next/link";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

const footerLinks = {
  pages: [
    { href: "/demos", label: "Demos" },
    { href: "/services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "Starter Website" },
    { href: "/services", label: "Technical Company Website" },
    { href: "/services", label: "Product Launch" },
    { href: "/services", label: "Web App Prototype" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-footer">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className={tc.iconBoxSm}>
                <span className="font-heading text-sm font-bold text-accent">
                  E
                </span>
              </div>
              <span className={cn("font-heading text-lg font-semibold", tc.heading)}>
                Engi<span className="text-accent">Web</span>
              </span>
            </Link>
            <p className={cn("mt-4 max-w-sm text-sm leading-relaxed", tc.body)}>
              Technical websites for engineering products and innovation-driven
              companies. Modern web experiences built for complex industries.
            </p>
          </div>

          <div>
            <h4 className={cn("text-sm font-semibold", tc.heading)}>Pages</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={tc.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={cn("text-sm font-semibold", tc.heading)}>Services</h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={tc.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-foreground-muted">
            &copy; {new Date().getFullYear()} EngiWeb. All rights reserved.
          </p>
          <p className="text-xs text-foreground-muted">engi-web.com</p>
        </div>
      </div>
    </footer>
  );
}
