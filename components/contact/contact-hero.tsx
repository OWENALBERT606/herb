"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="relative mx-auto max-w-[1000px] px-6 py-24 text-center lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto h-24 w-24 overflow-hidden rounded-full border border-border/60 shadow-lg shadow-black/30"
        >
          <Image
            src="/images/tango-mzizi-portrait-bw.jpeg"
            alt="Tango Mzizi"
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mt-6 block text-xs uppercase tracking-[0.25em] text-primary">
            Contact
          </span>
          <h1 className="mt-4 font-display text-5xl text-foreground md:text-6xl">
            Your victory starts today
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
            Reach out for a personalized reading. Every consultation is treated with the
            confidentiality and care your situation deserves.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
