import type { PlatformBenefit, PlatformModule } from "@/lib/types/autonomy-tech";

export const platformHero = {
  title: "One platform for intelligent autonomous operations.",
  description:
    "NexaBot AI connects robots, sensors, missions, operators, and analytics into a single control layer for real-world automation.",
};

export const platformModules: PlatformModule[] = [
  {
    id: "mission-planner",
    name: "Mission Planner",
    description:
      "Design repeatable inspection, patrol, and transport routes with altitude, speed, and capture parameters.",
    benefit: "Standardize field operations across sites and teams.",
    icon: "Route",
  },
  {
    id: "fleet-monitoring",
    name: "Fleet Monitoring",
    description:
      "Track robot status, battery, connectivity, and mission progress across every deployed device.",
    benefit: "Maintain operational visibility at scale.",
    icon: "Bot",
  },
  {
    id: "ai-vision",
    name: "AI Vision Engine",
    description:
      "Process camera streams to detect people, assets, defects, hazards, and mission-relevant objects.",
    benefit: "Turn raw video into actionable field intelligence.",
    icon: "ScanEye",
  },
  {
    id: "safety",
    name: "Safety Intelligence",
    description:
      "Monitor geofences, collision risk, emergency stop triggers, and restricted zones in real time.",
    benefit: "Deploy autonomy with stronger operational safeguards.",
    icon: "ShieldCheck",
  },
  {
    id: "analytics",
    name: "Analytics Dashboard",
    description:
      "Measure mission throughput, detection rates, downtime, and coverage across operations.",
    benefit: "Quantify the impact of robotics programs.",
    icon: "BarChart3",
  },
  {
    id: "api",
    name: "Developer API",
    description:
      "Integrate mission data, alerts, and telemetry with ERP, GIS, CAD, and internal dashboards.",
    benefit: "Connect robotics workflows to business systems.",
    icon: "Code2",
  },
  {
    id: "edge",
    name: "Edge Device Manager",
    description:
      "Configure onboard compute, sensor packages, firmware, and edge inference policies.",
    benefit: "Manage heterogeneous robot fleets from one interface.",
    icon: "Cpu",
  },
  {
    id: "cloud-sync",
    name: "Cloud Sync",
    description:
      "Synchronize mission logs, maps, detections, and media between edge devices and cloud storage.",
    benefit: "Keep field and office teams aligned on the same data.",
    icon: "Cloud",
  },
];

export const platformBenefits: PlatformBenefit[] = [
  {
    id: "monitoring",
    title: "Reduce manual monitoring",
    description:
      "Automate routine site checks and let operators focus on exceptions and decision-making.",
    icon: "Eye",
  },
  {
    id: "coverage",
    title: "Increase field coverage",
    description:
      "Run continuous or scheduled missions across larger sites with fewer field personnel.",
    icon: "Map",
  },
  {
    id: "safety",
    title: "Improve operational safety",
    description:
      "Detect hazards early with AI vision, geofencing, and real-time alert workflows.",
    icon: "Shield",
  },
  {
    id: "connect",
    title: "Connect robot data to business systems",
    description:
      "Export structured mission outputs to GIS, CAD/BIM, ERP, and custom internal tools.",
    icon: "Link",
  },
];
