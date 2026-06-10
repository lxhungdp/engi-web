/** Data access layer for the company site. Products from Sanity; other content static. */
export {
  getProducts,
  getProductBySlug,
  getProductSlugs,
  getInquiryProducts,
  productCategories,
} from "@/lib/adapters/products";

export {
  heroSlides,
  solutions,
  partners,
  newsItems,
  argosCarePlans,
  warrantyTerms,
  supportItems,
  productWorkflow,
  getSolutionBySlug,
  getNewsBySlug,
  getAllNewsSlugs,
} from "@/lib/data/companyContent";

export { companyInfo, companyRoutes, navLinks } from "@/lib/data/company/site";
export { privacyPolicy } from "@/lib/data/company/privacy";
