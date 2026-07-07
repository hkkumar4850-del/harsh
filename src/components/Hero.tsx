import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLook } from '../LookContext';

// ---- copy -----------------------------------------------------------
const HEADLINE_LINE_1 = 'Everyday cotton.';
const HEADLINE_LINE_2 = 'Reimagined';
const SUBHEAD =
  'FRAME makes heavyweight tees built from long-staple cotton, cut for movement and made to outlast the trend cycle.';
const PRIMARY_CTA = 'Shop the Collection';
const SECONDARY_CTA = 'Our Fabric Story';
// ---------------------------------------------------------------------

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease: 'easeOut' as const },
});

/** Section 2 — Hero, playing over Look 1 "Studio". */
export default function Hero() {
  const { reducedMotion } = useLook();

  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="flex max-w-4xl flex-col items-center px-6 pt-16 pb-20 text-center md:pt-28">
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-8xl"
        >
          {HEADLINE_LINE_1}
          <br />
          <span className="shiny-text">{HEADLINE_LINE_2}</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          {SUBHEAD}
        </motion.p>

        <motion.div
          {...fadeUp(0.55)}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#lookbook"
            className="rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition-transform hover:scale-[1.03]"
          >
            {PRIMARY_CTA}
          </a>
          <a
            href="#fabric"
            className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white/85 transition-colors hover:border-white/50 hover:text-white"
          >
            {SECONDARY_CTA}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-24 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase">
            Scroll to change the scene
          </span>
          <motion.span
            animate={reducedMotion ? undefined : { y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
