import type { Metadata } from "next";
import { AdminContacts } from "@/components/membre/AdminContacts";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import { formatEuro, siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Devenir membre",
  description:
    "Rejoignez Cultur@Braine via WhatsApp et découvrez les tarifs de cotisation pour membres effectifs et adhérents.",
};

export default function DevenirMembrePage() {
  const { membership } = siteData;

  return (
    <>
      <PageHeader
        eyebrow="Adhésion"
        title="Devenir membre"
        description="Participez activement à la vie de l'ASBL : rejoignez le groupe WhatsApp officiel, puis finalisez votre inscription."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-navy">
            Inscription via WhatsApp
          </h2>
          <div className="mt-4 h-px w-12 bg-gold" aria-hidden />
          <p className="mt-6 text-base leading-relaxed text-muted">
            Pour participer activement aux activités et à la vie associative,
            contactez un administrateur afin d&apos;être ajouté au{" "}
            <strong className="font-medium text-navy">
              groupe WhatsApp officiel
            </strong>{" "}
            de Cultur@Braine. C&apos;est le canal principal pour coordonner les
            actions, les chantiers et les rendez-vous.
          </p>
        </div>

        <div className="mt-10">
          <AdminContacts />
        </div>

        <div className="mt-20">
          <h2 className="font-display text-3xl text-navy">
            Tarifs de cotisation
          </h2>
          <div className="mt-4 h-px w-12 bg-gold" aria-hidden />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {membership.tiers.map((tier) => (
              <li
                key={tier.id}
                className="border border-navy/10 bg-white px-6 py-8"
              >
                <h3 className="font-display text-2xl text-navy">{tier.name}</h3>
                <p className="mt-4 font-display text-4xl text-navy">
                  {formatEuro(tier.price)}
                  <span className="ml-1 text-base text-muted">/ an</span>
                </p>
                <p className="mt-3 text-sm text-muted">
                  {tier.reducedLabel} :{" "}
                  <span className="font-medium text-navy">
                    {formatEuro(tier.reducedPrice)} / an
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 bg-navy px-6 py-10 text-white md:px-10">
          <h2 className="font-display text-2xl sm:text-3xl">
            Inscription formelle
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            Complétez le formulaire web d&apos;adhésion. Utilisez le code
            d&apos;accès suivant :
          </p>
          <p className="mt-4 inline-block bg-white/10 px-4 py-2 font-mono text-lg tracking-widest text-gold">
            {membership.accessCode}
          </p>
          <div className="mt-8">
            <Button
              href={membership.formalRegistrationUrl}
              variant="gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ouvrir le formulaire d&apos;inscription
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
