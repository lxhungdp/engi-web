export type ProductCategory = "Drone" | "Station" | "Software";

export interface ProductDetailSection {
  title: string;
  description: string;
  specs?: { label: string; value: string }[];
  image?: string;
}

export interface CompanyProduct {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  features: string[];
  applications: string[];
  specs?: { label: string; value: string }[];
  detailSections?: ProductDetailSection[];
  image?: string;
  gallery?: string[];
  highlighted?: boolean;
}

export interface CompanySolution {
  slug: string;
  name: string;
  description: string;
  problem?: string;
  technology?: string;
  outcome?: string;
  benefits?: string[];
  videos?: SolutionVideo[];
  image?: string;
  icon: string;
  featured?: boolean;
}

export interface SolutionVideo {
  youtubeId: string;
  title: string;
  description?: string;
}

export interface HeroSlide {
  headline: string;
  subline: string;
  image: string;
}

export interface PartnerLogo {
  id: number;
  image: string;
  alt: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  image?: string;
}

export interface ArgosCarePlan {
  id: string;
  name: string;
  serviceCost: string;
  servicePeriod: string;
  serviceConditions: string[];
  serviceDetails: string[];
}

export interface SupportItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}
