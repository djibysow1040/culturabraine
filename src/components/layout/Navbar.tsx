"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-navy/8 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-5 sm:py-2.5 md:px-8 md:py-3">
          <Link
            href="/"
            className="min-w-0 shrink"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo.jpg"
              alt={siteConfig.association.name}
              width={280}
              height={90}
              priority
              className="h-9 w-auto max-w-[min(52vw,11rem)] object-contain object-left sm:h-11 sm:max-w-none md:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {siteConfig.nav.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm transition-colors",
                    active ? "font-medium text-navy" : "text-muted hover:text-navy",
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[#D4AF37]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
            >
              <Link href="/devenir-membre">Devenir membre</Link>
            </Button>
            <Button asChild variant="amber" size="sm" className="px-3 sm:px-4">
              <Link href="/faire-un-don">
                <span className="sm:hidden">Don</span>
                <span className="hidden sm:inline">Faire un don</span>
              </Link>
            </Button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-navy/15 text-navy sm:h-10 sm:w-10 xl:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-b border-navy/8 bg-white px-4 py-4 sm:px-5 xl:hidden"
          >
            <ul className="flex flex-col gap-1">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base",
                      pathname === link.href
                        ? "bg-[#D4AF37]/10 font-medium text-navy"
                        : "text-muted",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid gap-2 border-t border-navy/8 pt-3 md:hidden">
              <Button asChild variant="outline" className="w-full">
                <Link href="/devenir-membre" onClick={() => setOpen(false)}>
                  Devenir membre
                </Link>
              </Button>
              <Button asChild variant="amber" className="w-full">
                <Link href="/faire-un-don" onClick={() => setOpen(false)}>
                  Faire un don
                </Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
