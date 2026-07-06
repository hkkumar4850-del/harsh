"use client";

import { motion, type Variants } from "framer-motion";
import { PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";
import { site, whatsappUrl } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const petals = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 137) % 100}%`,
  size: 10 + ((i * 37) % 18),
  duration: 12 + ((i * 13) % 14),
  delay: -((i * 7) % 14),
  drift: ((i * 53) % 120) - 60,
  opacity: 0.35 + ((i * 11) % 50) / 100,
}));

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(120%_120%_at_50%_0%,theme(colors.primary.light)_0%,theme(colors.primary.DEFAULT)_45%,theme(colors.primary.dark)_100%)] px-6 pb-24 pt-36 text-center"
    >
      {/* decorative mandala rings */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-300px] h-[900px] w-[900px] -translate-x-1/2 animate-[spin_90s_linear_infinite] rounded-full border border-dashed border-gold-light/25" />
        <div className="absolute bottom-[-260px] right-[-140px] h-[620px] w-[620px] animate-[spin_70s_linear_infinite_reverse] rounded-full border border-dashed border-gold-light/15" />

        {petals.map((p) => (
          <span
            key={p.id}
            className="absolute top-[-40px] text-gold-light"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animation: `fall ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
              // @ts-expect-error custom property for keyframe drift
              "--drift": `${p.drift}px`,
            }}
          >
            <svg viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="10" />
              <ellipse cx="50" cy="24" rx="11" ry="18" />
              <ellipse cx="50" cy="76" rx="11" ry="18" />
              <ellipse cx="24" cy="50" rx="18" ry="11" />
              <ellipse cx="76" cy="50" rx="18" ry="11" />
            </svg>
          </span>
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-3xl"
      >
        <motion.p variants={item} className="mb-2 font-script text-4xl text-gold-light">
          !! Jai Shree Shyam !!
        </motion.p>

        <motion.h1 variants={item} className="font-heading text-[clamp(2.4rem,5.4vw,4.2rem)] font-bold leading-tight text-white">
          {site.name}{" "}
          <span className="mt-2 block text-[0.62em] font-medium italic text-gold-light">
            Flower Event Decor
          </span>
        </motion.h1>

        <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-lg text-white/85">
          Delhi&rsquo;s trusted flower &amp; event decor studio — from home &amp; mandir decor to
          complete wedding management, we turn every celebration into a blossoming memory.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:+${site.phoneE164}`}
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-soft transition-transform hover:-translate-y-1 hover:shadow-strong"
          >
            <PhoneIcon className="h-[18px] w-[18px]" /> Call {site.owner}
          </a>
          <a
            href={whatsappUrl("Jai Shree Shyam! I'd like to enquire about flower decor.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" /> WhatsApp Us
          </a>
        </motion.div>

        <motion.p variants={item} className="mt-8 inline-flex items-center gap-1.5 text-sm text-white/70">
          <PinIcon className="h-3.5 w-3.5 text-gold-light" /> {site.address}
        </motion.p>
      </motion.div>

      <motion.a
        href="#services"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-11 w-7 items-start justify-center rounded-full border-2 border-white/50 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-gold-light" />
        </motion.span>
      </motion.a>
    </section>
  );
}
