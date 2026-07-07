import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { socialProof } from "@/lib/content";

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0" aria-hidden={hidden || undefined}>
      {socialProof.sectors.map((sector) => (
        <span
          key={sector}
          className="flex items-center whitespace-nowrap px-8 text-lg font-light text-white/40 md:text-xl"
        >
          <span
            aria-hidden="true"
            className="mr-8 inline-block size-1 rounded-full bg-white/20"
          />
          {sector}
        </span>
      ))}
    </div>
  );
}

export default function SocialProof() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-label="social proof"
      className="border-y border-white/10 py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-10">
        <Reveal className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/70">{socialProof.headline}</p>
          <span className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white/90">
            <BadgeCheck aria-hidden="true" className="size-4 text-accent" />
            {socialProof.badge}
          </span>
        </Reveal>
      </div>

      <div className="mt-12 overflow-hidden">
        {reducedMotion ? (
          <div className="flex">
            <MarqueeRow />
          </div>
        ) : (
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            <MarqueeRow />
            <MarqueeRow hidden />
          </motion.div>
        )}
      </div>
    </section>
  );
}
