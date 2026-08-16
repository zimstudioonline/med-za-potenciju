import type { Metadata } from "next";

import KeystaticApp from "../keystatic-app";

/** Admin ne sme u pretraživače. */
export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function KeystaticPage() {
  return <KeystaticApp />;
}
