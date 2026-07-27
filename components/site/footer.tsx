import Link from "next/link";
import { services } from "@/data/services";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <span className="font-display text-2xl tracking-tight text-foreground">Win Court Cases</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Rituals by traditional spiritual healer Tango Mzizi &mdash; bringing justice, love,
              prosperity, healing, and breakthroughs to those in need.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li>Uganda, East Africa</li>
              <li>
                <a href="tel:+256000000000" className="hover:text-primary transition-colors">
                  +256 XXX XXX XXX
                </a>
              </li>
              <li>
                <a href="mailto:info@wincourtcases.com" className="hover:text-primary transition-colors">
                  info@wincourtcases.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} Win Court Cases. All rights reserved.</p>
          <p>Your victory starts today.</p>
        </div>
      </div>
    </footer>
  );
}
