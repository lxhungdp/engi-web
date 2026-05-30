import type {
  ArchitectureLayer,
  DataFlowStep,
  SecurityFeature,
} from "@/lib/types/autonomy-tech";

export const architectureHero = {
  title: "From sensors to decisions in one connected architecture.",
  description:
    "NexaBot AI organizes device telemetry, edge inference, cloud sync, and operator workflows into a unified robotics platform stack.",
};

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "device",
    name: "Device Layer",
    description:
      "Physical robots, drones, AMRs, and autonomous platforms executing missions in the field.",
    exampleData: ["Device ID", "Battery status", "Mission state", "Connectivity"],
    technologies: ["ROS 2", "MQTT", "Custom SDK"],
    output: "Device telemetry stream",
    icon: "Bot",
  },
  {
    id: "sensor",
    name: "Sensor Layer",
    description:
      "Cameras, LiDAR, IMU, GPS, thermal sensors, and environmental inputs attached to each device.",
    exampleData: ["Camera frames", "LiDAR point clouds", "GPS fixes", "IMU readings"],
    technologies: ["RTSP", "LiDAR SDK", "GNSS/RTK"],
    output: "Raw and timestamped sensor data",
    icon: "Radio",
  },
  {
    id: "edge",
    name: "Edge AI Layer",
    description:
      "On-device inference for object detection, obstacle avoidance, and time-critical mission decisions.",
    exampleData: ["Detections", "Risk scores", "Local alerts", "Route adjustments"],
    technologies: ["Edge GPU", "TensorRT", "ONNX"],
    output: "Low-latency autonomy decisions",
    icon: "Cpu",
  },
  {
    id: "cloud",
    name: "Cloud Platform Layer",
    description:
      "Mission orchestration, data storage, analytics pipelines, and API services in the cloud.",
    exampleData: ["Mission logs", "Media assets", "Fleet state", "Analytics events"],
    technologies: ["Kubernetes", "PostgreSQL", "S3", "REST API"],
    output: "Synchronized platform data and services",
    icon: "Cloud",
  },
  {
    id: "dashboard",
    name: "Operator Dashboard Layer",
    description:
      "Web interface for mission planning, fleet monitoring, alert review, and report generation.",
    exampleData: ["Live maps", "Alert queues", "Mission timelines", "Performance charts"],
    technologies: ["React", "WebSocket", "Role-based access"],
    output: "Operator actions and exported reports",
    icon: "LayoutDashboard",
  },
];

export const dataFlowSteps: DataFlowStep[] = [
  { id: "sensors", label: "Sensors" },
  { id: "edge", label: "Edge Processing" },
  { id: "ai", label: "AI Decision Layer" },
  { id: "cloud", label: "Cloud Sync" },
  { id: "dashboard", label: "Operator Dashboard" },
  { id: "reports", label: "Reports / API" },
];

export const securityFeatures: SecurityFeature[] = [
  {
    id: "rbac",
    title: "Role-based access",
    description: "Control operator, admin, and API permissions across teams and sites.",
    icon: "Users",
  },
  {
    id: "encryption",
    title: "Encrypted data transfer",
    description: "TLS-encrypted communication between devices, edge nodes, and cloud services.",
    icon: "Lock",
  },
  {
    id: "audit",
    title: "Audit logs",
    description: "Track mission changes, operator actions, and system configuration updates.",
    icon: "FileText",
  },
  {
    id: "health",
    title: "Device health monitoring",
    description: "Monitor connectivity, firmware status, and sensor health across the fleet.",
    icon: "Activity",
  },
  {
    id: "api-control",
    title: "API access control",
    description: "Scoped API keys, webhook signing, and integration-level permission policies.",
    icon: "Key",
  },
];

export const architectureIntegrations = [
  { id: "cad", name: "CAD / BIM", icon: "Box" },
  { id: "gis", name: "GIS", icon: "Map" },
  { id: "erp", name: "ERP", icon: "Database" },
  { id: "storage", name: "Cloud storage", icon: "Cloud" },
  { id: "dashboards", name: "Internal dashboards", icon: "LayoutDashboard" },
  { id: "rest", name: "REST API", icon: "Code2" },
  { id: "webhooks", name: "Webhooks", icon: "Webhook" },
];
