import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/cn";

export default function MagneticButton({
  href,
  onClick,
  children,
  variant = "solid",
  className,
  type = "button",
}: {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  type?: "button" | "submit";
}) {
  const { ref, x, y, onPointerMove, onPointerLeave } = useMagnetic<HTMLAnchorElement | HTMLButtonElement>(0.3);

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-300",
    variant === "solid"
      ? "bg-brass text-ink hover:bg-brass-bright"
      : "border border-line-strong text-bone hover:border-brass",
    className,
  );

  const content = (
    <motion.span style={{ x, y }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        data-cursor="link"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        whileTap={{ scale: 0.96 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      data-cursor="link"
      onClick={onClick}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      whileTap={{ scale: 0.96 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
