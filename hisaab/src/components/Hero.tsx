"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { hero, ledger } from "@/lib/content";
import { staggerParent, viewportOnce, EASE } from "@/lib/motion";

/**
 * Above-the-fold entrance must be transform-only: an opacity:0 initial state
 * is server-rendered inline, which delays LCP until hydration + animation.
 */
const heroChild: Variants = {
  hidden: { y: 24 },
  show: { y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Hero() {
  // MotionConfig reducedMotion="user" only disables transform animations;
  // the infinite opacity pulse on the coach dot must be gated by hand.
  const reduceMotion = useReducedMotion();

  return (
    <header
      id="top"
      className="relative overflow-hidden bg-red-deep pt-[72px] pb-24 text-paper"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 60% at 70% -10%, rgba(232,181,68,.12), transparent)",
      }}
    >
      <div className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_.95fr]">
        {/* Left: copy, CTAs, proof */}
        <motion.div variants={staggerParent} initial="hidden" animate="show">
          <motion.span
            variants={heroChild}
            className="mb-5 inline-flex items-center gap-2 text-[13.5px] font-semibold uppercase tracking-[1.5px] text-gold"
          >
            <span aria-hidden className="h-[2px] w-[26px] bg-gold" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={heroChild}
            className="mb-[22px] font-display font-normal text-[clamp(38px,5.4vw,62px)] leading-[1.15] text-cream"
          >
            {hero.h1Pre}
            <em className="not-italic text-gold">{hero.h1Em}</em>
            {hero.h1Post}
            <br />
            {hero.h1Line2}
          </motion.h1>

          {/* The subhead is the page's LCP element — it must stay static.
              Any motion on it (even transform-only) re-emits the LCP entry
              at hydration time and tanks the score by ~3 s. */}
          <p className="mb-8 max-w-[480px] text-[19px] font-light opacity-90">
            {hero.subPre}
            <strong className="font-semibold">{hero.subStrong}</strong>
            {hero.subPost}
          </p>

          <motion.div
            variants={heroChild}
            className="mb-[30px] flex flex-wrap gap-3.5"
          >
            <motion.a
              href={hero.ctaPrimary.href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block rounded-full bg-gold px-6 py-[11px] text-[15.5px] font-bold text-ink"
            >
              {hero.ctaPrimary.label}
            </motion.a>
            <motion.a
              href={hero.ctaGhost.href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block rounded-full border-2 border-[rgba(251,243,228,.4)] bg-transparent px-6 py-[11px] text-[15.5px] font-bold text-paper transition-colors hover:border-paper"
            >
              {hero.ctaGhost.label}
            </motion.a>
          </motion.div>

          <motion.div variants={heroChild} className="flex flex-wrap gap-7">
            {hero.proof.map((item) => (
              <div key={item.label}>
                <span className="block font-mono text-[22px] font-semibold text-gold">
                  {item.value}
                </span>
                <span className="block text-[13.5px] opacity-75">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: ledger phone */}
        <div
          aria-label={ledger.ariaLabel}
          className="relative mx-auto w-full max-w-[400px] rounded-[26px] bg-paper pt-[18px] pb-[22px] text-ink shadow-[0_10px_40px_rgba(92,14,9,.18),0_0_0_8px_#5C0E09,0_0_0_9px_rgba(251,243,228,.25)]"
        >
          <div className="flex items-center justify-between border-b-2 border-red px-[22px] pb-3">
            <span className="font-display font-normal text-[18px] text-red">
              {ledger.title}
            </span>
            <span className="font-mono text-[12px] text-ink-soft">
              {ledger.date}
            </span>
          </div>

          <div className="ledger-lines relative min-h-[300px] pt-1.5 pr-[22px] pl-[34px]">
            <span
              aria-hidden
              className="absolute inset-y-0 left-6 w-[1.5px] bg-[rgba(168,35,27,.45)]"
            />
            {ledger.rows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.6, ease: EASE }}
                className="flex h-[36px] items-baseline justify-between text-[15px]"
              >
                <span>{row.label}</span>
                <span
                  className={`font-mono font-semibold ${
                    row.positive ? "text-green" : "text-red"
                  }`}
                >
                  {row.amount}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 3.4, ease: EASE }}
            className="mx-4 mt-3.5 rounded-[14px_14px_14px_3px] border-[1.5px] border-green bg-green-soft px-4 py-[13px] text-[14.5px] leading-[1.5]"
          >
            <div className="mb-[5px] flex items-center gap-[7px] text-[11.5px] font-bold uppercase tracking-[1px] text-green">
              <motion.span
                aria-hidden
                animate={reduceMotion ? undefined : { opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {"●"}
              </motion.span>
              {ledger.coachTag}
            </div>
            {ledger.bubble.map((seg, i) =>
              seg.bold ? (
                <b key={i} className="font-bold text-green">
                  {seg.text}
                </b>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </header>
  );
}
