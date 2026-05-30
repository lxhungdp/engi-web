import type { ScientificMetric, TrustCard, WorkflowStep } from "@/lib/types/biotech-research";

export const scientificMetrics: ScientificMetric[] = [
  { id: "markers", value: "250K+", label: "Genomic markers analyzed", note: "Demo metric" },
  { id: "panels", value: "40+", label: "Biomarker panels", note: "Demo metric" },
  { id: "programs", value: "12", label: "Research programs", note: "Demo metric" },
  { id: "consistency", value: "98%", label: "Report consistency workflow", note: "Demo metric" },
  { id: "multi-omics", value: "Multi-omics", label: "Ready platform", note: "Demo metric" },
];

export const heroFloatingCards = [
  { label: "NGS-based analysis", value: "Panel & exome" },
  { label: "Biomarker discovery", value: "Signature ID" },
  { label: "Clinical research", value: "Cohort support" },
  { label: "Molecular diagnostics", value: "Report-ready" },
  { label: "Data interpretation", value: "Knowledge-driven" },
];

export const labWorkflow: WorkflowStep[] = [
  {
    step: 1,
    title: "Sample & assay",
    description: "Define sample type, assay scope, and research objective.",
    icon: "FlaskConical",
  },
  {
    step: 2,
    title: "Sequencing & QC",
    description: "Generate molecular data and check quality metrics.",
    icon: "Activity",
  },
  {
    step: 3,
    title: "Bioinformatics analysis",
    description: "Identify variants, alterations, expression signals, or molecular patterns.",
    icon: "Cpu",
  },
  {
    step: 4,
    title: "Interpretation",
    description: "Review clinical relevance, pathways, disease context, and research meaning.",
    icon: "Brain",
  },
  {
    step: 5,
    title: "Reporting",
    description: "Deliver structured reports, visual summaries, and research-ready documentation.",
    icon: "FileText",
  },
];

export const trustCards: TrustCard[] = [
  { id: "qc", title: "Quality-controlled workflows", description: "Structured QC gates at sequencing, analysis, and interpretation stages.", icon: "ShieldCheck" },
  { id: "logic", title: "Transparent interpretation logic", description: "Documented reasoning paths for variant and biomarker review.", icon: "Eye" },
  { id: "review", title: "Structured data review", description: "Multi-step review workflows with versioned records.", icon: "ClipboardList" },
  { id: "docs", title: "Research documentation", description: "Publication-ready summaries and structured data exports.", icon: "FileText" },
  { id: "security", title: "Secure data handling", description: "Access-controlled storage and audit-ready data management.", icon: "Lock" },
  { id: "collab", title: "Collaboration-ready reports", description: "Reports designed for research team review and discussion.", icon: "Users" },
];
