import type {
  CompanyMilestone,
  CompanyValue,
  TeamMember,
} from "@/lib/types/construction-engineering";

export const companyMilestones: CompanyMilestone[] = [
  {
    year: "2008",
    title: "Founded as a civil engineering design office",
    description:
      "TerraBuild began as a specialist civil engineering practice focused on infrastructure and site development projects.",
  },
  {
    year: "2012",
    title: "Expanded into structural and infrastructure projects",
    description:
      "Growth into bridge, building, and industrial structural engineering alongside civil design services.",
  },
  {
    year: "2016",
    title: "Added construction management and documentation services",
    description:
      "Extended capabilities to support contractors and project teams with site coordination and documentation.",
  },
  {
    year: "2021",
    title: "Introduced BIM and digital engineering workflows",
    description:
      "Formalized digital engineering, BIM coordination, and model-based project delivery support.",
  },
  {
    year: "2026",
    title: "Delivering integrated engineering and project support services",
    description:
      "Today TerraBuild provides multidisciplinary engineering, digital coordination, and construction support across seven core sectors.",
  },
];

export const leadershipTeam: TeamMember[] = [
  {
    id: "md",
    role: "Managing Director",
    name: "Elena Vasquez",
    focus: "Company strategy, major project delivery, and client relationships.",
  },
  {
    id: "civil",
    role: "Civil Engineering Lead",
    name: "James Okonkwo",
    focus: "Transportation, drainage, and infrastructure design leadership.",
  },
  {
    id: "structural",
    role: "Structural Engineering Lead",
    name: "Sarah Chen",
    focus: "Bridge, building, and industrial structural systems.",
  },
  {
    id: "digital",
    role: "Digital Engineering Manager",
    name: "Marcus Lindholm",
    focus: "BIM coordination, digital workflows, and project data management.",
  },
  {
    id: "construction",
    role: "Construction Coordination Lead",
    name: "Priya Sharma",
    focus: "Site support, quality control, and construction documentation.",
  },
];

export const companyValues: CompanyValue[] = [
  {
    id: "clarity",
    title: "Technical clarity",
    description:
      "Clear engineering communication that helps teams make confident project decisions.",
  },
  {
    id: "delivery",
    title: "Reliable delivery",
    description:
      "Structured workflows, documentation discipline, and accountable project support.",
  },
  {
    id: "safety",
    title: "Safety-first thinking",
    description:
      "Risk-aware design and construction planning embedded in every project phase.",
  },
  {
    id: "value",
    title: "Long-term infrastructure value",
    description:
      "Durable, practical solutions that support lifecycle performance and maintenance.",
  },
];

export const aboutStory = {
  title: "A multidisciplinary construction engineering company",
  paragraphs: [
    "TerraBuild Engineering was founded to deliver practical civil and structural engineering for infrastructure projects that demand technical precision and reliable documentation.",
    "Over nearly two decades, the company has expanded from civil design into structural engineering, construction management, digital engineering, and integrated project delivery support.",
    "Today TerraBuild works with public agencies, developers, contractors, and industrial clients across transportation, urban development, industrial, energy, and water infrastructure sectors.",
  ],
};
