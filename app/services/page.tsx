import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services/services-grid";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Win Court Cases' spiritual rituals by Tango Mzizi for court cases, love, wealth, marriage, health, longevity, and fertility.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />

      <section className="mx-auto max-w-[1400px] px-6 pb-24 lg:px-12">
        <ServicesGrid services={services} />
      </section>
    </main>
  );
}
