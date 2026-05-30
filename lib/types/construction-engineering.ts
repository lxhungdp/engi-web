export interface ConstructionService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  deliverables: string[];
  projectTypes: string[];
  tools: string[];
  icon: string;
  featured?: boolean;
}

export interface ConstructionProject {
  slug: string;
  name: string;
  category: string;
  categoryFilter: string;
  location: string;
  year: string;
  scope: string;
  description: string;
  shortDescription: string;
  services: string[];
  status: string;
  featured?: boolean;
  challenge: string;
  approach: string;
  scopeOfWork: string[];
  deliverables: string[];
  technicalScope: { title: string; description: string; icon: string }[];
  metrics: { label: string; value: string }[];
  relatedProjects: string[];
}

export interface ConstructionSector {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  typicalProjects: string[];
  challenges: string[];
  support: string;
  relatedServices: string[];
  icon: string;
}

export interface ConstructionStat {
  id: string;
  value: string;
  label: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Capability {
  id: string;
  title: string;
  icon: string;
}

export interface PillarCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CompanyMilestone {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  role: string;
  name: string;
  focus: string;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
}

export interface SustainabilityItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SustainabilityAction {
  id: string;
  title: string;
  description: string;
}

export interface ContactStep {
  step: number;
  text: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DemoNavLink {
  href: string;
  label: string;
}
