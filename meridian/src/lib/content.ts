export const brand = {
  name: "MERIDIAN",
  founded: "1962",
  tagline: "House of Horology",
};

export const nav = {
  links: [
    { label: "Collection", href: "#collection" },
    { label: "Craftsmanship", href: "#craft" },
    { label: "Configurator", href: "#configurator" },
    { label: "Journal", href: "#testimonials" },
  ],
  cta: { label: "Book a Viewing", href: "#newsletter" },
};

export const hero = {
  eyebrow: "Meridian House of Horology — Est. 1962",
  headlineLines: ["Precision", "is a", "philosophy."],
  sub: "The Meridian Line — our flagship chronometer, hand-finished in-house and rated to -2/+2 seconds a day. Cased in steel, bronze, and 18k rose gold.",
  ctaPrimary: { label: "Discover the Line", href: "#collection" },
  ctaGhost: { label: "Book a Viewing", href: "#newsletter" },
  scrollHint: "Scroll to descend into the movement",
};

export const manifesto = {
  eyebrow: "The Manifesto",
  lines: [
    "We do not chase trends.",
    "We chase tenths of a millimetre.",
  ],
  body:
    "Since 1962, every Meridian movement has been assembled, regulated, and signed by a single watchmaker — start to finish, one pair of hands. Not because it's efficient. Because a watch that will outlive you deserves to have been made by someone, not something.",
  signOff: "— The Atelier, Rue de la Paix",
};

export type DialColor = {
  id: string;
  label: string;
  hex: string;
  ring: string;
};

export type StrapMaterial = {
  id: string;
  label: string;
  swatch: string;
  texture: "brushed" | "polished" | "leather" | "rubber";
};

export const dialColors: DialColor[] = [
  { id: "meridian-blue", label: "Meridian Blue", hex: "#1b2a3d", ring: "#3d5a7a" },
  { id: "slate", label: "Graphite Slate", hex: "#26262a", ring: "#4a4a52" },
  { id: "ivory", label: "Ivory Lacquer", hex: "#ece6d9", ring: "#c9c0aa" },
  { id: "racing-green", label: "British Racing Green", hex: "#12261c", ring: "#2e5039" },
];

export const strapMaterials: StrapMaterial[] = [
  { id: "steel", label: "Brushed Steel", swatch: "#9a9a9e", texture: "brushed" },
  { id: "bronze", label: "Aged Bronze", swatch: "#a5773f", texture: "polished" },
  { id: "chestnut", label: "Chestnut Leather", swatch: "#5c3a24", texture: "leather" },
  { id: "rubber", label: "Vulcanised Black", swatch: "#1a1a1a", texture: "rubber" },
];

export type CollectionPiece = {
  id: string;
  ref: string;
  name: string;
  line: string;
  dial: DialColor;
  strap: StrapMaterial;
  price: string;
  description: string;
  detail: string;
};

export const collection: CollectionPiece[] = [
  {
    id: "meridian-line",
    ref: "ML-40",
    name: "The Meridian Line",
    line: "Flagship",
    dial: dialColors[0],
    strap: strapMaterials[0],
    price: "$8,900",
    description: "The everyday chronometer.",
    detail:
      "40mm, in-house automatic calibre, 70-hour reserve. The watch this house was built to make.",
  },
  {
    id: "solstice-chronograph",
    ref: "SC-42",
    name: "The Solstice Chronograph",
    line: "Sport",
    dial: dialColors[3],
    strap: strapMaterials[1],
    price: "$14,200",
    description: "Built for the equinox, and every day after.",
    detail:
      "42mm bronze case that ages with you, column-wheel chronograph, sapphire caseback.",
  },
  {
    id: "vane-gmt",
    ref: "VG-41",
    name: "The Vane GMT",
    line: "Traveller",
    dial: dialColors[1],
    strap: strapMaterials[0],
    price: "$11,600",
    description: "For the perpetually elsewhere.",
    detail:
      "41mm titanium, true independent GMT hand, ceramic 24-hour bezel insert.",
  },
  {
    id: "ferrous-tourbillon",
    ref: "FT-38",
    name: "The Ferrous Tourbillon",
    line: "Haute Horlogerie",
    dial: dialColors[2],
    strap: strapMaterials[2],
    price: "$58,000",
    description: "A tourbillon you can see breathing.",
    detail:
      "38mm 18k rose gold, flying tourbillon at six o'clock, hand-engraved bridges.",
  },
  {
    id: "compass-diver",
    ref: "CD-43",
    name: "The Compass Diver",
    line: "Dive",
    dial: dialColors[1],
    strap: strapMaterials[3],
    price: "$9,800",
    description: "Built to be forgotten at 40 metres.",
    detail:
      "43mm, 300m water resistance, unidirectional ceramic bezel, full lume dial.",
  },
];

export const limitedEdition: CollectionPiece = {
  id: "meridian-sixty",
  ref: "M60-LE",
  name: "The Meridian 60",
  line: "Limited Run — 60 pieces",
  dial: dialColors[0],
  strap: strapMaterials[1],
  price: "$22,500",
  description: "One made for every year of the house.",
  detail: "60 numbered pieces, engraved rotor, presented in a walnut box with the timing certificate.",
};

export const productGrid = [...collection, limitedEdition];

export const craftsmanship = {
  eyebrow: "Craftsmanship",
  heading: "Six hours. One pair of hands.",
  sub: "Every Meridian movement passes through five stages before it earns its signature. None of them are automated.",
  steps: [
    {
      number: "01",
      title: "The Blank",
      body: "A raw steel plate, cut oversize and left to stabilise for six weeks before a single tool touches it.",
    },
    {
      number: "02",
      title: "The Escapement",
      body: "Adjusted by hand across five positions until it holds chronometer tolerance — regardless of how the wrist moves.",
    },
    {
      number: "03",
      title: "The Finish",
      body: "Geneva stripes, black polish, and anglage applied by eye, under a loupe, one bevel at a time.",
    },
    {
      number: "04",
      title: "The Assembly",
      body: "A single watchmaker builds the movement start to finish. No division of labour, no shortcuts.",
    },
    {
      number: "05",
      title: "The Signature",
      body: "The caseback is engraved with the maker's initials and the movement's own timing chart.",
    },
  ],
};

export const configurator = {
  eyebrow: "Configurator",
  heading: "Build your Meridian.",
  sub: "Choose a dial and a strap. What you see is what leaves the atelier.",
  ctaLabel: "Enquire About This Configuration",
};

export const testimonials = {
  eyebrow: "In Print",
  heading: "What the press has said.",
  items: [
    {
      quote:
        "Meridian builds the rare watch that photographs beautifully and still disappears the moment it's on your wrist.",
      source: "The Horological Review",
    },
    {
      quote:
        "The Solstice Chronograph is the most convincing bronze sports watch to come out of an independent house in a decade.",
      source: "Klepsydra Journal",
    },
    {
      quote:
        "A finishing standard that has no business existing at this price. Meridian is quietly rewriting the entry point to haute horlogerie.",
      source: "Escapement Quarterly",
    },
    {
      quote:
        "The Ferrous Tourbillon is proof that a small atelier can out-finish houses ten times its size.",
      source: "The Loupe",
    },
    {
      quote:
        "Understated, obsessive, and entirely uninterested in what anyone else is doing. Exactly what a watch house should be.",
      source: "Wrist Culture",
    },
  ],
};

export const newsletter = {
  eyebrow: "The Registry",
  heading: "Join the Registry.",
  sub: "Early access to limited runs, invitations to atelier viewings, and nothing else. We write rarely, and only when it matters.",
  placeholder: "you@domain.com",
  cta: "Request Access",
  disclaimer: "By joining, you agree to hear from Meridian a few times a year. Unsubscribe any time.",
};

export const footer = {
  nav: [
    { label: "Collection", href: "#collection" },
    { label: "Craftsmanship", href: "#craft" },
    { label: "Configurator", href: "#configurator" },
    { label: "Journal", href: "#testimonials" },
    { label: "Boutiques", href: "#" },
    { label: "Contact", href: "#" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "Journal", href: "#" },
    { label: "WhatsApp Concierge", href: "#" },
  ],
  legal: "Meridian House of Horology. Est. 1962, Rue de la Paix.",
  copyright: `© ${new Date().getFullYear()} Meridian. All rights reserved.`,
};
