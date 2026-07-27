"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function AboutTeaser() {
  return (
    <section className="overflow-hidden border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-border/60 shadow-xl shadow-black/30"
        >
          <Image
            src="/images/tango-mzizi-portrait-2.jpeg"
            alt="Tango Mzizi"
            fill
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-xs uppercase tracking-[0.25em] text-primary">About Me</span>
          <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">Tango Mzizi</h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
            Spiritual Healer at Win Court Cases
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
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
            <p className="font-display text-2xl text-primary">Your victory starts today.</p>
          </div>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
          >
            Read my full story
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
