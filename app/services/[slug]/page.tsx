import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CaseTypes } from "@/components/services/case-types";
import { services, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.hook,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <main>
      <section className="relative flex h-[50vh] min-h-[380px] items-end overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

        <Link
          href="/services"
          className="absolute left-6 top-28 z-10 text-sm text-white/80 transition-colors hover:text-white lg:left-12"
        >
          &larr; All services
        </Link>

        <div className="relative z-10 mx-auto w-full max-w-[900px] px-6 py-10 lg:px-12">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">{service.ritual}</span>
          <h1 className="mt-4 font-display text-4xl text-white md:text-5xl">{service.title}</h1>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[900px] px-6 py-16 lg:px-12 lg:py-20">
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
            {service.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p className="font-display text-2xl text-primary">{service.closing}</p>
          </div>

          <div className="mt-12">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {service.caseTypes && <CaseTypes items={service.caseTypes} />}

      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
          <h2 className="font-display text-2xl text-foreground">Other Rituals</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-full border border-border/60 px-5 py-2 text-sm text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
