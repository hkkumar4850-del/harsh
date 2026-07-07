import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/content";

const AUTO_ADVANCE_MS = 6000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const total = testimonials.items.length;

  const goTo = (index: number) => setActive((index + total) % total);
  const goPrev = () => goTo(active - 1);
  const goNext = () => goTo(active + 1);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused, total]);

  const current = testimonials.items[active];

  return (
    <section id="testimonials" className="bg-ink py-32 md:py-48">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="eyebrow text-brass">{testimonials.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-bone">
            {testimonials.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="relative mt-20"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="min-h-[14rem] md:min-h-[12rem]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={active}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <blockquote>
                    <span
                      aria-hidden="true"
                      className="font-display text-[clamp(3rem,7vw,5rem)] leading-none text-brass"
                    >
                      &ldquo;
                    </span>
                    <p className="mt-2 font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.3] text-bone">
                      {current.quote}
                    </p>
                  </blockquote>
                  <figcaption className="eyebrow mt-8 font-mono text-brass">
                    {current.source}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-14 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {testimonials.items.map((item, i) => (
                  <button
                    key={item.source}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === active}
                    className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                      i === active ? "bg-brass" : "bg-line-strong hover:bg-bone-faint"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-bone-soft transition-colors duration-300 hover:border-brass hover:text-brass"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-bone-soft transition-colors duration-300 hover:border-brass hover:text-brass"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
