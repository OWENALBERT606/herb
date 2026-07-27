"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getServiceBySlug } from "@/data/services";

export function FeaturedService() {
  const service = getServiceBySlug("court-cases");
  const containerRef = useRef<HTMLAnchorElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  if (!service) return null;

  return (
    <section className="bg-background">
      <Link
        ref={containerRef}
        href={`/services/${service.slug}`}
        className="group relative flex h-[70vh] min-h-[480px] items-end overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute -top-24 -bottom-24 inset-x-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-12 lg:px-12 lg:py-16">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">
            Major Service &middot; {service.ritual}
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-white md:text-5xl">
            {service.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">{service.hook}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-white">
            Learn more
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        </div>
      </Link>
    </section>
  );
}
