export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  /** Unit price in `currency`. */
  price: number;
  currency: string;
  /** Reference price for the discount pill — the cost of the same quantity bought as single sachets. */
  compareAt?: number;
  /** What the customer actually receives. */
  packSize: string;
  /** Number of sachets — drives the "cheapest per sachet" comparison. */
  sachets: number;
  badge: string;
  description: string;
  accent: string;
  image?: string;
  /** Per-pack alt text — each pack has its own photo, so each needs its own description. */
  imageAlt?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Must match a `name` in BLOG_CATEGORIES — the colour is looked up from there. */
  category: string;
  date: string;
  readTime: string;
  author: string;
  image?: string;
  imageAlt?: string;
};

export type BlogCategory = {
  name: string;
  slug: string;
  /** Solid dot beside the section heading. */
  color: string;
  /** Soft pill on the post card — tinted background with matching text. */
  pill: string;
};

/**
 * The blog's four topics. Single source of truth — the blog page groups by these
 * and the footer links to them, so a renamed category can never drift apart
 * between the two. `slug` is only an anchor on /blog for now; when per-category
 * pages exist it becomes the URL segment.
 *
 * Pill backgrounds use an alpha tint rather than a fixed light shade, so the same
 * class reads correctly on both the light and the dark card background.
 */
export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    name: "Potencija i erekcija",
    slug: "potencija-i-erekcija",
    color: "bg-rose-500",
    pill: "bg-rose-500/12 text-rose-600 dark:text-rose-400",
  },
  {
    name: "Muško seksualno zdravlje",
    slug: "musko-seksualno-zdravlje",
    color: "bg-emerald-500",
    pill: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-400",
  },
  {
    name: "Med za potenciju i dodaci ishrani",
    slug: "med-za-potenciju-i-dodaci-ishrani",
    color: "bg-amber-500",
    pill: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  },
  {
    name: "Sastojci i biljni ekstrakti",
    slug: "sastojci-i-biljni-ekstrakti",
    color: "bg-lime-600",
    pill: "bg-lime-600/15 text-lime-700 dark:text-lime-400",
  },
];

export function findCategory(name: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((category) => category.name === name);
}
