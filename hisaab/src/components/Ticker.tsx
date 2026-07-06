"use client";

import { motion } from "framer-motion";
import { ticker } from "@/lib/content";

export default function Ticker() {
  const items = [...ticker, ...ticker];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden whitespace-nowrap bg-gold py-[10px] text-[15px] font-semibold text-ink"
    >
      <motion.div
        className="inline-flex items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="mx-7">{item}</span>
            <span className="mx-7">{"●"}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
