"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-24 lg:grid-cols-[1fr_1.1fr] lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 shadow-xl shadow-black/30"
        >
          <Image
            src="/images/tango-mzizi-portrait-1.jpeg"
            alt="Portrait of Tango Mzizi"
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary">About Me</span>
          <h1 className="mt-4 font-display text-5xl text-foreground md:text-6xl">Tango Mzizi</h1>
          <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
            Spiritual Healer at Win Court Cases &middot; Uganda, Africa
          </p>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              I am Tango Mzizi, a powerful traditional spiritual healer from Uganda, Africa. With
              ancestral wisdom and proven spiritual rituals, I specialize in solving court cases,
              legal battles, love problems, marriage issues, wealth attraction, health challenges,
              longevity, and helping barren women conceive.
            </p>
            <p>
              My work brings justice, love, prosperity, healing, and breakthroughs to those in
              need. If you seek real transformation, I am here to help you.
            </p>
            <p className="font-display text-3xl text-primary">Your victory starts today.</p>
          </div>

          <div className="mt-10">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
