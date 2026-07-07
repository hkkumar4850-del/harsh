import Reveal from "@/components/Reveal";
import { benefits } from "@/lib/content";

export default function Benefits() {
  return (
    <section className="border-t border-white/10 py-24 md:py-32" aria-labelledby="benefits-heading">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow">{benefits.eyebrow}</p>
          <h2
            id="benefits-heading"
            className="hero-title mt-4 max-w-2xl text-4xl font-medium md:text-6xl"
          >
            {benefits.heading}
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20">
          {benefits.items.map((item, i) => (
            <Reveal
              key={item.title}
              as="div"
              delay={i * 0.06}
              className="-mx-4 grid grid-cols-1 gap-4 rounded-xl border-b border-white/10 px-4 py-8 transition-colors hover:bg-white/[0.03] md:grid-cols-[180px_1fr] md:gap-10"
            >
              <p className="tabular text-4xl font-semibold text-accent md:text-5xl">
                {item.stat}
              </p>
              <div>
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-1 max-w-xl text-white/60">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
