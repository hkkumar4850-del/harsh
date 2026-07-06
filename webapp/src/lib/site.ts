export const site = {
  name: "Shri Shyam",
  fullName: "Shri Shyam Flower Event Decor",
  tagline: "Jai Shree Shyam",
  owner: "Harshit Jain",
  phoneDisplay: "+91 89206 85961",
  phoneE164: "918920685961",
  address: "Shop No. 1, Gazipur Flower Market, Delhi 110096",
  instagramHandle: "@shree_shyam_flower_decor",
  instagramUrl: "https://www.instagram.com/shree_shyam_flower_decor",
};

export const whatsappUrl = (message: string) =>
  `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Packages" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];
