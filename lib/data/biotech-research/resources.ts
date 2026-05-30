import type { BiotechResource, FAQItem } from "@/lib/types/biotech-research";

export const biotechResources: BiotechResource[] = [
  {
    id: "whitepaper-biomarker",
    type: "Whitepaper",
    title: "Genomic Biomarker Discovery Workflow",
    description:
      "A structured approach to biomarker identification, validation, and translational research planning.",
    topic: "Biomarker discovery",
    readTime: "12 min read",
    icon: "FileText",
  },
  {
    id: "guide-ngs-panel",
    type: "Guide",
    title: "Building a Targeted NGS Panel",
    description:
      "Best practices for gene selection, assay design considerations, and validation planning.",
    topic: "Panel development",
    readTime: "8 min read",
    icon: "BookOpen",
  },
  {
    id: "checklist-variant",
    type: "Checklist",
    title: "Variant Interpretation Review",
    description:
      "A review checklist for SNV, Indel, and CNV interpretation in research panels.",
    topic: "Variant interpretation",
    readTime: "5 min read",
    icon: "ListChecks",
  },
  {
    id: "sheet-services",
    type: "Product Sheet",
    title: "Molecular Research Support Services",
    description:
      "Overview of HelixNova diagnostic support, bioinformatics, and research data services.",
    topic: "Services",
    readTime: "4 min read",
    icon: "ClipboardList",
  },
  {
    id: "note-cnv-snv",
    type: "Technical Note",
    title: "CNV and SNV Review in Research Panels",
    description:
      "Technical guidance for combined copy number and single nucleotide variant analysis.",
    topic: "Bioinformatics",
    readTime: "10 min read",
    icon: "Cpu",
  },
  {
    id: "case-oncology",
    type: "Case Study",
    title: "Oncology Genomics Research Program",
    description:
      "How structured tumor profiling supported a multi-site oncology research initiative.",
    topic: "Oncology",
    readTime: "7 min read",
    icon: "Dna",
  },
];

export const biotechFaqs: FAQItem[] = [
  {
    id: "services",
    question: "What types of molecular data does HelixNova support?",
    answer:
      "We support NGS panel data, WES/WGS, targeted assays, multi-omics datasets, and associated clinical or research metadata across oncology, rare disease, infectious disease, and pharmacogenomics programs.",
  },
  {
    id: "timeline",
    question: "How long does a typical analysis workflow take?",
    answer:
      "Timelines depend on sample volume, assay type, and reporting requirements. This demo represents typical workflows; production timelines would be defined per project scope.",
  },
  {
    id: "security",
    question: "How is research data handled securely?",
    answer:
      "Our platform design includes access control, versioned interpretation, audit-ready documentation, and secure storage — as described in the Technology page of this demo.",
  },
];
