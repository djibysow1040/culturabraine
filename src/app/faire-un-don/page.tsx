import type { Metadata } from "next";
import Image from "next/image";
import { CopyIbanButton } from "@/components/don/CopyIbanButton";
import { PageHeader } from "@/components/layout/PageHeader";
import { formatEuro, siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Faire un don",
  description:
    "Soutenez la rénovation du 135 rue de la Station. Coordonnées bancaires IBAN et BIC pour un virement sécurisé.",
};

export default function FaireUnDonPage() {
  const { bank, fundraising, projects } = siteData;
  const toiture = projects.station.photos.find(
    (p) => p.id === "toiture-exterieure",
  );
  const combles = projects.station.photos.find((p) => p.id === "combles");

  return (
    <>
      <PageHeader
        eyebrow="Solidarité"
        title="Faire un don"
        description="Merci de soutenir les travaux de toiture et la rénovation intérieure du bâtiment acquis par l'ASBL."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl text-navy">
              Votre geste fait avancer le chantier
            </h2>
            <div className="mt-4 h-px w-12 bg-gold" aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-muted">
              Chaque don contribue directement à la réfection de la toiture et à
              la rénovation intérieure du{" "}
              <strong className="font-medium text-navy">
                {projects.station.title}
              </strong>
              . Ensemble, nous transformons un bâtiment au fort potentiel en un
              lieu digne de notre vocation cultuelle et culturelle.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Déjà{" "}
              <strong className="font-medium text-navy">
                {formatEuro(fundraising.amountRaised)}
              </strong>{" "}
              récoltés grâce à la générosité de la communauté. Merci pour votre
              confiance.
            </p>

            {(toiture || combles) && (
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {toiture && (
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden bg-glacier">
                      <Image
                        src={toiture.src}
                        alt={toiture.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 40vw"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm text-muted">
                      {toiture.caption}
                    </figcaption>
                  </figure>
                )}
                {combles && (
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden bg-glacier">
                      <Image
                        src={combles.src}
                        alt={combles.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 40vw"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm text-muted">
                      {combles.caption}
                    </figcaption>
                  </figure>
                )}
              </div>
            )}
          </div>

          <div className="bg-glacier px-6 py-8 md:px-8 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Virement bancaire
            </p>
            <p className="mt-3 text-sm text-muted">{bank.accountName}</p>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                  IBAN
                </dt>
                <dd className="mt-2 font-mono text-xl tracking-wide text-navy sm:text-2xl">
                  {bank.iban}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                  BIC
                </dt>
                <dd className="mt-2 font-mono text-lg text-navy">{bank.bic}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                  Communication
                </dt>
                <dd className="mt-2 text-sm text-navy">{bank.communication}</dd>
              </div>
            </dl>

            <div className="mt-8">
              <CopyIbanButton iban={bank.iban} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
