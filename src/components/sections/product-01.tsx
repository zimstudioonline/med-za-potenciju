"use client"

import * as React from "react"
import { motion } from "motion/react"
import {
  Heart,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { fadeUp, stagger, viewport } from "@/lib/motion"
import { cn } from "@/lib/utils"

type ProductImage = { src: string; alt: string }

type ProductColor = { name: string; className?: string }

export type Product01Labels = {
  /** Label above the color swatches. */
  color: string
  /** Label above the size buttons. */
  size: string
  /** Link text next to the size label. */
  sizeGuide: string
  /** Word after the review count, e.g. "214 reviews". */
  reviews: string
  /** Availability note next to the quantity stepper. */
  inStock: string
  /** Discount pill template; "{percent}" is replaced with the number. */
  save: string
  /** Trust row items. */
  freeShipping: string
  returns: string
  secureCheckout: string
  /** Accessible labels for the quantity stepper and wishlist button. */
  decreaseQuantity: string
  increaseQuantity: string
  addToWishlist: string
}

export const defaultProduct01Labels: Product01Labels = {
  color: "Color",
  size: "Size",
  sizeGuide: "Size guide",
  reviews: "reviews",
  inStock: "In stock, ready to ship",
  save: "Save {percent}%",
  freeShipping: "Free shipping",
  returns: "30-day returns",
  secureCheckout: "Secure checkout",
  decreaseQuantity: "Decrease quantity",
  increaseQuantity: "Increase quantity",
  addToWishlist: "Add to wishlist",
}

export type Product01Props = {
  brand?: string
  title?: string
  price?: number
  compareAt?: number
  currency?: string
  rating?: number
  reviewCount?: number
  description?: string
  /** Selectable colors. Pass strings for names only, or objects to control the swatch fill. */
  colors?: (ProductColor | string)[]
  sizes?: string[]
  /** Real product photos. When present, the gallery swaps the CSS mock for <img>. */
  images?: ProductImage[]
  badge?: string
  addToCartLabel?: string
  buyNowLabel?: string
  /** Interface copy — merge in partial overrides to localize the chrome. */
  labels?: Partial<Product01Labels>
  /** Heading element — use "h1" when this is the page's main heading. */
  as?: "h1" | "h2"
  className?: string
}

const defaultColors: ProductColor[] = [
  { name: "Graphite", className: "bg-gradient-to-br from-foreground/80 to-foreground/40" },
  { name: "Sand", className: "bg-gradient-to-br from-primary/40 via-muted to-background" },
  { name: "Ocean", className: "bg-gradient-to-br from-primary/70 to-primary/20" },
  { name: "Clay", className: "bg-gradient-to-br from-secondary via-muted to-secondary/50" },
]

const defaultSizes = ["XS", "S", "M", "L", "XL"]

function toColor(color: ProductColor | string): ProductColor {
  return typeof color === "string" ? { name: color } : color
}

const swatchFallbacks = [
  "bg-gradient-to-br from-foreground/80 to-foreground/40",
  "bg-gradient-to-br from-primary/60 to-primary/20",
  "bg-gradient-to-br from-secondary via-muted to-secondary/50",
  "bg-gradient-to-br from-primary/40 via-muted to-background",
]

export function Product01({
  brand = "Atelier North",
  title = "Merino Wool Overshirt",
  price = 148,
  compareAt = 210,
  currency = "$",
  rating = 4.6,
  reviewCount = 214,
  description = "A midweight overshirt spun from responsibly sourced merino: breathable enough to layer indoors, structured enough to wear as a jacket. Cut for a relaxed, everyday fit.",
  colors = defaultColors,
  sizes = defaultSizes,
  images,
  badge = "New",
  addToCartLabel = "Add to cart",
  buyNowLabel = "Buy it now",
  labels,
  as: Heading = "h2",
  className,
}: Product01Props) {
  const t = { ...defaultProduct01Labels, ...labels }
  const resolvedColors = colors.map(toColor)

  const [activeIndex, setActiveIndex] = React.useState(0)
  const [selectedColor, setSelectedColor] = React.useState(0)
  const [selectedSize, setSelectedSize] = React.useState(
    sizes.length > 2 ? 2 : 0
  )
  const [qty, setQty] = React.useState(1)

  const filledStars = Math.round(rating)
  const hasImages = images && images.length > 0
  const activeImage = hasImages
    ? images[Math.min(activeIndex, images.length - 1)]
    : undefined

  const savePercent =
    compareAt && compareAt > price
      ? Math.round(((compareAt - price) / compareAt) * 100)
      : 0

  const thumbCount = hasImages ? images.length : 4

  return (
    <section className={cn("bg-background", className)}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger(0.08)}
        className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 py-16 md:py-24 lg:grid-cols-2 lg:gap-16"
      >
        {/* LEFT — gallery */}
        <motion.div variants={fadeUp} className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden rounded-xl border bg-card">
            {badge && (
              <Badge className="absolute top-4 left-4 z-10">{badge}</Badge>
            )}
            {activeImage ? (
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="size-full object-cover"
              />
            ) : (
              <ProductMock index={activeIndex} />
            )}
          </div>

          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: thumbCount }).map((_, i) => {
              const img = hasImages ? images[i] : undefined
              const isActive = activeIndex === i
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={
                    img ? `View ${img.alt}` : `View product angle ${i + 1}`
                  }
                  aria-pressed={isActive}
                  className={cn(
                    "relative aspect-square overflow-hidden rounded-lg border bg-card transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "ring-2 ring-primary"
                      : "hover:border-primary/40"
                  )}
                >
                  {img ? (
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="size-full object-cover"
                    />
                  ) : (
                    <ProductMock index={i} thumb />
                  )}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* RIGHT — info */}
        <motion.div variants={fadeUp} className="flex flex-col">
          <p className="text-sm font-medium text-muted-foreground">
            {brand}
          </p>

          <Heading className="mt-2 font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            {title}
          </Heading>

          {/* Rating */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
            <span className="flex items-center" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "size-4",
                    i < filledStars
                      ? "fill-current text-primary"
                      : "text-muted-foreground/30"
                  )}
                />
              ))}
            </span>
            <span className="text-muted-foreground tabular-nums">
              {rating.toFixed(1)}
            </span>
            <span className="text-muted-foreground/50" aria-hidden>
              ·
            </span>
            <a
              href="#reviews"
              className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {reviewCount} {t.reviews}
            </a>
          </div>

          {/* Price */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-2xl font-semibold tabular-nums">
              {currency}
              {price}
            </span>
            {compareAt && compareAt > price && (
              <span className="text-muted-foreground line-through tabular-nums">
                {currency}
                {compareAt}
              </span>
            )}
            {savePercent > 0 && (
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                {t.save.replace("{percent}", String(savePercent))}
              </span>
            )}
          </div>

          <p className="mt-5 max-w-prose text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          {/* Color selector */}
          <div className="mt-8">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium">{t.color}</span>
              <span className="text-sm text-muted-foreground">
                {resolvedColors[selectedColor]?.name}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              {resolvedColors.map((color, i) => {
                const isSelected = selectedColor === i
                return (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(i)}
                    aria-label={`Select color ${color.name}`}
                    aria-pressed={isSelected}
                    className={cn(
                      "size-8 rounded-full border ring-offset-2 ring-offset-background transition-transform outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      color.className ??
                        swatchFallbacks[i % swatchFallbacks.length],
                      isSelected
                        ? "ring-2 ring-primary"
                        : "hover:border-foreground/30"
                    )}
                  />
                )
              })}
            </div>
          </div>

          {/* Size selector */}
          <div className="mt-6">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium">{t.size}</span>
              <a
                href="#size-guide"
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {t.sizeGuide}
              </a>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {sizes.map((size, i) => {
                const isSelected = selectedSize === i
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(i)}
                    aria-pressed={isSelected}
                    className={cn(
                      "min-w-11 rounded-md border px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isSelected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "text-foreground hover:border-primary/40"
                    )}
                  >
                    {size}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Quantity + actions */}
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-md border">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label={t.decreaseQuantity}
                  disabled={qty <= 1}
                  className="flex size-10 items-center justify-center rounded-l-md text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-40"
                >
                  <Minus className="size-4" />
                </button>
                <span
                  className="w-10 text-center text-sm font-medium tabular-nums"
                  aria-live="polite"
                >
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label={t.increaseQuantity}
                  className="flex size-10 items-center justify-center rounded-r-md text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Plus className="size-4" />
                </button>
              </div>
              <span className="text-sm text-muted-foreground">
                {t.inStock}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#add-to-cart"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "flex-1 gap-2"
                )}
              >
                <ShoppingBag className="size-4" />
                {addToCartLabel}
              </a>
              <button
                type="button"
                aria-label={t.addToWishlist}
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon-lg" })
                )}
              >
                <Heart className="size-4" />
              </button>
            </div>

            <a
              href="#buy-now"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full"
              )}
            >
              {buyNowLabel}
            </a>
          </div>

          {/* Trust row */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <Truck className="size-4 text-primary" />
              {t.freeShipping}
            </li>
            <li aria-hidden className="h-3 w-px bg-border" />
            <li className="flex items-center gap-1.5">
              <RotateCcw className="size-4 text-primary" />
              {t.returns}
            </li>
            <li aria-hidden className="h-3 w-px bg-border" />
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-primary" />
              {t.secureCheckout}
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}

const mockShapes = [
  "rounded-[2rem]",
  "rounded-full",
  "rounded-[2rem] rotate-45",
  "rounded-tl-[3rem] rounded-br-[3rem]",
]

function ProductMock({
  index = 0,
  thumb = false,
}: {
  index?: number
  thumb?: boolean
}) {
  const shape = mockShapes[index % mockShapes.length]
  return (
    <div aria-hidden className="relative size-full bg-muted">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={cn(
            "bg-primary/10",
            thumb ? "size-1/2" : "size-2/5",
            shape
          )}
        />
      </div>
    </div>
  )
}
