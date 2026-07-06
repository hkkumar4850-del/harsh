"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { InstaIcon, StarIcon } from "./icons";
import { site } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Events Decorated" },
  { value: 1200, suffix: "+", label: "Happy Families" },
  { value: 9, suffix: "", label: "Signature Services" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-heading text-4xl font-bold text-primary">
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-cream-alt px-6 py-24">
      <div className="mx-auto max-w-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mb-14 max-w-xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">
            Trusted Across Delhi
          </p>
          <h2 className="font-heading text-3xl font-bold text-primary-dark sm:text-4xl">
            Crafted with Devotion, Delivered with Precision
          </h2>
          <p className="mt-4 text-ink-muted">
            Based at Gazipur Flower Market — Asia&rsquo;s largest flower market — we source the
            freshest blooms every single day, direct from the source.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-cream bg-white p-6 text-center shadow-soft"
            >
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-1.5 text-xs text-ink-muted">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <div className="flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
          </div>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-5 py-2 text-sm font-semibold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <InstaIcon className="h-4 w-4" /> Follow {site.instagramHandle} on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
