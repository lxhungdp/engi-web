import {
  fetchProductBySlug,
  fetchProducts,
  fetchProductSlugs,
} from "@/lib/sanity/queries";
import {
  getProductBySlug as getStaticProductBySlug,
  products as staticProducts,
} from "@/lib/data/companyContent";
import { isSanityConfigured } from "@/sanity/env";
import type { CompanyProduct } from "@/lib/types/company";

export const productCategories = ["Drone", "Station", "Software"] as const;

function warnStaticFallback() {
  if (process.env.NODE_ENV === "production") {
    console.warn(
      "[argosdyne] NEXT_PUBLIC_SANITY_PROJECT_ID is not set — using static product data. " +
        "Add Sanity env vars in Vercel → Settings → Environment Variables, then redeploy.",
    );
  }
}

export async function getProducts(): Promise<CompanyProduct[]> {
  if (!isSanityConfigured()) {
    warnStaticFallback();
    return staticProducts;
  }
  return fetchProducts();
}

export async function getProductBySlug(
  slug: string,
): Promise<CompanyProduct | undefined> {
  if (!isSanityConfigured()) {
    return getStaticProductBySlug(slug);
  }
  return fetchProductBySlug(slug);
}

export async function getProductSlugs(): Promise<string[]> {
  if (!isSanityConfigured()) {
    return staticProducts.map((product) => product.slug);
  }
  return fetchProductSlugs();
}

export async function getInquiryProducts(): Promise<string[]> {
  const products = await getProducts();
  return products.map((product) => product.name);
}
