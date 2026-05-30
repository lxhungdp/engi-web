import type { ProcessStep } from "@/lib/types";

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    step: 1,
    title: "Discover",
    description:
      "Understand your business, product, service, and technical audience.",
  },
  {
    id: "design",
    step: 2,
    title: "Design",
    description:
      "Create a clear structure, visual direction, and user experience.",
  },
  {
    id: "build",
    step: 3,
    title: "Build",
    description: "Develop a fast, responsive, modern website.",
  },
  {
    id: "launch",
    step: 4,
    title: "Launch",
    description:
      "Deploy, connect domain, test mobile, and prepare for real customers.",
  },
];
