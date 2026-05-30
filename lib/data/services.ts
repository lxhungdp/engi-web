import type { ServicePackage } from "@/lib/types";

export const servicePackages: ServicePackage[] = [
  {
    id: "starter",
    name: "Starter Website",
    description:
      "For small technical teams that need a professional online presence.",
    features: [
      "One-page landing page",
      "Responsive design",
      "Contact form",
      "Basic SEO",
      "Deployment",
    ],
  },
  {
    id: "technical",
    name: "Technical Company Website",
    description:
      "For engineering companies that need a complete business website.",
    features: [
      "Home, About, Services, Projects, Contact",
      "Multi-language ready structure",
      "Responsive design",
      "SEO optimization",
      "CMS-ready architecture",
    ],
    highlight: true,
  },
  {
    id: "product-launch",
    name: "Product Launch Website",
    description:
      "For companies launching drones, equipment, SaaS, or technical products.",
    features: [
      "Product landing page",
      "Feature section",
      "Specification table",
      "Use cases",
      "Lead generation form",
    ],
  },
  {
    id: "web-app",
    name: "Engineering Web App Prototype",
    description: "For teams that need more than a website.",
    features: [
      "Dashboard UI",
      "Data table",
      "Calculation form",
      "Visualization",
      "Basic backend integration",
    ],
  },
];
