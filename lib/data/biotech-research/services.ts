import type { BiotechService } from "@/lib/types/biotech-research";

export const biotechServices: BiotechService[] = [
  {
    id: "diagnostic",
    slug: "molecular-diagnostic-support",
    title: "Molecular Diagnostic Support",
    shortDescription:
      "NGS-based testing workflows, report-ready analysis, and clinical interpretation support.",
    longDescription:
      "End-to-end support for molecular diagnostic workflows including NGS analysis, quality review, variant interpretation, and structured report generation for clinical and research laboratories.",
    whoItHelps: "Diagnostic labs, hospital research groups, and molecular testing programs.",
    deliverables: ["Analysis reports", "Variant tables", "QC summaries", "Interpretation documentation"],
    dataTypes: ["NGS panel data", "WES/WGS", "Targeted assays"],
    relatedTechnologies: ["NGS pipeline", "Variant annotation", "Report automation"],
    icon: "TestTube",
  },
  {
    id: "biomarker",
    slug: "biomarker-discovery",
    title: "Biomarker Discovery Programs",
    shortDescription:
      "Data-driven biomarker identification and validation for research and clinical programs.",
    longDescription:
      "Structured biomarker discovery programs combining molecular data analysis, statistical review, and validation cohort support for translational research.",
    whoItHelps: "Biotech R&D teams, academic research groups, and pharma translational programs.",
    deliverables: ["Biomarker candidates", "Validation reports", "Panel recommendations", "Research summaries"],
    dataTypes: ["Multi-omics", "Clinical outcomes", "Longitudinal cohorts"],
    relatedTechnologies: ["Pathway mapping", "Knowledgebase integration", "Research database"],
    icon: "Target",
  },
  {
    id: "clinical-research",
    slug: "clinical-research-data-support",
    title: "Clinical Research Data Support",
    shortDescription:
      "Cohort analysis, genomic curation, variant review, and research documentation.",
    longDescription:
      "Support for clinical research teams with genomic data curation, cohort-level analysis, variant review workflows, and research-ready documentation packages.",
    whoItHelps: "Clinical research organizations, CROs, and academic medical centers.",
    deliverables: ["Cohort reports", "Curated datasets", "Variant review logs", "Study documentation"],
    dataTypes: ["Clinical genomics", "Trial metadata", "Longitudinal samples"],
    relatedTechnologies: ["Research database", "Secure collaboration", "Report generation"],
    icon: "ClipboardList",
  },
  {
    id: "custom-panel",
    slug: "custom-panel-development",
    title: "Custom Panel Development",
    shortDescription:
      "Design and validation support for targeted gene panels and application-specific assays.",
    longDescription:
      "Scientific and technical support for designing targeted NGS panels, defining gene content, and planning validation workflows for specific research or diagnostic applications.",
    whoItHelps: "Labs developing proprietary panels and research teams with custom assay needs.",
    deliverables: ["Panel specifications", "Gene content lists", "Validation plans", "Technical documentation"],
    dataTypes: ["Reference genomes", "Gene lists", "Assay requirements"],
    relatedTechnologies: ["NGS pipeline", "Custom workflow design"],
    icon: "LayoutGrid",
  },
  {
    id: "bioinformatics",
    slug: "bioinformatics-analysis",
    title: "Bioinformatics Analysis",
    shortDescription:
      "Variant analysis, CNV/SNV interpretation, pathway review, and reporting support.",
    longDescription:
      "Comprehensive bioinformatics analysis including SNV/Indel review, CNV analysis, fusion detection, pathway interpretation, and structured reporting for research and diagnostic programs.",
    whoItHelps: "Research labs without dedicated bioinformatics teams and growing molecular programs.",
    deliverables: ["Variant reports", "CNV profiles", "Pathway summaries", "Analysis logs"],
    dataTypes: ["Raw NGS", "BAM/VCF", "Panel data"],
    relatedTechnologies: ["SNV/Indel analysis", "CNV analysis", "Fusion review"],
    icon: "Cpu",
  },
  {
    id: "translational",
    slug: "translational-research-consulting",
    title: "Translational Research Consulting",
    shortDescription:
      "Scientific strategy, study design support, and result interpretation.",
    longDescription:
      "Consulting support for translational research programs including study design, molecular strategy, data interpretation, and scientific communication for stakeholders.",
    whoItHelps: "Biotech startups, research directors, and clinical innovation teams.",
    deliverables: ["Study plans", "Interpretation memos", "Scientific presentations", "Collaboration scopes"],
    dataTypes: ["Study protocols", "Preliminary data", "Literature review"],
    relatedTechnologies: ["Knowledgebase integration", "Report design"],
    icon: "Lightbulb",
  },
  {
    id: "report-design",
    slug: "report-design-documentation",
    title: "Report Design and Scientific Documentation",
    shortDescription:
      "Structured report templates, scientific writing, and documentation workflows.",
    longDescription:
      "Design and production of structured molecular reports, scientific documentation, and communication materials for research and diagnostic audiences.",
    whoItHelps: "Labs scaling report output and teams needing consistent scientific documentation.",
    deliverables: ["Report templates", "Documentation standards", "Visual summaries", "Review workflows"],
    dataTypes: ["Analysis outputs", "Clinical metadata", "Interpretation notes"],
    relatedTechnologies: ["Report automation", "Interpretation workspace"],
    icon: "FileText",
  },
  {
    id: "database",
    slug: "research-database-curation",
    title: "Research Database Curation",
    shortDescription:
      "Organized storage, versioning, and retrieval of molecular research data.",
    longDescription:
      "Curation and management of research databases with structured metadata, versioned interpretations, and collaboration-ready data organization.",
    whoItHelps: "Research programs building long-term molecular data repositories.",
    deliverables: ["Curated databases", "Metadata schemas", "Access workflows", "Export packages"],
    dataTypes: ["NGS results", "Interpretation records", "Cohort data"],
    relatedTechnologies: ["Research database", "Secure collaboration", "API integration"],
    icon: "Database",
  },
];

export const serviceProcess = [
  { step: 1, title: "Define study objective", description: "Align on scientific goals and scope.", icon: "Search" },
  { step: 2, title: "Review sample and data requirements", description: "Assess samples, assays, and data needs.", icon: "FlaskConical" },
  { step: 3, title: "Run analysis workflow", description: "Execute QC, bioinformatics, and review steps.", icon: "Cpu" },
  { step: 4, title: "Interpret biological and clinical relevance", description: "Review findings in research context.", icon: "Brain" },
  { step: 5, title: "Deliver structured results", description: "Provide reports, data, and documentation.", icon: "FileText" },
  { step: 6, title: "Support follow-up review", description: "Answer questions and support next steps.", icon: "Users" },
];
