"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/gallery/testimonial-couple.jpg", alt: "Long-time client visit" },
  { src: "/gallery/WhatsApp Image 2026-07-29 at 08.41.17.jpeg", alt: "Long-time client visit" },
  { src: "/images/gallery/wealth-ritual-client.jpg", alt: "Wealth ritual client" },
  {
    src: "/images/gallery/ritual-market-stall.jpg",
    alt: "Traditional medicine market",
    caption: "Traditional Medicine Market",
  },
  { src: "/images/gallery/sabanga-tree.jpg", alt: "Sabanga Tree, home of the jinnis" },
  { src: "/images/gallery/family-visit.jpg", alt: "Family visit" },
  { src: "/gallery/WhatsApp Image 2026-07-29 at 08.41.22.jpeg", alt: "Family visit" },
];

export function Gallery() {
  return (
    <section className="border-t border-border/60 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Gallery</span>
          <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
            Moments of ancestral practice
          </h2>
          <p className="mt-4 text-foreground/70">
            A glimpse into the rituals, ceremony, and craft behind every reading.
          </p>
        </motion.div>

        <div className="mt-14 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {images.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border/60"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={i % 3 === 0 ? 750 : 450}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {image.caption && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 text-sm text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {image.caption}
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
