import Reveal from "@/components/Reveal";
import { manifesto } from "@/lib/content";

export default function Manifesto() {
  return (
    <section className="bg-ink-soft py-32 md:py-48">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="eyebrow text-brass">{manifesto.eyebrow}</p>
        </Reveal>

        <div className="mt-8 space-y-1">
          {manifesto.lines.map((line, i) => (
            <Reveal key={line} delay={0.1 * (i + 1)}>
              <p className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-bone">
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1 * (manifesto.lines.length + 1)}>
          <p className="mt-12 max-w-2xl font-sans text-base leading-relaxed text-bone-soft md:text-lg">
            {manifesto.body}
          </p>
        </Reveal>

        <Reveal delay={0.1 * (manifesto.lines.length + 2)}>
          <div className="mt-16 flex justify-end">
            <div className="max-w-xs text-right">
              <div className="hairline mb-4 ml-auto h-px w-16" />
              <p className="eyebrow text-bone-faint">{manifesto.signOff}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
