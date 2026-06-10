import type { MetadataRoute } from "next";
import {
  getAllNewsSlugs,
  products,
} from "@/lib/adapters/company";
import { siteMetadata } from "@/lib/metadata";

const staticRoutes = [
  "",
  "/product",
  "/solution",
  "/support",
  "/contact",
  "/news",
  "/privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteMetadata.url;

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${base}/product/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const newsEntries: MetadataRoute.Sitemap = getAllNewsSlugs().map((slug) => ({
    url: `${base}/news/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...productEntries, ...newsEntries];
}
