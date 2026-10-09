import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import { formatEuro, siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Nos projets immobiliers",
  description:
    "Découvrez les projets immobiliers de Cultur@Braine : le 135 rue de la Station à Braine-le-Comte et le Grand Hangar en négociation.",
};

export default function ProjetsPage() {
  const { station, hangar } = siteData.projects;

  return (
    <>
      <PageHeader
        eyebrow="Immobilier"
        title="Nos projets immobiliers"
        description="Des lieux pour accueillir durablement les activités cultuelles et culturelles de l'ASBL."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {/* Projet 1 */}
        <article>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Projet 1 · Acquis
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
            {station.title}
          </h2>
          <p className="mt-2 text-sm text-muted">
            {station.location} · Prix d&apos;acquisition{" "}
            {formatEuro(station.purchasePrice)}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">
            {station.summary}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {station.photos.map((photo, index) => (
              <figure
                key={photo.id}
                className={index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-glacier">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
                {photo.caption && (
                  <figcaption className="mt-2 text-sm text-muted">
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/faire-un-don" variant="gold">
              Financer les travaux
            </Button>
          </div>
        </article>

        <div className="my-20 h-px bg-navy/10" aria-hidden />

        {/* Projet 2 */}
        <article>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Projet 2 · En négociation
          </p>
          <h2 className="mt-3 font-display text-3xl text-navy sm:text-4xl">
            {hangar.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{hangar.location}</p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">
            {hangar.summary}
          </p>
          <div className="mt-8 max-w-xl border-l-2 border-gold bg-glacier px-6 py-5">
            <p className="text-sm leading-relaxed text-navy">
              Nous privilégions la prudence et la transparence : aucune
              surenchère, un dialogue serein avec les parties prenantes, et une
              décision au service de la mission de l&apos;ASBL.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
