import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteData } from "@/data/siteData";

export function Hero() {
  const { association } = siteData;

  return (
    <section className="relative min-h-[min(92vh,820px)] overflow-hidden bg-glacier">
      {/* Motif géométrique discret + ancre visuelle */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 78% 42%, rgba(212,175,55,0.18), transparent 42%), radial-gradient(circle at 15% 80%, rgba(18,31,61,0.06), transparent 45%)",
        }}
      />
      <div
        className="geo-grid pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[min(92vh,820px)] max-w-6xl flex-col justify-center px-5 py-20 md:px-8 md:py-24">
        <div className="animate-fade-up max-w-2xl">
          <Image
            src="/logo.jpg"
            alt={association.name}
            width={720}
            height={240}
            priority
            className="h-auto w-full max-w-[34rem] object-contain"
          />
        </div>

        <div
          className="animate-draw-line mt-8 h-px w-24 bg-gold"
          aria-hidden
        />

        <h1 className="animate-fade-up-delay-1 mt-8 max-w-xl font-display text-2xl leading-snug text-navy sm:text-3xl md:text-[2.15rem]">
          Une vocation {association.tagline.toLowerCase()}
        </h1>

        <p className="animate-fade-up-delay-2 mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          {association.mission}
        </p>

        <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
          <Button href="/faire-un-don" variant="gold">
            Faire un don
          </Button>
          <Button href="/devenir-membre" variant="primary">
            Devenir membre
          </Button>
        </div>
      </div>
    </section>
  );
}
