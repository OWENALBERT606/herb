"use client";

import { motion } from "framer-motion";
import { MessageCircle, NotebookPen, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Reach out",
    description: "Call, message, or email with the situation you're facing.",
  },
  {
    icon: NotebookPen,
    title: "Share your situation",
    description: "Tango Mzizi listens and identifies the right ritual for your needs.",
  },
  {
    icon: Sparkles,
    title: "Receive your reading",
    description: "Get a personalized reading and next steps toward your breakthrough.",
  },
];

export function ContactProcess() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-[1000px] px-6 py-16 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-center sm:text-left"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 sm:mx-0">
                <step.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </span>
              <h3 className="mt-4 font-display text-xl text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
