import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionProvider } from "@/components/motion-provider";

import { CartClient } from "./cart-client";

export const metadata: Metadata = {
  title: "Korpa",
  description: "Pregled artikala u vašoj korpi pre nastavka na plaćanje.",
  robots: { index: false },
};

export default function CartPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header cta={{ href: "/checkout", label: "Plaćanje" }} />
      <MotionProvider>
        <CartClient />
      </MotionProvider>
      <Footer />
    </main>
  );
}
