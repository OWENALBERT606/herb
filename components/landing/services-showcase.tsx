"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export function ServicesShowcase() {
  const otherServices = services.filter((service) => service.slug !== "court-cases");

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Also Available</span>
          <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
            Other rituals I offer
          </h2>
          <p className="mt-4 text-foreground/70">
            Alongside court case victory, I offer these additional rituals &mdash; each drawing on
            the same ancestral wisdom, tailored to your specific situation.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 56, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-96 flex-col justify-end overflow-hidden rounded-2xl border border-border/60 shadow-lg shadow-black/0 transition-shadow duration-500 hover:shadow-black/40"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 transition-colors duration-500" />

                <div className="relative z-10 p-6">
                  <span className="block text-xs uppercase tracking-widest text-primary">
                    {service.ritual}
                  </span>
                  <h3 className="mt-2 font-display text-2xl text-white">{service.title}</h3>
                  <p
                    className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-500 ease-out group-hover:max-h-24 group-hover:opacity-100"
                  >
                    {service.hook}
                  </p>
                  <span className="mt-3 inline-flex translate-y-2 items-center gap-2 text-sm text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    Learn more
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
