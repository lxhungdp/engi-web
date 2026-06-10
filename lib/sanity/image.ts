import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "@/lib/sanity/client";

const builder = createImageUrlBuilder(sanityClient);

export function urlForImage(source: unknown) {
  if (!source) return undefined;
  return builder.image(source).url();
}
