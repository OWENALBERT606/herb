import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl border border-border/60 shadow-lg shadow-black/0 transition-shadow duration-500 hover:shadow-black/40"
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/15" />

      <div className="relative z-10 p-6">
        <p className="text-xs uppercase tracking-widest text-primary">{service.ritual}</p>
        <h3 className="mt-2 font-display text-xl text-white">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/75">{service.hook}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm text-white">
          Learn more
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
