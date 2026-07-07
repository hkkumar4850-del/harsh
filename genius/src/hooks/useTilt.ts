import { useRef } from "react";
import { useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

/**
 * Perspective tilt for cards: rotateX/rotateY follow the cursor within
 * ±maxDeg, springing back to flat on leave. Inert for touch pointers and
 * reduced-motion users. Spread the returned handlers onto a motion element
 * and pass `style` to it (parent needs `perspective` via the style itself).
 */
export function useTilt(maxDeg = 6) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [maxDeg, -maxDeg]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxDeg, maxDeg]), {
    stiffness: 220,
    damping: 22,
  });

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const onPointerLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return {
    ref,
    style: { rotateX, rotateY, transformStyle: "preserve-3d" as const, transformPerspective: 900 },
    onPointerMove,
    onPointerLeave,
  };
}
