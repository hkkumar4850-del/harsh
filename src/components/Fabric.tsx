import { motion } from 'motion/react';
import { Droplet, Wind, Sun, Ruler } from 'lucide-react';
import { useLook } from '../LookContext';

// ---- copy -----------------------------------------------------------
const EYEBROW = 'Fabric';
const TAG = 'Made to last';
const HEADLINE = ['Cut for movement,', 'built to outlast.'];
const BODY =
  'We source long-staple cotton spun into a dense 12oz jersey, garment-dye every piece for depth of color, and finish each seam twice. The result is a tee that holds its shape through years of wash cycles — not seasons.';
const CHIPS = ['12oz cotton', 'Garment-dyed', 'Reinforced seams', 'Pre-shrunk'];
// ---------------------------------------------------------------------

const CARE = [
  { icon: Droplet, label: 'Cold wash' },
  { icon: Wind, label: 'Line dry' },
  { icon: Sun, label: 'No bleach' },
  { icon: Ruler, label: 'True to size' },
];

/** Simplified size-fit diagram: a tee outline with measurement arrows. */
function FitDiagram() {
  return (
    <svg viewBox="0 0 200 120" className="w-full text-neutral-500" aria-hidden="true">
      <path
        d="M60 22 L80 12 Q100 22 120 12 L140 22 L160 44 L138 56 L138 108 L62 108 L62 56 L40 44 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <line x1="62" y1="116" x2="138" y2="116" stroke="currentColor" strokeWidth="1" />
      <text x="100" y="113" textAnchor="middle" fontSize="8" fill="currentColor">
        chest 21.5"
      </text>
      <line x1="172" y1="22" x2="172" y2="108" stroke="currentColor" strokeWidth="1" />
      <text x="178" y="68" fontSize="8" fill="currentColor" transform="rotate(90 178 68)">
        length 28"
      </text>
    </svg>
  );
}

/**
 * Section 4 — Fabric/feature detail, timed to Look 3 "Bone".
 * Foreground re-themes to near-black text via the shared look context
 * whenever the cream look is on stage.
 */
export default function Fabric() {
  const { look } = useLook();
  const dark = look.lightSurface;

  const heading = dark ? 'text-neutral-900' : 'text-white';
  const body = dark ? 'text-neutral-700' : 'text-white/70';
  const chip = dark
    ? 'border-neutral-900/15 bg-neutral-900/5 text-neutral-800'
    : 'border-white/15 bg-white/5 text-white/80';

  return (
    <section id="fabric" className="relative py-28 transition-colors duration-700 md:py-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-brand uppercase">
              {EYEBROW}
            </span>
            <span className={`rounded-full border px-3 py-1 text-xs font-medium ${chip}`}>
              {TAG}
            </span>
          </div>
          <h2
            className={`mt-4 text-4xl font-extrabold tracking-tight transition-colors duration-700 md:text-6xl ${heading}`}
          >
            {HEADLINE[0]}
            <br />
            {HEADLINE[1]}
          </h2>
          <p className={`mt-6 max-w-md leading-relaxed transition-colors duration-700 ${body}`}>
            {BODY}
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {CHIPS.map((c) => (
              <span
                key={c}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-700 ${chip}`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Spec sheet enters on view, independent of the background scrub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="liquid-glass liquid-glass-dark rounded-3xl p-8"
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-white/50 uppercase">
            Fabric spec sheet
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div>
              <p className="text-3xl font-extrabold text-white">12oz</p>
              <p className="mt-1 text-sm text-white/55">fabric weight</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">&lt;1%</p>
              <p className="mt-1 text-sm text-white/55">shrinkage after wash</p>
            </div>
          </div>
          <div className="mt-7 flex items-center gap-5 border-t border-white/10 pt-6">
            {CARE.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 text-white/65">
                <Icon className="h-5 w-5" />
                <span className="text-[10px] font-medium">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-7 border-t border-white/10 pt-6">
            <FitDiagram />
            <p className="mt-2 text-center text-xs text-white/45">Size M reference fit</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
