import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-red-dark pb-[34px] pt-12 text-[14.5px] text-[rgba(251,243,228,.75)]">
      <div className="mx-auto max-w-wrap px-6">
        <div className="mb-[30px] flex flex-wrap justify-between gap-[30px]">
          <div>
            <a
              className="flex items-center gap-2.5 text-paper no-underline"
              href="#top"
              aria-label="Hisaab home"
            >
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[8px_8px_8px_2px] bg-paper font-display text-[22px] font-normal text-red shadow-[inset_0_0_0_2px_#A8231B,inset_0_0_0_4px_#FBF3E4]">
                ₹
              </span>
              <span className="font-display text-[24px] font-normal tracking-[.5px] text-paper">
                Hisaab
              </span>
            </a>
            <p className="mt-2.5 max-w-[280px]">
              {footer.taglineLine1}
              <br />
              {footer.taglineLine2}
            </p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <div className="mb-2 text-[15px] font-bold text-paper">
                {col.heading}
              </div>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  className="block py-1 text-[rgba(251,243,228,.85)] transition-colors hover:text-gold"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-[rgba(251,243,228,.18)] pt-[22px] text-[12.5px] leading-[1.7] opacity-70">
          <strong>{footer.disclaimerLabel}</strong>
          {footer.disclaimerBody}
        </div>
      </div>
    </footer>
  );
}
