"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faq } from "@/lib/content";
import {
  EASE,
  fadeUp,
  staggerChild,
  staggerParent,
  viewportOnce,
} from "@/lib/motion";

export default function FAQ() {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <section id="faq" className="bg-cream py-[88px]">
      <div className="mx-auto max-w-wrap px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-[54px] text-center font-display font-normal text-red-dark text-[clamp(30px,4vw,44px)]"
        >
          {faq.h2}
        </motion.h2>

        <motion.div
          className="mx-auto max-w-[760px]"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {faq.items.map((item, i) => {
            const isOpen = open.has(i);
            return (
              <motion.div
                key={item.q}
                variants={staggerChild}
                className="mb-3.5 overflow-hidden rounded-xl border-[1.5px] border-paper-line bg-cream"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  id={`faq-button-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between px-[22px] py-[18px] text-left text-[17px] font-semibold text-red-dark"
                >
                  <span>{item.q}</span>
                  <motion.span
                    aria-hidden="true"
                    className="text-[24px] leading-none text-red"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="px-[22px] pb-5 text-[15.5px] text-ink-soft">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
