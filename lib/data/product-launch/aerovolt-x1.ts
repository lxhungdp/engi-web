import type {
  AeroVoltFeature,
  AeroVoltMetric,
  AeroVoltModel,
  AeroVoltSpec,
  AeroVoltUseCase,
  AeroVoltWorkflowStep,
  FloatingSpec,
} from "@/lib/types/product-launch";

export const productInfo = {
  name: "AeroVolt X1",
  tagline: "Autonomous drone intelligence for critical field operations.",
  description:
    "Map, inspect, and monitor complex sites with a high-performance drone platform built for engineering teams, infrastructure operators, and emergency response units.",
  positioning:
    "Autonomous industrial drone for mapping, infrastructure inspection, construction monitoring, security, and emergency response.",
};

export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#specs", label: "Specs" },
  { href: "#cta", label: "Request Demo" },
];

export const floatingSpecs: FloatingSpec[] = [
  { id: "flight", label: "45 min flight time", icon: "Clock" },
  { id: "range", label: "12 km range", icon: "Radio" },
  { id: "camera", label: "8K inspection camera", icon: "Camera" },
  { id: "rtk", label: "RTK mapping ready", icon: "MapPin" },
  { id: "ai", label: "AI obstacle avoidance", icon: "Shield" },
];

export const metrics: AeroVoltMetric[] = [
  { value: "45 min", label: "Max flight time" },
  { value: "12 km", label: "Operational range" },
  { value: "8K", label: "Inspection camera" },
  { value: "RTK", label: "Centimeter-level mapping" },
];

export const features: AeroVoltFeature[] = [
  {
    id: "flight-planning",
    title: "Autonomous Flight Planning",
    description:
      "Define mission boundaries, altitude profiles, and capture patterns with engineering-grade precision.",
    icon: "Route",
  },
  {
    id: "obstacle-avoidance",
    title: "AI Obstacle Avoidance",
    description:
      "Real-time sensor fusion detects structures, terrain, and moving objects during autonomous flight.",
    icon: "Shield",
  },
  {
    id: "rtk-mapping",
    title: "RTK Mapping Accuracy",
    description:
      "Centimeter-level positioning for survey-grade orthomosaics and CAD-ready deliverables.",
    icon: "Crosshair",
  },
  {
    id: "payloads",
    title: "Thermal & Visual Payloads",
    description:
      "Swap between 8K visual, thermal imaging, and modular sensor payloads in the field.",
    icon: "ScanEye",
  },
  {
    id: "cloud-review",
    title: "Cloud Mission Review",
    description:
      "Upload, annotate, and share mission data with stakeholders through a secure cloud portal.",
    icon: "Cloud",
  },
  {
    id: "rugged-design",
    title: "Rugged Field Design",
    description:
      "IP54-rated airframe engineered for construction sites, energy corridors, and harsh environments.",
    icon: "HardHat",
  },
];

export const useCases: AeroVoltUseCase[] = [
  {
    id: "inspection",
    title: "Infrastructure Inspection",
    description:
      "Inspect bridges, towers, pipelines, and industrial assets with high-resolution visual and thermal data.",
    icon: "Building2",
    highlights: ["Bridge decks", "Transmission towers", "Industrial facades"],
  },
  {
    id: "surveying",
    title: "Surveying & Mapping",
    description:
      "Generate survey-grade orthomosaics, elevation models, and CAD/GIS-ready outputs for engineering teams.",
    icon: "Map",
    highlights: ["Topographic surveys", "Volume calculations", "Site progress maps"],
  },
  {
    id: "emergency",
    title: "Emergency Response",
    description:
      "Deploy rapidly for disaster assessment, search operations, and situational awareness in critical incidents.",
    icon: "Siren",
    highlights: ["Disaster assessment", "Search & rescue", "Live situational feeds"],
  },
  {
    id: "construction",
    title: "Construction Monitoring",
    description:
      "Track site progress, compare as-built conditions, and document milestones for project stakeholders.",
    icon: "Construction",
    highlights: ["Progress tracking", "As-built comparison", "Stakeholder reporting"],
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    description:
      "Monitor solar farms, wind assets, power lines, and substations with repeatable inspection workflows.",
    icon: "Zap",
    highlights: ["Solar farm scans", "Line inspections", "Substation monitoring"],
  },
  {
    id: "security",
    title: "Security Patrol",
    description:
      "Autonomous perimeter patrols with live video feeds and alert triggers for facility security teams.",
    icon: "Eye",
    highlights: ["Perimeter patrols", "Live video feeds", "Automated alerts"],
  },
];

export const specifications: AeroVoltSpec[] = [
  { label: "Flight time", value: "Up to 45 minutes" },
  { label: "Range", value: "Up to 12 km" },
  { label: "Camera", value: "8K visual + optional thermal" },
  { label: "Positioning", value: "RTK / GNSS" },
  { label: "Mapping", value: "Photogrammetry & LiDAR-ready" },
  { label: "Wind resistance", value: "Level 6" },
  { label: "Payload", value: "Modular payload bay" },
  { label: "Data output", value: "CAD / GIS-ready export" },
  { label: "Operation", value: "Manual, assisted, autonomous" },
];

export const workflowSteps: AeroVoltWorkflowStep[] = [
  {
    id: "plan",
    step: 1,
    title: "Plan",
    description:
      "Define mission area, route, altitude, and data requirements.",
    icon: "ClipboardList",
  },
  {
    id: "fly",
    step: 2,
    title: "Fly",
    description:
      "Launch autonomous flight with real-time monitoring and safety controls.",
    icon: "Plane",
  },
  {
    id: "capture",
    step: 3,
    title: "Capture",
    description:
      "Collect visual, thermal, mapping, or LiDAR-ready field data.",
    icon: "Camera",
  },
  {
    id: "deliver",
    step: 4,
    title: "Deliver",
    description:
      "Export reports, maps, point clouds, and CAD/GIS-ready files.",
    icon: "FileOutput",
  },
];

export const productModels: AeroVoltModel[] = [
  {
    id: "survey",
    name: "AeroVolt X1 Survey",
    description: "For mapping and construction monitoring.",
    output: "Orthomosaic, CAD/GIS data.",
    icon: "Map",
    highlight: false,
  },
  {
    id: "inspect",
    name: "AeroVolt X1 Inspect",
    description: "For bridge, tower, and industrial asset inspection.",
    output: "Inspection report.",
    icon: "Search",
    highlight: true,
  },
  {
    id: "response",
    name: "AeroVolt X1 Response",
    description: "For emergency response and security operations.",
    output: "Live intelligence.",
    icon: "Siren",
    highlight: false,
  },
];
