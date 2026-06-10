/** Data access layer for the company site. Products & solutions from Sanity. */
export {
  getProducts,
  getProductBySlug,
  getProductSlugs,
  getInquiryProducts,
  productCategories,
} from "@/lib/adapters/products";

export { getSolutions, getSolutionBySlug } from "@/lib/adapters/solutions";

export {
  heroSlides,
  partners,
  newsItems,
  argosCarePlans,
  warrantyTerms,
  supportItems,
  productWorkflow,
  getNewsBySlug,
  getAllNewsSlugs,
} from "@/lib/data/companyContent";

export { companyInfo, companyRoutes, navLinks } from "@/lib/data/company/site";
export { privacyPolicy } from "@/lib/data/company/privacy";
