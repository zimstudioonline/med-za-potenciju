import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionProvider } from "@/components/motion-provider";

import { CheckoutClient } from "./checkout-client";

export const metadata: Metadata = {
  title: "Plaćanje",
  description: "Unesite podatke za dostavu i završite porudžbinu uz plaćanje pouzećem.",
  robots: { index: false },
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <MotionProvider>
        <CheckoutClient />
      </MotionProvider>
      <Footer />
    </main>
  );
}
