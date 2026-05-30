"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks, productInfo } from "@/lib/data/product-launch/aerovolt-x1";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function DemoNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            href="#"
            className="font-heading min-w-0 truncate text-base font-bold tracking-tight text-foreground sm:max-w-[12rem] lg:max-w-none lg:text-lg"
          >
            {productInfo.name}
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={cn("whitespace-nowrap", tc.link)}>
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="rounded-lg p-2 text-foreground-muted transition-colors hover:text-foreground"
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
            className={cn("overflow-hidden md:hidden", tc.navMobile)}
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-sm text-foreground-secondary transition-colors hover:bg-background-muted hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
