export type ThemeModeId =
  | "tech"
  | "engineering"
  | "product"
  | "biotech"
  | "premium";

export interface ThemeMode {
  id: ThemeModeId;
  name: string;
  tag: string;
  description: string;
  forIndustries: string[];
  preview: PreviewContent;
}

export interface PreviewContent {
  companyName: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaLabel: string;
  features: { title: string; value: string }[];
  services: { title: string; description: string }[];
  specLabel: string;
  specItems: { label: string; value: string }[];
}

export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
}

export interface Demo {
  id: string;
  title: string;
  description: string;
  styleTag: string;
  href?: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface WhyPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}
