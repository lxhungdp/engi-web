import type { FeaturedSolution, Solution } from "@/lib/types/industrial-product";

export const solutionsHero = {
  title: "Technical product solutions for industrial operations.",
  description:
    "Vertex Systems combines hardware products into workflows for inspection, monitoring, mapping, and safety across demanding field environments.",
};

export const solutions: Solution[] = [
  {
    id: "infra-inspection",
    title: "Infrastructure Inspection",
    problem:
      "Engineering teams need repeatable, high-quality inspection data across bridges, towers, and industrial assets.",
    products: ["Smart Inspection Drone", "Robotic Inspection Rover", "Industrial IoT Sensor"],
    workflow: ["Plan mission", "Capture visual and sensor data", "Analyze defects", "Generate report"],
    output: ["Inspection images", "Thermal data", "Sensor trends", "CAD/GIS reports"],
    value: "Reduce manual inspection time and improve data consistency.",
    icon: "Landmark",
  },
  {
    id: "construction",
    title: "Construction Monitoring",
    problem:
      "Project teams lack continuous visibility into site progress, safety, and equipment activity.",
    products: ["Smart Inspection Drone", "LiDAR Mapping Unit", "AI Vision Camera"],
    workflow: ["Schedule captures", "Monitor site zones", "Track progress", "Share reports"],
    output: ["Progress maps", "Safety alerts", "As-built documentation"],
    value: "Keep stakeholders aligned with structured field data.",
    icon: "HardHat",
  },
  {
    id: "safety",
    title: "Industrial Safety",
    problem:
      "Safety teams need real-time detection of zone violations, hazards, and unsafe conditions.",
    products: ["AI Vision Camera", "Industrial IoT Sensor", "Robotic Inspection Rover"],
    workflow: ["Define safety zones", "Monitor continuously", "Alert on violations", "Audit incidents"],
    output: ["Alert logs", "Video evidence", "Compliance reports"],
    value: "Improve response time and reduce incident risk.",
    icon: "ShieldAlert",
  },
  {
    id: "digital-twin",
    title: "Digital Twin & Mapping",
    problem:
      "Survey and engineering teams need accurate spatial data for BIM and digital twin workflows.",
    products: ["LiDAR Mapping Unit", "Smart Inspection Drone"],
    workflow: ["Capture point clouds", "Register and process", "Export to BIM/GIS", "Maintain twin"],
    output: ["Point clouds", "BIM meshes", "Survey reports"],
    value: "Accelerate as-built documentation and design validation.",
    icon: "Box",
  },
  {
    id: "equipment",
    title: "Equipment Monitoring",
    problem:
      "Facilities need continuous vibration and environmental monitoring to prevent failures.",
    products: ["Industrial IoT Sensor", "AI Vision Camera"],
    workflow: ["Deploy sensors", "Set thresholds", "Monitor trends", "Plan maintenance"],
    output: ["Vibration trends", "Alert events", "Maintenance schedules"],
    value: "Enable predictive maintenance and reduce downtime.",
    icon: "Activity",
  },
  {
    id: "emergency",
    title: "Emergency Assessment",
    problem:
      "Response teams need rapid visual and sensor assessment in dynamic incident environments.",
    products: ["Smart Inspection Drone", "Robotic Inspection Rover"],
    workflow: ["Deploy rapidly", "Assess perimeter", "Stream intelligence", "Document findings"],
    output: ["Situation maps", "Live feeds", "Incident briefings"],
    value: "Support faster, safer emergency decision-making.",
    icon: "Siren",
  },
];

export const featuredSolution: FeaturedSolution = {
  id: "infrastructure-inspection",
  title: "Infrastructure Inspection",
  challenge:
    "Bridges, towers, pipelines, and industrial structures require frequent inspection — often in hard-to-reach or hazardous locations with inconsistent manual documentation.",
  products: ["Smart Inspection Drone", "Robotic Inspection Rover", "Industrial IoT Sensor"],
  workflow: ["Scan", "Inspect", "Monitor", "Report"],
  outputs: [
    "Inspection images",
    "Thermal data",
    "Sensor trends",
    "CAD/GIS-ready reports",
  ],
};
