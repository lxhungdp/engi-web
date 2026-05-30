import type { Industry, ComparisonRow, UseCasePreview, WorkflowStep } from "@/lib/types/industrial-product";

export const industries: Industry[] = [
  { id: "business", name: "Business & Enterprise", icon: "Briefcase" },
  { id: "creative", name: "Creators & Media", icon: "Camera" },
  { id: "retail", name: "Retail & Commerce", icon: "ShoppingBag" },
  { id: "education", name: "Education", icon: "GraduationCap" },
  { id: "field", name: "Field Teams", icon: "HardHat" },
  { id: "everyday", name: "Everyday Users", icon: "Smartphone" },
];

export const comparisonRows: ComparisonRow[] = [];

export const useCasePreviews: UseCasePreview[] = [];

export const homepageWorkflow: WorkflowStep[] = [];
