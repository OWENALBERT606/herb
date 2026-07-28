"use client";

import { motion } from "framer-motion";
import type { CaseType } from "@/data/services";

export function CaseTypes({ items }: { items: CaseType[] }) {
  return (
    <section className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-[1000px] px-6 py-16 lg:px-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-primary">
            Areas of Practice
          </span>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
            Types of cases we help with
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border/60 bg-background p-5 transition-colors duration-300 hover:border-primary/50"
            >
              <h3 className="font-display text-lg text-foreground">{item.title}</h3>
              {item.detail && (
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">{item.detail}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
