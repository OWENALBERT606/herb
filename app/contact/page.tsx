import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactProcess } from "@/components/contact/contact-process";
import { ContactMethods } from "@/components/contact/contact-methods";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Win Court Cases for a personalized spiritual reading with Tango Mzizi on court cases, love, wealth, marriage, health, longevity, or fertility.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactProcess />
      <ContactMethods />
    </main>
  );
}
