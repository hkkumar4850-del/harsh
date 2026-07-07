import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

// ---- copy / pricing ---------------------------------------------------
type Cadence = 'once' | 'subscribe';

const TIERS = [
  {
    name: 'Essentials',
    description: 'A single tee in our core colors, standard fit.',
    price: { once: '$48', subscribe: '$41' },
    per: { once: 'one-time', subscribe: 'per drop' },
    cta: 'Add to Cart',
    popular: false,
    features: ['One 240gsm heavyweight tee', 'Core colorways', 'Standard fit', 'Free exchanges'],
  },
  {
    name: 'Capsule Pack',
    description: 'The 3-pack bundle that builds a rotation.',
    price: { once: '$129', subscribe: '$109' },
    per: { once: 'one-time', subscribe: 'per drop' },
    cta: 'Choose Plan',
    popular: true,
    features: [
      'Three tees, mixed colors',
      'Priority restock access',
      'Free shipping, always',
      'Seasonal color previews',
    ],
  },
  {
    name: 'Founders Membership',
    description: 'For the ones who never want to see “sold out.”',
    price: { once: '$240', subscribe: '$20' },
    per: { once: 'per year', subscribe: 'per month' },
    cta: 'Become a Founder',
    popular: false,
    features: [
      'Early access to every drop',
      'One free tee per quarter',
      'Members-only colorways',
      'Direct line to the studio',
    ],
  },
];
// -----------------------------------------------------------------------

function CadenceToggle({
  cadence,
  onChange,
}: {
  cadence: Cadence;
  onChange: (c: Cadence) => void;
}) {
  return (
    <div className="liquid-glass relative inline-flex rounded-full p-1 text-sm font-semibold">
      {(['once', 'subscribe'] as const).map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onChange(c)}
          className={`relative z-10 rounded-full px-5 py-2 transition-colors duration-300 ${
            cadence === c ? 'text-white' : 'text-white/55 hover:text-white/80'
          }`}
        >
          {cadence === c && (
            <motion.span
              layoutId="cadence-knob"
              className="absolute inset-0 rounded-full bg-brand shadow-lg shadow-brand/30"
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            />
          )}
          <span className="relative">{c === 'once' ? 'One-time' : 'Subscribe & Save'}</span>
        </button>
      ))}
    </div>
  );
}

/** Section 7 — Collections / pricing tiers over Look 4 "Midnight". */
export default function Collections() {
  const [cadence, setCadence] = useState<Cadence>('once');

  return (
    <section id="collections" className="relative overflow-hidden py-24 md:py-36">
      {/* Giant noise-filtered watermark typography behind the cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center overflow-hidden select-none"
      >
        {[0, 1, 2].map((i) => (
          <span key={i} className="watermark-word">
            Reimagined
          </span>
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand uppercase">
            Collections
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Build your rotation.
          </h2>
          <div className="mt-8">
            <CadenceToggle cadence={cadence} onChange={setCadence} />
          </div>
        </div>

        {/* Mobile: horizontal scroll-snap rail; md+: 3-column grid */}
        <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
              className={`liquid-glass relative flex w-[82vw] shrink-0 snap-center flex-col rounded-3xl p-8 md:w-auto ${
                tier.popular ? 'ring-1 ring-brand/60' : ''
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3.5 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-bold text-white">{tier.name}</h3>
              <p className="mt-1.5 text-sm text-white/55">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">{tier.price[cadence]}</span>
                <span className="text-sm text-white/50">{tier.per[cadence]}</span>
              </div>
              <ul className="mt-7 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-8 rounded-full py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  tier.popular
                    ? 'bg-brand text-white shadow-lg shadow-brand/30'
                    : 'border border-white/20 text-white hover:border-white/45'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
