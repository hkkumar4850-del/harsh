import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import WatchFace from "@/components/WatchFace";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import {
  configurator,
  dialColors,
  strapMaterials,
  type DialColor,
  type StrapMaterial,
} from "@/lib/content";
import { cn } from "@/lib/cn";

export default function Configurator() {
  const [selectedDial, setSelectedDial] = useState<DialColor>(dialColors[0]);
  const [selectedStrap, setSelectedStrap] = useState<StrapMaterial>(strapMaterials[0]);

  return (
    <section id="configurator" className="bg-ink-soft py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow text-brass">{configurator.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] text-bone">
            {configurator.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-bone-soft md:text-lg">
            {configurator.sub}
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col items-center gap-14 md:flex-row md:items-center md:gap-8">
          <div className="flex w-full justify-center md:w-[42%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedDial.id}-${selectedStrap.id}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <WatchFace dial={selectedDial} strap={selectedStrap} size={420} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full md:w-[58%] md:pl-8">
            <SwatchGroup
              label="Dial"
              activeLabel={selectedDial.label}
            >
              {dialColors.map((dial) => {
                const active = dial.id === selectedDial.id;
                return (
                  <button
                    key={dial.id}
                    type="button"
                    aria-pressed={active}
                    aria-label={dial.label}
                    title={dial.label}
                    onClick={() => setSelectedDial(dial)}
                    className={cn(
                      "group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 focus-visible:outline-none",
                      "ring-1 ring-line-strong ring-offset-2 ring-offset-ink-soft hover:scale-105",
                      active && "ring-2 ring-brass",
                    )}
                  >
                    <span
                      className="h-8 w-8 rounded-full"
                      style={{ backgroundColor: dial.hex }}
                    />
                    {active && (
                      <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brass text-ink">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                    )}
                  </button>
                );
              })}
            </SwatchGroup>

            <SwatchGroup
              label="Strap"
              activeLabel={selectedStrap.label}
              className="mt-10"
            >
              {strapMaterials.map((strap) => {
                const active = strap.id === selectedStrap.id;
                return (
                  <button
                    key={strap.id}
                    type="button"
                    aria-pressed={active}
                    aria-label={strap.label}
                    title={strap.label}
                    onClick={() => setSelectedStrap(strap)}
                    className={cn(
                      "group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md transition-transform duration-300 focus-visible:outline-none",
                      "ring-1 ring-line-strong ring-offset-2 ring-offset-ink-soft hover:scale-105",
                      active && "ring-2 ring-brass",
                    )}
                  >
                    <span
                      className="h-8 w-8 rounded-sm"
                      style={{ backgroundColor: strap.swatch }}
                    />
                    {active && (
                      <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brass text-ink">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                    )}
                  </button>
                );
              })}
            </SwatchGroup>

            <div className="mt-14">
              <MagneticButton href="#newsletter">{configurator.ctaLabel}</MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SwatchGroup({
  label,
  activeLabel,
  className,
  children,
}: {
  label: string;
  activeLabel: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <div className="flex items-baseline justify-between">
        <p className="eyebrow text-bone-faint">{label}</p>
        <p className="font-mono text-xs text-brass tabular">{activeLabel}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-4">{children}</div>
    </div>
  );
}
