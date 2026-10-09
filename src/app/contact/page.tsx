import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Cultur@Braine ASBL — adresse à Soignies et formulaire de message.",
};

export default function ContactPage() {
  const { association } = siteData;

  return (
    <>
      <PageHeader
        eyebrow="Échange"
        title="Contact"
        description="Une question sur l'ASBL, les projets ou l'adhésion ? Écrivez-nous."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-navy">Nous trouver</h2>
            <div className="mt-4 h-px w-12 bg-gold" aria-hidden />
            <address className="mt-8 space-y-6 text-base not-italic text-muted">
              <p>
                <span className="block text-xs uppercase tracking-[0.15em] text-gold">
                  Adresse
                </span>
                <span className="mt-2 block text-navy">
                  {association.address.street}
                  <br />
                  {association.address.postalCode} {association.address.city}
                </span>
              </p>
              <p>
                <span className="block text-xs uppercase tracking-[0.15em] text-gold">
                  Email
                </span>
                <a
                  href={`mailto:${association.email}`}
                  className="mt-2 block text-navy transition hover:text-gold"
                >
                  {association.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className="font-display text-3xl text-navy">Nous écrire</h2>
            <div className="mt-4 h-px w-12 bg-gold" aria-hidden />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
