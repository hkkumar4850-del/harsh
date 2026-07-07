import { motion } from 'motion/react';

// ---- copy -----------------------------------------------------------
const QUOTES = [
  {
    quote:
      'I bought one to test and came back for five. It’s the first tee I own that looks better after twenty washes.',
    name: 'Priya M.',
    location: 'Austin, TX',
  },
  {
    quote:
      'The weight is unreal — it drapes like a jacket but breathes like a tee. Nothing in my rotation compares.',
    name: 'Jordan K.',
    location: 'Brooklyn, NY',
  },
  {
    quote:
      'Finally a brand that restocks core colors instead of chasing drops. My whole capsule wardrobe is FRAME now.',
    name: 'Sofia R.',
    location: 'Los Angeles, CA',
  },
];
// ---------------------------------------------------------------------

/** Section 6 — Testimonials: three liquid-glass quote cards. */
export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <motion.blockquote
              key={q.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: i * 0.12, duration: 0.65, ease: 'easeOut' }}
              className="liquid-glass liquid-glass-dark flex flex-col rounded-2xl p-7"
            >
              <p className="flex-1 leading-relaxed text-white/85">“{q.quote}”</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-white">{q.name}</p>
                <p className="mt-0.5 text-xs text-white/50">{q.location}</p>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
