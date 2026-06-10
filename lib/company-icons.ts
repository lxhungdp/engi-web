import {
  Building2,
  Headphones,
  Mail,
  Map,
  Route,
  Shield,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Route,
  Building2,
  Map,
  Headphones,
  ShieldCheck,
  Mail,
};

export function getCompanyIcon(name: string): LucideIcon {
  return iconMap[name] ?? Shield;
}
