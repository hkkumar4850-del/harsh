"use client";

import { motion } from "framer-motion";
import { pricing } from "@/lib/content";
import { fadeUp, staggerParent, staggerChild, viewportOnce } from "@/lib/motion";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-[88px]">
      <div className="mx-auto max-w-wrap px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mb-[54px] max-w-[640px] text-center"
        >
          <h2 className="mb-3.5 font-display font-normal text-red-dark text-[clamp(30px,4vw,44px)]">
            {pricing.h2}
          </h2>
          <p className="text-[18px] text-ink-soft">{pricing.sub}</p>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto grid max-w-[420px] items-stretch gap-6 md:max-w-none md:grid-cols-3"
        >
          {pricing.plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerChild}
              whileHover={{ y: -4 }}
              // Scale must live in framer's style so it composes with the
              // animated y transform — a CSS scale class is overridden by
              // the inline transform framer writes.
              style={plan.hot ? { scale: 1.03 } : undefined}
              className={`relative flex flex-col rounded-ledger bg-cream px-[30px] py-[34px] ${
                plan.hot
                  ? "border-[2.5px] border-red shadow-ledger"
                  : "border-[1.5px] border-paper-line"
              }`}
            >
              {"stamp" in plan && (
                <span className="absolute -top-[15px] left-1/2 -translate-x-1/2 -rotate-3 rounded bg-red px-[18px] py-1.5 font-display text-[13.5px] tracking-[1px] text-paper">
                  {plan.stamp}
                </span>
              )}
              <h3 className="mb-1.5 font-display font-normal text-[22px] text-red-dark">
                {plan.name}
              </h3>
              <div className="mb-[2px] mt-2.5 font-mono text-[38px] font-semibold text-ink">
                {plan.price}
                {plan.priceSuffix && (
                  <small className="text-[15px] font-normal text-ink-soft">
                    {" "}
                    {plan.priceSuffix}
                  </small>
                )}
              </div>
              <div className="mb-5 text-[14px] text-ink-soft">{plan.per}</div>
              <ul className="mb-7 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 border-b border-dashed border-paper-line py-2 text-[15.5px]"
                  >
                    <span className="font-bold text-green">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#waitlist"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`rounded-full px-6 py-[11px] text-center text-[15.5px] font-bold ${
                  plan.ctaStyle === "gold" ? "bg-gold text-ink" : "bg-red text-paper"
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
