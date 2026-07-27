"use client";

import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32"
      >
        <span className="text-xs uppercase tracking-[0.25em] text-primary">Services</span>
        <h1 className="mt-4 max-w-2xl font-display text-5xl text-foreground md:text-6xl">
          Rituals for every breakthrough
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
          Each ritual draws on ancestral wisdom and proven spiritual practice, tailored to your
          specific situation. Choose an area below to learn more.
        </p>
      </motion.div>
    </section>
  );
}
