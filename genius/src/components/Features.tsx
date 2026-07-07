import { motion } from "framer-motion";
import {
  Blocks,
  DatabaseZap,
  FileCheck,
  Headset,
  KeyRound,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { useTilt } from "@/hooks/useTilt";
import { staggerChild, staggerParent, viewportOnce } from "@/lib/motion";
import { features } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  KeyRound,
  FileCheck,
  DatabaseZap,
  Blocks,
  ShieldCheck,
  Headset,
};

function Card({ icon, title, body }: { icon: string; title: string; body: string }) {
  const tilt = useTilt(5);
  const Icon = icons[icon] ?? KeyRound;

  return (
    <li className="list-none">
      <motion.div
        variants={staggerChild}
        whileHover={{ y: -6 }}
        className="glass h-full rounded-3xl border border-white/10 p-7"
        ref={tilt.ref}
        style={tilt.style}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
      >
        <span className="inline-flex rounded-xl bg-accent-soft p-2.5 text-accent" aria-hidden="true">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 font-medium text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{body}</p>
      </motion.div>
    </li>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow">{features.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="hero-title mt-4 text-4xl font-medium md:text-6xl">{features.heading}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-xl text-white/70">{features.sub}</p>
        </Reveal>

        <motion.ul
          className="mt-14 grid list-none gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerParent(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {features.items.map((item) => (
            <Card key={item.title} icon={item.icon} title={item.title} body={item.body} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
