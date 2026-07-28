import Link from "next/link";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturedService } from "@/components/landing/featured-service";
import { ServicesShowcase } from "@/components/landing/services-showcase";
import { AboutTeaser } from "@/components/landing/about-teaser";
import { Gallery } from "@/components/landing/gallery";
import { CaseTypes } from "@/components/services/case-types";
import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/data/services";

export default function Home() {
  const courtCases = getServiceBySlug("court-cases");

  return (
    <main>
      <HeroSection />
      <FeaturedService />
      {courtCases?.caseTypes && <CaseTypes items={courtCases.caseTypes} />}
      <ServicesShowcase />
      <AboutTeaser />
      <Gallery />

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
            <Link href="/contact">Book a Reading</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
