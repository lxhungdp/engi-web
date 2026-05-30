import type { DemoNavLink } from "@/lib/types/biotech-research";

export const biotechRoutes = {
  home: "/demos/biotech-research",
  research: "/demos/biotech-research/research",
  services: "/demos/biotech-research/services",
  technology: "/demos/biotech-research/technology",
  caseStudies: "/demos/biotech-research/case-studies",
  resources: "/demos/biotech-research/resources",
  contact: "/demos/biotech-research/contact",
} as const;

export const companyInfo = {
  name: "HelixNova Biosciences",
  shortName: "HelixNova",
  tagline: "Advancing precision medicine through genomic intelligence.",
  description:
    "HelixNova Biosciences combines molecular diagnostics, biomarker discovery, and clinical research data to support better decisions in oncology, rare disease, and translational medicine.",
  positioning:
    "HelixNova Biosciences is a modern biotech and molecular diagnostics company focused on genomic testing, biomarker discovery, clinical research support, and data-driven precision medicine.",
};

export const demoNavLinks: DemoNavLink[] = [
  { href: biotechRoutes.research, label: "Research" },
  { href: biotechRoutes.services, label: "Services" },
  { href: biotechRoutes.technology, label: "Technology" },
  { href: biotechRoutes.caseStudies, label: "Case Studies" },
  { href: biotechRoutes.resources, label: "Resources" },
  { href: biotechRoutes.contact, label: "Contact" },
];

export const contactFormOptions = {
  projectTypes: [
    "Research collaboration",
    "Diagnostic support",
    "Biomarker discovery",
    "Custom panel",
    "Bioinformatics analysis",
    "Report design",
    "Other",
  ],
  researchAreas: [
    "Oncology",
    "Rare disease",
    "Infectious disease",
    "Pharmacogenomics",
    "Multi-omics",
    "Other",
  ],
  serviceInterests: [
    "Molecular diagnostic support",
    "Biomarker discovery",
    "Clinical research data support",
    "Custom panel development",
    "Bioinformatics analysis",
    "Not sure yet",
  ],
};

export const contactSteps = [
  { step: 1, text: "We review your scientific objective." },
  { step: 2, text: "We understand your samples, data, and workflow." },
  { step: 3, text: "We recommend a support plan." },
  { step: 4, text: "We prepare a consultation or collaboration scope." },
];

export const platformPipeline = [
  "Sample",
  "Sequencing",
  "Bioinformatics",
  "Interpretation",
  "Report",
  "Research Database",
];

export const technologyArchitecture = [
  "Sample Metadata",
  "NGS Data",
  "Bioinformatics Pipeline",
  "Variant Knowledge Layer",
  "Interpretation Workspace",
  "Report Output",
];
