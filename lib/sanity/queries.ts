import type { CompanyProduct, ProductCategory } from "@/lib/types/company";
import { sanityClient } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";

const PRODUCT_FIELDS = `
  name,
  "slug": slug.current,
  category,
  tagline,
  description,
  features,
  applications,
  specs[]{ label, value },
  detailSections[]{
    title,
    description,
    specs[]{ label, value },
    image
  },
  image,
  gallery,
  highlighted
`;

type SanityProductRaw = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features?: string[] | null;
  applications?: string[] | null;
  specs?: { label: string; value: string }[] | null;
  detailSections?: Array<{
    title: string;
    description: string;
    specs?: { label: string; value: string }[] | null;
    image?: unknown;
  }> | null;
  image?: unknown;
  gallery?: unknown[] | null;
  highlighted?: boolean | null;
};

function mapProduct(raw: SanityProductRaw): CompanyProduct {
  return {
    slug: raw.slug,
    name: raw.name,
    category: raw.category as ProductCategory,
    tagline: raw.tagline,
    description: raw.description,
    features: raw.features ?? [],
    applications: raw.applications ?? [],
    specs: raw.specs ?? undefined,
    detailSections: raw.detailSections?.map((section) => ({
      title: section.title,
      description: section.description,
      specs: section.specs ?? undefined,
      image: urlForImage(section.image),
    })),
    image: urlForImage(raw.image),
    gallery: raw.gallery
      ?.map((img) => urlForImage(img))
      .filter((url): url is string => Boolean(url)),
    highlighted: raw.highlighted ?? false,
  };
}

const fetchOptions = { next: { revalidate: 60 } } as const;

export async function fetchProducts(): Promise<CompanyProduct[]> {
  const data = await sanityClient.fetch<SanityProductRaw[]>(
    `*[_type == "product"] | order(name asc) { ${PRODUCT_FIELDS} }`,
    {},
    fetchOptions,
  );
  return data.map(mapProduct);
}

export async function fetchProductBySlug(
  slug: string,
): Promise<CompanyProduct | undefined> {
  const data = await sanityClient.fetch<SanityProductRaw | null>(
    `*[_type == "product" && slug.current == $slug][0] { ${PRODUCT_FIELDS} }`,
    { slug },
    fetchOptions,
  );
  return data ? mapProduct(data) : undefined;
}

export async function fetchProductSlugs(): Promise<string[]> {
  return sanityClient.fetch<string[]>(
    `*[_type == "product"].slug.current`,
    {},
    fetchOptions,
  );
}
