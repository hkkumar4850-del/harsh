import { Briefcase, MessageCircle, SquarePlay } from "lucide-react";
import Reveal from "@/components/Reveal";
import { brand, footer } from "@/lib/content";

// lucide-react in this project no longer ships brand icons (Linkedin/Youtube
// were removed), so we use the closest neutral glyphs; aria-labels carry the
// actual network names from content.
const socialIcons = [Briefcase, MessageCircle, SquarePlay];

function LogoMark() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-white"
    >
      <rect x="1" y="1" width="9" height="9" rx="2.5" fill="currentColor" />
      <rect x="14" y="1" width="9" height="9" rx="2.5" fill="currentColor" />
      <rect x="1" y="14" width="9" height="9" rx="2.5" fill="currentColor" />
      <rect
        x="14"
        y="14"
        width="9"
        height="9"
        rx="2.5"
        fill="currentColor"
        className="text-accent"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Reveal className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="text-sm text-white">{brand.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {footer.about}
            </p>
            <div className="mt-6 flex items-center gap-4">
              {footer.social.map((item, i) => {
                const Icon = socialIcons[i];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="text-white/40 transition-colors hover:text-white"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="eyebrow mb-4">{column.title}</h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/30">{footer.legal}</p>
        </div>
      </Reveal>
    </footer>
  );
}
