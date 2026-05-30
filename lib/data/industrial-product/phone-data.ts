import type { PhoneFeature, PhoneModel } from "@/lib/types/industrial-product";

export const phoneSeriesInfo = {
  name: "Vertex Phone Series",
  tagline: "Smartphones built for work, creativity, and everyday life.",
  description:
    "A premium smartphone lineup with powerful cameras, all-day battery, and fast performance for professionals and connected teams.",
  flagshipSlug: "phone-pro",
};

export const phoneModels: PhoneModel[] = [
  {
    slug: "phone-lite",
    name: "Vertex Phone Lite",
    label: "Essential smartphone",
    bestFor: ["Everyday use", "Social media", "Light productivity", "Students"],
    battery: "4,500 mAh · 25W charging",
    storage: "128GB",
    camera: "50MP main camera",
    display: '6.1" OLED · 90Hz',
    chip: "Vertex A1",
    highlight: "Lightweight design, all-day battery",
    recommendedUsers: "Students and everyday users",
  },
  {
    slug: "phone-pro",
    name: "Vertex Phone Pro",
    label: "Flagship smartphone",
    bestFor: ["Photography", "Business", "Content creation", "Mobile work"],
    battery: "5,000 mAh · 45W charging",
    storage: "256GB / 512GB",
    camera: "48MP AI triple camera",
    display: '6.7" OLED · 120Hz ProMotion',
    chip: "Vertex A1 Pro",
    highlight: "AI camera, pro performance, all-day power",
    recommendedUsers: "Creators, professionals, power users",
    highlighted: true,
    badge: "Flagship",
  },
  {
    slug: "phone-max",
    name: "Vertex Phone Max",
    label: "Large-screen smartphone",
    bestFor: ["Media", "Gaming", "Field teams", "Long battery life"],
    battery: "5,500 mAh · 45W charging",
    storage: "512GB",
    camera: "48MP AI camera · 10x zoom",
    display: '6.9" OLED · 120Hz',
    chip: "Vertex A1 Pro",
    highlight: "Big screen, max battery, pro camera",
    recommendedUsers: "Media lovers and mobile professionals",
  },
];

export const phoneHeroLabels = [
  "48MP AI camera",
  "All-day battery",
  "120Hz display",
  "5G ready",
  "Fast charging",
];

export const phoneFeatures: PhoneFeature[] = [
  {
    id: "camera",
    title: "Pro camera system",
    description: "AI-powered photos and 4K video for content and documentation.",
    icon: "Camera",
  },
  {
    id: "battery",
    title: "All-day battery",
    description: "Up to 5,500 mAh with fast charging for long workdays.",
    icon: "Battery",
  },
  {
    id: "display",
    title: "ProMotion display",
    description: "Bright OLED screens up to 120Hz for smooth scrolling and media.",
    icon: "Smartphone",
  },
  {
    id: "performance",
    title: "Vertex A1 chip",
    description: "Fast, efficient performance for apps, multitasking, and AI.",
    icon: "Cpu",
  },
  {
    id: "security",
    title: "Enterprise ready",
    description: "Secure unlock, device management, and business deployment support.",
    icon: "Shield",
  },
  {
    id: "connectivity",
    title: "5G connectivity",
    description: "Stay connected with 5G, Wi‑Fi 6, and dual-SIM options.",
    icon: "Wifi",
  },
];

export const phoneColors = [
  { name: "Midnight", hex: "#1a1a2e" },
  { name: "Silver", hex: "#c8c8c8" },
  { name: "Ocean Blue", hex: "#0ea5e9" },
];
