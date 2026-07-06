"use client";

import { motion, type Variants } from "framer-motion";
import { HomeIcon, RingsIcon, TempleIcon } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

const card: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: EASE },
  }),
};

const features = [
  {
    icon: TempleIcon,
    title: "Home & Mandir Decor",
    desc: "Graceful, devotional flower styling for home temples, mandirs, and everyday celebrations — crafted with fresh marigolds and jasmine.",
  },
  {
    icon: HomeIcon,
    title: "Celebration Decor",
    desc: "Haldi, Mehandi, Sufi Night, Birthday and Reception setups — vibrant floral backdrops, swings and drapes that set the mood for every party.",
  },
  {
    icon: RingsIcon,
    title: "Complete Wedding Management",
    desc: "End-to-end wedding planning and decor — mandap to reception — plus same-day flower delivery, all managed by one dedicated team.",
  },
];

export default function Features() {
  return (
    <section id="services" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mb-16 max-w-xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl font-bold text-primary-dark sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-ink-muted">
            A complete flower &amp; event decor service, crafted with fresh blooms and heartfelt
            detail for every occasion in your life.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-cream-alt bg-white p-9 shadow-soft transition-shadow hover:shadow-strong"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold to-primary transition-transform duration-500 group-hover:scale-x-100" />
              <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cream-alt text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:bg-primary group-hover:text-gold-light">
                <f.icon className="h-7 w-7" />
              </span>
              <h3 className="mb-2.5 font-heading text-xl font-bold text-primary-dark">
                {f.title}
              </h3>
              <p className="text-sm text-ink-muted">{f.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
