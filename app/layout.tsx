import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Win Court Cases | Court Case & Legal Battle Specialist — Uganda",
    template: "%s | Win Court Cases",
  },
  description:
    "Win Court Cases connects you with Tango Mzizi, a traditional spiritual healer from Uganda specializing in court case victory through ancestral ritual — also offering love, marriage, wealth, health, longevity, and fertility rituals.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://wincourtcases.com"),
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
