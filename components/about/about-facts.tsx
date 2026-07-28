"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

const facts = [
  { value: "Uganda", label: "Africa" },
  { value: String(services.length), label: "sacred rituals offered" },
  { value: "Ancestral", label: "wisdom & proven ritual" },
];

export function AboutFacts() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-12">
        <div className="flex flex-wrap items-start justify-center gap-x-16 gap-y-8 text-center sm:justify-between sm:text-left">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="flex flex-col gap-2"
            >
              <span className="font-display text-3xl text-foreground lg:text-4xl">{fact.value}</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {fact.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
