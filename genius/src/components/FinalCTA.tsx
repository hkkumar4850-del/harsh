import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { finalCta } from "@/lib/content";

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-white/10 px-6 py-32 text-center md:py-44"
    >
      {/* ambient background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-40 left-[-10%] h-[500px] w-[500px] rounded-full bg-accent/15 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-accent/15 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative">
        <Reveal>
          <h2 className="hero-title mx-auto max-w-3xl text-5xl font-medium md:text-7xl">
            {finalCta.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-white/70">{finalCta.sub}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.a
              href={finalCta.primary.href}
              className="rounded-full bg-white px-8 py-4 text-sm font-medium text-black hover:bg-neutral-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {finalCta.primary.label}
            </motion.a>
            <motion.a
              href={finalCta.secondary.href}
              className="rounded-full border border-white/20 px-8 py-4 text-sm text-white transition-colors hover:border-accent"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {finalCta.secondary.label}
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
