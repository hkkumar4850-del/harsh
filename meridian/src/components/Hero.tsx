import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import WatchFace from "@/components/WatchFace";
import SplitHeading from "@/components/SplitHeading";
import MagneticButton from "@/components/MagneticButton";
import { hero, collection } from "@/lib/content";
import { fadeUp, EASE } from "@/lib/motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const hero0 = collection[0];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const watchScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const watchY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      style={{ opacity: heroOpacity }}
      className="relative flex min-h-screen items-center overflow-hidden bg-ink"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(176,141,87,0.14),transparent_60%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-24 pb-20 md:grid-cols-12 md:px-10">
        <div className="order-2 md:order-1 md:col-span-7">
          <motion.p
            className="eyebrow mb-6 text-brass"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            {hero.eyebrow}
          </motion.p>

          <div className="hairline mb-8 h-0.5 w-12 bg-brass" />

          <SplitHeading
            lines={hero.headlineLines}
            as="h1"
            trigger="mount"
            className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight text-bone"
          />

          <motion.p
            className="mt-8 max-w-xl text-base text-bone-soft md:text-lg"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.7, duration: 0.9, ease: EASE }}
          >
            {hero.sub}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.85, duration: 0.9, ease: EASE }}
          >
            <MagneticButton href={hero.ctaPrimary.href} variant="solid">
              {hero.ctaPrimary.label}
            </MagneticButton>
            <MagneticButton href={hero.ctaGhost.href} variant="ghost">
              {hero.ctaGhost.label}
            </MagneticButton>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 md:col-span-5">
          <motion.div
            style={{ scale: watchScale, y: watchY }}
            className="relative mx-auto flex items-center justify-center md:-mr-8 md:justify-end"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(176,141,87,0.18),transparent_70%)] blur-2xl" />
            <WatchFace
              dial={hero0.dial}
              strap={hero0.strap}
              size={480}
              className="w-full max-w-[420px] md:max-w-[520px]"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3"
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ delay: 1.1, duration: 0.9, ease: EASE }}
      >
        <span className="eyebrow text-bone-faint">{hero.scrollHint}</span>
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={reduceMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-brass" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
