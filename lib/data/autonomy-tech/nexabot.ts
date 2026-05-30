import type {
  DashboardModule,
  FloatingStat,
  NexaBotArchitectureStep,
  NexaBotCapability,
  NexaBotIntegration,
  NexaBotMetric,
  NexaBotUseCase,
} from "@/lib/types/autonomy-tech";

export const floatingStats: FloatingStat[] = [
  { id: "success", label: "98.7% task success", icon: "TrendingUp" },
  { id: "vision", label: "Real-time AI vision", icon: "Eye" },
  { id: "fleet", label: "Multi-robot control", icon: "Bot" },
  { id: "deploy", label: "Industrial deployment ready", icon: "Factory" },
];

export const dashboardModules: DashboardModule[] = [
  {
    id: "fleet",
    title: "Fleet Status",
    value: "12 Active",
    detail: "3 missions running",
    icon: "Bot",
    status: "ok",
  },
  {
    id: "queue",
    title: "Mission Queue",
    value: "7 Pending",
    detail: "Next: Zone B patrol",
    icon: "ListTodo",
    status: "active",
  },
  {
    id: "vision",
    title: "AI Vision",
    value: "Live",
    detail: "Object detection on",
    icon: "ScanEye",
    status: "ok",
  },
  {
    id: "obstacle",
    title: "Obstacle Detection",
    value: "Clear",
    detail: "No hazards detected",
    icon: "ShieldAlert",
    status: "ok",
  },
  {
    id: "health",
    title: "Robot Health",
    value: "98%",
    detail: "All systems nominal",
    icon: "Activity",
    status: "ok",
  },
  {
    id: "map",
    title: "Live Map",
    value: "4 Zones",
    detail: "Real-time tracking",
    icon: "Map",
    status: "active",
  },
];

export const previewPanels = [
  { id: "planner", title: "Mission Planner", icon: "Route" },
  { id: "fleet", title: "Fleet Monitoring", icon: "Bot" },
  { id: "stream", title: "AI Vision Stream", icon: "ScanEye" },
  { id: "alerts", title: "Risk Alerts", icon: "Bell" },
  { id: "analytics", title: "Performance Analytics", icon: "BarChart3" },
];

export const capabilities: NexaBotCapability[] = [
  {
    id: "vision",
    title: "AI Vision Engine",
    description:
      "Detect people, objects, assets, and unsafe conditions in real time.",
    icon: "ScanEye",
    span: "wide",
  },
  {
    id: "automation",
    title: "Mission Automation",
    description:
      "Create repeatable workflows for inspection, patrol, transport, and monitoring.",
    icon: "Workflow",
  },
  {
    id: "fleet",
    title: "Fleet Orchestration",
    description:
      "Coordinate multiple robots, drones, or autonomous devices from one interface.",
    icon: "Network",
    span: "tall",
  },
  {
    id: "edge",
    title: "Edge-to-Cloud Data",
    description:
      "Process critical decisions at the edge while syncing insights to the cloud.",
    icon: "Cloud",
  },
  {
    id: "safety",
    title: "Safety Intelligence",
    description:
      "Monitor risk zones, collision warnings, and emergency stop conditions.",
    icon: "ShieldCheck",
  },
  {
    id: "api",
    title: "Developer API",
    description:
      "Connect robotics data to internal systems, dashboards, and customer portals.",
    icon: "Code2",
    span: "wide",
  },
];

export const useCases: NexaBotUseCase[] = [
  {
    id: "inspection",
    title: "Industrial Inspection",
    description:
      "Automate asset inspections with AI vision, thermal analysis, and structured reporting.",
    icon: "Search",
  },
  {
    id: "manufacturing",
    title: "Smart Manufacturing",
    description:
      "Monitor production lines, detect anomalies, and coordinate mobile robots on the factory floor.",
    icon: "Factory",
  },
  {
    id: "security",
    title: "Security & Patrol",
    description:
      "Run autonomous patrol routes with live alerts, perimeter monitoring, and incident logging.",
    icon: "Shield",
  },
  {
    id: "construction",
    title: "Construction Monitoring",
    description:
      "Track site progress, safety zones, and equipment movement across large project areas.",
    icon: "HardHat",
  },
  {
    id: "research",
    title: "Research & Robotics Labs",
    description:
      "Prototype autonomy workflows, test sensor fusion, and export mission data for analysis.",
    icon: "FlaskConical",
  },
  {
    id: "emergency",
    title: "Emergency Response",
    description:
      "Deploy autonomous systems for situational awareness, search support, and rapid assessment.",
    icon: "Siren",
  },
];

export const architectureSteps: NexaBotArchitectureStep[] = [
  {
    id: "sense",
    step: 1,
    title: "Sense",
    description:
      "Collect camera, LiDAR, GPS, IMU, thermal, and field sensor data.",
    icon: "Radio",
  },
  {
    id: "understand",
    step: 2,
    title: "Understand",
    description:
      "Use AI vision and context models to detect objects, risks, and mission conditions.",
    icon: "Brain",
  },
  {
    id: "decide",
    step: 3,
    title: "Decide",
    description:
      "Trigger alerts, route updates, task assignments, or autonomous actions.",
    icon: "GitBranch",
  },
  {
    id: "operate",
    step: 4,
    title: "Operate",
    description:
      "Monitor every robot, mission, and result through a unified control dashboard.",
    icon: "LayoutDashboard",
  },
];

export const metrics: NexaBotMetric[] = [
  { value: "42%", label: "Faster inspection cycles" },
  { value: "3.8x", label: "More site coverage per operator" },
  { value: "24/7", label: "Autonomous monitoring" },
  { value: "99.9%", label: "Cloud platform uptime" },
];

export const integrations: NexaBotIntegration[] = [
  { id: "cad", name: "CAD / BIM", icon: "Box" },
  { id: "gis", name: "GIS platforms", icon: "Map" },
  { id: "erp", name: "ERP systems", icon: "Database" },
  { id: "storage", name: "Cloud storage", icon: "Cloud" },
  { id: "dashboards", name: "Internal dashboards", icon: "LayoutDashboard" },
  { id: "api", name: "API & webhooks", icon: "Webhook" },
];
