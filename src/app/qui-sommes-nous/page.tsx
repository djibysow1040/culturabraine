import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "Découvrez la vision cultuelle et culturelle de Cultur@Braine ASBL, fondée sur la transparence, la communauté et l'entraide.",
};

export default function QuiSommesNousPage() {
  const { association, values } = siteData;

  return (
    <>
      <PageHeader
        eyebrow="L'association"
        title="Qui sommes-nous"
        description="Une ASBL belge qui unit vocation cultuelle et culturelle au service d'une communauté solidaire."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-3xl text-navy">Notre vision</h2>
            <div className="mt-4 h-px w-12 bg-gold" aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-muted">
              {association.name} porte une double mission :{" "}
              <strong className="font-medium text-navy">cultuelle</strong> et{" "}
              <strong className="font-medium text-navy">culturelle</strong>.
              Nous souhaitons offrir un lieu où la foi, le partage et les
              expressions culturelles se rencontrent, à Braine-le-Comte et dans
              la région.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              L&apos;acquisition et la rénovation du bâtiment au{" "}
              {siteData.projects.station.title} incarnent cette ambition : un
              espace digne, durable et ouvert, construit ensemble.
            </p>
          </div>

          <div className="bg-glacier px-8 py-10">
            <p className="font-display text-2xl leading-snug text-navy">
              « {association.mission} »
            </p>
            <p className="mt-6 text-sm text-muted">— {association.legalName}</p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-3xl text-navy">Nos valeurs</h2>
          <div className="mt-4 h-px w-12 bg-gold" aria-hidden />
          <ul className="mt-10 grid gap-10 md:grid-cols-3">
            {values.map((value) => (
              <li key={value.id}>
                <div className="mb-4 h-1 w-8 bg-gold" aria-hidden />
                <h3 className="font-display text-xl text-navy">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
