import type { Variants } from "framer-motion";

/** Shared easing — used by every scroll reveal on the page. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade + slight y-offset for section headers and standalone blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Parent container that staggers its children (grids, lists). */
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/** Child item inside a staggered grid. */
export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/** Standard once-only viewport config for whileInView reveals. */
export const viewportOnce = { once: true, amount: 0.25 } as const;
