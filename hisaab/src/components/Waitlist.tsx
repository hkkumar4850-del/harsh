"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { waitlist } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function Waitlist() {
  const [phone, setPhone] = useState("");
  const [joined, setJoined] = useState(false);
  const [count, setCount] = useState(waitlist.counterStart);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setJoined(true);
    setCount((c) => c + 1);
    setPhone("");
  };

  return (
    <section id="waitlist" className="bg-red-deep py-[88px] text-paper">
      <motion.div
        className="mx-auto max-w-[560px] px-6 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <h2 className="font-display font-normal text-[clamp(30px,4.4vw,46px)] leading-[1.15] text-cream mb-3.5">
          {waitlist.h2Line1}
          <br />
          <span className="text-gold">{waitlist.h2Line2}</span>
        </h2>
        <p className="text-[18px] text-[rgba(251,243,228,.85)]">{waitlist.sub}</p>

        <form
          onSubmit={handleSubmit}
          className="mt-[30px] flex gap-3 max-[560px]:flex-col"
        >
          <input
            type="tel"
            required
            pattern={waitlist.inputPattern}
            aria-label={waitlist.inputAria}
            placeholder={waitlist.inputPlaceholder}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 rounded-full border-0 px-[22px] py-[15px] text-[16px] text-ink"
          />
          <motion.button
            type="submit"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-gold px-6 py-[11px] text-[15.5px] font-bold text-ink"
          >
            {waitlist.cta}
          </motion.button>
        </form>

        <AnimatePresence>
          {joined && (
            <motion.div
              role="status"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="mt-[26px] rounded-xl border-[1.5px] border-green bg-green-soft px-[22px] py-4 font-semibold text-green"
            >
              {waitlist.success}
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-[22px] text-[14.5px] text-[rgba(251,243,228,.75)]">
          {waitlist.counterPre}
          <b className="font-mono text-gold">{count.toLocaleString("en-IN")}</b>
          {waitlist.counterPost}
        </p>
      </motion.div>
    </section>
  );
}
