"use client";

import { motion } from "motion/react";

import { fadeUp, viewport } from "@/lib/motion";

/**
 * Pojavljivanje sekcije pri skrolovanju: providnost i pomak od 12 px, jednom.
 *
 * Namerno bez `will-change` — sloj se pravi tek kad animacija krene i gasi se
 * kad se završi, pa nema trajno zauzete GPU memorije po sekciji.
 *
 * `once: true` znači da observer otkači element čim se prikaže, tako da skrol
 * naniže i naviše kasnije ne radi ništa.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
