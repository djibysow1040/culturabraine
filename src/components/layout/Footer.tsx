import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/siteData";

const links = [
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/projets", label: "Nos projets" },
  { href: "/devenir-membre", label: "Devenir membre" },
  { href: "/faire-un-don", label: "Faire un don" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const { association } = siteData;

  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <div className="inline-block bg-white px-3 py-2">
            <Image
              src="/logo.jpg"
              alt={association.name}
              width={220}
              height={72}
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="mt-4 h-px w-12 origin-left bg-gold" aria-hidden />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            ASBL belge à vocation cultuelle et culturelle. Ensemble, nous
            construisons un lieu de foi, de culture et de solidarité.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Navigation
          </p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Contact
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/75">
            <p>
              {association.address.street}
              <br />
              {association.address.postalCode} {association.address.city}
            </p>
            <p>
              <a
                href={`mailto:${association.email}`}
                className="transition-colors hover:text-gold"
              >
                {association.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © 2026 {association.legalName}. Tous droits réservés.
          </p>
          <p>Association sans but lucratif — Belgique</p>
        </div>
      </div>
    </footer>
  );
}
