"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: "+256 XXX XXX XXX",
    href: "tel:+256000000000",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+256 XXX XXX XXX",
    href: "https://wa.me/256000000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@wincourtcases.com",
    href: "mailto:info@wincourtcases.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Uganda, East Africa",
    href: undefined,
  },
];

export function ContactMethods() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 pb-24 lg:px-12">
      <div className="grid gap-6 sm:grid-cols-2">
        {contactMethods.map(({ icon: Icon, label, value, href }, i) => {
          const content = (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-lg shadow-black/0 transition-all duration-300 hover:border-primary/50 hover:shadow-black/30"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="mt-1 text-lg text-foreground">{value}</p>
              </div>
            </motion.div>
          );
          return href ? (
            <a key={label} href={href} className="block">
              {content}
            </a>
          ) : (
            <div key={label}>{content}</div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 text-center text-sm text-muted-foreground"
      >
        Prefer to describe your situation in writing? Send an email and Tango Mzizi will respond
        personally with guidance on the next steps.
      </motion.p>
    </section>
  );
}
