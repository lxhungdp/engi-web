import {
  fetchSolutionBySlug,
  fetchSolutions,
} from "@/lib/sanity/queries";
import type { CompanySolution } from "@/lib/types/company";

export async function getSolutions(): Promise<CompanySolution[]> {
  return fetchSolutions();
}

export async function getSolutionBySlug(
  slug: string,
): Promise<CompanySolution | undefined> {
  return fetchSolutionBySlug(slug);
}
