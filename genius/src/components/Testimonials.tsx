import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { staggerParent, staggerChild, viewportOnce } from "@/lib/motion";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="eyebrow">{testimonials.eyebrow}</p>
          <h2 className="hero-title text-4xl md:text-5xl mt-4">
            {testimonials.heading}
          </h2>
        </Reveal>

        <motion.ul
          className="grid md:grid-cols-2 gap-5 mt-14 list-none"
          variants={staggerParent()}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {testimonials.items.map((item) => (
            <motion.li
              key={item.name}
              variants={staggerChild}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-8 border border-white/10"
            >
              <figure>
                <span
                  aria-hidden="true"
                  className="text-accent text-5xl font-semibold leading-none"
                >
                  &ldquo;
                </span>
                <blockquote className="text-white/90 text-lg leading-relaxed mt-3">
                  {item.quote}
                </blockquote>
                <figcaption>
                  <p className="text-white font-medium text-sm mt-6">
                    {item.name}
                  </p>
                  <p className="text-white/40 text-xs">{item.detail}</p>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
