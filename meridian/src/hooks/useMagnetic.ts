import { useCallback, useRef } from "react";
import { useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Magnetic pull for buttons/links: the element leans toward the cursor
 * within `strength`, then springs back on leave. Skipped for touch input
 * (no hover to drive it) and reduced-motion users.
 *
 * Exposes a callback ref (not a RefObject) so one hook instance can back
 * either an <a> or a <button> — a callback typed for the union is
 * assignable to either element's narrower ref prop, where a shared
 * RefObject<Union> is not.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const elRef = useRef<T | null>(null);
  const ref = useCallback((node: T | null) => {
    elRef.current = node;
  }, []);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const onPointerMove = (e: React.PointerEvent<T>) => {
    if (reduceMotion || e.pointerType !== "mouse" || !elRef.current) return;
    const rect = elRef.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: springX, y: springY, onPointerMove, onPointerLeave };
}
