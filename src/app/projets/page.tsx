import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHeader } from "@/components/layout/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatEuro, siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Nos projets immobiliers",
  description:
    "135 rue de la Station à Braine-le-Comte et le Grand Hangar en négociation.",
};

export default function ProjetsPage() {
  const { station, hangar } = siteConfig.projects;

  return (
    <>
      <PageHeader
        eyebrow="Immobilier"
        title="Nos projets immobiliers"
        description="Des lieux pour accueillir durablement les activités cultuelles et culturelles de l'ASBL."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <FadeIn>
          <article>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="amber">{station.statusLabel}</Badge>
              <span className="text-sm text-muted">
                {station.location} · {formatEuro(station.purchasePrice)}{" "}
                envisagés
              </span>
            </div>
            <h2 className="mt-4 font-display text-3xl text-navy sm:text-4xl">
              {station.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
              {station.summary}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {station.photos.map((photo, index) => (
                <FadeIn key={photo.id} delay={index * 0.05}>
                  <figure className="group overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-sm transition hover:shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, 33vw"
                        priority={index === 0}
                      />
                    </div>
                    {photo.caption && (
                      <figcaption className="px-4 py-3 text-sm text-muted">
                        {photo.caption}
                      </figcaption>
                    )}
                  </figure>
                </FadeIn>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild variant="amber">
                <Link href="/faire-un-don">Financer les travaux</Link>
              </Button>
            </div>
          </article>
        </FadeIn>

        <div className="my-16 h-px bg-navy/10" aria-hidden />

        <FadeIn>
          <Card className="overflow-hidden border-dashed hover:scale-[1.01]">
            <CardHeader className="p-8 md:p-10">
              <Badge className="w-fit">{hangar.statusLabel}</Badge>
              <CardTitle className="mt-4 text-3xl">{hangar.title}</CardTitle>
              <CardDescription className="mt-2 text-base">
                {hangar.location}
              </CardDescription>
              <CardDescription className="mt-4 max-w-2xl text-base">
                {hangar.summary}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8 md:px-10">
              <div className="max-w-xl rounded-2xl border-l-4 border-accent bg-accent/5 px-5 py-4">
                <p className="text-sm leading-relaxed text-navy">
                  Nous privilégions la prudence et la transparence : aucune
                  surenchère, un dialogue serein, une décision au service de la
                  mission de l&apos;ASBL.
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </section>
    </>
  );
}
