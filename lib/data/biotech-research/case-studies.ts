import type { CaseStudy } from "@/lib/types/biotech-research";

export const caseStudies: CaseStudy[] = [
  {
    id: "oncology-panel",
    slug: "oncology-biomarker-panel",
    title: "Oncology biomarker panel",
    field: "Oncology",
    challenge:
      "A research team needed to correlate genomic alterations with therapy response signals across a multi-site clinical cohort.",
    method: "Targeted NGS panel analysis with pathway review and biomarker correlation.",
    dataType: "Tumor DNA panel sequencing + clinical metadata",
    output: "Biomarker summary report, variant tables, pathway interpretation document",
    impact: "Supported translational research planning and clinical trial biomarker strategy.",
    approach: "NGS analysis → variant annotation → pathway mapping → cohort correlation → structured report",
    featured: true,
  },
  {
    id: "rare-disease",
    slug: "rare-disease-variant-interpretation",
    title: "Rare disease variant interpretation",
    field: "Rare Disease",
    challenge:
      "Researchers required phenotype-driven variant review for an inherited disease study with limited cohort size.",
    method: "WES analysis with ACMG-style classification and literature-supported interpretation.",
    dataType: "Whole exome sequencing + phenotype data",
    output: "Classified variant report, candidate gene summary, research documentation",
    impact: "Accelerated research review and supported publication-ready documentation.",
    approach: "Exome QC → variant filtering → classification → phenotype correlation → report",
    featured: true,
  },
  {
    id: "infectious",
    slug: "infectious-disease-surveillance",
    title: "Infectious disease genomic surveillance",
    field: "Infectious Disease",
    challenge:
      "Public health researchers needed strain typing and resistance marker tracking across sample collections.",
    method: "Pathogen NGS with strain analysis and resistance profiling.",
    dataType: "Pathogen whole genome sequencing",
    output: "Strain typing report, resistance marker summary, surveillance dashboard data",
    impact: "Enabled epidemiological insight and resistance trend monitoring.",
    approach: "Pathogen QC → assembly → strain typing → resistance review → surveillance report",
    featured: true,
  },
  {
    id: "pharmacogenomics",
    slug: "pharmacogenomics-research-support",
    title: "Pharmacogenomics research support",
    field: "Pharmacogenomics",
    challenge:
      "A clinical research group studied genetic markers associated with drug response variability in a treatment cohort.",
    method: "PGx panel review with allele interpretation and outcome correlation.",
    dataType: "Targeted PGx panel + treatment outcome records",
    output: "PGx marker report, allele frequency tables, research summary",
    impact: "Supported personalized medicine research and study design refinement.",
    approach: "Panel analysis → allele review → outcome mapping → structured report",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies() {
  return caseStudies.filter((c) => c.featured);
}
