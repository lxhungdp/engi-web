import { createImageUrlBuilder } from "@sanity/image-url";
import { getSanityClient } from "@/lib/sanity/client";

export function urlForImage(source: unknown) {
  if (!source) return undefined;
  return createImageUrlBuilder(getSanityClient()).image(source).url();
}
