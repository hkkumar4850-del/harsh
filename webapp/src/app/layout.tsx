import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shri Shyam Flower Event Decor | Flower & Wedding Decor, Delhi",
  description:
    "Shri Shyam Flower Event Decor — Home Decor, Mandir Decor, Haldi-Mehandi, Sufi Night, Birthday & Reception Decor and Complete Wedding Management in Gazipur Flower Market, Delhi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${greatVibes.variable} ${inter.variable} font-sans bg-cream text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
