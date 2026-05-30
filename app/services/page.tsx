import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { servicePackages } from "@/lib/data/services";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Services — EngiWeb",
  description: "Website packages built for technical and engineering teams.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className={cn("text-4xl", tc.headingLg)}>Services & Packages</h1>
          <p className={cn("mt-4 max-w-2xl", tc.body)}>
            Productized website packages with clear deliverables for technical
            businesses.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {servicePackages.map((pkg) => (
              <article
                key={pkg.id}
                className={cn("surface-card p-8", tc.cardHover)}
              >
                <h2 className={cn("text-xl font-semibold", tc.heading)}>
                  {pkg.name}
                </h2>
                <p className={cn("mt-2 text-sm", tc.body)}>{pkg.description}</p>
                <ul className="mt-6 space-y-2">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        "flex items-start gap-2 text-sm",
                        tc.bodySecondary,
                      )}
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(
                    "mt-6 inline-flex items-center gap-2 font-medium",
                    tc.linkAccent,
                  )}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
