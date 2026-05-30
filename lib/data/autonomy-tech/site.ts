import type { DemoNavLink } from "@/lib/types/autonomy-tech";

export const autonomyRoutes = {
  home: "/demos/autonomy-tech",
  platform: "/demos/autonomy-tech/platform",
  solutions: "/demos/autonomy-tech/solutions",
  useCases: "/demos/autonomy-tech/use-cases",
  architecture: "/demos/autonomy-tech/architecture",
  resources: "/demos/autonomy-tech/resources",
  pricing: "/demos/autonomy-tech/pricing",
} as const;

export const productInfo = {
  name: "NexaBot AI",
  tagline: "Autonomous intelligence for robotics teams.",
  description:
    "NexaBot AI helps robotics, automation, and industrial teams deploy intelligent machines that see, decide, and act in real-world environments.",
  positioning:
    "NexaBot AI is an autonomous robotics platform for inspection, logistics, monitoring, and industrial automation.",
};

export const demoNavLinks: DemoNavLink[] = [
  { href: autonomyRoutes.platform, label: "Platform" },
  { href: autonomyRoutes.solutions, label: "Solutions" },
  { href: autonomyRoutes.useCases, label: "Use Cases" },
  { href: autonomyRoutes.architecture, label: "Architecture" },
  { href: autonomyRoutes.resources, label: "Resources" },
  { href: autonomyRoutes.pricing, label: "Pricing" },
];

export const credibilityLogos = [
  "FactoryOps",
  "BridgeGrid",
  "RoboFleet",
  "VisionWorks",
  "AutoLab",
];
