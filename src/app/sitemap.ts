import type { MetadataRoute } from "next";

import { getPostSlugs, getProductSlugs } from "@/lib/content";

const BASE_URL = "https://medzapotenciju.com";

/**
 * Mapa sajta na /sitemap.xml. Gradi se iz CMS-a, pa se novi tekst ili proizvod
 * pojavi sam — nema spiska koji neko mora da ne zaboravi da dopuni.
 *
 * Korpa, plaćanje i admin namerno nisu ovde: nemaju šta da traže u rezultatima
 * pretrage i već su označeni sa noindex.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postSlugs, productSlugs] = await Promise.all([getPostSlugs(), getProductSlugs()]);

  return [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/shop`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/politika-privatnosti`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/odricanje-od-odgovornosti`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/partnerska-saradnja`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/podesavanja-kolacica`, changeFrequency: "yearly", priority: 0.3 },
    ...productSlugs.map((slug) => ({
      url: `${BASE_URL}/shop/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...postSlugs.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
