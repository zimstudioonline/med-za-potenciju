"use client";

import { MotionConfig } from "motion/react";

/**
 * `reducedMotion="user"` tells motion to honour the operating system's "reduce
 * motion" setting. The CSS rule in globals.css cannot do this on its own: motion
 * animates through the Web Animations API, not through CSS transitions, so a
 * `transition-duration` override never reaches it.
 *
 * Used only on the pages that actually render a motion section, so the library
 * is never pulled into the bundle of a page that has no animation to run.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
