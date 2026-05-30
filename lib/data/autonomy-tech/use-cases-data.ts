import type { DetailedUseCase, UseCaseCategory } from "@/lib/types/autonomy-tech";

export const useCasesHero = {
  title: "Real-world autonomous operations, explained.",
  description:
    "Explore how NexaBot AI supports inspection, manufacturing, construction, security, research, and emergency workflows.",
};

export const useCaseCategories: UseCaseCategory[] = [
  "Inspection",
  "Manufacturing",
  "Construction",
  "Security",
  "Research",
  "Emergency",
];

export const detailedUseCases: DetailedUseCase[] = [
  {
    id: "bridge-inspection",
    title: "Bridge and infrastructure inspection",
    industry: "Civil Infrastructure",
    category: "Inspection",
    problem:
      "Bridge decks, joints, and structural elements require frequent visual assessment with limited access windows.",
    workflow: [
      "Plan autonomous route along bridge span",
      "Capture visual and thermal imagery at defined intervals",
      "Detect cracks, corrosion, and surface anomalies with AI vision",
      "Generate geo-tagged inspection report for engineering review",
    ],
    dataCollected: ["Visual imagery", "Thermal data", "GPS coordinates", "Detection metadata"],
    result: "Structured inspection report with annotated findings and CAD/GIS export.",
    modules: ["Mission Planner", "AI Vision Engine", "Analytics Dashboard"],
    icon: "Landmark",
  },
  {
    id: "warehouse-monitoring",
    title: "Warehouse robot monitoring",
    industry: "Logistics & Manufacturing",
    category: "Manufacturing",
    problem:
      "Mobile robots operate across large warehouses with limited centralized visibility into task status and conflicts.",
    workflow: [
      "Connect AMRs and monitoring devices to fleet dashboard",
      "Track mission queue, battery, and zone occupancy",
      "Detect bottlenecks and safety zone violations",
      "Sync operational metrics to internal dashboards",
    ],
    dataCollected: ["Robot telemetry", "Task completion logs", "Zone occupancy data", "Alert events"],
    result: "Unified fleet view with performance metrics and exception alerts.",
    modules: ["Fleet Monitoring", "Safety Intelligence", "Developer API"],
    icon: "Warehouse",
  },
  {
    id: "construction-progress",
    title: "Construction site progress tracking",
    industry: "Construction",
    category: "Construction",
    problem:
      "Project stakeholders need consistent visual records of site progress across large and changing environments.",
    workflow: [
      "Schedule recurring site capture missions",
      "Collect aerial and ground visual data",
      "Compare coverage against planned work zones",
      "Share progress summaries with project teams",
    ],
    dataCollected: ["Site imagery", "Coverage maps", "Mission timestamps", "Zone annotations"],
    result: "Progress documentation package for stakeholders and compliance records.",
    modules: ["Mission Planner", "Cloud Sync", "Analytics Dashboard"],
    icon: "HardHat",
  },
  {
    id: "factory-safety",
    title: "Factory safety monitoring",
    industry: "Manufacturing",
    category: "Manufacturing",
    problem:
      "Safety teams need continuous monitoring of restricted zones, PPE compliance, and hazardous conditions.",
    workflow: [
      "Define safety zones and detection rules",
      "Run autonomous patrol or fixed-sensor monitoring",
      "Trigger alerts on zone breaches or unsafe conditions",
      "Log incidents for safety review and audit",
    ],
    dataCollected: ["Video streams", "Zone breach events", "Detection logs", "Alert timestamps"],
    result: "Safety incident log with visual evidence and audit-ready records.",
    modules: ["AI Vision Engine", "Safety Intelligence", "Cloud Sync"],
    icon: "ShieldAlert",
  },
  {
    id: "emergency-awareness",
    title: "Emergency response situational awareness",
    industry: "Public Safety",
    category: "Emergency",
    problem:
      "Response teams need rapid visual assessment of incident areas with limited personnel on site.",
    workflow: [
      "Deploy autonomous system to incident perimeter",
      "Stream live video and map position data to command center",
      "Detect hazards, obstacles, and points of interest",
      "Share intelligence brief with field and remote teams",
    ],
    dataCollected: ["Live video feeds", "GPS tracks", "Hazard detections", "Mission logs"],
    result: "Real-time situational awareness package for incident coordination.",
    modules: ["Fleet Monitoring", "AI Vision Engine", "Safety Intelligence"],
    icon: "Siren",
  },
  {
    id: "research-testing",
    title: "Research robot testing",
    industry: "Robotics Research",
    category: "Research",
    problem:
      "Labs need repeatable mission environments to test sensor fusion, autonomy logic, and data pipelines.",
    workflow: [
      "Configure test mission with defined sensor inputs",
      "Run repeated trials with logged parameters",
      "Export structured datasets for analysis",
      "Iterate on edge AI and mission logic",
    ],
    dataCollected: ["Sensor logs", "IMU data", "Camera streams", "Mission parameters"],
    result: "Structured experiment dataset with API-ready export for analysis pipelines.",
    modules: ["Edge Device Manager", "Developer API", "Cloud Sync"],
    icon: "FlaskConical",
  },
];
