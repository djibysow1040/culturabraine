"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectPhoto } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

type Props = {
  photos: readonly ProjectPhoto[];
};

export function ProjectGallery({ photos }: Props) {
  const [index, setIndex] = useState(0);
  const current = photos[index];

  function prev() {
    setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
  }

  if (!current) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-lg shadow-navy/5 sm:rounded-3xl">
      <div className="relative aspect-[4/3] bg-glacier sm:aspect-[16/10]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 via-navy/35 to-transparent px-4 pb-4 pt-14 sm:px-5 sm:pb-5 sm:pt-16">
          <p className="text-sm font-medium text-white sm:text-base">
            {current.caption}
          </p>
          <p className="mt-1 text-[11px] text-white/65 sm:text-xs">
            {index + 1} / {photos.length} — État actuel du bâtiment
          </p>
        </div>

        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-3">
          <button
            type="button"
            onClick={prev}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy shadow-md backdrop-blur-sm transition hover:bg-white sm:h-10 sm:w-10"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy shadow-md backdrop-blur-sm transition hover:bg-white sm:h-10 sm:w-10"
            aria-label="Photo suivante"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="-mx-0 flex gap-2 overflow-x-auto px-3 py-3 scrollbar-thin">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-24 sm:rounded-xl",
              i === index
                ? "border-[#D97706]"
                : "border-transparent opacity-70 hover:opacity-100",
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
