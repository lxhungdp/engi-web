import type {
  Capability,
  ConstructionStat,
  PillarCard,
  ProcessStep,
} from "@/lib/types/construction-engineering";

export const constructionStats: ConstructionStat[] = [
  { id: "projects", value: "120+", label: "Projects Delivered" },
  { id: "experience", value: "18", label: "Years Experience" },
  { id: "sectors", value: "7", label: "Core Sectors" },
  { id: "specialists", value: "35+", label: "Technical Specialists" },
  { id: "documentation", value: "98%", label: "On-time Documentation Rate" },
];

export const heroFloatingCards = [
  { label: "Completed projects", value: "120+" },
  { label: "Experience", value: "18 years" },
  { label: "Quality", value: "ISO-based workflow" },
  { label: "Sectors", value: "Infrastructure / Civil / Industrial" },
];

export const deliveryProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Discover",
    description:
      "Understand project goals, site constraints, stakeholders, and technical requirements.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Develop practical engineering solutions with drawings, models, and calculations.",
    icon: "PenTool",
  },
  {
    step: 3,
    title: "Coordinate",
    description:
      "Align design, construction, procurement, quality, and documentation workflows.",
    icon: "GitBranch",
  },
  {
    step: 4,
    title: "Deliver",
    description:
      "Support construction execution with technical review, reports, and field coordination.",
    icon: "CheckCircle",
  },
];

export const technicalCapabilities: Capability[] = [
  { id: "bim", title: "CAD/BIM coordination", icon: "Box" },
  { id: "structural", title: "Structural analysis", icon: "Building2" },
  { id: "bridge", title: "Bridge geometry control", icon: "Landmark" },
  { id: "staging", title: "Construction staging review", icon: "HardHat" },
  { id: "quantity", title: "Quantity and documentation support", icon: "ClipboardList" },
  { id: "reports", title: "Engineering report generation", icon: "FileText" },
  { id: "dashboards", title: "Digital project dashboards", icon: "LayoutDashboard" },
  { id: "multidiscipline", title: "Multi-discipline coordination", icon: "Users" },
];

export const safetyQualitySustainability: PillarCard[] = [
  {
    id: "safety",
    title: "Safety-first planning",
    description:
      "Design and construction workflows focused on risk reduction and safe execution.",
    icon: "Shield",
  },
  {
    id: "quality",
    title: "Quality-controlled delivery",
    description:
      "Structured documentation, review processes, and technical verification.",
    icon: "ShieldCheck",
  },
  {
    id: "sustainability",
    title: "Sustainable infrastructure",
    description:
      "Practical design decisions that support durability, efficiency, and lifecycle value.",
    icon: "Leaf",
  },
];
