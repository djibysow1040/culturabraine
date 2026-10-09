import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { formatEuro, siteData } from "@/data/siteData";

export function ProjectSpotlight() {
  const project = siteData.projects.station;
  const steps = siteData.renovationSteps;
  const doneCount = steps.filter((s) => s.done).length;
  const featured = project.photos.filter((p) => p.featured).slice(0, 3);
  const [heroPhoto, ...sidePhotos] = featured;

  return (
    <section className="bg-section-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Projet immobilier
          </p>
          <h2 className="mt-4 font-display text-3xl text-navy sm:text-4xl md:text-[2.75rem]">
            {project.title}
          </h2>
          <p className="mt-2 text-sm text-muted">
            {project.location} · Acquis pour {formatEuro(project.purchasePrice)}
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {project.summary} Les photos ci-dessous montrent l&apos;état réel
            du chantier : façade, toiture à reprendre et travaux intérieurs.
          </p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2 md:gap-4">
          {heroPhoto && (
            <figure className="group overflow-hidden md:row-span-2">
              <div className="relative aspect-[3/4] overflow-hidden bg-glacier md:aspect-auto md:h-full md:min-h-[28rem]">
                <Image
                  src={heroPhoto.src}
                  alt={heroPhoto.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {heroPhoto.caption && (
                <figcaption className="mt-3 text-sm text-muted">
                  {heroPhoto.caption}
                </figcaption>
              )}
            </figure>
          )}

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 md:gap-4">
            {sidePhotos.map((photo) => (
              <figure key={photo.id} className="group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-glacier md:aspect-[16/10]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 50vw"
                  />
                </div>
                {photo.caption && (
                  <figcaption className="mt-3 text-sm text-muted">
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h3 className="font-display text-2xl text-navy">
              Travaux à réaliser
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Checklist dynamique — {doneCount} / {steps.length} étapes
              terminées.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/faire-un-don" variant="gold">
                Soutenir les travaux
              </Button>
              <Button href="/projets" variant="ghost">
                Voir la galerie complète
              </Button>
            </div>
          </div>

          <ul className="space-y-0 border-t border-navy/10">
            {steps.map((step) => (
              <li
                key={step.id}
                className="flex items-start gap-4 border-b border-navy/10 py-4"
              >
                <span
                  className={[
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border text-[10px]",
                    step.done
                      ? "border-gold bg-gold text-navy"
                      : "border-navy/25 text-transparent",
                  ].join(" ")}
                  aria-hidden
                >
                  ✓
                </span>
                <span
                  className={[
                    "text-sm leading-relaxed",
                    step.done ? "text-muted line-through" : "text-navy",
                  ].join(" ")}
                >
                  {step.label}
                </span>
                <span className="sr-only">
                  {step.done ? "Terminé" : "À faire"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
