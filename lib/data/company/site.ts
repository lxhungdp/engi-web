export const companyRoutes = {
  home: "/",
  product: "/product",
  productDetail: (slug: string) => `/product/${slug}` as const,
  solution: "/solution",
  support: "/support",
  contact: "/contact",
  news: "/news",
} as const;

export const companyInfo = {
  name: "ARGOSDYNE",
  shortName: "ARGOSDYNE",
  tagline: "INNOVATING DRONE TECHNOLOGY",
  description:
    "ARGOSDYNE, an autonomous flying drone control solution company. Self-developed drone self-flight & Unmanned Operating System.",
  logo: "/images/common/argosdyne-logo.png",
  factory:
    "Room 615, Baegot M Plus Knowledge Industry Center, 59-47 Seoul National University-ro, Siheung-si, Gyeonggi-do, Republic of Korea",
  fax: "+82-31-274-5041",
  phone: "+82-70-5102-1388",
  phoneHours:
    "Weekdays 09:00~ 18:00 Closed on Saturdays, Sundays and public holidays",
  email: "info@argosdyne.com",
  copyright: "Copyright © 2024 Argosdyne. All rights reserved.",
};

export const navLinks = [
  { href: companyRoutes.product, label: "Product" },
  { href: companyRoutes.solution, label: "Solution" },
  { href: companyRoutes.support, label: "Support" },
] as const;
