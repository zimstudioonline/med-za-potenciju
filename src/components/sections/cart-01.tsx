"use client"

import * as React from "react"
import { motion } from "motion/react"
import { ArrowLeft, Lock, Minus, Plus, ShieldCheck, X } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { formatMoney } from "@/lib/money"
import { fadeUp, stagger, viewport } from "@/lib/motion"
import { cn } from "@/lib/utils"

export type CartItem = {
  id: string
  name: string
  /** Secondary line, e.g. "Size M · Slate". */
  variant?: string
  /** Unit price in the section's currency. */
  price: number
  qty: number
  /** Real product image. Falls back to a muted placeholder when absent. */
  image?: string
}

export type Cart01Labels = {
  /** Section heading. */
  heading: string
  /** Count noun for a single item, e.g. "item". */
  itemSingular: string
  /** Count noun for multiple items, e.g. "items". */
  itemPlural: string
  continueShopping: string
  emptyMessage: string
  startShopping: string
  /** Suffix after the unit price, e.g. "each". */
  each: string
  orderSummary: string
  subtotal: string
  shipping: string
  free: string
  estimatedTax: string
  total: string
  promoLabel: string
  promoPlaceholder: string
  promoApply: string
  checkout: string
  trustLine: string
  /** Accessible label for the remove button. */
  /** Template; "{name}" is replaced with the item name. */
  removeItem: string
  /** Accessible label for the quantity decrement button. */
  decreaseQty: string
  /** Accessible label for the quantity increment button. */
  increaseQty: string
}

export const DEFAULT_CART01_LABELS: Cart01Labels = {
  heading: "Your cart",
  itemSingular: "item",
  itemPlural: "items",
  continueShopping: "Continue shopping",
  emptyMessage: "Your cart is empty.",
  startShopping: "Start shopping",
  each: "each",
  orderSummary: "Order summary",
  subtotal: "Subtotal",
  shipping: "Shipping",
  free: "Free",
  estimatedTax: "Estimated tax",
  total: "Total",
  promoLabel: "Promo code",
  promoPlaceholder: "Enter code",
  promoApply: "Apply",
  checkout: "Checkout",
  trustLine: "Secure, encrypted checkout",
  removeItem: "Remove {name} from cart",
  decreaseQty: "Decrease quantity of {name}",
  increaseQty: "Increase quantity of {name}",
}

export type Cart01Props = {
  items?: CartItem[]
  /** UI chrome strings. Partial — anything omitted falls back to English. */
  labels?: Partial<Cart01Labels>
  /** Currency symbol prefixed to every figure. */
  currency?: string
  /** Subtotal at or above this value ships free. */
  freeShippingThreshold?: number
  /** Flat fee applied below the free-shipping threshold. */
  shippingFee?: number
  /** Applied to the subtotal for the estimated-tax row. */
  taxRate?: number
  /**
   * Supply both callbacks to make the section controlled — quantity and removal
   * are then handled by the caller instead of local state.
   */
  onQtyChange?: (id: string, qty: number) => void
  onRemove?: (id: string) => void
  /** Checkout button destination. */
  checkoutHref?: string
  /** Continue-shopping link destination. */
  continueHref?: string
  /** Heading element — use "h1" when this is the page's main heading. */
  as?: "h1" | "h2"
  className?: string
}

const defaultItems: CartItem[] = [
  {
    id: "aria-runner",
    name: "Aria Runner",
    variant: "Size 42 · Bone",
    price: 148,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1719916243924-662496085ac9?q=80&auto=format&fit=crop&w=400",
  },
  {
    id: "field-jacket",
    name: "All-Weather Field Jacket",
    variant: "Size M · Indigo",
    price: 236,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&auto=format&fit=crop&w=400",
  },
  {
    id: "merino-crew",
    name: "Merino Crew Sock · 3 pack",
    variant: "One size · Charcoal",
    price: 34,
    qty: 2,
    image:
      "https://images.unsplash.com/photo-1613151848917-80e67f421fff?q=80&auto=format&fit=crop&w=400",
  },
]

const paymentMethods = ["Visa", "Mastercard", "Amex", "PayPal"]

function ThumbMock() {
  return (
    <div
      aria-hidden
      className="size-20 shrink-0 rounded-lg border bg-muted md:size-24"
    />
  )
}

export function Cart01({
  items = defaultItems,
  labels,
  currency = "$",
  freeShippingThreshold = 250,
  shippingFee = 12,
  taxRate = 0.08,
  onQtyChange,
  onRemove,
  checkoutHref = "#",
  continueHref = "#",
  as: Heading = "h2",
  className,
}: Cart01Props) {
  const t = React.useMemo(
    () => ({ ...DEFAULT_CART01_LABELS, ...labels }),
    [labels]
  )
  const [internalLines, setInternalLines] = React.useState<CartItem[]>(items)
  const [promo, setPromo] = React.useState("")

  // With callbacks supplied the caller owns the cart; without them the section
  // keeps its own state so it still works as a standalone demo.
  const isControlled = Boolean(onQtyChange && onRemove)
  const lines = isControlled ? items : internalLines

  const format = React.useCallback(
    (value: number) => formatMoney(value, currency),
    [currency]
  )

  const setQty = React.useCallback(
    (id: string, next: number) => {
      const qty = Math.max(1, next)
      if (onQtyChange) {
        onQtyChange(id, qty)
        return
      }
      setInternalLines((prev) =>
        prev.map((line) => (line.id === id ? { ...line, qty } : line))
      )
    },
    [onQtyChange]
  )

  const removeLine = React.useCallback(
    (id: string) => {
      if (onRemove) {
        onRemove(id)
        return
      }
      setInternalLines((prev) => prev.filter((line) => line.id !== id))
    },
    [onRemove]
  )

  const count = React.useMemo(
    () => lines.reduce((sum, line) => sum + line.qty, 0),
    [lines]
  )

  const { subtotal, shipping, tax, total } = React.useMemo(() => {
    const sub = lines.reduce((sum, line) => sum + line.price * line.qty, 0)
    const ship = sub === 0 || sub >= freeShippingThreshold ? 0 : shippingFee
    const estTax = sub * taxRate
    return {
      subtotal: sub,
      shipping: ship,
      tax: estTax,
      total: sub + ship + estTax,
    }
  }, [lines, freeShippingThreshold, shippingFee, taxRate])

  const isEmpty = lines.length === 0

  return (
    <section className={cn("bg-background", className)}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger(0.08)}
        className="mx-auto max-w-6xl px-6 py-16 md:py-24"
      >
        {/* Header row */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <Heading className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.heading}{" "}
            <span className="text-muted-foreground tabular-nums">
              ({count} {count === 1 ? t.itemSingular : t.itemPlural})
            </span>
          </Heading>
          <a
            href={continueHref}
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            {t.continueShopping}
          </a>
        </motion.div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[2fr_1fr] lg:gap-12">
          {/* LEFT — line items */}
          <motion.div variants={fadeUp}>
            {isEmpty ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed px-6 py-20 text-center">
                <p className="text-muted-foreground">
                  {t.emptyMessage}
                </p>
                <a
                  href={continueHref}
                  className={cn(buttonVariants({ size: "lg" }), "mt-6")}
                >
                  {t.startShopping}
                </a>
              </div>
            ) : (
              <ul className="divide-y overflow-hidden rounded-xl border">
                {lines.map((line) => (
                  <li
                    key={line.id}
                    className="flex gap-4 p-4 sm:gap-6 sm:p-6"
                  >
                    {line.image ? (
                      <img
                        src={line.image}
                        alt={line.name}
                        loading="lazy"
                        className="size-20 shrink-0 rounded-lg border object-cover md:size-24"
                      />
                    ) : (
                      <ThumbMock />
                    )}

                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate font-medium">{line.name}</p>
                          {line.variant && (
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              {line.variant}
                            </p>
                          )}
                          <p className="mt-1 text-sm text-muted-foreground tabular-nums">
                            {format(line.price)} {t.each}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeLine(line.id)}
                          aria-label={t.removeItem.replace("{name}", line.name)}
                          className="-mt-1 -mr-1 flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                        >
                          <X className="size-4" />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-4">
                        {/* Qty stepper */}
                        <div className="inline-flex items-center rounded-lg border">
                          <button
                            type="button"
                            onClick={() => setQty(line.id, line.qty - 1)}
                            disabled={line.qty <= 1}
                            aria-label={t.decreaseQty.replace("{name}", line.name)}
                            className="flex size-9 items-center justify-center rounded-l-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40"
                          >
                            <Minus className="size-4" />
                          </button>
                          <span className="w-9 text-center text-sm font-medium tabular-nums">
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(line.id, line.qty + 1)}
                            aria-label={t.increaseQty.replace("{name}", line.name)}
                            className="flex size-9 items-center justify-center rounded-r-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                          >
                            <Plus className="size-4" />
                          </button>
                        </div>

                        <span className="font-medium tabular-nums">
                          {format(line.price * line.qty)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* RIGHT — order summary */}
          <motion.div variants={fadeUp} className="lg:sticky lg:top-24">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-heading text-lg font-semibold tracking-tight">
                {t.orderSummary}
              </h3>

              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">{t.subtotal}</dt>
                  <dd className="tabular-nums">{format(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">{t.shipping}</dt>
                  <dd className="tabular-nums">
                    {shipping === 0 ? (
                      <span className="text-primary">{t.free}</span>
                    ) : (
                      format(shipping)
                    )}
                  </dd>
                </div>
                {/* Hidden where tax is already included in the listed price. */}
                {taxRate > 0 && (
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">
                      {t.estimatedTax}{" "}
                      <span className="tabular-nums">
                        ({Math.round(taxRate * 100)}%)
                      </span>
                    </dt>
                    <dd className="tabular-nums">{format(tax)}</dd>
                  </div>
                )}
              </dl>

              <Separator className="my-5" />

              <div className="flex items-baseline justify-between">
                <span className="text-lg font-semibold">{t.total}</span>
                <span className="text-lg font-semibold tabular-nums">
                  {format(total)}
                </span>
              </div>

              {/* Promo code */}
              <form
                className="mt-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <Label htmlFor="cart-promo" className="text-xs text-muted-foreground">
                  {t.promoLabel}
                </Label>
                <div className="mt-2 flex gap-2">
                  <Input
                    id="cart-promo"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    placeholder={t.promoPlaceholder}
                    autoComplete="off"
                    className="flex-1"
                  />
                  <button
                    type="submit"
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    {t.promoApply}
                  </button>
                </div>
              </form>

              {/* Checkout CTA */}
              <a
                href={checkoutHref}
                aria-disabled={isEmpty}
                tabIndex={isEmpty ? -1 : undefined}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-6 w-full gap-2",
                  isEmpty && "pointer-events-none opacity-50"
                )}
              >
                <Lock className="size-4" />
                {t.checkout} · {format(total)}
              </a>

              <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="size-3.5 text-primary" />
                {t.trustLine}
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="rounded-md border px-2 py-1 text-xs text-muted-foreground"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
