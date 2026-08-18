"use client"

import * as React from "react"
import { motion } from "motion/react"
import { CreditCard, Lock, ShieldCheck, Truck } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { formatMoney } from "@/lib/money"
import { fadeUp, stagger, viewport } from "@/lib/motion"
import { cn } from "@/lib/utils"

export type CheckoutItem = {
  name: string
  qty: number
  price: number
  /** Optional real thumbnail. Falls back to a CSS mock swatch. */
  image?: string
}

export type CheckoutDeliveryOption = {
  id: string
  name: string
  eta: string
  /** Shipping fee in the section currency. `0` renders as "Free". */
  fee: number
}

export type Checkout01Labels = {
  /** Step legends. */
  contact: string
  shippingAddress: string
  deliveryMethod: string
  payment: string
  /** Field labels. */
  emailLabel: string
  phoneLabel: string
  firstNameLabel: string
  lastNameLabel: string
  addressLabel: string
  apartmentLabel: string
  optionalHint: string
  cityLabel: string
  postalCodeLabel: string
  countryLabel: string
  cardNumberLabel: string
  expiryLabel: string
  cvcLabel: string
  /** Field placeholders. */
  emailPlaceholder: string
  phonePlaceholder: string
  firstNamePlaceholder: string
  lastNamePlaceholder: string
  addressPlaceholder: string
  apartmentPlaceholder: string
  cityPlaceholder: string
  postalCodePlaceholder: string
  countryPlaceholder: string
  cardNumberPlaceholder: string
  expiryPlaceholder: string
  cvcPlaceholder: string
  /** Payment reassurance line inside the card panel. */
  paymentNote: string
  /** Cash-on-delivery panel, used when `paymentMode` is "cod". */
  codTitle: string
  codNote: string
  codBadge: string
  /** Summary panel. */
  orderSummary: string
  qty: string
  subtotal: string
  shipping: string
  tax: string
  total: string
  free: string
}

export const DEFAULT_CHECKOUT01_LABELS: Checkout01Labels = {
  contact: "Contact",
  shippingAddress: "Shipping address",
  deliveryMethod: "Delivery method",
  payment: "Payment",
  emailLabel: "Email address",
  phoneLabel: "Phone number",
  firstNameLabel: "First name",
  lastNameLabel: "Last name",
  addressLabel: "Address",
  apartmentLabel: "Apartment",
  optionalHint: "(optional)",
  cityLabel: "City",
  postalCodeLabel: "Postal code",
  countryLabel: "Country",
  cardNumberLabel: "Card number",
  expiryLabel: "Expiry",
  cvcLabel: "CVC",
  emailPlaceholder: "you@example.com",
  phonePlaceholder: "+44 7700 900000",
  firstNamePlaceholder: "Ada",
  lastNamePlaceholder: "Lovelace",
  addressPlaceholder: "12 Marchmont Street",
  apartmentPlaceholder: "Flat 4B",
  cityPlaceholder: "London",
  postalCodePlaceholder: "WC1N 1AL",
  countryPlaceholder: "United Kingdom",
  cardNumberPlaceholder: "1234 5678 9012 3456",
  expiryPlaceholder: "MM / YY",
  cvcPlaceholder: "123",
  paymentNote: "Payments are encrypted and processed securely.",
  codTitle: "Cash on delivery",
  codNote: "You pay the courier in cash when the parcel arrives. No card details are collected.",
  codBadge: "Cash on delivery",
  orderSummary: "Order summary",
  qty: "Qty",
  subtotal: "Subtotal",
  shipping: "Shipping",
  tax: "Tax",
  total: "Total",
  free: "Free",
}

export type Checkout01Props = {
  /** UI chrome strings. Partial — anything omitted falls back to English. */
  labels?: Partial<Checkout01Labels>
  eyebrow?: string
  title?: React.ReactNode
  description?: string
  items?: CheckoutItem[]
  currency?: string
  deliveryOptions?: CheckoutDeliveryOption[]
  taxRate?: number
  submitLabel?: string
  secureNote?: string
  paymentMethods?: string[]
  /** "cod" swaps the card fields for a cash-on-delivery notice. */
  paymentMode?: "card" | "cod"
  /** Server action handling the submission. Without it the form is inert. */
  formAction?: (formData: FormData) => void
  /** Disables the submit button and swaps its label while the action runs. */
  pending?: boolean
  pendingLabel?: string
  /** Result message shown beside the submit button. */
  statusMessage?: string
  statusVariant?: "error" | "success"
  /** Extra inputs rendered inside the form — hidden cart payload, order notes, etc. */
  extraFields?: React.ReactNode
  /** Heading element — use "h1" when this is the page's main heading. */
  as?: "h1" | "h2"
  className?: string
}

const defaultItems: CheckoutItem[] = [
  {
    name: "Aera Wool Overshirt",
    qty: 1,
    price: 168,
    image:
      "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&auto=format&fit=crop&w=400",
  },
  {
    name: "Everyday Merino Tee",
    qty: 2,
    price: 48,
    image:
      "https://images.unsplash.com/photo-1651761179569-4ba2aa054997?q=80&auto=format&fit=crop&w=400",
  },
  {
    name: "Canvas Weekender Bag",
    qty: 1,
    price: 124,
    image:
      "https://images.unsplash.com/photo-1631844321851-a1a5a7594a92?q=80&auto=format&fit=crop&w=400",
  },
]

const defaultDeliveryOptions: CheckoutDeliveryOption[] = [
  { id: "standard", name: "Standard", eta: "5–7 business days", fee: 0 },
  { id: "express", name: "Express", eta: "1–2 business days", fee: 14 },
  { id: "pickup", name: "Store pickup", eta: "Ready today", fee: 0 },
]

function ThumbMock({ item }: { item: CheckoutItem }) {
  if (item.image) {
    return (
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="size-14 shrink-0 rounded-lg border object-cover"
      />
    )
  }
  return (
    <div
      aria-hidden
      className="size-14 shrink-0 rounded-lg border bg-gradient-to-br from-primary/25 via-muted to-background"
    />
  )
}

export function Checkout01({
  labels,
  eyebrow = "Secure checkout",
  title = "Checkout",
  description = "Review your order and complete payment. Every field is encrypted end to end.",
  items = defaultItems,
  currency = "$",
  deliveryOptions = defaultDeliveryOptions,
  taxRate = 0.08,
  submitLabel = "Place order",
  secureNote = "Encrypted and secured. We never store full card details.",
  paymentMethods = ["Visa", "Mastercard", "Amex", "Apple Pay"],
  paymentMode = "card",
  formAction,
  pending = false,
  pendingLabel,
  statusMessage,
  statusVariant = "error",
  extraFields,
  as: Heading = "h2",
  className,
}: Checkout01Props) {
  const t = React.useMemo(
    () => ({ ...DEFAULT_CHECKOUT01_LABELS, ...labels }),
    [labels]
  )
  const options = deliveryOptions.length > 0 ? deliveryOptions : defaultDeliveryOptions
  const [selectedDelivery, setSelectedDelivery] = React.useState(options[0]!.id)

  const activeDelivery =
    options.find((o) => o.id === selectedDelivery) ?? options[0]!

  const subtotal = React.useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.qty, 0),
    [items]
  )
  const shipping = activeDelivery.fee
  const tax = React.useMemo(
    () => Math.round((subtotal + shipping) * taxRate * 100) / 100,
    [subtotal, shipping, taxRate]
  )
  const total = subtotal + shipping + tax

  const stepIndex = (n: number) => (
    <span
      aria-hidden
      className="text-sm font-medium text-muted-foreground tabular-nums"
    >
      {n}
    </span>
  )

  return (
    <section className={cn("bg-background", className)}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.08)}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-2 text-sm font-medium text-primary"
          >
            <Lock className="size-3.5" aria-hidden />
            {eyebrow}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Heading className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {title}
            </Heading>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-lg text-pretty text-muted-foreground"
          >
            {description}
          </motion.p>
        </motion.div>

        {/*
           * minmax(0,…) je namerno: bez toga kolona rešetke naraste do min-content
           * širine najšire stavke — a naziv proizvoda u pregledu porudžbine je
           * `truncate`, dakle nelomljiv. Na telefonu je to gurnulo stranicu na 517px
           * pri ekranu od 390px, pa su footer i traka za kolačiće ostajali uži od
           * sadržaja.
           */}
        <div className="mt-12 grid grid-cols-[minmax(0,1fr)] items-start gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12">
          {/* LEFT — the form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger(0.08)}
            id="checkout-form"
            action={formAction}
            onSubmit={formAction ? undefined : (e) => e.preventDefault()}
            className="flex flex-col gap-10"
          >
            {/* 1) Contact */}
            <motion.fieldset variants={fadeUp} className="flex flex-col gap-4 border-0 p-0">
              <legend className="mb-1 flex items-center gap-2 text-sm font-medium">
                {stepIndex(1)}
                {t.contact}
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="checkout-email">{t.emailLabel}</Label>
                  <Input
                    id="checkout-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder={t.emailPlaceholder}
                  />
                </div>
                {/* The courier needs a reachable number, doubly so for cash on delivery. */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="checkout-phone">{t.phoneLabel}</Label>
                  <Input
                    id="checkout-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder={t.phonePlaceholder}
                  />
                </div>
              </div>
            </motion.fieldset>

            {/* 2) Shipping address */}
            <motion.fieldset variants={fadeUp} className="flex flex-col gap-4 border-0 p-0">
              <legend className="mb-1 flex items-center gap-2 text-sm font-medium">
                {stepIndex(2)}
                {t.shippingAddress}
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="checkout-first-name">{t.firstNameLabel}</Label>
                  <Input
                    id="checkout-first-name"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    placeholder={t.firstNamePlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="checkout-last-name">{t.lastNameLabel}</Label>
                  <Input
                    id="checkout-last-name"
                    name="lastName"
                    autoComplete="family-name"
                    required
                    placeholder={t.lastNamePlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="checkout-address">{t.addressLabel}</Label>
                  <Input
                    id="checkout-address"
                    name="address"
                    autoComplete="address-line1"
                    required
                    placeholder={t.addressPlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="checkout-apartment">
                    {t.apartmentLabel}{" "}
                    <span className="text-muted-foreground">{t.optionalHint}</span>
                  </Label>
                  <Input
                    id="checkout-apartment"
                    name="apartment"
                    autoComplete="address-line2"
                    placeholder={t.apartmentPlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="checkout-city">{t.cityLabel}</Label>
                  <Input
                    id="checkout-city"
                    name="city"
                    autoComplete="address-level2"
                    required
                    placeholder={t.cityPlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="checkout-postal">{t.postalCodeLabel}</Label>
                  <Input
                    id="checkout-postal"
                    name="postalCode"
                    autoComplete="postal-code"
                    required
                    placeholder={t.postalCodePlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="checkout-country">{t.countryLabel}</Label>
                  <Input
                    id="checkout-country"
                    name="country"
                    autoComplete="country-name"
                    required
                    placeholder={t.countryPlaceholder}
                  />
                </div>
              </div>
            </motion.fieldset>

            {/* 3) Delivery method */}
            <motion.fieldset variants={fadeUp} className="flex flex-col gap-4 border-0 p-0">
              <legend
                id="checkout-delivery-label"
                className="mb-1 flex items-center gap-2 text-sm font-medium"
              >
                {stepIndex(3)}
                {t.deliveryMethod}
              </legend>
              <div
                role="radiogroup"
                aria-labelledby="checkout-delivery-label"
                className="flex flex-col gap-3"
              >
                {options.map((option) => {
                  const selected = option.id === selectedDelivery
                  return (
                    <button
                      key={option.id}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setSelectedDelivery(option.id)}
                      className={cn(
                        "flex items-center gap-4 rounded-lg border bg-card px-4 py-3.5 text-left transition-colors",
                        "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
                        selected
                          ? "border-primary bg-primary/5"
                          : "hover:border-primary/40"
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "flex size-9 shrink-0 items-center justify-center rounded-lg border",
                          selected
                            ? "border-primary/30 bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        <Truck className="size-4" />
                      </span>
                      <span className="flex flex-1 flex-col">
                        <span className="text-sm font-medium">{option.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {option.eta}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "text-sm font-medium tabular-nums",
                          selected ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {option.fee === 0
                          ? t.free
                          : formatMoney(option.fee, currency)}
                      </span>
                    </button>
                  )
                })}
              </div>
            </motion.fieldset>

            {/* 4) Payment */}
            <motion.fieldset variants={fadeUp} className="flex flex-col gap-4 border-0 p-0">
              <legend className="mb-1 flex items-center gap-2 text-sm font-medium">
                {stepIndex(4)}
                {t.payment}
              </legend>
              {paymentMode === "cod" ? (
                <div className="rounded-lg border bg-card p-6">
                  <p className="flex items-center gap-2 text-sm font-medium">
                    <Truck className="size-4 text-primary" aria-hidden />
                    {t.codTitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t.codNote}
                  </p>
                </div>
              ) : (
              <div className="rounded-lg border bg-card p-6">
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="size-3.5 text-primary" aria-hidden />
                  {t.paymentNote}
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <Label htmlFor="checkout-card">{t.cardNumberLabel}</Label>
                    <Input
                      id="checkout-card"
                      name="cardNumber"
                      inputMode="numeric"
                      autoComplete="cc-number"
                      required
                      placeholder={t.cardNumberPlaceholder}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="checkout-expiry">{t.expiryLabel}</Label>
                    <Input
                      id="checkout-expiry"
                      name="expiry"
                      inputMode="numeric"
                      autoComplete="cc-exp"
                      required
                      placeholder={t.expiryPlaceholder}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="checkout-cvc">{t.cvcLabel}</Label>
                    <Input
                      id="checkout-cvc"
                      name="cvc"
                      inputMode="numeric"
                      autoComplete="cc-csc"
                      required
                      placeholder={t.cvcPlaceholder}
                    />
                  </div>
                </div>
              </div>
              )}
            </motion.fieldset>

            {extraFields}
          </motion.form>

          {/* RIGHT — order summary */}
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            custom={0.1}
            className="lg:sticky lg:top-24"
          >
            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-sm font-medium">{t.orderSummary}</h3>

              <ul className="mt-5 flex flex-col gap-4">
                {items.map((item, i) => (
                  <li key={`${item.name}-${i}`} className="flex items-center gap-3">
                    <ThumbMock item={item} />
                    <div className="flex min-w-0 flex-1 flex-col">
                      <span className="truncate text-sm font-medium">
                        {item.name}
                      </span>
                      <span className="text-xs text-muted-foreground tabular-nums">
                        {t.qty} {item.qty} × {formatMoney(item.price, currency)}
                      </span>
                    </div>
                    <span className="text-sm font-medium tabular-nums">
                      {formatMoney(item.price * item.qty, currency)}
                    </span>
                  </li>
                ))}
              </ul>

              <Separator className="my-5" />

              <dl className="flex flex-col gap-2.5 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">{t.subtotal}</dt>
                  <dd className="tabular-nums">{formatMoney(subtotal, currency)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted-foreground">
                    {t.shipping}{" "}
                    <span className="text-muted-foreground/70">
                      · {activeDelivery.name}
                    </span>
                  </dt>
                  <dd className="tabular-nums">
                    {shipping === 0 ? t.free : formatMoney(shipping, currency)}
                  </dd>
                </div>
                {/* Hidden where tax is already included in the listed price. */}
                {taxRate > 0 && (
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-foreground">
                      {t.tax}{" "}
                      <span className="text-muted-foreground/70 tabular-nums">
                        · {Math.round(taxRate * 100)}%
                      </span>
                    </dt>
                    <dd className="tabular-nums">{formatMoney(tax, currency)}</dd>
                  </div>
                )}
              </dl>

              <Separator className="my-5" />

              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium">{t.total}</span>
                <span className="font-heading text-2xl font-semibold tracking-tight tabular-nums">
                  {formatMoney(total, currency)}
                </span>
              </div>

              <button
                type="submit"
                form="checkout-form"
                disabled={pending}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-6 w-full gap-2 disabled:pointer-events-none disabled:opacity-60"
                )}
              >
                <Lock className="size-4" aria-hidden />
                {pending && pendingLabel
                  ? pendingLabel
                  : `${submitLabel} · ${formatMoney(total, currency)}`}
              </button>

              {statusMessage && (
                <p
                  aria-live="polite"
                  className={cn(
                    "mt-4 rounded-lg border p-3 text-sm leading-6",
                    statusVariant === "success"
                      ? "border-primary/40 bg-primary/10 text-foreground"
                      : "border-destructive/40 bg-destructive/10 text-foreground"
                  )}
                >
                  {statusMessage}
                </p>
              )}

              <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                {secureNote}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {paymentMode === "cod" ? (
                  <>
                    <Truck className="size-4 text-muted-foreground" aria-hidden />
                    <span className="rounded-md border bg-muted px-2 py-1 text-xs text-muted-foreground">
                      {t.codBadge}
                    </span>
                  </>
                ) : (
                  <>
                    <CreditCard className="size-4 text-muted-foreground" aria-hidden />
                    {paymentMethods.map((method) => (
                      <span
                        key={method}
                        className="rounded-md border bg-muted px-2 py-1 text-xs text-muted-foreground"
                      >
                        {method}
                      </span>
                    ))}
                  </>
                )}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
