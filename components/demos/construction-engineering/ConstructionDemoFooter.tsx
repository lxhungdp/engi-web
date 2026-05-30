import Link from "next/link";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export function ConstructionDemoFooter() {
  return (
    <footer className={cn("border-t border-border bg-footer py-10")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className={cn("text-center text-sm", tc.body)}>
          This is a demo construction engineering website created by EngiWeb to
          showcase a professional corporate website style for infrastructure and
          civil engineering companies.
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
