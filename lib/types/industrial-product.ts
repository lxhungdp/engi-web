export type ProductCategory =
  | "Drone Series"
  | "Aerial"
  | "Ground Robotics"
  | "Mapping"
  | "IoT Monitoring"
  | "AI Vision";

export interface DroneModel {
  slug: string;
  name: string;
  label: string;
  bestFor: string[];
  flightTime: string;
  range: string;
  camera: string;
  thermal: string;
  lidarReady: boolean;
  positioning: string;
  payload: string;
  aiAnalytics: string;
  output: string;
  recommendedUsers: string;
  highlighted?: boolean;
  badge?: string;
}

export interface DroneApplication {
  id: string;
  title: string;
  problem: string;
  howItHelps: string;
  typicalOutput: string;
  icon: string;
}

export interface DronePayload {
  id: string;
  name: string;
  purpose: string;
  bestUseCase: string;
  icon: string;
}

export interface DroneHighlight {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DroneOutput {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DroneRecommendation {
  modelSlug: string;
  title: string;
  description: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface IndustrialProduct {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  applications: string[];
  specifications: ProductSpec[];
  outputs: string[];
  relatedProducts: string[];
  keySpecs: string[];
  visualType: "drone" | "rover" | "lidar" | "sensor" | "camera";
  icon: string;
  mobilityType: string;
  typicalUsers: string;
  dataCaptured: string;
  bestFor: string;
  workflow: { step: number; title: string; description: string }[];
  isDroneSeries?: boolean;
  featured?: boolean;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
}

export interface UseCasePreview {
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

export interface Solution {
  id: string;
  title: string;
  problem: string;
  products: string[];
  workflow: string[];
  output: string[];
  value: string;
  icon: string;
}

export interface FeaturedSolution {
  id: string;
  title: string;
  challenge: string;
  products: string[];
  workflow: string[];
  outputs: string[];
}

export interface Resource {
  id: string;
  type: string;
  title: string;
  description: string;
  relatedProduct: string;
  readTime: string;
  icon: string;
}

export interface ComparisonRow {
  productSlug: string;
  bestFor: string;
  dataCaptured: string;
  mobilityType: string;
  output: string;
  typicalUsers: string;
}

export interface DemoNavLink {
  href: string;
  label: string;
}
