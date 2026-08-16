import "server-only";

import { createReader } from "@keystatic/core/reader";

import keystaticConfig from "../../keystatic.config";
import { type BlogPost, type Product } from "@/data/catalog";

/**
 * Čita sadržaj koji uređuje admin na /keystatic.
 *
 * Vraća iste oblike (`Product`, `BlogPost`) koje su stranice koristile dok je
 * sadržaj bio u TS fajlovima, pa se ostatak koda nije morao menjati.
 *
 * `server-only` je namerno: reader dodiruje fajl sistem, i da neko slučajno ovo
 * uveze u komponentu sa "use client", greška se javlja odmah pri buildu umesto
 * u browseru.
 */
const reader = createReader(process.cwd(), keystaticConfig);

/** "2026-08-12" → "12.08.2026." — format koji sajt prikazuje. */
function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  return `${day}.${month}.${year}.`;
}

export async function getProducts(): Promise<Product[]> {
  const entries = await reader.collections.products.all();

  return entries
    .map(({ slug, entry }, index) => ({
      // `id` postoji samo kao React key; redosled u katalogu nosi `sortOrder`.
      id: index + 1,
      name: entry.name,
      slug,
      category: "Potencija",
      price: entry.price,
      currency: "din",
      compareAt: entry.compareAt ?? undefined,
      packSize: entry.packSize,
      sachets: entry.sachets,
      badge: entry.badge,
      description: entry.description,
      accent: "from-amber-400 to-orange-600",
      image: entry.image ?? undefined,
      imageAlt: entry.imageAlt || undefined,
      sortOrder: entry.sortOrder ?? 0,
    }))
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map(({ sortOrder: _sortOrder, ...product }) => product);
}

export async function findProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
}

/** Bez tela teksta — dovoljno za kartice i liste. */
export async function getPosts(): Promise<BlogPost[]> {
  const entries = await reader.collections.posts.all();

  return entries
    .map(({ slug, entry }) => ({
      slug,
      title: entry.title,
      excerpt: entry.excerpt,
      category: entry.category,
      date: formatDate(entry.date),
      // Sortiranje mora da ide po ISO datumu, ne po prikazanom "12.08.2026."
      isoDate: entry.date,
      readTime: entry.readTime,
      author: entry.author,
      image: entry.image ?? undefined,
      imageAlt: entry.imageAlt || undefined,
    }))
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate))
    .map(({ isoDate: _isoDate, ...post }) => post);
}

/** Sa telom teksta — za stranicu pojedinačnog teksta. */
export async function findPostBySlug(slug: string) {
  const entry = await reader.collections.posts.read(slug);
  if (!entry) return null;

  return {
    slug,
    title: entry.title,
    excerpt: entry.excerpt,
    category: entry.category,
    date: formatDate(entry.date),
    readTime: entry.readTime,
    author: entry.author,
    image: entry.image ?? undefined,
    imageAlt: entry.imageAlt || undefined,
    content: await entry.content(),
  };
}

export async function getPostSlugs(): Promise<string[]> {
  return [...(await reader.collections.posts.list())];
}

export async function getProductSlugs(): Promise<string[]> {
  return [...(await reader.collections.products.list())];
}
