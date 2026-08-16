import type { MetadataRoute } from "next";

const BASE_URL = "https://medzapotenciju.com";

/**
 * Zabranjene su samo putanje koje nemaju šta da traže u pretrazi: korpa i
 * plaćanje su lične stranice bez sadržaja, a /keystatic je admin.
 *
 * Ovo nije zaštita — robots.txt je molba, ne brava. Admin je zaštićen time što
 * na produkciji traži prijavu preko GitHub-a.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart", "/checkout", "/keystatic", "/api/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
