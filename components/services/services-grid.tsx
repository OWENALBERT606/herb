"use client";

import { motion } from "framer-motion";
import type { Service } from "@/data/services";
import { ServiceCard } from "@/components/services/service-card";

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <motion.div
          key={service.slug}
          initial={{ opacity: 0, y: 48, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8 }}
        >
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </div>
  );
}
