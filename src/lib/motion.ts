import type { Transition, Variants } from "motion/react"

/**
 * Shared animation language for all LudusVibe sections.
 * Sections must import timing/easing from here — never inline values.
 */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const transition: Transition = { duration: 0.7, ease: EASE }

/** Default in-view trigger for section reveals. */
export const viewport = { once: true, margin: "-80px 0px" as const }

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...transition, delay },
  }),
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { ...transition, delay },
  }),
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { ...transition, delay },
  }),
}

/** Parent container that staggers its children's `visible` variants. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
})
