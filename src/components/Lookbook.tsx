import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLook } from '../LookContext';

// ---- products — swap media/copy for real garments ---------------------
const GARMENTS = [
  {
    name: 'The Studio Tee — Front',
    weight: '240gsm heavyweight',
    price: '$48',
    media:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'The Studio Tee — Back',
    weight: '240gsm heavyweight',
    price: '$48',
    media:
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Collar Detail',
    weight: 'Double-stitched rib',
    price: '$48',
    media:
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Heat Tee — On Body',
    weight: '220gsm garment-dyed',
    price: '$52',
    media:
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bone Tee — Fabric',
    weight: '12oz long-staple',
    price: '$56',
    media:
      'https://images.unsplash.com/photo-1622445275576-721325763afe?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Midnight Tee — On Body',
    weight: '240gsm heavyweight',
    price: '$52',
    media:
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=900&q=80',
  },
];
// -----------------------------------------------------------------------

function GarmentCard({ garment }: { garment: (typeof GARMENTS)[number] }) {
  return (
    <figure
      tabIndex={0}
      className="group relative h-[58vh] w-[68vw] shrink-0 snap-center overflow-hidden rounded-2xl bg-white/5 outline-none sm:w-[46vw] md:w-[30vw] md:min-w-[340px]"
    >
      <img
        src={garment.media}
        alt={garment.name}
        loading="lazy"
        draggable={false}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          // Dead placeholder URL → keep the glass plate, no broken glyph
          e.currentTarget.style.visibility = 'hidden';
        }}
      />
      <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white">{garment.name}</p>
            <p className="text-xs text-white/60">{garment.weight}</p>
          </div>
          <span className="text-sm font-bold text-brand">{garment.price}</span>
        </div>
      </figcaption>
    </figure>
  );
}

/**
 * Section 3 — Horizontal scroll-scrubbed lookbook (Look 2 "Heat").
 * A tall wrapper pins a full-screen viewport; vertical scroll pans the
 * garment rail sideways via the shared page scrollYProgress.
 * With reduced motion the rail becomes a plain swipeable strip.
 */
export default function Lookbook() {
  const { reducedMotion } = useLook();
  const railRef = useRef<HTMLElement>(null);
  // The pan is measured against this section's own scroll window so it
  // always starts/ends exactly while the viewport is pinned, no matter
  // how tall the surrounding sections are. The background stage keeps
  // reading the shared page-level progress.
  const { scrollYProgress: railProgress } = useScroll({
    target: railRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(railProgress, [0, 1], ['0%', '-80%']);

  if (reducedMotion) {
    return (
      <section id="lookbook" className="relative py-24">
        <RailHeading />
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4">
          {GARMENTS.map((g) => (
            <GarmentCard key={g.name} garment={g} />
          ))}
        </div>
      </section>
    );
  }

  return (
    // Wrapper height = scrub runway: taller → slower, smoother sideways pan
    <section id="lookbook" ref={railRef} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-24">
        <RailHeading />
        <motion.div style={{ x }} className="flex gap-5 pl-6 will-change-transform">
          {GARMENTS.map((g) => (
            <GarmentCard key={g.name} garment={g} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function RailHeading() {
  return (
    <div className="mx-auto mb-8 w-full max-w-6xl px-6">
      <p className="text-xs font-semibold tracking-[0.25em] text-brand uppercase">Lookbook</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
        The Heat drop, frame by frame.
      </h2>
    </div>
  );
}
