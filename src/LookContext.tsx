import { createContext, useContext } from 'react';
import type { MotionValue } from 'motion/react';
import { LOOKS, type Look } from './scenes';

export interface LookState {
  /** Current look index, 0–3, derived from page scroll. */
  lookIndex: number;
  /** The active look's config (name, tint, surface brightness). */
  look: Look;
  /** Page-level scroll progress shared by every scroll-linked element. */
  scrollYProgress: MotionValue<number>;
  /** True when prefers-reduced-motion is set — skip parallax/scrub. */
  reducedMotion: boolean;
}

export const LookContext = createContext<LookState | null>(null);

export function useLook(): LookState {
  const ctx = useContext(LookContext);
  if (!ctx) throw new Error('useLook must be used inside <LookContext.Provider>');
  return ctx;
}

export { LOOKS };
