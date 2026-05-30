import type { ResearchArea } from "@/lib/types/biotech-research";

export const researchAreas: ResearchArea[] = [
  {
    id: "oncology",
    slug: "oncology-genomics",
    title: "Oncology Genomics",
    shortDescription:
      "Tumor profiling, molecular markers, cancer pathway interpretation, and therapy-related insights.",
    longDescription:
      "HelixNova supports oncology research teams with NGS-based tumor profiling, molecular marker analysis, and pathway interpretation workflows designed for translational and clinical research programs.",
    keyMethods: ["NGS panel analysis", "TMB/MSI review", "Pathway mapping", "Biomarker correlation"],
    dataTypes: ["Tumor DNA/RNA", "Panel sequencing", "Clinical metadata"],
    exampleOutputs: ["Variant reports", "Biomarker summaries", "Pathway analysis", "Research cohort tables"],
    relatedServices: ["Molecular Diagnostic Support", "Biomarker Discovery", "Bioinformatics Analysis"],
    icon: "Dna",
    featured: true,
  },
  {
    id: "rare-disease",
    slug: "rare-disease-genetics",
    title: "Rare Disease Genetics",
    shortDescription:
      "Variant interpretation, inherited disease support, and genotype-phenotype analysis.",
    longDescription:
      "Research support for rare and inherited disease programs including variant classification, phenotype-driven review, and structured research documentation.",
    keyMethods: ["Variant interpretation", "Phenotype correlation", "Inheritance modeling", "Literature review"],
    dataTypes: ["WES/WGS", "Phenotype data", "Family pedigrees"],
    exampleOutputs: ["Variant classification reports", "Research summaries", "Candidate gene lists"],
    relatedServices: ["Clinical Research Data Support", "Bioinformatics Analysis"],
    icon: "Microscope",
  },
  {
    id: "infectious",
    slug: "infectious-disease-genomics",
    title: "Infectious Disease Genomics",
    shortDescription:
      "Pathogen detection, strain analysis, resistance markers, and public health research support.",
    longDescription:
      "Genomic analysis workflows for pathogen identification, strain typing, antimicrobial resistance markers, and epidemiological research support.",
    keyMethods: ["Pathogen NGS", "Strain typing", "Resistance profiling", "Surveillance analysis"],
    dataTypes: ["Pathogen sequences", "Outbreak metadata", "Resistance panels"],
    exampleOutputs: ["Strain reports", "Resistance summaries", "Surveillance dashboards"],
    relatedServices: ["Molecular Diagnostic Support", "Bioinformatics Analysis"],
    icon: "Bug",
  },
  {
    id: "pharmacogenomics",
    slug: "pharmacogenomics",
    title: "Pharmacogenomics",
    shortDescription:
      "Genetic markers related to drug response, safety, and personalized treatment planning.",
    longDescription:
      "Analysis of pharmacogenomic markers to support research into drug response, adverse event risk, and personalized treatment strategies.",
    keyMethods: ["PGx panel review", "Allele interpretation", "Drug-gene mapping", "Cohort analysis"],
    dataTypes: ["Targeted PGx panels", "Clinical outcomes", "Medication records"],
    exampleOutputs: ["PGx reports", "Research summaries", "Marker frequency tables"],
    relatedServices: ["Molecular Diagnostic Support", "Translational Research Consulting"],
    icon: "Pill",
  },
  {
    id: "biomarker",
    slug: "biomarker-discovery",
    title: "Biomarker Discovery",
    shortDescription:
      "Discovery and validation of molecular signatures for translational research.",
    longDescription:
      "Data-driven biomarker identification and validation programs connecting molecular signals to clinical and research outcomes.",
    keyMethods: ["Signature discovery", "Validation cohorts", "Statistical review", "Pathway linkage"],
    dataTypes: ["Multi-omics datasets", "Clinical endpoints", "Longitudinal samples"],
    exampleOutputs: ["Biomarker panels", "Validation reports", "Research publications support"],
    relatedServices: ["Biomarker Discovery Programs", "Multi-omics Integration"],
    icon: "Target",
  },
  {
    id: "multi-omics",
    slug: "multi-omics-integration",
    title: "Multi-omics Integration",
    shortDescription:
      "Connecting genomic, transcriptomic, proteomic, and clinical datasets.",
    longDescription:
      "Integration workflows that combine genomic, transcriptomic, proteomic, and clinical data for comprehensive molecular research insight.",
    keyMethods: ["Data harmonization", "Cross-omics mapping", "Integrated analysis", "Cohort visualization"],
    dataTypes: ["Genomics", "Transcriptomics", "Proteomics", "Clinical data"],
    exampleOutputs: ["Integrated reports", "Multi-omics dashboards", "Research datasets"],
    relatedServices: ["Bioinformatics Analysis", "Clinical Research Data Support"],
    icon: "Layers",
  },
];

export const featuredResearchProgram = {
  title: "Oncology Genomics Program",
  purpose:
    "Support oncology research teams with structured tumor profiling, molecular marker review, and therapy-relevant pathway interpretation.",
  molecularMarkers: ["SNV/Indel", "CNV", "Fusion events", "TMB", "MSI status"],
  analysisApproach:
    "NGS panel analysis → variant annotation → pathway review → biomarker correlation → structured research report",
  clinicalRelevance:
    "Designed for translational research, clinical trial support, and precision medicine program development.",
  deliverables: [
    "Annotated variant tables",
    "Biomarker summary reports",
    "Pathway interpretation documents",
    "Research-ready data exports",
  ],
};

export const researchWorkflow = [
  { step: 1, title: "Study question", description: "Define research objective and molecular scope.", icon: "Search" },
  { step: 2, title: "Sample data", description: "Collect and QC molecular data from assays.", icon: "FlaskConical" },
  { step: 3, title: "Molecular analysis", description: "Run bioinformatics and variant review pipelines.", icon: "Cpu" },
  { step: 4, title: "Interpretation", description: "Review biological and clinical relevance.", icon: "Brain" },
  { step: 5, title: "Research report", description: "Deliver structured documentation and data.", icon: "FileText" },
];

export function getResearchBySlug(slug: string) {
  return researchAreas.find((r) => r.slug === slug);
}
