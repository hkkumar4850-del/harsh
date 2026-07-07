import { motion } from "framer-motion";
import { staggerParent, staggerWord } from "@/lib/motion";
import { cn } from "@/lib/cn";

/**
 * Renders each line as its own overflow-hidden mask so words slide up from
 * underneath rather than fading in place — the signature hero reveal.
 */
export default function SplitHeading({
  lines,
  className,
  lineClassName,
  as: Tag = "h1",
  trigger = "mount",
  delayChildren = 0,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3";
  trigger?: "mount" | "view";
  delayChildren?: number;
}) {
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={cn(className)}
      variants={staggerParent(0.12, delayChildren)}
      initial="hidden"
      {...(trigger === "mount"
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, amount: 0.6 } })}
    >
      {lines.map((line, i) => (
        <span key={i} className={cn("block overflow-hidden", lineClassName)}>
          <motion.span variants={staggerWord} className="block">
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
