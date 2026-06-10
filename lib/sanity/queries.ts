import type { CompanyProduct, CompanySolution, ProductCategory } from "@/lib/types/company";
import { getSanityClient } from "@/lib/sanity/client";
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
  const data = await getSanityClient().fetch<SanityProductRaw[]>(
    `*[_type == "product"] | order(name asc) { ${PRODUCT_FIELDS} }`,
    {},
    fetchOptions,
  );
  return data.map(mapProduct);
}

export async function fetchProductBySlug(
  slug: string,
): Promise<CompanyProduct | undefined> {
  const data = await getSanityClient().fetch<SanityProductRaw | null>(
    `*[_type == "product" && slug.current == $slug][0] { ${PRODUCT_FIELDS} }`,
    { slug },
    fetchOptions,
  );
  return data ? mapProduct(data) : undefined;
}

export async function fetchProductSlugs(): Promise<string[]> {
  return getSanityClient().fetch<string[]>(
    `*[_type == "product"].slug.current`,
    {},
    fetchOptions,
  );
}

// ─── Solutions ───────────────────────────────────────────────────────────────

const SOLUTION_FIELDS = `
  name,
  "slug": slug.current,
  description,
  problem,
  benefits,
  technology,
  outcome,
  image,
  videos[]{ youtubeId, title, description },
  icon,
  sortOrder,
  featured
`;

type SanitySolutionRaw = {
  slug: string;
  name: string;
  description: string;
  problem?: string | null;
  benefits?: string[] | null;
  technology?: string | null;
  outcome?: string | null;
  image?: unknown;
  videos?: Array<{
    youtubeId: string;
    title: string;
    description?: string | null;
  }> | null;
  icon: string;
  sortOrder: number;
  featured?: boolean | null;
};

function mapSolution(raw: SanitySolutionRaw): CompanySolution {
  return {
    slug: raw.slug,
    name: raw.name,
    description: raw.description,
    problem: raw.problem ?? undefined,
    benefits: raw.benefits ?? undefined,
    technology: raw.technology ?? undefined,
    outcome: raw.outcome ?? undefined,
    image: urlForImage(raw.image),
    videos: raw.videos?.length
      ? raw.videos.map((video) => ({
          youtubeId: video.youtubeId,
          title: video.title,
          description: video.description ?? undefined,
        }))
      : undefined,
    icon: raw.icon,
    featured: raw.featured ?? false,
  };
}

export async function fetchSolutions(): Promise<CompanySolution[]> {
  const data = await getSanityClient().fetch<SanitySolutionRaw[]>(
    `*[_type == "solution"] | order(sortOrder asc) { ${SOLUTION_FIELDS} }`,
    {},
    fetchOptions,
  );
  return data.map(mapSolution);
}

export async function fetchSolutionBySlug(
  slug: string,
): Promise<CompanySolution | undefined> {
  const data = await getSanityClient().fetch<SanitySolutionRaw | null>(
    `*[_type == "solution" && slug.current == $slug][0] { ${SOLUTION_FIELDS} }`,
    { slug },
    fetchOptions,
  );
  return data ? mapSolution(data) : undefined;
}
