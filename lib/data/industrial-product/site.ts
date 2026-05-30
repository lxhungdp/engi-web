import type { DemoNavLink } from "@/lib/types/industrial-product";

export const industrialRoutes = {
  home: "/demos/industrial-product",
  products: "/demos/industrial-product#products",
  contact: "/demos/industrial-product#contact",
} as const;

export const companyInfo = {
  name: "Vertex Mobile",
  shortName: "Vertex",
  tagline: "Smartphones built for work, creativity, and everyday life.",
  description:
    "Premium smartphones with powerful cameras, all-day battery, and fast performance.",
  positioning: "Smartphone product website for a multi-model device lineup.",
};

export const demoNavLinks: DemoNavLink[] = [
  { href: industrialRoutes.products, label: "Models" },
  { href: industrialRoutes.contact, label: "Contact" },
];

export const productCategories = [
  "All",
  "Smartphones",
  "Accessories",
  "Enterprise",
] as const;

export const contactFormOptions = {
  industries: [
    "Consumer",
    "Business",
    "Enterprise",
    "Retail",
    "Education",
    "Other",
  ],
  products: [
    "Vertex Phone Lite",
    "Vertex Phone Pro",
    "Vertex Phone Max",
    "Not sure yet",
  ],
  projectTypes: [
    "Personal use",
    "Business deployment",
    "Bulk order",
    "Trade-in",
    "Other",
  ],
};
