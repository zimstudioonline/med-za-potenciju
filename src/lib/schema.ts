import type { Product as CatalogProduct } from "@/data/catalog";
import { PHONE_HREF } from "@/lib/contact";
import { SHIPPING_FEE } from "@/lib/shipping";

/**
 * Strukturirani podaci (schema.org) za ceo sajt.
 *
 * Cene, pakovanja i slike se ne prepisuju ovde — dolaze iz CMS-a kroz `Product`,
 * pa promena cene u Keystaticu ne ostavi za sobom staru cenu u JSON-LD-u. To je
 * najčešći način da se strukturirani podaci raziđu sa onim što piše na stranici,
 * a Google neslaganje cene tretira kao razlog da ukloni prikaz proizvoda.
 */
export const SITE_URL = "https://medzapotenciju.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const PRODUCT_GROUP_ID = "Q4YOU-FORTISSIMO";
const GROUP_NAME = "Q4You Fortissimo — Med za potenciju";

/** SKU se izvodi iz broja kesica, da ne postoji druga lista koja se održava ručno. */
const skuFor = (pack: CatalogProduct) => `Q4YOU-${pack.sachets}KES`;
const urlFor = (pack: CatalogProduct) => `${SITE_URL}/shop/${pack.slug}`;
const imageFor = (pack: CatalogProduct) =>
  pack.image ? `${SITE_URL}${pack.image}` : `${SITE_URL}/med-za-potenciju-fortissimo.webp`;

/**
 * Godinu dana od trenutka izgradnje sajta. Google traži `priceValidUntil`, ali ne
 * voli ni istekle ni predaleke datume — vezivanje za build znači da se sam
 * osvežava pri svakom deployu, umesto da neko pamti da menja fiksni datum.
 */
function priceValidUntil(): string {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  return date.toISOString().slice(0, 10);
}

function offerFor(pack: CatalogProduct) {
  return {
    "@type": "Offer",
    price: String(pack.price),
    priceCurrency: "RSD",
    availability: "https://schema.org/InStock",
    url: urlFor(pack),
    priceValidUntil: priceValidUntil(),
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: String(SHIPPING_FEE),
        currency: "RSD",
      },
      shippingDestination: { "@type": "DefinedRegion", addressCountry: "RS" },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
        transitTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 1, unitCode: "DAY" },
      },
    },
  };
}

export const organizationSchema = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Med za potenciju",
  url: SITE_URL,
  logo: `${SITE_URL}/med-za-potenciju-com-logo.webp`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_HREF.replace("tel:", ""),
    contactType: "customer service",
    areaServed: "RS",
    availableLanguage: "Serbian",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Med za potenciju",
  inLanguage: "sr-RS",
  publisher: { "@id": ORGANIZATION_ID },
};

/**
 * Tri pakovanja su ista formula u različitoj količini — `ProductGroup` sa
 * varijantama to i kaže, umesto da tri stranice tvrde da su tri različita
 * proizvoda i takmiče se međusobno u rezultatima pretrage.
 */
export function productGroupSchema(packs: CatalogProduct[], description: string) {
  return {
    "@type": "ProductGroup",
    "@id": `${SITE_URL}/#product-group`,
    productGroupID: PRODUCT_GROUP_ID,
    name: GROUP_NAME,
    description,
    brand: { "@type": "Brand", name: "Q4You" },
    category: "Dodatak ishrani",
    url: `${SITE_URL}/shop`,
    image: `${SITE_URL}/med-za-potenciju-fortissimo.webp`,
    variesBy: ["https://schema.org/size"],
    hasVariant: packs.map((pack) => ({
      "@type": "Product",
      name: pack.name,
      sku: skuFor(pack),
      url: urlFor(pack),
      image: imageFor(pack),
      description: pack.description,
      size: pack.packSize,
      brand: { "@type": "Brand", name: "Q4You" },
      offers: offerFor(pack),
    })),
  };
}

/** Pojedinačno pakovanje, na svojoj stranici. */
export function productSchema(pack: CatalogProduct) {
  return {
    "@type": "Product",
    name: pack.name,
    sku: skuFor(pack),
    url: urlFor(pack),
    image: imageFor(pack),
    description: pack.description,
    size: pack.packSize,
    brand: { "@type": "Brand", name: "Q4You" },
    category: "Dodatak ishrani",
    isVariantOf: {
      "@type": "ProductGroup",
      "@id": `${SITE_URL}/#product-group`,
      productGroupID: PRODUCT_GROUP_ID,
      name: GROUP_NAME,
      url: `${SITE_URL}/shop`,
    },
    offers: offerFor(pack),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.name,
      item: `${SITE_URL}${step.path}`,
    })),
  };
}

/**
 * FAQPage sme da opisuje samo pitanja koja se na toj stranici zaista vide, pa
 * svaka stranica prosleđuje svoju listu umesto da postoji jedan zajednički FAQ.
 */
export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** Sve u jednom `@graph`, da stranica ima jedan `<script>` umesto pet. */
export function graph(nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
