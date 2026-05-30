import type { DemoNavLink } from "@/lib/types/industrial-product";

export const industrialRoutes = {
  home: "/demos/industrial-product",
  products: "/demos/industrial-product/products",
  product: (slug: string) => `/demos/industrial-product/products/${slug}`,
  solutions: "/demos/industrial-product/solutions",
  resources: "/demos/industrial-product/resources",
  contact: "/demos/industrial-product/contact",
} as const;

export const companyInfo = {
  name: "Vertex Industrial Systems",
  shortName: "Vertex Systems",
  tagline: "Industrial technology products for smarter field operations.",
  description:
    "Vertex Industrial Systems builds intelligent hardware for inspection, mapping, monitoring, and automation across engineering and industrial environments.",
  positioning:
    "Vertex Industrial Systems designs advanced hardware and intelligent monitoring products for infrastructure inspection, industrial automation, site monitoring, and field data collection.",
};

export const demoNavLinks: DemoNavLink[] = [
  { href: industrialRoutes.products, label: "Products" },
  { href: industrialRoutes.solutions, label: "Solutions" },
  { href: industrialRoutes.resources, label: "Resources" },
  { href: industrialRoutes.contact, label: "Contact" },
];

export const productCategories = [
  "All",
  "Aerial",
  "Ground Robotics",
  "Mapping",
  "IoT Monitoring",
  "AI Vision",
] as const;

export const contactFormOptions = {
  industries: [
    "Civil Engineering",
    "Construction",
    "Energy & Utilities",
    "Manufacturing",
    "Infrastructure Inspection",
    "Research & Development",
    "Public Safety",
    "Other",
  ],
  products: [
    "Smart Inspection Drone",
    "Robotic Inspection Rover",
    "LiDAR Mapping Unit",
    "Industrial IoT Sensor",
    "AI Vision Camera",
    "Not sure yet",
  ],
  projectTypes: [
    "Infrastructure inspection",
    "Site monitoring",
    "Mapping / digital twin",
    "Safety monitoring",
    "Equipment monitoring",
    "Pilot evaluation",
    "Other",
  ],
};
