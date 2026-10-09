"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.45]);

  const { association } = siteConfig;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-mesh"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:gap-10 sm:px-5 sm:py-16 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-20 lg:min-h-[min(88vh,820px)]">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-1 max-w-xl font-display text-[1.85rem] font-medium leading-[1.15] tracking-tight text-navy sm:mt-2 sm:text-5xl md:text-[3.35rem]"
          >
            {association.headline}
            <span className="mt-1 block text-[#D4AF37] sm:mt-2">
              {association.name} ASBL
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:mt-6 sm:text-lg"
          >
            {association.mission}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap"
          >
            <Button asChild variant="amber" size="lg" className="w-full sm:w-auto">
              <Link href="/faire-un-don">
                <Heart className="h-4 w-4" />
                Faire un don
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group w-full sm:w-auto">
              <Link href="/devenir-membre">
                Devenir membre
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          style={{ y, opacity }}
          className="relative mx-auto w-full max-w-md md:max-w-none"
        >
          <div
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D4AF37]/15 via-transparent to-navy/10 blur-2xl sm:-inset-6"
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-3 shadow-2xl shadow-navy/10 backdrop-blur-md sm:rounded-3xl sm:p-4"
          >
            <Image
              src="/logo.jpg"
              alt={association.name}
              width={640}
              height={220}
              priority
              className="h-auto w-full object-contain"
            />
            <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
              <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src="/images/travaux/facade-135.jpg"
                  alt="Façade 135 rue de la Station"
                  width={320}
                  height={220}
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src="/images/travaux/toiture-exterieure.jpg"
                  alt="Toiture à rénover"
                  width={320}
                  height={220}
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
