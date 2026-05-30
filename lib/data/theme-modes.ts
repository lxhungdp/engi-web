import type { ThemeMode } from "@/lib/types";

export const themeModes: ThemeMode[] = [
  {
    id: "tech",
    name: "Tech Mode",
    tag: "SaaS / Robotics",
    description:
      "Dark gradients, glassmorphism, and dashboard-style layouts for drone, AI, and software companies.",
    forIndustries: [
      "Drone companies",
      "AI companies",
      "Robotics",
      "Software",
      "Automation",
    ],
    preview: {
      companyName: "AeroPulse Systems",
      heroTitle: "Autonomous flight intelligence",
      heroSubtitle:
        "Real-time telemetry, fleet management, and mission planning for next-generation drone operations.",
      ctaLabel: "Request Demo",
      features: [
        { title: "Active Drones", value: "128" },
        { title: "Flight Hours", value: "14.2k" },
        { title: "Uptime", value: "99.8%" },
      ],
      services: [
        {
          title: "Fleet Dashboard",
          description: "Live status across all deployed units.",
        },
        {
          title: "Mission Planner",
          description: "Automated route optimization and safety checks.",
        },
        {
          title: "API Integration",
          description: "Connect sensors, ERP, and field tools.",
        },
      ],
      specLabel: "Platform Specs",
      specItems: [
        { label: "Latency", value: "< 50ms" },
        { label: "Coverage", value: "Global" },
        { label: "Compliance", value: "ISO 27001" },
      ],
    },
  },
  {
    id: "engineering",
    name: "Engineering Mode",
    tag: "Civil / Structural",
    description:
      "Clean technical layouts with grid lines and CAD-inspired elements for engineering firms.",
    forIndustries: [
      "Civil engineering",
      "Bridge design",
      "Construction consultants",
      "Structural engineering",
    ],
    preview: {
      companyName: "NordSpan Engineering",
      heroTitle: "Bridge design & structural analysis",
      heroSubtitle:
        "Precision engineering for infrastructure projects — from concept to construction documentation.",
      ctaLabel: "View Projects",
      features: [
        { title: "Projects", value: "240+" },
        { title: "Span Record", value: "1.2 km" },
        { title: "Certified", value: "ISO 9001" },
      ],
      services: [
        {
          title: "Structural Design",
          description: "FEA modeling and load analysis for complex spans.",
        },
        {
          title: "Site Inspection",
          description: "On-site assessment and compliance reporting.",
        },
        {
          title: "CAD Documentation",
          description: "Detailed drawings ready for construction teams.",
        },
      ],
      specLabel: "Project Data",
      specItems: [
        { label: "Load Class", value: "HL-93" },
        { label: "Design Code", value: "AASHTO LRFD" },
        { label: "Team Size", value: "45 engineers" },
      ],
    },
  },
  {
    id: "product",
    name: "Product Mode",
    tag: "Hardware / SaaS",
    description:
      "Bold product heroes, feature cards, and specification tables for technical product launches.",
    forIndustries: [
      "Technical products",
      "Hardware products",
      "Measurement devices",
      "SaaS launches",
    ],
    preview: {
      companyName: "MeasurePro Instruments",
      heroTitle: "Precision laser measurement, redefined",
      heroSubtitle:
        "Industrial-grade accuracy for manufacturing, QA, and field engineering teams.",
      ctaLabel: "Get Pricing",
      features: [
        { title: "Accuracy", value: "±0.01mm" },
        { title: "Range", value: "0–500m" },
        { title: "Battery", value: "48 hrs" },
      ],
      services: [
        {
          title: "Laser Triangulation",
          description: "Sub-millimeter precision in any environment.",
        },
        {
          title: "Cloud Sync",
          description: "Export data to your existing workflow tools.",
        },
        {
          title: "Rugged Design",
          description: "IP67 rated for harsh industrial conditions.",
        },
      ],
      specLabel: "Specifications",
      specItems: [
        { label: "Weight", value: "1.2 kg" },
        { label: "Interface", value: "USB-C / WiFi" },
        { label: "Warranty", value: "3 years" },
      ],
    },
  },
  {
    id: "biotech",
    name: "BioTech Mode",
    tag: "Research / Diagnostics",
    description:
      "Clean, trust-focused layouts with scientific iconography for biotech and research organizations.",
    forIndustries: [
      "Biotech companies",
      "Diagnostic labs",
      "Research groups",
      "Medical technology",
    ],
    preview: {
      companyName: "HelixPath Diagnostics",
      heroTitle: "Advanced molecular diagnostics",
      heroSubtitle:
        "Accelerating clinical research with validated assays and transparent data workflows.",
      ctaLabel: "Partner With Us",
      features: [
        { title: "Assays", value: "320+" },
        { title: "Publications", value: "89" },
        { title: "Lab Partners", value: "42" },
      ],
      services: [
        {
          title: "Assay Development",
          description: "Custom protocols validated to clinical standards.",
        },
        {
          title: "Data Analytics",
          description: "Statistical pipelines for reproducible results.",
        },
        {
          title: "Regulatory Support",
          description: "Documentation for FDA and CE pathways.",
        },
      ],
      specLabel: "Lab Metrics",
      specItems: [
        { label: "Sensitivity", value: "99.2%" },
        { label: "Turnaround", value: "24–48 hrs" },
        { label: "Accreditation", value: "CAP / CLIA" },
      ],
    },
  },
  {
    id: "premium",
    name: "Premium Mode",
    tag: "Consulting / Expert",
    description:
      "Minimal black-and-white aesthetics with large typography for high-end technical services.",
    forIndustries: [
      "Consulting companies",
      "Expert personal brands",
      "High-end technical services",
    ],
    preview: {
      companyName: "Axiom Technical Advisory",
      heroTitle: "Strategy for complex engineering decisions",
      heroSubtitle:
        "Independent advisory for infrastructure investors, developers, and technical leadership teams.",
      ctaLabel: "Schedule Consultation",
      features: [
        { title: "Experience", value: "25+ yrs" },
        { title: "Advisory Value", value: "$2.1B" },
        { title: "Clients", value: "Fortune 500" },
      ],
      services: [
        {
          title: "Technical Due Diligence",
          description: "Risk assessment for major infrastructure investments.",
        },
        {
          title: "Executive Advisory",
          description: "Board-level guidance on engineering strategy.",
        },
        {
          title: "Expert Witness",
          description: "Authoritative testimony for complex disputes.",
        },
      ],
      specLabel: "Credentials",
      specItems: [
        { label: "PE License", value: "Multi-state" },
        { label: "Sectors", value: "Energy / Infra" },
        { label: "Engagements", value: "Confidential" },
      ],
    },
  },
];
