"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/content";
import { fadeUp, staggerParent, staggerChild, viewportOnce } from "@/lib/motion";

export default function Features() {
  return (
    <section id="features" className="bg-paper py-[88px]">
      <div className="mx-auto max-w-wrap px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-[54px] max-w-[640px]"
        >
          <h2 className="mb-3.5 font-display font-normal text-[clamp(30px,4vw,44px)] leading-[1.15] text-red-dark">
            {features.h2}
          </h2>
          <p className="text-[18px] text-ink-soft">{features.sub}</p>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.cards.map((card) => (
            <motion.article
              key={card.title}
              variants={staggerChild}
              whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(92,14,9,.18)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative overflow-hidden rounded-ledger border-[1.5px] border-paper-line bg-cream px-6 py-[26px]"
            >
              <span aria-hidden className="absolute inset-x-0 top-0 h-[5px] bg-red" />
              <span className="mb-3.5 block text-[30px]">{card.icon}</span>
              <h3 className="mb-2 font-display font-normal text-[20px] leading-[1.15] text-red-dark">
                {card.title}
              </h3>
              <p className="text-[15.5px] text-ink-soft">{card.desc}</p>
              <span className="mt-3 inline-block rounded-lg bg-paper px-3 py-[5px] text-[13.5px] font-semibold text-red">
                {card.chip}
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
