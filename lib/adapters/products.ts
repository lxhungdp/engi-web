import {
  fetchProductBySlug,
  fetchProducts,
  fetchProductSlugs,
} from "@/lib/sanity/queries";
import type { CompanyProduct } from "@/lib/types/company";

export const productCategories = ["Drone", "Station", "Software"] as const;

export async function getProducts(): Promise<CompanyProduct[]> {
  return fetchProducts();
}

export async function getProductBySlug(
  slug: string,
): Promise<CompanyProduct | undefined> {
  return fetchProductBySlug(slug);
}

export async function getProductSlugs(): Promise<string[]> {
  return fetchProductSlugs();
}

export async function getInquiryProducts(): Promise<string[]> {
  const products = await getProducts();
  return products.map((product) => product.name);
}
