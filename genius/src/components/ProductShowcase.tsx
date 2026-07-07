import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useTilt } from "@/hooks/useTilt";
import { showcase } from "@/lib/content";

export default function ProductShowcase() {
  const tilt = useTilt(8);

  return (
    <section id="showcase" aria-labelledby="showcase-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:py-32 lg:grid-cols-2">
        {/* left — copy */}
        <div>
          <Reveal>
            <p className="eyebrow">{showcase.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="showcase-heading"
              className="hero-title mt-4 text-4xl font-medium md:text-5xl"
            >
              {showcase.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white/70">{showcase.sub}</p>
          </Reveal>
          <ul className="mt-10 space-y-4">
            {showcase.points.map((point, i) => (
              <Reveal
                as="li"
                key={point}
                delay={0.15 + i * 0.08}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span className="text-white/90">{point}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* right — tilting dashboard mockup */}
        <Reveal className="relative">
          <div
            className="absolute -z-10 left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />
          <motion.div
            ref={tilt.ref}
            style={tilt.style}
            onPointerMove={tilt.onPointerMove}
            onPointerLeave={tilt.onPointerLeave}
            className="glass rounded-3xl border border-white/10 p-6 shadow-2xl"
          >
            {/* window chrome */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <p className="tabular text-xs text-white/40">{showcase.mock.title}</p>
            </div>

            {/* rows */}
            <ul className="mt-5" style={{ transform: "translateZ(30px)" }}>
              {showcase.mock.rows.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between border-b border-white/5 py-3 last:border-0"
                >
                  <span className="text-sm text-white/70">{row.label}</span>
                  <span
                    className={`tabular text-sm font-medium ${
                      row.value.startsWith("filed")
                        ? "text-accent"
                        : row.positive
                          ? "text-white"
                          : "text-white/50"
                    }`}
                  >
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
