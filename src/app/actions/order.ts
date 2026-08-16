"use server";

import type { OrderState } from "@/app/actions/order-state";
import { getProducts } from "@/lib/content";
import { EmailNotConfiguredError, sendMail } from "@/lib/email";
import { formatMoney } from "@/lib/money";
import { SHIPPING_FEE } from "@/lib/shipping";

type RequiredField = { name: string; label: string; minLength: number };

const REQUIRED_FIELDS: RequiredField[] = [
  { name: "firstName", label: "Ime", minLength: 2 },
  { name: "lastName", label: "Prezime", minLength: 2 },
  { name: "phone", label: "Telefon", minLength: 6 },
  { name: "address", label: "Adresa", minLength: 4 },
  { name: "city", label: "Grad", minLength: 2 },
  { name: "postalCode", label: "Poštanski broj", minLength: 4 },
];

/** Deliberately loose — enough to catch typos without rejecting valid addresses. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function orderReference(): string {
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("");
  const suffix = Math.floor(Math.random() * 9000 + 1000);
  return `MZP-${stamp}-${suffix}`;
}

export async function placeOrder(
  _prevState: OrderState,
  formData: FormData
): Promise<OrderState> {
  const fieldErrors: Record<string, string> = {};

  for (const field of REQUIRED_FIELDS) {
    const value = text(formData, field.name);
    if (value.length < field.minLength) {
      fieldErrors[field.name] = `${field.label} je obavezno polje.`;
    }
  }

  const email = text(formData, "email");
  if (email && !EMAIL_PATTERN.test(email)) {
    fieldErrors.email = "Email adresa nije ispravna.";
  }

  // Prices are never taken from the client — only slug and quantity are, and every
  // figure below is recomputed from the catalog on the server.
  let requested: unknown;
  try {
    requested = JSON.parse(text(formData, "cart") || "[]");
  } catch {
    requested = [];
  }

  const catalog = new Map((await getProducts()).map((product) => [product.slug, product]));

  const lines = (Array.isArray(requested) ? requested : []).flatMap((entry) => {
    if (typeof entry !== "object" || entry === null) return [];
    const { slug, qty } = entry as { slug?: unknown; qty?: unknown };
    if (typeof slug !== "string") return [];
    const product = catalog.get(slug);
    if (!product) return [];
    const quantity =
      typeof qty === "number" && Number.isFinite(qty)
        ? Math.min(Math.max(Math.floor(qty), 1), 99)
        : 1;
    return [{ product, qty: quantity }];
  });

  if (lines.length === 0) {
    return {
      status: "error",
      message: "Korpa je prazna, pa porudžbina nije poslata. Dodajte proizvod i pokušajte ponovo.",
    };
  }

  const problems = Object.values(fieldErrors);
  if (problems.length > 0) {
    return {
      status: "error",
      // Spelled out, since the section does not mark individual inputs.
      message: problems.join(" "),
      fieldErrors,
    };
  }

  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.qty, 0);
  const shipping = SHIPPING_FEE;
  const total = subtotal + shipping;

  const orderRef = orderReference();
  const customer = {
    firstName: text(formData, "firstName"),
    lastName: text(formData, "lastName"),
    phone: text(formData, "phone"),
    email,
    address: text(formData, "address"),
    apartment: text(formData, "apartment"),
    city: text(formData, "city"),
    postalCode: text(formData, "postalCode"),
    note: text(formData, "note"),
  };

  const body = [
    `NOVA PORUDŽBINA — ${orderRef}`,
    "",
    "ARTIKLI",
    ...lines.map(
      (line) =>
        `  ${line.qty} × ${line.product.name} (${line.product.packSize}) — ${formatMoney(
          line.product.price * line.qty,
          line.product.currency
        )}`
    ),
    "",
    `  Međuzbir:  ${formatMoney(subtotal)}`,
    `  Dostava:   ${formatMoney(shipping)}`,
    `  UKUPNO:    ${formatMoney(total)}  (plaćanje pouzećem)`,
    "",
    "KUPAC",
    `  Ime i prezime: ${customer.firstName} ${customer.lastName}`,
    `  Telefon:       ${customer.phone}`,
    `  Email:         ${customer.email || "—"}`,
    "",
    "ADRESA ZA DOSTAVU",
    `  ${customer.address}${customer.apartment ? `, ${customer.apartment}` : ""}`,
    `  ${customer.postalCode} ${customer.city}`,
    ...(customer.note ? ["", "NAPOMENA KUPCA", `  ${customer.note}`] : []),
    "",
    `Primljeno: ${new Date().toLocaleString("sr-RS", { timeZone: "Europe/Belgrade" })}`,
  ].join("\n");

  try {
    await sendMail({
      subject: `Porudžbina ${orderRef} — ${formatMoney(total)} — ${customer.firstName} ${customer.lastName}`,
      text: body,
      replyTo: customer.email || undefined,
    });
  } catch (error) {
    // The order must not vanish just because email delivery failed, so it goes to
    // the server log either way and the customer is told to call instead.
    console.error(`[porudžbina ${orderRef}] slanje mejla nije uspelo:`, error);
    console.error(body);

    const reason =
      error instanceof EmailNotConfiguredError
        ? "Slanje porudžbina još nije podešeno na serveru."
        : "Došlo je do greške pri slanju porudžbine.";

    return {
      status: "error",
      message: `${reason} Pozovite nas na +381 63 342 3800 (10–20h) da porudžbinu završimo telefonom.`,
      orderRef,
    };
  }

  return {
    status: "success",
    message: `Porudžbina je primljena. Broj porudžbine: ${orderRef}. Zvaćemo vas radi potvrde, a paket plaćate kuriru pri preuzimanju.`,
    orderRef,
  };
}
