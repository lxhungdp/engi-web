import type { Resource } from "@/lib/types/autonomy-tech";

export const resourcesHero = {
  title: "Resources for robotics and automation teams.",
  description:
    "Guides, product sheets, and technical documentation to help teams evaluate and deploy autonomous operations.",
};

export const resources: Resource[] = [
  {
    id: "inspection-guide",
    type: "Technical Guide",
    title: "Autonomous Inspection Workflow Guide",
    description:
      "Step-by-step framework for planning, executing, and reporting autonomous infrastructure inspections.",
    readTime: "12 min read",
    icon: "BookOpen",
  },
  {
    id: "ai-vision",
    type: "Whitepaper",
    title: "AI Vision for Industrial Robotics",
    description:
      "How computer vision models detect assets, hazards, and mission conditions in field environments.",
    readTime: "18 min read",
    icon: "ScanEye",
  },
  {
    id: "deployment-checklist",
    type: "Checklist",
    title: "Robotics Platform Deployment Checklist",
    description:
      "Pre-deployment checklist covering devices, sensors, network, safety zones, and operator training.",
    readTime: "8 min read",
    icon: "ListChecks",
  },
  {
    id: "gis-cad",
    type: "Technical Guide",
    title: "Connecting Robot Data to GIS and CAD Systems",
    description:
      "Integration patterns for exporting mission outputs to GIS platforms and CAD/BIM workflows.",
    readTime: "15 min read",
    icon: "Link",
  },
  {
    id: "product-sheet",
    type: "Product Sheet",
    title: "NexaBot AI Product Sheet",
    description:
      "Platform overview covering modules, deployment options, integrations, and technical specifications.",
    readTime: "5 min read",
    icon: "FileText",
  },
  {
    id: "api-overview",
    type: "API Documentation",
    title: "API Integration Overview",
    description:
      "Introduction to REST endpoints, webhooks, authentication, and common integration workflows.",
    readTime: "10 min read",
    icon: "Code2",
  },
];
