"use client";

import { motion, type Variants } from "framer-motion";
import { CheckIcon } from "./icons";
import { whatsappUrl } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const card: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: EASE },
  }),
};

const tiers = [
  {
    name: "Essential",
    tagline: "Home & Mandir Decor",
    features: [
      "Fresh flower styling for 1 space",
      "Mandir or entrance decor",
      "Marigold garlands & rangoli accents",
      "Same-day flower delivery",
    ],
    featured: false,
  },
  {
    name: "Signature",
    tagline: "Haldi, Mehandi & Parties",
    features: [
      "Everything in Essential",
      "Themed backdrop & floral swing",
      "Seating & stage decor",
      "Lighting & drapery styling",
      "On-site setup team",
    ],
    featured: true,
  },
  {
    name: "Luxury",
    tagline: "Complete Wedding Management",
    features: [
      "Everything in Signature",
      "Mandap to reception decor",
      "Full event planning & coordination",
      "Vendor & timeline management",
      "Dedicated on-day decor team",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mb-16 max-w-xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">
            Packages
          </p>
          <h2 className="font-heading text-3xl font-bold text-primary-dark sm:text-4xl">
            Find Your Perfect Setup
          </h2>
          <p className="mt-4 text-ink-muted">
            Every celebration is unique, so every quote is custom — built around your flowers,
            venue and vision. These packages are a starting point for the conversation.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, boxShadow: "0 20px 50px -15px rgba(122, 19, 48, 0.35)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={`flex flex-col rounded-2xl border p-9 shadow-soft ${
                t.featured
                  ? "border-gold bg-primary text-white"
                  : "border-cream-alt bg-cream/40 text-ink"
              }`}
            >
              {t.featured && (
                <span className="mb-4 inline-block w-fit rounded-full bg-gold-light px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-dark">
                  Most Popular
                </span>
              )}
              <h3 className={`font-heading text-2xl font-bold ${t.featured ? "text-white" : "text-primary-dark"}`}>
                {t.name}
              </h3>
              <p className={`mt-1 text-sm ${t.featured ? "text-white/75" : "text-ink-muted"}`}>
                {t.tagline}
              </p>

              <ul className="mt-7 flex-1 space-y-3.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckIcon
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${t.featured ? "text-gold-light" : "text-gold-dark"}`}
                    />
                    <span className={t.featured ? "text-white/90" : "text-ink-muted"}>{f}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={whatsappUrl(`Jai Shree Shyam! I'd like a custom quote for the ${t.name} package.`)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-soft ${
                  t.featured
                    ? "bg-gradient-to-br from-gold-light to-gold-dark text-primary-dark"
                    : "bg-primary text-white"
                }`}
              >
                Get Custom Quote
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
