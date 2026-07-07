import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { pricing } from "@/lib/content";
import { staggerChild, staggerParent, viewportOnce } from "@/lib/motion";

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">{pricing.eyebrow}</p>
          <h2 className="hero-title mt-4 text-4xl md:text-6xl">
            {pricing.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">{pricing.sub}</p>
        </Reveal>

        <motion.div
          className="mt-16 grid items-stretch gap-5 lg:grid-cols-3"
          variants={staggerParent(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {pricing.plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerChild}
              whileHover={{ y: -6 }}
              style={{ scale: plan.featured ? 1.03 : 1 }}
              className={`glass relative flex flex-col rounded-3xl border p-8 ${
                plan.featured ? "border-accent" : "border-white/10"
              }`}
            >
              {plan.featured && plan.tag ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-medium text-black">
                  {plan.tag}
                </span>
              ) : null}

              <h3 className="text-sm text-white/70">{plan.name}</h3>
              <p className="mt-2">
                <span
                  className={`tabular text-4xl font-semibold ${
                    plan.featured ? "text-accent" : "text-white"
                  }`}
                >
                  {plan.price}
                </span>{" "}
                <span className="text-sm text-white/40">{plan.per}</span>
              </p>
              <p className="mt-2 text-sm text-white/60">{plan.blurb}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-accent"
                    />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-medium ${
                  plan.featured
                    ? "bg-accent text-black hover:brightness-110"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        <Reveal>
          <p className="mt-8 text-center text-sm text-white/40">
            {pricing.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
