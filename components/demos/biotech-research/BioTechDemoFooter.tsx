import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { companyInfo } from "@/lib/data/biotech-research/site";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function BioTechDemoFooter() {
  return (
    <footer className="border-t border-border bg-footer">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className={cn("text-lg font-semibold", tc.heading)}>
            {companyInfo.name}
          </p>
          <p className={cn("max-w-lg text-sm leading-relaxed", tc.body)}>
            This is a demo biotech research website created by{" "}
            <span className="text-accent">EngiWeb</span> to showcase a modern
            scientific website style for biotech, diagnostics, and life science
            companies.
          </p>
          <Link href="/" className={cn(tc.btnSecondary, "inline-flex gap-2")}>
            <ArrowLeft className="h-4 w-4" />
            Back to EngiWeb
          </Link>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-foreground-muted">
            &copy; {new Date().getFullYear()} HelixNova Biosciences Demo.
            Fictional company for demonstration purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
