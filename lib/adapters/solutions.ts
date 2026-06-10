import {
  fetchSolutionBySlug,
  fetchSolutions,
} from "@/lib/sanity/queries";
import {
  getSolutionBySlug as getStaticSolutionBySlug,
  solutions as staticSolutions,
} from "@/lib/data/companyContent";
import { isSanityConfigured } from "@/sanity/env";
import type { CompanySolution } from "@/lib/types/company";

function warnStaticFallback() {
  if (process.env.NODE_ENV === "production") {
    console.warn(
      "[argosdyne] NEXT_PUBLIC_SANITY_PROJECT_ID is not set — using static solution data. " +
        "Add Sanity env vars in Vercel → Settings → Environment Variables, then redeploy.",
    );
  }
}

export async function getSolutions(): Promise<CompanySolution[]> {
  if (!isSanityConfigured()) {
    warnStaticFallback();
    return staticSolutions;
  }
  return fetchSolutions();
}

export async function getSolutionBySlug(
  slug: string,
): Promise<CompanySolution | undefined> {
  if (!isSanityConfigured()) {
    return getStaticSolutionBySlug(slug);
  }
  return fetchSolutionBySlug(slug);
}
