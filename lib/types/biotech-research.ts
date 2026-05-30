export interface DemoNavLink {
  href: string;
  label: string;
}

export interface ScientificMetric {
  id: string;
  value: string;
  label: string;
  note?: string;
}

export interface ResearchArea {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  keyMethods: string[];
  dataTypes: string[];
  exampleOutputs: string[];
  relatedServices: string[];
  icon: string;
  featured?: boolean;
}

export interface BiotechService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  whoItHelps: string;
  deliverables: string[];
  dataTypes: string[];
  relatedTechnologies: string[];
  icon: string;
}

export interface TechnologyPlatform {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  field: string;
  challenge: string;
  method: string;
  dataType: string;
  output: string;
  impact: string;
  approach?: string;
  featured?: boolean;
}

export interface BiotechResource {
  id: string;
  type: string;
  title: string;
  description: string;
  topic: string;
  readTime: string;
  icon: string;
}

export interface TrustCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface IntegrationItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SecurityItem {
  id: string;
  title: string;
  description: string;
}
