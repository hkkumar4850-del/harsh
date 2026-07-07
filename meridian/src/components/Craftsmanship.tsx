import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import { craftsmanship } from "@/lib/content";

export default function Craftsmanship() {
  return (
    <section id="craft" className="bg-ink py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-brass">{craftsmanship.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] text-bone">
              {craftsmanship.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-soft md:text-lg">
              {craftsmanship.sub}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative">
            <div className="hairline absolute left-8 top-2 bottom-2 hidden w-px sm:left-10 sm:block" />
            <ul className="space-y-12 sm:space-y-16">
              {craftsmanship.steps.map((step, i) => (
                <Reveal
                  as="li"
                  key={step.number}
                  delay={i * 0.08}
                  className="relative flex gap-6 sm:gap-8"
                >
                  <span className="w-16 shrink-0 font-mono text-5xl leading-none tabular text-brass/35 sm:w-20 sm:text-6xl">
                    {step.number}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-2xl text-bone md:text-[1.75rem]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-md text-bone-soft">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <ExplodedMechanism />
        </div>
      </div>
    </section>
  );
}

/**
 * A hand-drawn, scroll-scrubbed "exploded view" of the movement — four
 * concentric rings (mainplate, bridge, gear train, balance wheel) that
 * separate vertically as this area of the section passes through the
 * viewport, and reassemble on the way back up. No photography is reachable
 * from this environment, so the mechanism is illustrated as vector art
 * rather than a stock placeholder.
 */
function ExplodedMechanism() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });

  const mainplateY = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const bridgeY = useTransform(scrollYProgress, [0, 1], [0, 58]);
  const gearY = useTransform(scrollYProgress, [0, 1], [0, 32]);
  const gearRotate = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const balanceY = useTransform(scrollYProgress, [0, 1], [0, -36]);

  const teeth = Array.from({ length: 20 }, (_, i) => {
    const angle = (i / 20) * 360;
    const r1 = 82;
    const r2 = 91;
    const rad = (angle * Math.PI) / 180;
    return {
      key: i,
      x1: 200 + r1 * Math.sin(rad),
      y1: 200 - r1 * Math.cos(rad),
      x2: 200 + r2 * Math.sin(rad),
      y2: 200 - r2 * Math.cos(rad),
    };
  });

  const spokes = [0, 120, 240].map((angle) => {
    const rad = (angle * Math.PI) / 180;
    return {
      key: angle,
      x2: 200 + 40 * Math.sin(rad),
      y2: 200 - 40 * Math.cos(rad),
    };
  });

  return (
    <div ref={trackRef} className="relative">
      <div className="md:sticky md:top-32">
        <svg
          viewBox="0 0 400 400"
          className="mx-auto aspect-square w-full max-w-md"
          role="img"
          aria-label="Exploded view of the Meridian movement, separating into its component layers"
        >
          {/* Mainplate */}
          <motion.g style={{ y: reduceMotion ? 0 : mainplateY }}>
            <circle
              cx="200"
              cy="200"
              r="150"
              fill="none"
              stroke="rgba(237,232,221,0.18)"
              strokeWidth="1"
            />
            <text
              x="360"
              y="204"
              textAnchor="end"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              letterSpacing="2"
              fill="#a39b8c"
              opacity={0.7}
            >
              MAINPLATE
            </text>
          </motion.g>

          {/* Bridge */}
          <motion.g style={{ y: reduceMotion ? 0 : bridgeY }}>
            <circle
              cx="200"
              cy="200"
              r="116"
              fill="none"
              stroke="#7a5c34"
              strokeWidth="1.25"
              strokeDasharray="2 6"
            />
            <circle cx="200" cy="84" r="3" fill="#b08d57" opacity={0.7} />
            <circle cx="200" cy="316" r="3" fill="#b08d57" opacity={0.7} />
            <text
              x="326"
              y="204"
              textAnchor="start"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              letterSpacing="2"
              fill="#b08d57"
              opacity={0.75}
            >
              BRIDGE
            </text>
          </motion.g>

          {/* Gear train */}
          <motion.g
            style={{
              y: reduceMotion ? 0 : gearY,
              rotate: reduceMotion ? 0 : gearRotate,
              transformOrigin: "200px 200px",
            }}
          >
            <circle cx="200" cy="200" r="82" fill="none" stroke="#b08d57" strokeWidth="1.5" />
            {teeth.map((tick) => (
              <line
                key={tick.key}
                x1={tick.x1}
                y1={tick.y1}
                x2={tick.x2}
                y2={tick.y2}
                stroke="#b08d57"
                strokeWidth="1.5"
              />
            ))}
          </motion.g>
          <text
            x="200"
            y="107"
            textAnchor="middle"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="9"
            letterSpacing="2"
            fill="#b08d57"
            opacity={0.75}
          >
            GEAR TRAIN
          </text>

          {/* Balance wheel */}
          <motion.g style={{ y: reduceMotion ? 0 : balanceY }}>
            <circle cx="200" cy="200" r="46" fill="none" stroke="#d9b876" strokeWidth="2" />
            {spokes.map((spoke) => (
              <line
                key={spoke.key}
                x1="200"
                y1="200"
                x2={spoke.x2}
                y2={spoke.y2}
                stroke="#d9b876"
                strokeWidth="1.5"
              />
            ))}
            <circle cx="200" cy="200" r="4" fill="#d9b876" />
            <text
              x="200"
              y="264"
              textAnchor="middle"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="9"
              letterSpacing="2"
              fill="#d9b876"
              opacity={0.85}
            >
              BALANCE WHEEL
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}
