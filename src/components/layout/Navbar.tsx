"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/projets", label: "Nos projets" },
  { href: "/devenir-membre", label: "Devenir membre" },
  { href: "/faire-un-don", label: "Faire un don" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/8 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2.5 md:px-8 md:py-3">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo.jpg"
            alt="Cultur@Braine"
            width={320}
            height={100}
            priority
            className="h-11 w-auto object-contain sm:h-12 md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "px-3 py-2 text-sm tracking-wide transition-colors duration-200",
                  active
                    ? "text-navy font-medium"
                    : "text-muted hover:text-navy",
                ].join(" ")}
              >
                {link.label}
                {active && (
                  <span className="mt-1 block h-px w-full bg-gold" aria-hidden />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/faire-un-don"
          className="hidden bg-gold px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-gold-soft sm:inline-flex"
        >
          Faire un don
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-navy/15 text-navy lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={[
                "block h-px bg-navy transition-transform duration-300",
                open ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-px bg-navy transition-opacity duration-300",
                open ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-px bg-navy transition-transform duration-300",
                open ? "-translate-y-[7px] -rotate-45" : "",
              ].join(" ")}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy/8 bg-white px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "block px-2 py-3 text-base",
                    pathname === link.href
                      ? "font-medium text-navy"
                      : "text-muted",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
