import Link from "next/link";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function BioTechDemoFooter() {
  return (
    <footer className={cn("border-t border-border bg-footer py-10")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className={cn("text-center text-sm", tc.body)}>
          This is a demo biotech research website created by EngiWeb to showcase a modern
          scientific website style for biotech, diagnostics, and life science companies.
        </p>
        <p className="mt-4 text-center">
          <Link href="/" className={cn("text-sm font-medium", tc.linkAccent)}>
            Back to EngiWeb
          </Link>
        </p>
      </div>
    </footer>
  );
}
