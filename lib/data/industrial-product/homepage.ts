import type {
  ComparisonRow,
  Industry,
  UseCasePreview,
  WorkflowStep,
} from "@/lib/types/industrial-product";

export const industries: Industry[] = [
  { id: "civil", name: "Civil Engineering", icon: "Landmark" },
  { id: "construction", name: "Construction", icon: "HardHat" },
  { id: "energy", name: "Energy & Utilities", icon: "Zap" },
  { id: "manufacturing", name: "Manufacturing", icon: "Factory" },
  { id: "infra", name: "Infrastructure Inspection", icon: "Search" },
  { id: "research", name: "Research & Development", icon: "FlaskConical" },
  { id: "safety", name: "Public Safety", icon: "Shield" },
];

export const useCasePreviews: UseCasePreview[] = [
  {
    id: "bridge",
    title: "Bridge and infrastructure inspection",
    description:
      "Combine aerial drones, ground rovers, and IoT sensors for comprehensive asset assessment.",
    icon: "Landmark",
  },
  {
    id: "construction",
    title: "Construction progress monitoring",
    description:
      "Track site progress with visual capture, LiDAR mapping, and safety monitoring systems.",
    icon: "HardHat",
  },
  {
    id: "factory",
    title: "Factory safety monitoring",
    description:
      "Deploy AI vision cameras and IoT sensors for continuous safety and equipment monitoring.",
    icon: "Factory",
  },
  {
    id: "tunnel",
    title: "Tunnel and underground inspection",
    description:
      "Use rugged rovers with gas detection and thermal imaging in confined spaces.",
    icon: "Tunnel",
  },
  {
    id: "lidar",
    title: "LiDAR mapping and BIM documentation",
    description:
      "Capture point clouds for surveying, as-built documentation, and digital twin workflows.",
    icon: "Scan",
  },
  {
    id: "structural",
    title: "Structural health monitoring",
    description:
      "Wireless sensor networks for vibration, tilt, and environmental trend analysis.",
    icon: "Activity",
  },
];

export const homepageWorkflow: WorkflowStep[] = [
  {
    step: 1,
    title: "Capture",
    description:
      "Collect visual, LiDAR, sensor, and inspection data from the field.",
    icon: "Camera",
  },
  {
    step: 2,
    title: "Analyze",
    description:
      "Use AI, analytics, and engineering workflows to identify risks and patterns.",
    icon: "Brain",
  },
  {
    step: 3,
    title: "Integrate",
    description:
      "Export data to CAD, BIM, GIS, dashboards, or customer systems.",
    icon: "Link",
  },
  {
    step: 4,
    title: "Act",
    description:
      "Make faster decisions for inspection, maintenance, safety, and operations.",
    icon: "Zap",
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    productSlug: "smart-inspection-drone",
    bestFor: "Aerial infrastructure inspection",
    dataCaptured: "Visual, thermal, GPS imagery",
    mobilityType: "Aerial",
    output: "Inspection reports, CAD/GIS export",
    typicalUsers: "Inspection engineers",
  },
  {
    productSlug: "robotic-inspection-rover",
    bestFor: "Confined and hazardous spaces",
    dataCaptured: "360° video, thermal, gas data",
    mobilityType: "Ground",
    output: "Patrol logs, safety reports",
    typicalUsers: "Safety officers, plant engineers",
  },
  {
    productSlug: "lidar-mapping-unit",
    bestFor: "Surveying and digital twins",
    dataCaptured: "Point clouds, trajectory",
    mobilityType: "Portable / mounted",
    output: "LAS/LAZ, BIM meshes",
    typicalUsers: "Surveyors, BIM managers",
  },
  {
    productSlug: "industrial-iot-sensor",
    bestFor: "Continuous asset monitoring",
    dataCaptured: "Vibration, temperature, humidity",
    mobilityType: "Fixed deployment",
    output: "Trend data, alert events",
    typicalUsers: "Structural engineers",
  },
  {
    productSlug: "ai-vision-camera",
    bestFor: "Safety and quality inspection",
    dataCaptured: "Video, AI detection events",
    mobilityType: "Fixed / PTZ",
    output: "Alert logs, inspection reports",
    typicalUsers: "Safety managers, QA teams",
  },
];
