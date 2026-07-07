import { motion } from 'motion/react';
import { useLook } from '../LookContext';

// ---- placeholder press / stockist wordmarks ---------------------------
const STOCKISTS = ['HYPEBEAST', 'GQ', 'SSENSE', 'Highsnobiety', 'END.', 'Mr Porter'];
// -----------------------------------------------------------------------

/** Section 5 — Stockist / press logo cloud. */
export default function LogoCloud() {
  const { look } = useLook();
  const dark = look.lightSurface;

  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p
          className={`text-xs font-semibold tracking-[0.25em] uppercase transition-colors duration-700 ${
            dark ? 'text-neutral-600' : 'text-white/45'
          }`}
        >
          Worn and covered by
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {STOCKISTS.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
              className={`cursor-default text-xl font-bold tracking-tight transition-colors duration-300 ${
                dark
                  ? 'text-neutral-900/50 hover:text-neutral-900'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
