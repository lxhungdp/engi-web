import type {
  SustainabilityAction,
  SustainabilityItem,
} from "@/lib/types/construction-engineering";

export const sustainabilityPillars: SustainabilityItem[] = [
  {
    id: "durable",
    title: "Durable design",
    description:
      "Structural and civil systems designed for long service life and maintainable performance.",
    icon: "Building2",
  },
  {
    id: "materials",
    title: "Efficient materials",
    description:
      "Practical material selection and system optimization to reduce waste and over-design.",
    icon: "Box",
  },
  {
    id: "safety",
    title: "Safer construction planning",
    description:
      "Staging and sequencing decisions that reduce site risk and improve safe execution.",
    icon: "Shield",
  },
  {
    id: "lifecycle",
    title: "Lifecycle maintenance",
    description:
      "Design documentation that supports inspection, maintenance, and asset management.",
    icon: "Activity",
  },
  {
    id: "digital",
    title: "Digital documentation",
    description:
      "BIM and digital records that improve handover quality and long-term asset data.",
    icon: "Database",
  },
  {
    id: "community",
    title: "Community impact",
    description:
      "Infrastructure designed with practical consideration for surrounding communities and users.",
    icon: "Users",
  },
];

export const sustainabilityActions: SustainabilityAction[] = [
  {
    id: "optimized",
    title: "Optimized structural systems",
    description: "Right-sized designs that balance performance, cost, and material efficiency.",
  },
  {
    id: "rework",
    title: "Reduced rework through coordination",
    description: "BIM and multi-discipline review to catch issues before construction.",
  },
  {
    id: "sequencing",
    title: "Better construction sequencing",
    description: "Staging plans that minimize disruption and improve site efficiency.",
  },
  {
    id: "records",
    title: "Digital records for maintenance",
    description: "Structured as-built and model data for lifecycle asset management.",
  },
  {
    id: "risk",
    title: "Risk-aware design decisions",
    description: "Engineering choices informed by safety, durability, and operational context.",
  },
];
