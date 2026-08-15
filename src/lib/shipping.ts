/**
 * Single source of truth for delivery cost — the cart and the checkout must never
 * quote different totals for the same order.
 */
export const SHIPPING_FEE = 535;

/** Order value above which delivery is free. */
export const FREE_SHIPPING_THRESHOLD = 5000;

export const SHIPPING_ETA = "Isporuka u roku od 24 časa, diskretno pakovanje";
