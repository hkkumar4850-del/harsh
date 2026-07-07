import { motion } from "framer-motion";
import { Instagram, Rss, MessageCircle } from "lucide-react";
import { brand, footer } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/motion";

const socialIcons: Record<string, typeof Instagram> = {
  Instagram: Instagram,
  Journal: Rss,
  "WhatsApp Concierge": MessageCircle,
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink">
      <div className="hairline h-px w-full bg-brass" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-[1600px] px-6 pt-20 pb-10 md:px-12 md:pt-28"
      >
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          <div className="col-span-2">
            <p className="font-display text-2xl text-bone">{brand.name}</p>
            <p className="eyebrow mt-3 text-bone-faint">{brand.tagline}</p>
            <p className="eyebrow mt-1 text-bone-faint">Est. {brand.founded}</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="eyebrow text-bone-faint">Navigate</p>
            <ul className="mt-4 space-y-3">
              {footer.nav.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-cursor="link"
                    className="font-sans text-sm text-bone-soft transition-colors hover:text-bone"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-bone-faint">Connect</p>
            <ul className="mt-4 space-y-3">
              {footer.social.map((link) => {
                const Icon = socialIcons[link.label];
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-cursor="link"
                      className="inline-flex items-center gap-2 font-sans text-sm text-bone-soft transition-colors hover:text-bone"
                    >
                      {Icon ? <Icon size={15} strokeWidth={1.5} aria-hidden="true" /> : null}
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <a
            href="#top"
            data-cursor="link"
            className="block font-display leading-[0.9] text-bone/10 transition-colors hover:text-bone/20"
          >
            <span className="block text-[clamp(3rem,14vw,11rem)]">{brand.name}</span>
          </a>
        </div>

        <div className="hairline mt-12 h-px w-full" />

        <div className="mt-6 flex flex-col gap-2 font-mono text-xs text-bone-faint md:flex-row md:items-center md:justify-between">
          <p>{footer.legal}</p>
          <p>{footer.copyright}</p>
        </div>
      </motion.div>
    </footer>
  );
}
