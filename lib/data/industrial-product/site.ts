import type { DemoNavLink } from "@/lib/types/industrial-product";

export const industrialRoutes = {
  home: "/demos/industrial-product",
  products: "/demos/industrial-product/products",
  product: (slug: string) => `/demos/industrial-product/products/${slug}`,
  droneSeries: "/demos/industrial-product/products/smart-inspection-drone",
  droneComparison: "/demos/industrial-product/drone-comparison",
  solutions: "/demos/industrial-product/solutions",
  resources: "/demos/industrial-product/resources",
  contact: "/demos/industrial-product/contact",
} as const;

export const companyInfo = {
  name: "Vertex Industrial Systems",
  shortName: "Vertex Systems",
  tagline: "Industrial drones for inspection, mapping, and field intelligence.",
  description:
    "Vertex Aero Series helps engineering, construction, energy, and public safety teams capture reliable aerial data, inspect complex assets, and turn field information into actionable technical reports.",
  positioning:
    "Vertex Industrial Systems designs advanced hardware and intelligent monitoring products for infrastructure inspection, industrial automation, site monitoring, and field data collection.",
};

export const demoNavLinks: DemoNavLink[] = [
  { href: industrialRoutes.products, label: "Products" },
  { href: industrialRoutes.droneSeries, label: "Drone Series" },
  { href: industrialRoutes.droneComparison, label: "Compare" },
  { href: industrialRoutes.solutions, label: "Solutions" },
  { href: industrialRoutes.resources, label: "Resources" },
  { href: industrialRoutes.contact, label: "Contact" },
];

export const productCategories = [
  "All",
  "Drone Series",
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
    "Vertex Aero S1",
    "Vertex Aero X2",
    "Vertex Aero M3",
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
