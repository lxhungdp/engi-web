import type {
  IntegrationItem,
  SecurityItem,
  TechnologyPlatform,
} from "@/lib/types/biotech-research";

export const technologyPlatforms: TechnologyPlatform[] = [
  { id: "ngs", title: "NGS pipeline support", description: "End-to-end next-generation sequencing data processing and QC.", icon: "Dna" },
  { id: "snv", title: "SNV/Indel analysis", description: "Single nucleotide variant and insertion/deletion detection and review.", icon: "Scan" },
  { id: "cnv", title: "CNV analysis", description: "Copy number variation detection and profile interpretation.", icon: "BarChart3" },
  { id: "fusion", title: "Fusion review", description: "Gene fusion detection and structural variant assessment.", icon: "GitBranch" },
  { id: "msi", title: "MSI/TMB-ready workflow", description: "Microsatellite instability and tumor mutational burden analysis support.", icon: "Activity" },
  { id: "annotation", title: "Variant annotation", description: "Automated annotation with clinical and research knowledge sources.", icon: "BookOpen" },
  { id: "knowledge", title: "Knowledgebase integration", description: "Connected variant knowledge layers for consistent interpretation.", icon: "Database" },
  { id: "report", title: "Report automation", description: "Structured report generation from analysis and interpretation data.", icon: "FileText" },
  { id: "research-db", title: "Research database", description: "Organized storage and retrieval of molecular research records.", icon: "HardDrive" },
  { id: "collab", title: "Secure collaboration", description: "Controlled access for research team review and discussion.", icon: "Shield" },
];

export const platformCapabilities = technologyPlatforms.slice(0, 6);

export const dataVisualizations = [
  { id: "variants", title: "Genomic variant table", description: "Annotated SNV/Indel review with classification columns." },
  { id: "cnv", title: "CNV profile preview", description: "Copy number segment visualization and gene mapping." },
  { id: "pathway", title: "Pathway map", description: "Molecular pathway context for variant interpretation." },
  { id: "qc", title: "Sample QC summary", description: "Sequencing quality metrics and pass/fail indicators." },
  { id: "report", title: "Report card", description: "Structured molecular report preview with key findings." },
];

export const integrations: IntegrationItem[] = [
  { id: "lims", title: "LIMS", description: "Laboratory information management system connectivity.", icon: "FlaskConical" },
  { id: "research-db", title: "Research database", description: "Long-term molecular data repository integration.", icon: "Database" },
  { id: "clinical", title: "Clinical report system", description: "Export to clinical reporting workflows.", icon: "FileText" },
  { id: "cloud", title: "Cloud storage", description: "Secure cloud-based data storage and transfer.", icon: "Cloud" },
  { id: "api", title: "API integration", description: "Programmatic access to analysis and report data.", icon: "Webhook" },
  { id: "portal", title: "Collaboration portal", description: "Team review and discussion workspace.", icon: "Users" },
];

export const securityQuality: SecurityItem[] = [
  { id: "access", title: "Access control", description: "Role-based permissions for data and interpretation review." },
  { id: "trace", title: "Data traceability", description: "Versioned records linking samples to analysis and reports." },
  { id: "version", title: "Versioned interpretation", description: "Audit trail for interpretation changes and reviewer actions." },
  { id: "audit", title: "Audit-ready documentation", description: "Structured logs for quality and compliance review." },
  { id: "storage", title: "Secure storage", description: "Encrypted storage and controlled data transfer protocols." },
];
