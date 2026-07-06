"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "For weddings and large events, we recommend booking 3–4 weeks ahead to secure your date and flowers. For home, mandir or birthday decor, a few days' notice is usually enough — but call us and we'll always try our best for last-minute requests too.",
  },
  {
    q: "Do you deliver flowers without decor setup?",
    a: "Yes — our Flower Home Delivery service brings fresh flowers of every kind straight to your doorstep across Delhi NCR, with or without a full decor booking.",
  },
  {
    q: "Which areas do you serve?",
    a: "We're based at Gazipur Flower Market and serve homes, venues and mandirs across Delhi NCR. Message us your location on WhatsApp and we'll confirm availability.",
  },
  {
    q: "Can you manage my entire wedding, not just the decor?",
    a: "Yes. Our Complete Wedding Management service covers planning, vendor coordination and decor from the mandap to the reception, so you can enjoy the celebration instead of managing it.",
  },
  {
    q: "How do I get an exact price for my event?",
    a: "Share your date, venue and vision with us on a call or WhatsApp, and we'll put together a custom quote based on the flowers, scale and setup you need.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream-alt px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">
            FAQ
          </p>
          <h2 className="font-heading text-3xl font-bold text-primary-dark sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                className="overflow-hidden rounded-2xl border border-cream bg-white shadow-soft"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left"
                >
                  <span className="font-heading text-lg font-semibold text-primary-dark">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cream-alt text-primary"
                  >
                    <PlusIcon className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-6 text-sm text-ink-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
