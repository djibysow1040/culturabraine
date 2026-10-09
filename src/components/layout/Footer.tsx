import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const { association, nav } = siteConfig;

  return (
    <footer className="relative mt-auto overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <div className="inline-block rounded-xl bg-white p-2.5">
            <Image
              src="/logo.jpg"
              alt={association.name}
              width={200}
              height={64}
              className="h-11 w-auto object-contain"
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            ASBL belge à vocation cultuelle et culturelle. Ensemble, nous
            construisons un lieu de foi, de culture et de solidarité.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Navigation
          </p>
          <ul className="mt-4 space-y-2.5">
            {nav.filter((l) => l.href !== "/").map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {association.address.street}
                <br />
                {association.address.postalCode} {association.address.city}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a
                href={`mailto:${association.email}`}
                className="transition-colors hover:text-accent"
              >
                {association.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/40 md:flex-row md:justify-between md:px-8">
          <p>© 2026 {association.legalName}. Tous droits réservés.</p>
          <p>Association sans but lucratif — Belgique</p>
        </div>
      </div>
    </footer>
  );
}
