"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectPhoto } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

type Props = {
  photos: readonly ProjectPhoto[];
};

export function ProjectGallery({ photos }: Props) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const current = photos[index];

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  }, [photos.length]);

  const next = useCallback(() => {
    setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
  }, [photos.length]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) next();
    else prev();
  }

  if (!current) return null;

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-md sm:rounded-3xl sm:shadow-lg">
      {/* Zone photo — hauteur plafonnée sur mobile */}
      <div
        className="relative h-[210px] w-full touch-pan-y bg-glacier sm:h-auto sm:aspect-[16/10]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.28 }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60vw"
              priority={index === 0}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {/* Flèches : desktop uniquement (mobile = swipe + boutons sous la photo) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-3 sm:flex">
          <button
            type="button"
            onClick={prev}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-navy shadow-md transition hover:bg-white"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-navy shadow-md transition hover:bg-white"
            aria-label="Photo suivante"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Légende + contrôles mobile */}
      <div className="space-y-3 border-t border-navy/5 px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-navy">
              {current.caption}
            </p>
            <p className="mt-0.5 text-[11px] text-muted sm:text-xs">
              {index + 1} / {photos.length} — État actuel du bâtiment
            </p>
          </div>

          <div className="flex shrink-0 gap-1.5 sm:hidden">
            <button
              type="button"
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 bg-glacier text-navy active:bg-navy/5"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 bg-glacier text-navy active:bg-navy/5"
              aria-label="Photo suivante"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Points */}
        <div className="flex justify-center gap-1.5 sm:hidden">
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Photo ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-5 bg-[#D4AF37]" : "w-1.5 bg-navy/20",
              )}
            />
          ))}
        </div>

        {/* Miniatures — grille égale sur mobile, pas de scroll coupé */}
        <div className="grid grid-cols-5 gap-1.5 sm:flex sm:gap-2 sm:overflow-x-auto">
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "relative aspect-[4/3] w-full overflow-hidden rounded-md border-2 transition sm:h-16 sm:w-24 sm:shrink-0 sm:rounded-xl",
                i === index
                  ? "border-[#D4AF37]"
                  : "border-transparent opacity-75 active:opacity-100",
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
