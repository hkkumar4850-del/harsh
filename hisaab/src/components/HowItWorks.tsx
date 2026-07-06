"use client";

import { motion } from "framer-motion";
import { howItWorks } from "@/lib/content";
import { fadeUp, staggerParent, staggerChild, viewportOnce } from "@/lib/motion";

export default function HowItWorks() {
  return (
    <section className="bg-red-deep pb-[88px] pt-0 text-paper">
      <div className="mx-auto max-w-wrap px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-[54px] max-w-[640px]"
        >
          <h2 className="font-display font-normal text-cream text-[clamp(30px,4vw,44px)]">
            {howItWorks.h2}
          </h2>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto grid max-w-[480px] grid-cols-1 gap-[30px] md:max-w-none md:grid-cols-3"
        >
          {howItWorks.steps.map((step) => (
            <motion.div
              key={step.numeral}
              variants={staggerChild}
              className="rounded-ledger border-[1.5px] border-[rgba(251,243,228,.2)] bg-[rgba(251,243,228,.07)] px-[26px] py-7"
            >
              <span
                aria-hidden
                className="mb-2.5 block font-display text-[44px] leading-none text-gold"
              >
                {step.numeral}
              </span>
              <h3 className="mb-2 font-display font-normal text-[20px] text-cream">
                {step.title}
              </h3>
              <p className="text-[15.5px] text-[rgba(251,243,228,.82)]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
