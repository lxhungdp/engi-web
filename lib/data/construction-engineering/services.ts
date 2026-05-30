import type { ConstructionService } from "@/lib/types/construction-engineering";

export const constructionServices: ConstructionService[] = [
  {
    id: "civil",
    slug: "civil-engineering-design",
    title: "Civil Engineering Design",
    shortDescription:
      "Roads, bridges, drainage, earthworks, and infrastructure planning.",
    longDescription:
      "TerraBuild provides civil engineering design for transportation corridors, site infrastructure, drainage systems, and earthworks. Our teams develop practical, construction-ready solutions aligned with project constraints, standards, and delivery schedules.",
    deliverables: [
      "Alignment and grading plans",
      "Drainage design packages",
      "Earthworks volumes",
      "Construction staging plans",
    ],
    projectTypes: ["Roads", "Bridges", "Site infrastructure", "Drainage"],
    tools: ["AutoCAD Civil 3D", "12d Model", "GIS coordination"],
    icon: "Route",
    featured: true,
  },
  {
    id: "structural",
    slug: "structural-engineering",
    title: "Structural Engineering",
    shortDescription:
      "Concrete, steel, bridge, building, and industrial structural systems.",
    longDescription:
      "Our structural engineers design concrete, steel, and composite systems for bridges, buildings, and industrial facilities. We focus on constructability, safety, and clear documentation for contractors and project teams.",
    deliverables: [
      "Structural calculations",
      "Reinforcement and steel schedules",
      "Connection details",
      "Construction support drawings",
    ],
    projectTypes: ["Bridges", "Buildings", "Industrial structures", "Retaining walls"],
    tools: ["Revit Structure", "SAP2000", "Tekla coordination"],
    icon: "Building2",
    featured: true,
  },
  {
    id: "construction-mgmt",
    slug: "construction-management",
    title: "Construction Management",
    shortDescription:
      "Planning, coordination, quality control, documentation, and site support.",
    longDescription:
      "TerraBuild supports construction teams with planning, coordination, quality verification, and field documentation. We help align design intent with site execution through structured review and reporting workflows.",
    deliverables: [
      "Construction programs",
      "Quality control checklists",
      "Site coordination reports",
      "Progress documentation",
    ],
    projectTypes: ["Infrastructure", "Urban development", "Industrial facilities"],
    tools: ["Project dashboards", "Document control systems", "Field reporting"],
    icon: "HardHat",
    featured: true,
  },
  {
    id: "consulting",
    slug: "infrastructure-consulting",
    title: "Infrastructure Consulting",
    shortDescription:
      "Feasibility studies, technical review, value engineering, and design optimization.",
    longDescription:
      "We provide independent technical review, feasibility assessment, and value engineering for infrastructure projects. Our consulting services help clients reduce risk, optimize design decisions, and improve delivery confidence.",
    deliverables: [
      "Feasibility reports",
      "Technical review memos",
      "Value engineering studies",
      "Design optimization recommendations",
    ],
    projectTypes: ["Transportation", "Utilities", "Public infrastructure"],
    tools: ["Technical analysis", "Risk assessment", "Cost review"],
    icon: "Search",
    featured: true,
  },
  {
    id: "digital",
    slug: "digital-engineering",
    title: "Digital Engineering",
    shortDescription:
      "BIM, CAD coordination, 3D modeling, digital twin workflows, and project data.",
    longDescription:
      "Our digital engineering team coordinates BIM models, CAD deliverables, and project data across disciplines. We support clash detection, model-based documentation, and digital twin preparation for long-term asset management.",
    deliverables: [
      "BIM coordination models",
      "Clash detection reports",
      "3D visualization packages",
      "Digital twin data structures",
    ],
    projectTypes: ["Complex infrastructure", "Multi-discipline buildings", "Industrial"],
    tools: ["Revit", "Navisworks", "BIM 360", "Point cloud integration"],
    icon: "Box",
    featured: true,
  },
  {
    id: "delivery",
    slug: "project-delivery-support",
    title: "Project Delivery Support",
    shortDescription:
      "Tender documents, engineering reports, quantity review, and progress documentation.",
    longDescription:
      "TerraBuild prepares tender-ready documentation, engineering reports, quantity reviews, and progress records to support procurement, construction, and stakeholder reporting throughout the project lifecycle.",
    deliverables: [
      "Tender drawing packages",
      "Engineering reports",
      "Quantity summaries",
      "Progress documentation",
    ],
    projectTypes: ["Public infrastructure", "Private development", "EPC support"],
    tools: ["Document control", "Report templates", "Quantity takeoff"],
    icon: "FileText",
    featured: true,
  },
  {
    id: "bridge",
    slug: "bridge-infrastructure-engineering",
    title: "Bridge and Infrastructure Engineering",
    shortDescription:
      "Bridge geometry, structural systems, staging, and infrastructure interface design.",
    longDescription:
      "Specialized bridge and infrastructure engineering covering alignment, structural systems, construction staging, and interface coordination with roads, drainage, and utilities.",
    deliverables: [
      "Bridge geometry packages",
      "Structural design drawings",
      "Staging plans",
      "Interface coordination",
    ],
    projectTypes: ["Bridges", "Viaducts", "Corridor infrastructure"],
    tools: ["Bridge modeling", "Structural analysis", "Staging review"],
    icon: "Landmark",
  },
  {
    id: "documentation",
    slug: "project-documentation",
    title: "Project Documentation",
    shortDescription:
      "Structured drawing packages, reports, and construction-ready documentation.",
    longDescription:
      "We produce structured technical documentation including drawing packages, specifications support, and construction records aligned with project standards and review workflows.",
    deliverables: [
      "Drawing registers",
      "Technical report packages",
      "As-built documentation",
      "Review and approval records",
    ],
    projectTypes: ["All infrastructure sectors"],
    tools: ["CAD standards", "Document control", "QA workflows"],
    icon: "ClipboardList",
  },
  {
    id: "tender",
    slug: "tender-proposal-support",
    title: "Tender and Proposal Support",
    shortDescription:
      "Technical content, methodology, and documentation for bids and proposals.",
    longDescription:
      "Support for tender submissions including technical methodology, resource planning, and documentation packages that communicate engineering capability and delivery approach.",
    deliverables: [
      "Technical methodology",
      "Proposal documentation",
      "Resource and program inputs",
      "Compliance matrices",
    ],
    projectTypes: ["Public tenders", "Private bids", "Framework submissions"],
    tools: ["Proposal templates", "Technical writing", "Program planning"],
    icon: "Briefcase",
  },
  {
    id: "review",
    slug: "technical-review-value-engineering",
    title: "Technical Review and Value Engineering",
    shortDescription:
      "Independent review, constructability assessment, and design optimization.",
    longDescription:
      "Independent technical review and value engineering to identify constructability issues, optimize systems, and improve project outcomes before and during construction.",
    deliverables: [
      "Review reports",
      "Constructability assessments",
      "Optimization recommendations",
      "Risk mitigation notes",
    ],
    projectTypes: ["Complex infrastructure", "Design-build", "EPC"],
    tools: ["Technical audit", "Cost-risk review", "Workshop facilitation"],
    icon: "ShieldCheck",
  },
];

export const serviceWorkflow = [
  { step: 1, title: "Technical discovery", description: "Understand project scope, constraints, and stakeholder requirements.", icon: "Search" },
  { step: 2, title: "Concept and feasibility", description: "Evaluate options, assess feasibility, and define the technical approach.", icon: "Lightbulb" },
  { step: 3, title: "Design development", description: "Develop drawings, models, calculations, and documentation packages.", icon: "PenTool" },
  { step: 4, title: "Coordination and review", description: "Align disciplines, resolve clashes, and verify quality standards.", icon: "GitBranch" },
  { step: 5, title: "Construction support", description: "Support site teams with technical review, RFIs, and field coordination.", icon: "HardHat" },
  { step: 6, title: "Final documentation", description: "Deliver as-built records, reports, and project close-out packages.", icon: "FileText" },
];

export function getServiceBySlug(slug: string) {
  return constructionServices.find((s) => s.slug === slug);
}
