"use client";

import { motion } from "framer-motion";
import { languages } from "@/lib/content";
import { fadeUp, staggerParent, staggerChild, viewportOnce } from "@/lib/motion";

export default function Languages() {
  return (
    <section className="bg-cream py-[88px]">
      <div className="mx-auto max-w-wrap px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mb-[54px] max-w-[640px] text-center"
        >
          <h2 className="font-display font-normal text-red-dark text-[clamp(30px,4vw,44px)] mb-3.5">
            {languages.h2}
          </h2>
          <p className="text-[18px] text-ink-soft">{languages.sub}</p>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-wrap justify-center gap-3.5"
        >
          {languages.pills.map((pill) => (
            <motion.span
              key={pill.name}
              variants={staggerChild}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2.5 rounded-full border-[1.5px] border-paper-line bg-cream px-[26px] py-3 text-[17px] font-semibold"
            >
              <span className="text-[19px] text-red">{pill.native}</span>
              {pill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
