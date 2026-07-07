import { motion, type Variants } from "framer-motion";
import WatchFace from "@/components/WatchFace";
import Reveal from "@/components/Reveal";
import { productGrid, type CollectionPiece } from "@/lib/content";
import { staggerParent, staggerChild, viewportOnce, EASE } from "@/lib/motion";

const cardVariants: Variants = {
  ...staggerChild,
  hover: {
    y: -8,
    boxShadow: "0 28px 56px -20px rgba(0,0,0,0.6)",
    transition: { duration: 0.35, ease: EASE },
  },
};

const sweepVariants: Variants = {
  hidden: { x: "-150%", rotate: -12 },
  show: { x: "-150%", rotate: -12 },
  hover: { x: "150%", rotate: -12, transition: { duration: 0.85, ease: EASE } },
};

const promptVariants: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
  hover: { opacity: 0, transition: { duration: 0.2, ease: EASE } },
};

const priceVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 0, y: 6 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE, delay: 0.05 } },
};

export default function ProductGrid() {
  return (
    <section id="catalogue" className="bg-ink py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow text-brass">The Catalogue</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-bone">
            Six references. No filler.
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-bone-soft md:text-lg">
            Every reference we make, in one place — from the everyday chronometer to the
            sixty numbered pieces we will only ever build once. Nothing here is filler,
            and nothing here is discontinued to make room for a trend.
          </p>
        </Reveal>

        <motion.div
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {productGrid.map((piece) => (
            <ProductCard key={piece.id} piece={piece} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ piece }: { piece: CollectionPiece }) {
  return (
    <motion.a
      href="#configurator"
      data-cursor="link"
      variants={cardVariants}
      whileHover="hover"
      className="group relative flex flex-col rounded-lg border border-line bg-ink-soft p-6 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass"
    >
      <div className="relative -mt-2 flex items-center justify-center overflow-hidden rounded-md">
        <WatchFace dial={piece.dial} strap={piece.strap} size={200} sweepSeconds={false} />
        <motion.div
          variants={sweepVariants}
          className="pointer-events-none absolute -inset-y-6 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>

      <p className="eyebrow mt-6 text-brass">{piece.line}</p>
      <h3 className="mt-2 font-display text-2xl text-bone">{piece.name}</h3>
      <p className="mt-1 font-mono text-xs text-bone-faint tabular">{piece.ref}</p>
      <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-bone-soft">
        {piece.description}
      </p>

      <div className="hairline mt-6 h-px w-full" />

      <div className="relative mt-4 h-5">
        <motion.span
          variants={promptVariants}
          className="eyebrow absolute inset-0 text-bone-faint"
        >
          View Price
        </motion.span>
        <motion.span
          variants={priceVariants}
          className="absolute inset-0 font-mono text-sm text-brass-bright tabular"
        >
          {piece.price}
        </motion.span>
      </div>
    </motion.a>
  );
}
