/**
 * Oblik stanja checkout forme, odvojen od same akcije.
 *
 * Ne sme da stoji u `order.ts`: fajl sa "use server" sme da izvozi isključivo
 * async funkcije. Izvezena konstanta tamo obara stranicu čim se učita, sa
 * porukom „A 'use server' file can only export async functions, found object".
 */
export type OrderState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Per-field messages, keyed by input name. */
  fieldErrors?: Record<string, string>;
  orderRef?: string;
};

export const INITIAL_ORDER_STATE: OrderState = { status: "idle", message: "" };
