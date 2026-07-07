import type { Variants } from "framer-motion";

/** Shared easing — a confident deceleration, used by every reveal on the page. */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: EASE } },
};

/** Parent container that staggers word/child reveals — headlines, nav, grids. */
export const staggerParent = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

export const staggerWord: Variants = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: "0%", transition: { duration: 0.9, ease: EASE } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Once-only viewport config for whileInView reveals — tuned so sections
 * trigger a little before they're centered, matching a cinematic pace. */
export const viewportOnce = { once: true, amount: 0.3 } as const;
export const viewportOnceEarly = { once: true, amount: 0.15 } as const;
