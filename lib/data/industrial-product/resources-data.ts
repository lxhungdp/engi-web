import type { Resource } from "@/lib/types/industrial-product";

export const resourcesHero = {
  title: "Technical resources and product documentation.",
  description:
    "Product sheets, guides, and integration documentation for Vertex Systems hardware and field workflows.",
};

export const resources: Resource[] = [
  {
    id: "drone-sheet",
    type: "Product Sheet",
    title: "Product Sheet: Smart Inspection Drone",
    description:
      "Specifications, payload options, and deployment overview for aerial inspection missions.",
    relatedProduct: "Smart Inspection Drone",
    readTime: "5 min read",
    icon: "FileText",
  },
  {
    id: "lidar-guide",
    type: "Technical Guide",
    title: "LiDAR Mapping for Civil Engineering",
    description:
      "Best practices for point cloud capture, processing, and CAD/BIM export in civil projects.",
    relatedProduct: "LiDAR Mapping Unit",
    readTime: "15 min read",
    icon: "BookOpen",
  },
  {
    id: "iot-whitepaper",
    type: "Whitepaper",
    title: "Industrial IoT Monitoring for Infrastructure",
    description:
      "How wireless sensor networks support structural health monitoring and predictive maintenance.",
    relatedProduct: "Industrial IoT Sensor",
    readTime: "12 min read",
    icon: "FileText",
  },
  {
    id: "ai-case-study",
    type: "Case Study",
    title: "Factory Safety Monitoring with AI Vision",
    description:
      "Deployment patterns for edge AI cameras in manufacturing safety and quality workflows.",
    relatedProduct: "AI Vision Camera",
    readTime: "10 min read",
    icon: "Briefcase",
  },
  {
    id: "selection-checklist",
    type: "Checklist",
    title: "Selecting the Right Inspection Technology",
    description:
      "Decision framework for choosing between aerial, ground, LiDAR, IoT, and vision systems.",
    relatedProduct: "All products",
    readTime: "8 min read",
    icon: "ListChecks",
  },
  {
    id: "integration-guide",
    type: "Integration Guide",
    title: "Connecting Field Data to CAD, BIM, and GIS",
    description:
      "Export workflows and integration patterns for engineering-ready field data delivery.",
    relatedProduct: "All products",
    readTime: "14 min read",
    icon: "Link",
  },
];

export const contactInfo = {
  responseTime: "1–2 business days",
  steps: [
    "We review your product interest.",
    "We understand your technical workflow.",
    "We recommend a product configuration.",
    "We prepare a quote or demo plan.",
  ],
};
