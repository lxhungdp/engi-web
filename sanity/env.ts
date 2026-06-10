export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() ?? "";
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

/** True when Sanity env is set (required on Vercel for CMS content). */
export function isSanityConfigured(): boolean {
  return sanityProjectId.length > 0;
}
