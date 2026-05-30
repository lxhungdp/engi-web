import type {
  DroneApplication,
  DroneHighlight,
  DroneModel,
  DroneOutput,
  DronePayload,
  DroneRecommendation,
  WorkflowStep,
} from "@/lib/types/industrial-product";

export const aeroSeriesInfo = {
  name: "Vertex Aero Series",
  tagline: "Industrial drones for inspection, mapping, and field intelligence.",
  description:
    "Vertex Aero Series helps engineering, construction, energy, and public safety teams capture reliable aerial data, inspect complex assets, and turn field information into actionable technical reports.",
  flagshipSlug: "aero-x2",
  flagshipProductRoute: "/demos/industrial-product/products/smart-inspection-drone",
};

export const droneModels: DroneModel[] = [
  {
    slug: "aero-s1",
    name: "Vertex Aero S1",
    label: "Compact inspection drone",
    bestFor: [
      "Building inspection",
      "Small bridge inspection",
      "Construction progress photos",
      "Site documentation",
      "Quick emergency assessment",
    ],
    flightTime: "Up to 38 minutes",
    range: "Up to 8 km",
    camera: "4K visual camera",
    thermal: "Not available",
    lidarReady: false,
    positioning: "GNSS",
    payload: "Fixed visual camera",
    aiAnalytics: "Basic visual review",
    output: "Inspection images, site documentation",
    recommendedUsers: "Small engineering and construction teams",
  },
  {
    slug: "aero-x2",
    name: "Vertex Aero X2",
    label: "Professional industrial drone",
    bestFor: [
      "Bridge inspection",
      "Tower inspection",
      "Road and railway inspection",
      "Construction monitoring",
      "Energy and utilities",
    ],
    flightTime: "Up to 45 minutes",
    range: "Up to 12 km",
    camera: "8K visual camera",
    thermal: "Optional thermal payload",
    lidarReady: true,
    positioning: "RTK / GNSS",
    payload: "Modular payload bay",
    aiAnalytics: "AI defect detection",
    output: "Inspection reports, orthomosaic, CAD/GIS-ready export",
    recommendedUsers: "Engineering, construction, utilities, public safety teams",
    highlighted: true,
    badge: "Flagship model",
  },
  {
    slug: "aero-m3",
    name: "Vertex Aero M3",
    label: "Heavy-duty mapping drone",
    bestFor: [
      "LiDAR mapping",
      "Large infrastructure inspection",
      "Digital twin capture",
      "Industrial site survey",
      "Emergency response mapping",
    ],
    flightTime: "Up to 55 minutes",
    range: "Up to 15 km",
    camera: "8K visual + thermal + LiDAR-ready",
    thermal: "Included",
    lidarReady: true,
    positioning: "RTK / PPK / GNSS",
    payload: "Multi-payload support",
    aiAnalytics: "Advanced AI analytics",
    output: "Point cloud, orthomosaic, CAD/BIM/GIS export",
    recommendedUsers:
      "Surveying, infrastructure, industrial and emergency response teams",
  },
];

export const droneHeroLabels = [
  "RTK mapping",
  "Thermal payload",
  "AI defect detection",
  "CAD/GIS export",
  "55 min max flight time",
];

export const droneHeroSpecCards = [
  { label: "Flight time", value: "Up to 45 min", model: "aero-x2" },
  { label: "Range", value: "Up to 12 km", model: "aero-x2" },
  { label: "Camera", value: "8K inspection", model: "aero-x2" },
  { label: "Positioning", value: "RTK / GNSS", model: "aero-x2" },
  { label: "Payload", value: "Modular bay", model: "aero-x2" },
  { label: "AI", value: "Defect detection", model: "aero-x2" },
];

export const aeroX2Info = {
  name: "Vertex Aero X2",
  tagline: "Professional industrial drone for inspection, mapping, and field intelligence.",
  description:
    "Capture high-resolution visual data, thermal insights, and RTK-positioned field information with a modular drone platform designed for engineering and industrial teams.",
  positioning:
    "Professional industrial drone for infrastructure inspection, mapping, and field intelligence.",
};

export const aeroX2Highlights: DroneHighlight[] = [
  {
    id: "inspection",
    title: "High-resolution inspection",
    description:
      "8K visual camera for asset inspection, site documentation, and defect review.",
    icon: "Camera",
  },
  {
    id: "mapping",
    title: "Accurate mapping",
    description:
      "RTK/GNSS positioning for engineering, surveying, and CAD/GIS workflows.",
    icon: "Map",
  },
  {
    id: "payload",
    title: "Modular payload system",
    description:
      "Support visual, thermal, and LiDAR-ready mission configurations.",
    icon: "Box",
  },
  {
    id: "ai",
    title: "AI-assisted review",
    description:
      "Detect cracks, heat anomalies, surface changes, and risk areas faster.",
    icon: "Brain",
  },
];

export const droneApplications: DroneApplication[] = [
  {
    id: "bridge",
    title: "Bridge and infrastructure inspection",
    problem: "Manual inspection is slow, costly, and difficult to access safely.",
    howItHelps:
      "Autonomous flight paths capture high-resolution imagery and thermal data from multiple angles without scaffolding or lane closures.",
    typicalOutput: "Inspection image report, defect annotations, CAD/GIS-ready export",
    icon: "Landmark",
  },
  {
    id: "construction",
    title: "Construction progress monitoring",
    problem: "Site teams need repeatable visual records to track progress and resolve disputes.",
    howItHelps:
      "Scheduled aerial missions create consistent orthomosaic maps and progress documentation across project phases.",
    typicalOutput: "Orthomosaic map, site progress documentation, timeline comparison",
    icon: "HardHat",
  },
  {
    id: "energy",
    title: "Energy and utilities inspection",
    problem: "Utility assets span large areas and require frequent condition assessment.",
    howItHelps:
      "RTK-positioned flights inspect towers, substations, and corridors with thermal anomaly detection.",
    typicalOutput: "Thermal anomaly report, asset condition log, GIS-ready data",
    icon: "Zap",
  },
  {
    id: "lidar",
    title: "LiDAR mapping and digital twin capture",
    problem: "Large sites need accurate 3D data for engineering and digital twin workflows.",
    howItHelps:
      "LiDAR-ready payload configurations capture dense point clouds for surveying and BIM integration.",
    typicalOutput: "3D point cloud, orthomosaic, CAD/BIM/GIS export",
    icon: "Scan",
  },
  {
    id: "emergency",
    title: "Emergency response and disaster assessment",
    problem: "Disaster zones are unsafe and require rapid situational awareness.",
    howItHelps:
      "Quick-deploy aerial missions map damage, assess access routes, and deliver imagery to response teams.",
    typicalOutput: "Rapid site map, damage assessment imagery, situational report",
    icon: "Siren",
  },
  {
    id: "corridor",
    title: "Road, railway, and corridor mapping",
    problem: "Linear infrastructure requires consistent georeferenced documentation over long distances.",
    howItHelps:
      "Autonomous corridor missions with RTK positioning produce engineering-grade maps and elevation models.",
    typicalOutput: "Corridor orthomosaic, elevation model, CAD/GIS-ready export",
    icon: "Route",
  },
];

export const aeroX2Applications: DroneApplication[] = [
  {
    id: "bridge",
    title: "Bridge inspection",
    problem: "Accessing bridge structures safely is time-consuming and expensive.",
    howItHelps: "Close-range aerial capture with 8K visual and optional thermal payloads.",
    typicalOutput: "Inspection image report, defect map, CAD/GIS export",
    icon: "Landmark",
  },
  {
    id: "construction",
    title: "Construction monitoring",
    problem: "Project stakeholders need consistent visual records of site progress.",
    howItHelps: "Repeatable flight missions produce georeferenced progress documentation.",
    typicalOutput: "Orthomosaic, progress timeline, site documentation",
    icon: "HardHat",
  },
  {
    id: "energy",
    title: "Energy and utilities inspection",
    problem: "Remote assets require frequent condition checks across large service areas.",
    howItHelps: "Thermal and visual inspection with RTK positioning for asset tracking.",
    typicalOutput: "Thermal anomaly report, asset inspection log",
    icon: "Zap",
  },
  {
    id: "emergency",
    title: "Emergency site assessment",
    problem: "First responders need rapid aerial situational awareness.",
    howItHelps: "Quick-deploy missions capture site conditions without ground access.",
    typicalOutput: "Rapid assessment imagery, situational map",
    icon: "Siren",
  },
  {
    id: "corridor",
    title: "Road and railway corridor mapping",
    problem: "Linear assets need georeferenced documentation over long distances.",
    howItHelps: "Autonomous corridor flights with RTK for engineering-grade output.",
    typicalOutput: "Corridor orthomosaic, elevation model",
    icon: "Route",
  },
  {
    id: "facility",
    title: "Industrial facility monitoring",
    problem: "Large industrial sites need regular visual and thermal condition checks.",
    howItHelps: "Modular payloads support visual, thermal, and inspection workflows.",
    typicalOutput: "Facility inspection report, thermal data, trend documentation",
    icon: "Factory",
  },
];

export const aeroX2Specs = [
  { label: "Flight time", value: "Up to 45 minutes" },
  { label: "Operational range", value: "Up to 12 km" },
  { label: "Camera", value: "8K visual inspection camera" },
  { label: "Thermal payload", value: "Optional" },
  { label: "Positioning", value: "RTK / GNSS" },
  { label: "Mapping support", value: "Photogrammetry and LiDAR-ready workflow" },
  { label: "Payload system", value: "Modular payload bay" },
  { label: "AI analytics", value: "Defect detection and anomaly review" },
  { label: "Data output", value: "Inspection report, orthomosaic, CAD/GIS-ready export" },
  { label: "Operation modes", value: "Manual, assisted, autonomous" },
  { label: "Typical users", value: "Engineering, construction, utilities, public safety" },
];

export const dronePayloads: DronePayload[] = [
  {
    id: "visual",
    name: "Visual inspection camera",
    purpose: "High-resolution asset and site documentation",
    bestUseCase: "Bridge inspection, construction monitoring, defect review",
    icon: "Camera",
  },
  {
    id: "thermal",
    name: "Thermal imaging module",
    purpose: "Heat anomaly and equipment condition detection",
    bestUseCase: "Energy utilities, industrial equipment, building envelope",
    icon: "Activity",
  },
  {
    id: "lidar",
    name: "LiDAR mapping payload",
    purpose: "Dense point cloud capture for surveying workflows",
    bestUseCase: "Digital twin, civil engineering, corridor mapping",
    icon: "Scan",
  },
  {
    id: "rtk",
    name: "RTK base station",
    purpose: "Centimeter-level positioning for mapping missions",
    bestUseCase: "Surveying, photogrammetry, CAD/GIS integration",
    icon: "Map",
  },
  {
    id: "battery",
    name: "Smart battery set",
    purpose: "Extended field operations with hot-swap capability",
    bestUseCase: "Multi-mission days, remote site operations",
    icon: "Zap",
  },
  {
    id: "charging",
    name: "Field charging kit",
    purpose: "Portable charging for continuous field deployment",
    bestUseCase: "Remote sites, emergency response, long survey days",
    icon: "Radio",
  },
];

export const droneOutputs: DroneOutput[] = [
  {
    id: "inspection",
    title: "Inspection image report",
    description: "Geo-tagged visual documentation with defect annotations.",
    icon: "FileText",
  },
  {
    id: "thermal",
    title: "Thermal anomaly report",
    description: "Heat map analysis with flagged anomaly locations.",
    icon: "Activity",
  },
  {
    id: "ortho",
    title: "Orthomosaic map",
    description: "Georeferenced aerial map for site and corridor documentation.",
    icon: "Map",
  },
  {
    id: "pointcloud",
    title: "3D point cloud",
    description: "Dense LiDAR or photogrammetry point cloud for engineering analysis.",
    icon: "Scan",
  },
  {
    id: "cad",
    title: "CAD/BIM/GIS-ready export",
    description: "Engineering-ready data packages for downstream workflows.",
    icon: "Link",
  },
  {
    id: "progress",
    title: "Site progress documentation",
    description: "Repeatable visual records for construction timeline tracking.",
    icon: "TrendingUp",
  },
];

export const droneWorkflow: WorkflowStep[] = [
  {
    step: 1,
    title: "Plan",
    description:
      "Define flight area, inspection target, altitude, route, and required output.",
    icon: "Map",
  },
  {
    step: 2,
    title: "Capture",
    description:
      "Collect aerial imagery, thermal data, RTK positions, or LiDAR-ready field data.",
    icon: "Camera",
  },
  {
    step: 3,
    title: "Analyze",
    description:
      "Use AI-assisted review to identify defects, risks, site changes, or asset conditions.",
    icon: "Brain",
  },
  {
    step: 4,
    title: "Deliver",
    description:
      "Export reports, maps, orthomosaic images, point clouds, CAD/BIM/GIS-ready files.",
    icon: "FileText",
  },
];

export const aeroX2Workflow: WorkflowStep[] = [
  {
    step: 1,
    title: "Prepare mission",
    description: "Define flight boundary, altitude, capture settings, and payload configuration.",
    icon: "Map",
  },
  {
    step: 2,
    title: "Fly and capture",
    description: "Execute manual, assisted, or autonomous flight with real-time monitoring.",
    icon: "Plane",
  },
  {
    step: 3,
    title: "Review with AI assistance",
    description: "Run defect detection and thermal anomaly review on captured data.",
    icon: "Brain",
  },
  {
    step: 4,
    title: "Generate technical reports",
    description: "Produce inspection reports, orthomosaics, and engineering deliverables.",
    icon: "FileText",
  },
  {
    step: 5,
    title: "Share with engineering teams",
    description: "Export to CAD, BIM, GIS, or cloud dashboards for team collaboration.",
    icon: "Users",
  },
];

export const droneRecommendations: DroneRecommendation[] = [
  {
    modelSlug: "aero-s1",
    title: "Choose Aero S1",
    description:
      "If you need a compact drone for quick visual inspections, site documentation, and small-team operations.",
  },
  {
    modelSlug: "aero-x2",
    title: "Choose Aero X2",
    description:
      "If you need a balanced professional drone for inspection, mapping, and thermal missions — our recommended flagship.",
  },
  {
    modelSlug: "aero-m3",
    title: "Choose Aero M3",
    description:
      "If you need advanced mapping, LiDAR workflows, and large-site operations with multi-payload support.",
  },
];

export const droneComparisonRows = [
  { key: "bestFor", label: "Best for" },
  { key: "flightTime", label: "Flight time" },
  { key: "range", label: "Range" },
  { key: "camera", label: "Camera" },
  { key: "thermal", label: "Thermal option" },
  { key: "lidarReady", label: "LiDAR-ready" },
  { key: "positioning", label: "Positioning" },
  { key: "payload", label: "Payload" },
  { key: "aiAnalytics", label: "AI analytics" },
  { key: "output", label: "Data output" },
  { key: "recommendedUsers", label: "Recommended users" },
] as const;

export function getDroneModelBySlug(slug: string): DroneModel | undefined {
  return droneModels.find((m) => m.slug === slug);
}

export function getFlagshipDrone(): DroneModel {
  return droneModels.find((m) => m.highlighted) ?? droneModels[1];
}
