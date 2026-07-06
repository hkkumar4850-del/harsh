import type { Metadata } from "next";
import { Yatra_One, Mukta, IBM_Plex_Mono } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

// Preload latin only: the copy is Hinglish in latin script, and preloading
// every devanagari weight (~380 KB) pushes the font swap — and LCP — past 4 s
// on throttled mobile. Devanagari faces stay in the CSS via unicode-range and
// load on demand for the few glyphs that need them (हिंदी pill, १२३ numerals).
const yatra = Yatra_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yatra",
  display: "swap",
});

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mukta",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hisaab — India ka apna AI Money Coach",
  description:
    "Hisaab: Aapki bhasha mein personal finance coach. Kharcha track karo, SIP plan karo, tax bachao — Hindi, Tamil, Telugu, Marathi mein.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body
        className={`${yatra.variable} ${mukta.variable} ${plexMono.variable} font-sans antialiased`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
