import type { Metadata } from "next";
import Link from "next/link";
import { AboutHero } from "@/components/about/about-hero";
import { AboutFacts } from "@/components/about/about-facts";
import { ServicesGrid } from "@/components/services/services-grid";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Tango Mzizi is the traditional spiritual healer behind Win Court Cases, bringing justice, love, prosperity, healing, and breakthroughs through ancestral wisdom.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutFacts />

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">My Rituals</span>
          <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
            Ways I can help you
          </h2>
          <p className="mt-4 text-foreground/70">
            From court case victory to love, wealth, health, and fertility &mdash; every ritual
            draws on the same ancestral wisdom.
          </p>
        </div>
        <div className="mt-12">
          <ServicesGrid services={services} />
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-[1400px] px-6 py-20 text-center lg:px-12">
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            Ready for your breakthrough?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            Reach out today for a personalized reading and take the first step toward justice,
            love, prosperity, and healing.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full px-8">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
