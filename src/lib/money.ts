/** Currencies written before the amount ("€52"); everything else follows it ("1.960 din"). */
const PREFIX_CURRENCIES = new Set(["$", "€", "£", "¥"]);

export const DEFAULT_CURRENCY = "din";
export const DEFAULT_LOCALE = "sr-RS";

/**
 * Formats an amount for display. Dinar amounts are whole numbers in practice, so
 * decimals only show up when the value actually has them.
 */
export function formatMoney(
  value: number,
  currency: string = DEFAULT_CURRENCY,
  locale: string = DEFAULT_LOCALE
): string {
  const amount = value.toLocaleString(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return PREFIX_CURRENCIES.has(currency) ? `${currency}${amount}` : `${amount} ${currency}`;
}
