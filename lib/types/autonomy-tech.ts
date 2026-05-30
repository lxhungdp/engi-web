export interface NexaBotCapability {
  id: string;
  title: string;
  description: string;
  icon: string;
  span?: "wide" | "tall" | "default";
}

export interface NexaBotUseCase {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NexaBotArchitectureStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface NexaBotMetric {
  value: string;
  label: string;
}

export interface NexaBotIntegration {
  id: string;
  name: string;
  icon: string;
}

export interface NexaBotDeploymentPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export interface FloatingStat {
  id: string;
  label: string;
  icon: string;
}

export interface DashboardModule {
  id: string;
  title: string;
  value: string;
  detail: string;
  icon: string;
  status?: "ok" | "warn" | "active";
}

export interface PlatformModule {
  id: string;
  name: string;
  description: string;
  benefit: string;
  icon: string;
}

export interface PlatformBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SolutionCategory {
  id: string;
  industry: string;
  problem: string;
  solution: string;
  outputs: string[];
  modules: string[];
  icon: string;
}

export interface FeaturedSolution {
  id: string;
  title: string;
  challenge: string;
  workflow: string[];
  dataCaptured: string[];
  outputs: string[];
  benefits: string[];
}

export type UseCaseCategory =
  | "Inspection"
  | "Manufacturing"
  | "Construction"
  | "Security"
  | "Research"
  | "Emergency";

export interface DetailedUseCase {
  id: string;
  title: string;
  industry: string;
  category: UseCaseCategory;
  problem: string;
  workflow: string[];
  dataCollected: string[];
  result: string;
  modules: string[];
  icon: string;
}

export interface ArchitectureLayer {
  id: string;
  name: string;
  description: string;
  exampleData: string[];
  technologies: string[];
  output: string;
  icon: string;
}

export interface DataFlowStep {
  id: string;
  label: string;
}

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Resource {
  id: string;
  type: string;
  title: string;
  description: string;
  readTime: string;
  icon: string;
}

export interface PricingComparisonRow {
  feature: string;
  starter: string | boolean;
  professional: string | boolean;
  enterprise: string | boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface DemoNavLink {
  href: string;
  label: string;
}
