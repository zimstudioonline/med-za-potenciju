/**
 * Admin ima svoj layout jer ne sme da nasledi zaglavlje, footer ni sticky traku
 * sa porudžbinom iz korenskog layouta — to je zaseban ekran, ne stranica sajta.
 */
export default function KeystaticLayout({ children }: LayoutProps<"/keystatic">) {
  return children;
}
