import { FlowerIcon } from "./icons";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark px-6 pt-16 text-white/75">
      <div className="mx-auto grid max-w-container gap-10 border-b border-white/10 pb-12 sm:grid-cols-3">
        <div>
          <a href="#home" className="flex items-center gap-2.5 font-heading text-lg font-bold text-white">
            <FlowerIcon className="h-7 w-7 text-gold-light" />
            <span>{site.name}</span>
          </a>
          <p className="mt-3.5 font-script text-2xl text-gold-light">{site.tagline}</p>
          <p className="mt-2 text-sm">{site.address}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Explore
          </h4>
          <ul className="space-y-3 text-sm">
            {navLinks
              .filter((l) => l.href !== "#home")
              .map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-gold-light">
                    {l.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Connect
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`tel:+${site.phoneE164}`} className="transition-colors hover:text-gold-light">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${site.phoneE164}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-light"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-light"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto max-w-container py-6 text-center text-xs">
        &copy; {year} {site.fullName}. All rights reserved.
      </p>
    </footer>
  );
}
