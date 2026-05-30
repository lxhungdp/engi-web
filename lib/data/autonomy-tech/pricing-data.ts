import type {
  FAQ,
  NexaBotDeploymentPlan,
  PricingComparisonRow,
} from "@/lib/types/autonomy-tech";

export const pricingHero = {
  title: "Deployment options for every stage of autonomy.",
  description:
    "From first prototype to multi-site industrial programs — choose the NexaBot AI plan that matches your operational scale.",
};

export const pricingPlans: NexaBotDeploymentPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For robotics teams validating a first product demo.",
    features: [
      "1 robot/device",
      "Mission dashboard",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description:
      "For teams deploying autonomous systems in real operations.",
    features: [
      "Fleet dashboard",
      "AI vision module",
      "Role-based access",
      "API integration",
      "Advanced analytics",
    ],
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "For industrial, public safety, and large-scale automation programs.",
    features: [
      "Multi-site deployment",
      "Custom workflows",
      "Private cloud option",
      "Dedicated support",
      "Security and compliance review",
    ],
  },
];

export const pricingComparison: PricingComparisonRow[] = [
  { feature: "Number of devices", starter: "1", professional: "Up to 25", enterprise: "Unlimited" },
  { feature: "AI vision module", starter: false, professional: true, enterprise: true },
  { feature: "Mission planner", starter: true, professional: true, enterprise: true },
  { feature: "Fleet monitoring", starter: false, professional: true, enterprise: true },
  { feature: "API access", starter: false, professional: true, enterprise: true },
  { feature: "Role-based access", starter: false, professional: true, enterprise: true },
  { feature: "Custom workflows", starter: false, professional: false, enterprise: true },
  { feature: "Support level", starter: "Email", professional: "Priority", enterprise: "Dedicated" },
];

export const pricingFaqs: FAQ[] = [
  {
    id: "hardware",
    question: "Is NexaBot AI hardware-specific?",
    answer:
      "NexaBot AI is designed to integrate with multiple robot and sensor platforms through configurable device profiles and SDK connectors. Specific hardware compatibility depends on your deployment — contact our team for integration details.",
  },
  {
    id: "existing-systems",
    question: "Can it integrate with existing robotics systems?",
    answer:
      "Yes. The platform supports REST API, webhooks, and common robotics middleware patterns to connect with existing fleet management, ERP, GIS, and internal dashboard systems.",
  },
  {
    id: "edge-ai",
    question: "Does it support edge AI?",
    answer:
      "Yes. NexaBot AI includes an Edge Device Manager and edge inference layer for time-critical detections, while syncing mission data and analytics to the cloud.",
  },
  {
    id: "private-cloud",
    question: "Can it be deployed on private cloud?",
    answer:
      "Enterprise plans include private cloud and on-premises deployment options for organizations with strict data residency or security requirements.",
  },
  {
    id: "demo",
    question: "Is this demo content?",
    answer:
      "Yes. NexaBot AI is a fictional product created by EngiWeb to demonstrate a multi-page SaaS website for robotics and autonomous technology companies.",
  },
];
