import { createClient, type SanityClient } from "next-sanity";
import {
  isSanityConfigured,
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
} from "@/sanity/env";

let client: SanityClient | undefined;

export function getSanityClient(): SanityClient {
  if (!isSanityConfigured()) {
    throw new Error(
      "Sanity client requires NEXT_PUBLIC_SANITY_PROJECT_ID. Set it in .env.local or Vercel Environment Variables.",
    );
  }
  if (!client) {
    client = createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: true,
      token: process.env.SANITY_API_READ_TOKEN,
    });
  }
  return client;
}
