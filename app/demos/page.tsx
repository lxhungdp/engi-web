import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { demos } from "@/lib/data/demos";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Demos — EngiWeb",
  description: "Explore website demo styles for technical industries.",
};

export default function DemosPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className={cn("text-4xl", tc.headingLg)}>Website Demos</h1>
          <p className={cn("mt-4 max-w-2xl", tc.body)}>
            Explore live demo websites built by EngiWeb to showcase different
            styles for technical industries.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo) => (
              <article
                key={demo.id}
                className={cn("surface-card p-6", tc.cardHover)}
              >
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {demo.styleTag}
                </span>
                <h2 className={cn("mt-3 text-lg font-semibold", tc.heading)}>
                  {demo.title}
                </h2>
                <p className={cn("mt-2 text-sm", tc.body)}>{demo.description}</p>
                {demo.href ? (
                  <Link
                    href={demo.href}
                    className={cn(
                      "mt-4 inline-flex items-center gap-2",
                      tc.linkAccent,
                    )}
                  >
                    View Demo <ExternalLink className="h-4 w-4" />
                  </Link>
                ) : (
                  <span
                    className={cn(
                      "mt-4 inline-flex items-center gap-2 text-sm",
                      tc.bodySecondary,
                    )}
                  >
                    Coming soon
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
