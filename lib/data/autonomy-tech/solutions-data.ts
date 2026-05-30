import type { FeaturedSolution, SolutionCategory } from "@/lib/types/autonomy-tech";

export const solutionsHero = {
  title: "Autonomous technology for real-world industries.",
  description:
    "From inspection to logistics, NexaBot AI helps technical teams deploy intelligent machines across complex environments.",
};

export const solutionCategories: SolutionCategory[] = [
  {
    id: "inspection",
    industry: "Industrial Inspection",
    problem:
      "Manual inspections are slow, inconsistent, and difficult to scale across large assets.",
    solution:
      "Deploy autonomous inspection missions with AI vision, thermal payloads, and structured reporting.",
    outputs: ["Inspection reports", "Visual defect logs", "Thermal anomaly maps"],
    modules: ["Mission Planner", "AI Vision Engine", "Analytics Dashboard"],
    icon: "Search",
  },
  {
    id: "manufacturing",
    industry: "Smart Manufacturing",
    problem:
      "Production teams lack continuous visibility into line conditions and mobile robot performance.",
    solution:
      "Monitor factory zones, coordinate AMRs, and detect process anomalies with fleet orchestration.",
    outputs: ["Line status feeds", "Robot task logs", "Anomaly alerts"],
    modules: ["Fleet Monitoring", "Safety Intelligence", "Cloud Sync"],
    icon: "Factory",
  },
  {
    id: "construction",
    industry: "Construction Monitoring",
    problem:
      "Site progress and safety conditions are hard to track consistently across large projects.",
    solution:
      "Capture aerial and ground-based site data to monitor progress, zones, and equipment movement.",
    outputs: ["Progress maps", "Site coverage logs", "Safety zone reports"],
    modules: ["Mission Planner", "AI Vision Engine", "Cloud Sync"],
    icon: "HardHat",
  },
  {
    id: "energy",
    industry: "Energy & Utilities",
    problem:
      "Critical infrastructure requires frequent inspection across remote or hazardous locations.",
    solution:
      "Run repeatable inspection routes for lines, substations, solar farms, and wind assets.",
    outputs: ["Asset condition reports", "Thermal scans", "Maintenance tickets"],
    modules: ["Fleet Monitoring", "AI Vision Engine", "Developer API"],
    icon: "Zap",
  },
  {
    id: "security",
    industry: "Security & Patrol",
    problem:
      "Perimeter monitoring depends on manual patrols with limited coverage and delayed response.",
    solution:
      "Automate patrol routes with live video, object detection, and incident alert workflows.",
    outputs: ["Live patrol feeds", "Incident logs", "Alert summaries"],
    modules: ["Mission Planner", "Safety Intelligence", "Analytics Dashboard"],
    icon: "Shield",
  },
  {
    id: "research",
    industry: "Research & Robotics Labs",
    problem:
      "Teams need flexible tooling to prototype autonomy workflows and export structured mission data.",
    solution:
      "Test sensor fusion, mission logic, and API integrations in a controlled platform environment.",
    outputs: ["Mission datasets", "Sensor logs", "Experiment reports"],
    modules: ["Edge Device Manager", "Developer API", "Cloud Sync"],
    icon: "FlaskConical",
  },
  {
    id: "emergency",
    industry: "Emergency Response",
    problem:
      "Response teams need rapid situational awareness in dynamic, high-risk environments.",
    solution:
      "Deploy autonomous systems for area assessment, search support, and live intelligence sharing.",
    outputs: ["Situation maps", "Live video feeds", "Incident briefings"],
    modules: ["Fleet Monitoring", "AI Vision Engine", "Safety Intelligence"],
    icon: "Siren",
  },
];

export const featuredSolution: FeaturedSolution = {
  id: "industrial-inspection",
  title: "Industrial Inspection",
  challenge:
    "Engineering and maintenance teams must inspect bridges, towers, pipelines, and industrial assets on tight schedules — often in hard-to-reach or hazardous locations.",
  workflow: [
    "Define inspection boundary and capture requirements in Mission Planner.",
    "Deploy robot or drone with AI vision and optional thermal payload.",
    "Autonomously capture visual and sensor data along the planned route.",
    "Review detections, annotate findings, and export structured reports.",
  ],
  dataCaptured: [
    "High-resolution visual imagery",
    "Thermal anomaly data",
    "GPS-tagged asset locations",
    "Detection confidence scores",
    "Mission timestamps and operator notes",
  ],
  outputs: [
    "Inspection summary report",
    "Defect and anomaly log",
    "Geo-referenced image set",
    "CAD/GIS-ready export package",
  ],
  benefits: [
    "Reduce repeat site visits with structured digital records",
    "Improve consistency across inspection teams",
    "Accelerate reporting for compliance and maintenance planning",
  ],
};
