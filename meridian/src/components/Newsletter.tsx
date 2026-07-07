import { useId, useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { newsletter } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Status = "idle" | "submitting" | "success";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Newsletter() {
  const [status, setStatus] = useState<Status>("idle");
  const emailId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status !== "idle") return;
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 600);
  };

  return (
    <section id="newsletter" className="bg-ink-soft py-32 md:py-48">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mx-auto max-w-lg px-6 text-center"
      >
        <p className="eyebrow text-brass">{newsletter.eyebrow}</p>
        <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-bone">
          {newsletter.heading}
        </h2>
        <p className="mt-6 font-sans text-base leading-relaxed text-bone-soft">
          {newsletter.sub}
        </p>

        <div className="mt-12 min-h-[13rem]">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex flex-col items-center justify-center gap-4 py-10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brass text-brass">
                  <Check size={18} />
                </span>
                <p className="font-display text-xl text-bone">You&rsquo;re on the list.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: EASE }}
                onSubmit={handleSubmit}
                className="text-left"
              >
                <fieldset disabled={status === "submitting"} className="border-0 p-0">
                  <label htmlFor={emailId} className="eyebrow block text-bone-faint">
                    Email Address
                  </label>
                  <input
                    id={emailId}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={newsletter.placeholder}
                    className="mt-3 w-full border-b-2 border-line-strong bg-transparent py-3 font-sans text-base text-bone placeholder:text-bone-faint/70 transition-colors duration-300 focus:border-brass focus:outline-none disabled:opacity-50"
                  />
                  <div className="mt-9 flex justify-center">
                    <MagneticButton type="submit">
                      {status === "submitting" ? "Sending…" : newsletter.cta}
                    </MagneticButton>
                  </div>
                </fieldset>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <p className="mx-auto max-w-sm font-mono text-xs leading-relaxed text-bone-faint">
          {newsletter.disclaimer}
        </p>
      </motion.div>
    </section>
  );
}
