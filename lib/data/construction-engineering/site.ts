import type { DemoNavLink } from "@/lib/types/construction-engineering";

export const constructionRoutes = {
  home: "/demos/construction-engineering",
  services: "/demos/construction-engineering/services",
  projects: "/demos/construction-engineering/projects",
  project: (slug: string) => `/demos/construction-engineering/projects/${slug}`,
  sectors: "/demos/construction-engineering/sectors",
  about: "/demos/construction-engineering/about",
  sustainability: "/demos/construction-engineering/sustainability",
  contact: "/demos/construction-engineering/contact",
} as const;

export const companyInfo = {
  name: "TerraBuild Engineering",
  shortName: "TerraBuild",
  tagline: "Engineering the infrastructure that moves cities forward.",
  description:
    "TerraBuild Engineering delivers civil, structural, transportation, industrial, and urban development projects with technical precision and reliable project execution.",
  positioning:
    "TerraBuild Engineering is a construction and infrastructure engineering company delivering civil, structural, transportation, industrial, and urban development projects.",
};

export const demoNavLinks: DemoNavLink[] = [
  { href: constructionRoutes.services, label: "Services" },
  { href: constructionRoutes.projects, label: "Projects" },
  { href: constructionRoutes.sectors, label: "Sectors" },
  { href: constructionRoutes.about, label: "About" },
  { href: constructionRoutes.sustainability, label: "Sustainability" },
  { href: constructionRoutes.contact, label: "Contact" },
];

export const projectCategories = [
  "All",
  "Transportation",
  "Bridges & Structures",
  "Urban Development",
  "Industrial",
  "Energy & Utilities",
  "Water & Drainage",
] as const;

export const contactFormOptions = {
  projectTypes: [
    "Transportation",
    "Bridge / Structure",
    "Building / Urban Development",
    "Industrial Facility",
    "Energy / Utilities",
    "Water / Drainage",
    "Other",
  ],
  serviceInterests: [
    "Civil engineering",
    "Structural engineering",
    "Construction management",
    "Digital engineering / BIM",
    "Project documentation",
    "Technical review",
    "Not sure yet",
  ],
};

export const contactSteps = [
  { step: 1, text: "We review your project type." },
  { step: 2, text: "We understand your technical requirements." },
  { step: 3, text: "We recommend the right service scope." },
  { step: 4, text: "We prepare a proposal or consultation plan." },
];

export const faqItems = [
  {
    id: "scope",
    question: "What types of projects does TerraBuild support?",
    answer:
      "We support transportation, bridge and structural, urban development, industrial, energy, utilities, and water infrastructure projects across design, documentation, and construction support.",
  },
  {
    id: "bim",
    question: "Do you provide BIM and digital engineering services?",
    answer:
      "Yes. Our digital engineering team supports BIM coordination, 3D modeling, CAD integration, and project data workflows for construction-ready delivery.",
  },
  {
    id: "regions",
    question: "Can TerraBuild support projects outside the demo region?",
    answer:
      "This is a demo website. In production, your company would specify actual service regions and project delivery capabilities.",
  },
];
