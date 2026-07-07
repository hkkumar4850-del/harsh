export const brand = {
  name: "genius infosolution",
  short: "genius",
  tagline: "your tally partner",
};

export const nav = {
  links: [
    { label: "solutions", href: "#features" },
    { label: "services", href: "#showcase" },
    { label: "pricing", href: "#pricing" },
    { label: "support", href: "#faq" },
  ],
  cta: { label: "get a demo", href: "#cta" },
};

export const hero = {
  words: [
    { text: "your", position: "left-4 md:left-10 top-[18%]" },
    { text: "tally", position: "right-4 md:right-10 top-[38%] text-right" },
    { text: "partner", position: "left-[18%] md:left-[28%] top-[58%]" },
  ],
  description:
    "we sell, install, and support tally software so your books stay accurate, compliant, and always up and running.",
  stats: [
    { value: "+1200", label: "businesses supported" },
    { value: "+15 yrs", label: "tally partner experience" },
    { value: "24/7", label: "after-sales support" },
  ],
  cta: { label: "book a free consultation", href: "#cta" },
};

export const socialProof = {
  headline: "trusted by 1200+ SMEs across india",
  badge: "authorized tally sales & support partner",
  sectors: [
    "manufacturing",
    "wholesale & distribution",
    "retail chains",
    "pharma & healthcare",
    "logistics",
    "textiles",
    "construction",
    "professional services",
  ],
};

export const features = {
  eyebrow: "solutions",
  heading: "everything tally, one partner.",
  sub: "from the first license to the last support call — we cover the entire lifecycle of your tally installation.",
  items: [
    {
      icon: "KeyRound",
      title: "tally prime licensing & activation",
      body: "new licenses, renewals, and upgrades — genuine, activated, and configured on day one.",
    },
    {
      icon: "FileCheck",
      title: "GST & compliance configuration",
      body: "returns, e-invoicing, e-way bills, and TDS set up correctly so filing season is just another week.",
    },
    {
      icon: "DatabaseZap",
      title: "data migration from legacy systems",
      body: "we move your masters, ledgers, and history from excel, busy, or older tally versions — nothing lost.",
    },
    {
      icon: "Blocks",
      title: "custom add-ons & integrations",
      body: "TDL customizations, invoice formats, and integrations with your banking, CRM, or e-commerce stack.",
    },
    {
      icon: "ShieldCheck",
      title: "annual maintenance contracts",
      body: "transparent AMC plans that keep your installation patched, backed up, and audit-ready year round.",
    },
    {
      icon: "Headset",
      title: "remote & on-site troubleshooting",
      body: "same-day remote fixes for most issues, and an engineer at your desk when hands-on help is needed.",
    },
  ],
};

export const showcase = {
  eyebrow: "services",
  heading: "set up in days, supported for years.",
  sub: "a typical onboarding: license activated on day one, data migrated by day three, your team trained by the end of week one. after that, we're one call away.",
  points: [
    "guided installation and company setup",
    "chart of accounts & GST configured for your business",
    "your last three financial years migrated and verified",
    "on-call support with a real engineer, not a ticket queue",
  ],
  mock: {
    title: "tally prime — genius dashboard",
    rows: [
      { label: "sales — april", value: "₹42,80,500", positive: true },
      { label: "purchases — april", value: "₹28,14,200", positive: false },
      { label: "GSTR-1 status", value: "filed ✓", positive: true },
      { label: "e-invoices generated", value: "1,284", positive: true },
      { label: "pending receivables", value: "₹6,72,000", positive: false },
    ],
  },
};

export const benefits = {
  eyebrow: "why genius",
  heading: "why SMEs pick us over generic vendors.",
  items: [
    {
      stat: "< 2 hrs",
      title: "faster support response",
      body: "average first response on business days. during tax season we staff up, not slow down.",
    },
    {
      stat: "100%",
      title: "certified tally experts",
      body: "every engineer is tally-certified and works on tally all day, every day. no generalists.",
    },
    {
      stat: "0",
      title: "surprise AMC charges",
      body: "one transparent annual price. site visits, remote sessions, and upgrades are all in writing.",
    },
    {
      stat: "2 modes",
      title: "on-site + remote coverage",
      body: "most fixes happen remotely within hours; on-site visits are scheduled when it matters.",
    },
    {
      stat: "AES-256",
      title: "your data stays yours",
      body: "encrypted backups, strict access control, and NDAs as standard on every engagement.",
    },
  ],
};

export const testimonials = {
  eyebrow: "clients",
  heading: "what our clients say.",
  items: [
    {
      quote:
        "our GST filings used to take a week of panic. genius set up tally properly once, and now it's two quiet afternoons.",
      name: "textile manufacturer",
      detail: "surat · 48 employees",
    },
    {
      quote:
        "they migrated nine years of data from our old system without losing a single ledger. the audit that year was the smoothest we've had.",
      name: "pharma distributor",
      detail: "ahmedabad · 120 employees",
    },
    {
      quote:
        "when our server crashed mid-march, an engineer was on a call in twenty minutes and on-site the next morning. that's why we renew the AMC every year.",
      name: "auto components supplier",
      detail: "rajkot · 75 employees",
    },
    {
      quote:
        "we didn't need convincing on tally — we needed someone who'd pick up the phone after selling it. genius does.",
      name: "wholesale electronics trader",
      detail: "mumbai · 22 employees",
    },
  ],
};

export const pricing = {
  eyebrow: "pricing",
  heading: "plans that grow with your books.",
  sub: "license costs are set by tally. our value is everything around it — pick the level of cover your business needs.",
  plans: [
    {
      name: "basic support",
      price: "₹8,000",
      per: "per year",
      blurb: "for single-user setups that need a safety net.",
      features: [
        "remote troubleshooting (business hours)",
        "license renewal management",
        "quarterly health check",
        "email & phone support",
      ],
      cta: "start with basic",
      featured: false,
    },
    {
      name: "business AMC",
      price: "₹18,000",
      per: "per year",
      blurb: "the standard for multi-user SME installations.",
      features: [
        "everything in basic support",
        "priority response — under 2 hours",
        "4 on-site visits included",
        "GST/e-invoice compliance updates",
        "managed backups & recovery drills",
      ],
      cta: "choose business AMC",
      featured: true,
      tag: "most popular",
    },
    {
      name: "enterprise partner",
      price: "custom",
      per: "tailored quote",
      blurb: "for multi-branch, multi-company deployments.",
      features: [
        "everything in business AMC",
        "dedicated account engineer",
        "unlimited on-site visits",
        "custom TDL development retainer",
        "annual tally version upgrade project",
      ],
      cta: "talk to an expert",
      featured: false,
    },
  ],
  note: "all plans include genuine tally licensing at MRP — we never mark up the software itself.",
};

export const faq = {
  eyebrow: "support",
  heading: "questions, answered straight.",
  items: [
    {
      q: "how much does a tally prime license cost?",
      a: "tally prime silver (single user) is ₹22,500 + GST and gold (multi-user) is ₹67,500 + GST — set by tally solutions, identical everywhere. what varies is implementation quality and after-sales support, which is where we compete.",
    },
    {
      q: "how fast do you respond to support requests?",
      a: "business AMC clients get a first response under two hours on business days, and most remote issues are resolved the same day. basic support follows a next-business-day commitment. during filing season we add engineers so response times hold.",
    },
    {
      q: "do you support on-site, or only remote?",
      a: "both. around 80% of issues are fixed faster remotely, so we start there. anything hardware-related, network-related, or training-related gets an engineer at your office — included in business AMC, scheduled à la carte on basic.",
    },
    {
      q: "what happens when my license or AMC comes up for renewal?",
      a: "we track it for you. you get a reminder 30 days out with a single renewal quote covering the tally subscription and your support plan — one approval, zero downtime, no re-onboarding.",
    },
    {
      q: "is my accounting data safe with your engineers?",
      a: "yes. every engagement runs under an NDA, backups are encrypted (AES-256), access is limited to the engineers on your account, and we never move your data off your premises without written approval.",
    },
  ],
};

export const finalCta = {
  heading: "let's get your books running on tally.",
  sub: "a 30-minute call: we look at how you work today, tell you exactly what license and setup you need, and quote it straight. no obligation.",
  primary: { label: "book a free consultation", href: "#" },
  secondary: { label: "talk to an expert", href: "tel:+911234567890" },
};

export const footer = {
  about:
    "genius infosolution is an authorized tally sales and support partner helping SMEs buy, implement, and run tally with confidence.",
  columns: [
    {
      title: "company",
      links: [
        { label: "solutions", href: "#features" },
        { label: "services", href: "#showcase" },
        { label: "pricing", href: "#pricing" },
        { label: "support & faq", href: "#faq" },
      ],
    },
    {
      title: "services",
      links: [
        { label: "tally prime licensing", href: "#features" },
        { label: "GST configuration", href: "#features" },
        { label: "data migration", href: "#features" },
        { label: "annual maintenance", href: "#pricing" },
      ],
    },
    {
      title: "contact",
      links: [
        { label: "sales@geniusinfosolution.in", href: "mailto:sales@geniusinfosolution.in" },
        { label: "+91 12345 67890", href: "tel:+911234567890" },
        { label: "mon–sat, 9:30–19:00 IST", href: "#" },
      ],
    },
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "WhatsApp", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  legal: `© ${new Date().getFullYear()} genius infosolution. tally and tally prime are trademarks of tally solutions pvt. ltd.`,
};
