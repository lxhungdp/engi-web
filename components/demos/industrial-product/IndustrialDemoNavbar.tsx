"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  companyInfo,
  demoNavLinks,
  industrialRoutes,
} from "@/lib/data/industrial-product/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function IndustrialDemoNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const isActive = (href: string) => {
    if (href === industrialRoutes.droneSeries) {
      return pathname.includes("smart-inspection-drone");
    }
    if (href === industrialRoutes.droneComparison) {
      return pathname.includes("drone-comparison");
    }
    if (href === industrialRoutes.products) {
      return pathname.startsWith(href) && !pathname.includes("smart-inspection-drone");
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? tc.navScrolled : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Link href="/" className={cn("inline-flex shrink-0 items-center gap-1.5", tc.linkAccent)}>
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to EngiWeb</span>
            <span className="sm:hidden">EngiWeb</span>
          </Link>
          <span className="hidden h-4 w-px shrink-0 bg-border sm:block" aria-hidden="true" />
          <Link
            href={industrialRoutes.home}
            className="font-heading hidden min-w-0 truncate text-base font-bold tracking-tight text-foreground sm:block lg:text-lg"
          >
            {companyInfo.shortName}
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-4 xl:flex">
            {demoNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "whitespace-nowrap text-sm transition-colors",
                  isActive(link.href) ? "font-medium text-accent" : tc.link,
                )}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link href={industrialRoutes.contact} className={cn(tc.btnPrimary, "px-4 py-2 text-sm")}>
              Request Demo
            </Link>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="rounded-lg p-2 text-foreground-muted"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={cn("overflow-hidden xl:hidden", tc.navMobile)}
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              <Link href={industrialRoutes.home} className="mb-2 font-heading font-bold text-foreground sm:hidden">
                {companyInfo.shortName}
              </Link>
              {demoNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm hover:bg-background-muted",
                    isActive(link.href) ? "font-medium text-accent" : "text-foreground-secondary",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href={industrialRoutes.contact} className={cn(tc.btnPrimary, "mt-2 text-center")}>
                Request Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
