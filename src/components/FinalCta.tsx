import { motion } from 'motion/react';

// ---- copy -----------------------------------------------------------
const HEADLINE = ['Stop restocking.', 'Start layering.'];
const SUBTEXT =
  'We restock core colors on a fixed calendar instead of chasing hype cycles — so the tee you love in July is still there in January. Buy once, layer forever.';
// ---------------------------------------------------------------------

/** Section 8 — Final CTA panel over Look 4 "Midnight". */
export default function FinalCta() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="liquid-glass relative overflow-hidden rounded-[2rem] px-8 py-16 text-center md:px-16 md:py-20"
        >
          {/* Soft radial glow bleeding in from the top edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-32 h-64"
            style={{
              background:
                'radial-gradient(ellipse 60% 100% at 50% 0%, color-mix(in srgb, var(--color-brand) 35%, transparent), transparent 70%)',
            }}
          />
          <h2 className="relative text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            {HEADLINE[0]}
            <br />
            {HEADLINE[1]}
          </h2>
          <p className="relative mx-auto mt-6 max-w-lg leading-relaxed text-white/65">{SUBTEXT}</p>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#collections"
              className="rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition-transform hover:scale-[1.03]"
            >
              Shop Now
            </a>
            <a
              href="#top"
              className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white/85 transition-colors hover:border-white/50 hover:text-white"
            >
              Join the Waitlist
            </a>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 text-xs text-white/40 md:flex-row">
          <span>© 2026 FRAME. Cut once, worn forever.</span>
          <span>Instagram · TikTok · Journal</span>
        </footer>
      </div>
    </section>
  );
}
