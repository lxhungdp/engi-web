import type { ConstructionProject } from "@/lib/types/construction-engineering";

const sharedTechnicalScope = [
  { title: "Alignment and geometry", description: "Horizontal and vertical alignment, corridor geometry, and interface coordination.", icon: "Route" },
  { title: "Structural design", description: "Superstructure, substructure, and connection design with constructability review.", icon: "Building2" },
  { title: "Drainage and road interface", description: "Stormwater, pavement interfaces, and utility coordination.", icon: "Droplets" },
  { title: "Construction staging", description: "Phased construction plans minimizing traffic and site disruption.", icon: "HardHat" },
  { title: "Quantity and documentation", description: "Structured drawing packages, quantities, and review workflows.", icon: "ClipboardList" },
  { title: "Site coordination", description: "Field support, technical review, and contractor coordination.", icon: "Users" },
];

export const constructionProjects: ConstructionProject[] = [
  {
    slug: "urban-bridge-corridor",
    name: "Urban Bridge Corridor",
    category: "Transportation Infrastructure",
    categoryFilter: "Transportation",
    location: "Demo City",
    year: "2026",
    scope: "Multi-span bridge and road corridor connecting urban districts",
    description:
      "A multi-span bridge and road corridor designed to improve connectivity between growing urban districts.",
    shortDescription:
      "Multi-span bridge and road corridor connecting urban districts.",
    services: ["Civil design", "Structural engineering", "Construction documentation"],
    status: "Completed demo project",
    featured: true,
    challenge:
      "The corridor required new bridge structures across an active transport corridor while maintaining traffic flow, coordinating multiple stakeholders, and delivering construction-ready documentation within a compressed program.",
    approach:
      "TerraBuild developed integrated civil and structural designs with phased construction staging, BIM coordination for bridge components, and structured documentation packages aligned with contractor procurement.",
    scopeOfWork: [
      "Corridor alignment and geometry design",
      "Four bridge structure packages",
      "Drainage and road interface design",
      "Construction staging and sequencing",
      "Technical documentation and quantity support",
    ],
    deliverables: [
      "Civil design drawing packages",
      "Structural calculation reports",
      "Construction staging plans",
      "BIM coordination models",
      "Tender-ready documentation",
    ],
    technicalScope: sharedTechnicalScope,
    metrics: [
      { label: "Corridor length", value: "2.8 km" },
      { label: "Bridge structures", value: "4" },
      { label: "Delivery program", value: "18 months" },
      { label: "Drawing packages", value: "12" },
    ],
    relatedProjects: ["highway-interchange-expansion", "metro-station-complex"],
  },
  {
    slug: "metro-station-complex",
    name: "Metro Station Complex",
    category: "Urban Development",
    categoryFilter: "Urban Development",
    location: "North District, Demo City",
    year: "2025",
    scope: "Underground station structure, access systems, and transit integration",
    description:
      "Underground station structure, access systems, and public transit integration for a growing urban transit network.",
    shortDescription:
      "Underground station structure, access systems, and public transit integration.",
    services: ["Structural engineering", "Digital engineering / BIM", "Construction management"],
    status: "Completed demo project",
    featured: true,
    challenge:
      "Complex underground structural systems, pedestrian access requirements, and multi-discipline coordination in a dense urban environment.",
    approach:
      "Integrated structural and BIM workflows with staged construction documentation and coordinated interface design for mechanical, architectural, and civil systems.",
    scopeOfWork: [
      "Station structural design",
      "Access ramp and entrance structures",
      "Temporary works coordination",
      "BIM model coordination",
      "Construction phase documentation",
    ],
    deliverables: [
      "Structural design packages",
      "BIM coordination models",
      "Construction sequencing plans",
      "Technical review reports",
    ],
    technicalScope: [
      { title: "Underground structure", description: "Station box, platforms, and structural framing design.", icon: "Building2" },
      { title: "Access systems", description: "Entrances, ramps, and pedestrian circulation structures.", icon: "Route" },
      { title: "BIM coordination", description: "Multi-discipline clash detection and model alignment.", icon: "Box" },
      { title: "Construction staging", description: "Phased excavation and structural installation plans.", icon: "HardHat" },
      { title: "Quality documentation", description: "Review workflows and construction records.", icon: "ClipboardList" },
      { title: "Site coordination", description: "Field support and contractor technical alignment.", icon: "Users" },
    ],
    metrics: [
      { label: "Station depth", value: "28 m" },
      { label: "Platform length", value: "180 m" },
      { label: "BIM models", value: "6 disciplines" },
      { label: "Program", value: "24 months" },
    ],
    relatedProjects: ["urban-bridge-corridor", "smart-construction-monitoring-center"],
  },
  {
    slug: "industrial-logistics-hub",
    name: "Industrial Logistics Hub",
    category: "Industrial Construction",
    categoryFilter: "Industrial",
    location: "East Industrial Zone",
    year: "2025",
    scope: "Large-scale logistics and warehouse facility with heavy-duty site infrastructure",
    description:
      "Large-scale logistics and warehouse facility with heavy-duty site infrastructure, pavement, and drainage systems.",
    shortDescription:
      "Large-scale logistics facility with heavy-duty site infrastructure.",
    services: ["Civil engineering design", "Structural engineering", "Project documentation"],
    status: "Completed demo project",
    featured: true,
    challenge:
      "Heavy vehicle loading, large paved areas, and industrial utility interfaces required robust civil and structural design with efficient construction documentation.",
    approach:
      "Practical civil design for heavy-duty pavements and drainage, structural systems for warehouse and support buildings, and coordinated documentation for fast-track delivery.",
    scopeOfWork: [
      "Site grading and drainage",
      "Heavy-duty pavement design",
      "Warehouse structural systems",
      "Utility corridor coordination",
      "Tender documentation",
    ],
    deliverables: [
      "Civil design packages",
      "Structural drawings",
      "Quantity summaries",
      "Construction documentation",
    ],
    technicalScope: sharedTechnicalScope,
    metrics: [
      { label: "Site area", value: "12 ha" },
      { label: "Warehouse area", value: "45,000 m²" },
      { label: "Pavement zones", value: "8" },
      { label: "Program", value: "14 months" },
    ],
    relatedProjects: ["highway-interchange-expansion", "coastal-drainage-upgrade"],
  },
  {
    slug: "coastal-drainage-upgrade",
    name: "Coastal Drainage Upgrade",
    category: "Water & Drainage",
    categoryFilter: "Water & Drainage",
    location: "Coastal District",
    year: "2024",
    scope: "Stormwater network upgrade and coastal drainage resilience improvements",
    description:
      "Stormwater network upgrade and coastal drainage resilience improvements for flood-prone urban areas.",
    shortDescription:
      "Stormwater network upgrade and coastal drainage resilience improvements.",
    services: ["Civil engineering design", "Infrastructure consulting", "Project documentation"],
    status: "Completed demo project",
    challenge:
      "Existing drainage capacity limitations, coastal exposure, and the need to maintain service during staged construction.",
    approach:
      "Hydraulic modeling, staged upgrade design, and construction documentation aligned with environmental and regulatory requirements.",
    scopeOfWork: [
      "Drainage network modeling",
      "Pipe and channel upgrades",
      "Outfall and interface design",
      "Construction staging",
      "Technical reporting",
    ],
    deliverables: [
      "Hydraulic analysis reports",
      "Drainage design drawings",
      "Staging plans",
      "As-built documentation",
    ],
    technicalScope: [
      { title: "Hydraulic modeling", description: "Stormwater capacity and flood resilience analysis.", icon: "Droplets" },
      { title: "Network design", description: "Pipe, channel, and structure upgrades.", icon: "Route" },
      { title: "Environmental interface", description: "Coastal and regulatory coordination.", icon: "Leaf" },
      { title: "Construction staging", description: "Phased works maintaining service.", icon: "HardHat" },
      { title: "Documentation", description: "Drawing packages and technical reports.", icon: "ClipboardList" },
      { title: "Site support", description: "Field coordination and review.", icon: "Users" },
    ],
    metrics: [
      { label: "Network length", value: "4.2 km" },
      { label: "Structures upgraded", value: "9" },
      { label: "Program", value: "16 months" },
      { label: "Reports", value: "6" },
    ],
    relatedProjects: ["urban-bridge-corridor", "industrial-logistics-hub"],
  },
  {
    slug: "smart-construction-monitoring-center",
    name: "Smart Construction Monitoring Center",
    category: "Urban Development",
    categoryFilter: "Urban Development",
    location: "Central Demo City",
    year: "2024",
    scope: "Technical facility for construction monitoring, BIM coordination, and project data management",
    description:
      "Technical facility for construction monitoring, BIM coordination, and integrated project data management.",
    shortDescription:
      "Technical facility for construction monitoring and BIM coordination.",
    services: ["Digital engineering / BIM", "Construction management", "Project delivery support"],
    status: "Completed demo project",
    challenge:
      "Integrating digital workflows, multi-project data management, and technical team coordination in a single facility program.",
    approach:
      "BIM-centered design coordination, digital dashboard planning, and documentation standards for ongoing project support.",
    scopeOfWork: [
      "BIM workflow setup",
      "Facility structural design",
      "Digital dashboard specification",
      "Documentation standards",
      "Training and handover",
    ],
    deliverables: [
      "BIM coordination framework",
      "Structural design package",
      "Digital workflow documentation",
      "Project dashboard templates",
    ],
    technicalScope: [
      { title: "Digital workflows", description: "BIM standards and model coordination protocols.", icon: "Box" },
      { title: "Facility design", description: "Structural and civil design for technical center.", icon: "Building2" },
      { title: "Data management", description: "Project dashboard and document control setup.", icon: "Database" },
      { title: "Quality systems", description: "Review and verification workflows.", icon: "ShieldCheck" },
      { title: "Documentation", description: "Standards, templates, and handover packages.", icon: "ClipboardList" },
      { title: "Team coordination", description: "Multi-project support structure.", icon: "Users" },
    ],
    metrics: [
      { label: "Facility area", value: "2,400 m²" },
      { label: "BIM projects", value: "12 active" },
      { label: "Dashboard modules", value: "8" },
      { label: "Program", value: "10 months" },
    ],
    relatedProjects: ["metro-station-complex", "industrial-logistics-hub"],
  },
  {
    slug: "highway-interchange-expansion",
    name: "Highway Interchange Expansion",
    category: "Transportation Infrastructure",
    categoryFilter: "Transportation",
    location: "Outer Ring Road, Demo City",
    year: "2023",
    scope: "Interchange expansion, ramp structures, and traffic staging for major highway corridor",
    description:
      "Interchange expansion, ramp structures, and traffic staging for a major regional highway corridor.",
    shortDescription:
      "Interchange expansion with ramp structures and traffic staging.",
    services: ["Civil engineering design", "Structural engineering", "Construction management"],
    status: "Completed demo project",
    challenge:
      "Maintaining highway traffic during construction while delivering new ramp structures and expanded interchange capacity.",
    approach:
      "Detailed staging design, structural packages for ramp bridges, and coordinated documentation for phased construction.",
    scopeOfWork: [
      "Interchange geometry design",
      "Ramp bridge structures",
      "Traffic staging plans",
      "Drainage upgrades",
      "Construction documentation",
    ],
    deliverables: [
      "Civil and structural packages",
      "Staging and traffic plans",
      "Quantity reports",
      "Construction support records",
    ],
    technicalScope: sharedTechnicalScope,
    metrics: [
      { label: "New ramp structures", value: "3" },
      { label: "Lanes added", value: "6" },
      { label: "Program", value: "20 months" },
      { label: "Drawing packages", value: "10" },
    ],
    relatedProjects: ["urban-bridge-corridor", "coastal-drainage-upgrade"],
  },
];

export function getProjectBySlug(slug: string): ConstructionProject | undefined {
  return constructionProjects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): ConstructionProject[] {
  if (category === "All") return constructionProjects;
  return constructionProjects.filter((p) => p.categoryFilter === category);
}

export function getFeaturedProjects(): ConstructionProject[] {
  return constructionProjects.filter((p) => p.featured);
}
