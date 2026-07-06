/**
 * All site copy, transcribed verbatim from the hisaab-website.html prototype.
 * This file is the single source of truth — components must not hardcode copy.
 */

export const nav = {
  links: [
    { href: "#features", label: "Features" },
    { href: "#demo", label: "Live Demo" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  cta: { href: "#waitlist", label: "Free mein shuru karo" },
};

export const hero = {
  eyebrow: "India ka apna AI money coach",
  // h1 rendered as: Paise ka <em>hisaab</em>,<br/>ab AI ke saath.
  h1Pre: "Paise ka ",
  h1Em: "hisaab",
  h1Post: ",",
  h1Line2: "ab AI ke saath.",
  // subhead: "aapki bhasha mein" is <strong>
  subPre: "Kharcha kahan ja raha hai, SIP kitni karni chahiye, tax kaise bachega — sab kuch ",
  subStrong: "aapki bhasha mein",
  subPost: ", ek personal coach ki tarah. CA ki fees nahi, sirf ₹199/mahina.",
  ctaPrimary: { href: "#waitlist", label: "Waitlist join karo — Free" },
  ctaGhost: { href: "#demo", label: "Coach se baat karo ↓" },
  proof: [
    { value: "8", label: "Indian languages" },
    { value: "₹199", label: "per month se shuru" },
    { value: "60 sec", label: "mein setup" },
  ],
};

export const ledger = {
  ariaLabel: "App preview: monthly expense ledger with AI coach advice",
  title: "Mera Hisaab",
  date: "JUNE 2026",
  rows: [
    { label: "🍔 Swiggy + Zomato", amount: "− ₹8,400", positive: false },
    { label: "🏠 Rent", amount: "− ₹18,000", positive: false },
    { label: "📱 Recharge + OTT", amount: "− ₹1,250", positive: false },
    { label: "💼 Salary credited", amount: "+ ₹62,000", positive: true },
    { label: "📈 SIP — Nifty 50", amount: "₹5,000 ✓", positive: true },
  ],
  coachTag: "Hisaab Coach",
  // bubble rendered as: Bhai, khaane pe <b>13.5%</b> ja raha hai 😬 Isko ₹5,000 pe
  // lao toh saal ke <b>₹40,800</b> bachenge — matlab ek aur SIP! Shuru karein?
  bubble: [
    { text: "Bhai, khaane pe " },
    { text: "13.5%", bold: true },
    { text: " ja raha hai 😬 Isko ₹5,000 pe lao toh saal ke " },
    { text: "₹40,800", bold: true },
    { text: " bachenge — matlab ek aur SIP! Shuru karein?" },
  ],
};

export const ticker = [
  "₹ Average Indian apni income ka 23% bina soche kharch karta hai",
  "Sirf 4% Indians ke paas financial advisor hai",
  "₹199/month = ek pizza se sasta financial coach",
  "Hindi · தமிழ் · తెలుగు · मराठी · বাংলা · ગુજરાતી · ಕನ್ನಡ · English",
];

export const features = {
  h2: "Ek app, poora financial jeevan.",
  sub: "Bank SMS se lekar tax tak — Hisaab aapke paise ki har baat samajhta hai, aur seedhi bhasha mein batata hai ki aage kya karna hai.",
  cards: [
    {
      icon: "📒",
      title: "Auto Kharcha Tracking",
      desc: "Bank SMS padh kar har transaction apne aap categorize ho jaata hai. Manual entry ki zaroorat nahi.",
      chip: "\"Is mahine Swiggy pe ₹8,400 😬\"",
    },
    {
      icon: "🗣️",
      title: "AI Coach — Aapki Bhasha Mein",
      desc: "Hindi, Tamil, Telugu, Marathi... jaise dost se baat karte ho, waise hi paise ki baat karo.",
      chip: "\"Mera paisa kahan ja raha hai?\"",
    },
    {
      icon: "🎯",
      title: "Goal-based SIP Planner",
      desc: "Ghar, gaadi, shaadi, retirement — goal batao, app exact monthly SIP calculate karega.",
      chip: "\"₹20 lakh, 5 saal — ₹24,800/month SIP\"",
    },
    {
      icon: "🧾",
      title: "Tax Bachao Planner",
      desc: "80C, HRA, NPS — October mein hi bata dega kitna invest karna hai. March panic khatam.",
      chip: "\"₹1.05L aur invest karo, ₹32K tax bachao\"",
    },
    {
      icon: "🛡️",
      title: "Emergency Fund Guard",
      desc: "6 mahine ka kharcha cover hai ya nahi? App track karta hai aur step-by-step banwata hai.",
      chip: "\"Abhi sirf 1.8 mahine ka backup hai\"",
    },
    {
      icon: "💳",
      title: "EMI & Karza Manager",
      desc: "Saare loans ek jagah. Kaunsa pehle chukao taaki maximum interest bache — app batayega.",
      chip: "\"Credit card pehle — 36% interest!\"",
    },
  ],
};

export const demo = {
  h2: "Coach se abhi baat karo. Sach mein.",
  sub: "Yeh demo asli AI se chalta hai — kuch bhi poochho apne paise ke baare mein.",
  avatar: "🪔",
  name: "Hisaab Coach",
  status: "● online — Hindi/English dono chalega",
  seed: "Namaste! 🙏 Main hoon aapka Hisaab Coach. Paise se judi koi bhi baat poochho — kharcha, SIP, tax, EMI... jo dil mein hai, poochh lo!",
  typing: "Coach likh raha hai…",
  chips: [
    {
      label: "Paisa kahan ja raha hai? 🤔",
      question:
        "Mera paisa kahan ja raha hai? Salary 50,000 hai par mahine ke end mein kuch nahi bachta.",
    },
    {
      label: "Ghar ka sapna 🏠",
      question:
        "Mujhe 5 saal mein 20 lakh ka ghar ka down payment chahiye. Kitni SIP karun?",
    },
    {
      label: "Tax bachao 🧾",
      question: "Tax kaise bachau? Meri salary 12 lakh per year hai.",
    },
  ],
  inputPlaceholder: "Apna sawaal likho... (Hindi ya English)",
  inputAria: "Ask the coach a question",
  sendLabel: "Bhejo →",
  sendAria: "Send message",
  note: "Demo educational hai. Personalized investment advice ke liye SEBI-registered advisor se milein.",
};

export const coachSystemPrompt =
  "You are 'Hisaab Coach', a warm, friendly Indian personal finance coach inside a demo on the Hisaab app website. Reply in the same language the user writes in (Hinglish/Hindi/English). Keep replies SHORT (under 120 words), practical, with specific numbers where possible (₹ amounts, percentages, simple SIP math using ~12% annual returns). Use a friendly desi tone with at most 1-2 emojis. Give general financial education only — never specific stock/fund picks. If asked for specific funds, suggest categories (index fund, ELSS) and recommend consulting a SEBI-registered advisor. End some replies with one short follow-up question.";

export const coachFallbacks = [
  "Achha sawaal! 👌 Pehla kadam: 1 mahina apne saare kharche track karo — bas dekhne se hi 10-15% bachat ke mauke dikh jaate hain. Phir 50-30-20 rule lagao: 50% zarooratein, 30% shauk, 20% bachat. Aapki income kitni hai monthly?",
  "Simple formula: pehle 6 mahine ka emergency fund banao (kharcha × 6), phir SIP shuru karo. ₹5,000/month ki SIP, 12% return pe, 10 saal mein ~₹11.6 lakh ban jaati hai! 📈 Kis goal ke liye soch rahe ho?",
  "Tax bachane ke teen sabse aasan raste: 80C mein ₹1.5L tak (ELSS/PPF/EPF), NPS mein extra ₹50K (80CCD-1B), aur agar rent dete ho toh HRA claim karo. In teeno se ₹46,800 tak tax bach sakta hai (30% bracket mein). Aapki salary kitni hai?",
];

export const howItWorks = {
  h2: "Shuru karna = 60 second.",
  // Devanagari step numerals, rendered in Yatra One
  steps: [
    {
      numeral: "१",
      title: "App kholo, bhasha chuno",
      desc: "8 bhashaon mein available. Login bas phone number se — password yaad rakhne ka jhanjhat nahi.",
    },
    {
      numeral: "२",
      title: "SMS permission do",
      desc: "App aapke bank SMS padh kar pichle 3 mahine ka poora hisaab khud bana deta hai. Data device pe encrypted rehta hai.",
    },
    {
      numeral: "३",
      title: "Coach se milo",
      desc: "Pehle din se personalized salah — kahan bachao, kitna invest karo, kaunsa karza pehle chukao.",
    },
  ],
};

export const languages = {
  h2: "Paisa sabka. Bhasha apni-apni.",
  sub: "Financial gyaan sirf English walon ki jagir nahi hai.",
  pills: [
    { native: "हिंदी", name: "Hindi" },
    { native: "தமிழ்", name: "Tamil" },
    { native: "తెలుగు", name: "Telugu" },
    { native: "मराठी", name: "Marathi" },
    { native: "বাংলা", name: "Bengali" },
    { native: "ગુજરાતી", name: "Gujarati" },
    { native: "ಕನ್ನಡ", name: "Kannada" },
    { native: "ABC", name: "English" },
  ],
};

export const pricing = {
  h2: "Pizza se sasta. CA se smart.",
  sub: "Koi hidden charges nahi. Kabhi bhi cancel karo — bina sawaal ke.",
  plans: [
    {
      name: "Shuruaat",
      price: "₹0",
      priceSuffix: "",
      per: "hamesha free",
      features: [
        "Auto expense tracking",
        "Monthly hisaab report",
        "1 savings goal",
        "Coach se 5 sawaal/month",
      ],
      cta: "Free shuru karo",
      hot: false,
      ctaStyle: "red" as const,
    },
    {
      name: "Coach",
      stamp: "SABSE POPULAR",
      price: "₹199",
      priceSuffix: "/month",
      per: "ya ₹1,499/year (37% bachat)",
      features: [
        "Sab kuch Shuruaat ka, plus:",
        "Unlimited AI coaching",
        "Unlimited goals + SIP planner",
        "Tax planner (80C, HRA, NPS)",
        "EMI payoff strategy",
        "Weekly money health score",
      ],
      cta: "Coach banao",
      hot: true,
      ctaStyle: "gold" as const,
    },
    {
      name: "Parivaar",
      price: "₹349",
      priceSuffix: "/month",
      per: "4 members tak",
      features: [
        "Sab kuch Coach ka, plus:",
        "4 alag-alag profiles",
        "Family budget dashboard",
        "Shared goals (ghar, shaadi)",
        "Parents ke liye simple mode",
      ],
      cta: "Parivaar jodo",
      hot: false,
      ctaStyle: "red" as const,
    },
  ],
};

export const faq = {
  h2: "Sawaal-Jawaab",
  items: [
    {
      q: "Kya mera bank data safe hai?",
      a: "Haan. SMS data aapke phone pe hi process hota hai, encrypted form mein. Hum aapka data kisi ko bechte nahi — kabhi nahi. Aap ek tap mein apna saara data delete kar sakte ho.",
    },
    {
      q: "Kya yeh app investment advice deta hai?",
      a: "Hisaab ek financial education aur planning tool hai. Hum general guidance dete hain — jaise SIP calculation aur tax planning ke options. Specific stocks ya funds ki personalized advice ke liye SEBI-registered advisor se consult karein.",
    },
    {
      q: "Mujhe English nahi aati. Chalega?",
      a: "Bilkul chalega — isi liye toh Hisaab banaya hai! App ka har screen, har notification, har coach ka jawaab aapki chuni hui bhasha mein hoga.",
    },
    {
      q: "Free plan mein kya milta hai?",
      a: "Auto expense tracking, monthly report, 1 goal, aur coach se 5 sawaal har mahine — hamesha ke liye free. Jab lage ki aur chahiye, tab upgrade karo.",
    },
    {
      q: "Subscription cancel kaise karein?",
      a: "App ke settings mein ek button hai — \"Cancel karo\". Bas. Koi call nahi, koi email nahi, koi \"are you sure\" ka jaal nahi.",
    },
  ],
};

export const waitlist = {
  // h2 rendered as: Pehle 10,000 users ko<br/><span gold>1 saal Coach plan free.</span>
  h2Line1: "Pehle 10,000 users ko",
  h2Line2: "1 saal Coach plan free.",
  sub: "Launch hote hi sabse pehle aapko khabar milegi.",
  inputPlaceholder: "WhatsApp number (+91...)",
  inputAria: "Your WhatsApp number",
  inputPattern: "[+0-9 ]{10,15}",
  cta: "Jagah pakdo 🎉",
  success: "🎉 Aapki jagah pakki! Launch pe sabse pehle WhatsApp pe khabar milegi.",
  counterPre: "Ab tak ",
  counterStart: 4217,
  counterPost: " log waitlist pe hain",
};

export const footer = {
  taglineLine1: "India ka apna AI money coach.",
  taglineLine2: "Banaya gaya ❤️ se, Bharat mein.",
  columns: [
    {
      heading: "Product",
      links: [
        { href: "#features", label: "Features" },
        { href: "#pricing", label: "Pricing" },
        { href: "#demo", label: "Live Demo" },
      ],
    },
    {
      heading: "Company",
      links: [
        { href: "#", label: "About" },
        { href: "#", label: "Blog" },
        { href: "#", label: "Careers" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms" },
        { href: "#", label: "Data Deletion" },
      ],
    },
  ],
  // Compliance text — must be preserved exactly. "Disclaimer:" is <strong>.
  disclaimerLabel: "Disclaimer:",
  disclaimerBody:
    " Hisaab ek financial education aur planning tool hai, SEBI-registered investment advisor nahi. App mein di gayi jaankari sirf educational purposes ke liye hai. Mutual funds aur securities mein nivesh bazaar jokhim ke adheen hai — nivesh se pehle scheme documents dhyan se padhein aur zaroorat ho toh SEBI-registered advisor se salah lein. © 2026 Hisaab Technologies Pvt. Ltd.",
};
