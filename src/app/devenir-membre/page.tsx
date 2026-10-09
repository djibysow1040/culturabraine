import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, KeyRound } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { AdminContacts } from "@/components/membre/AdminContacts";
import { PageHeader } from "@/components/layout/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatEuro, siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Devenir membre",
  description:
    "Rejoignez Cultur@Braine via WhatsApp et découvrez les tarifs de cotisation.",
};

export default function DevenirMembrePage() {
  const { membership } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="Adhésion"
        title="Devenir membre"
        description="Participez activement à la vie de l'ASBL : rejoignez le groupe WhatsApp officiel, puis finalisez votre inscription."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <FadeIn className="max-w-2xl">
          <Badge variant="amber">Communauté</Badge>
          <h2 className="mt-4 font-display text-3xl text-navy">
            Inscription via WhatsApp
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Pour participer activement, contactez un administrateur afin
            d&apos;être ajouté au{" "}
            <strong className="font-medium text-navy">groupe WhatsApp officiel</strong>{" "}
            de Cultur@Braine.
          </p>
        </FadeIn>

        <div className="mt-10">
          <FadeIn>
            <AdminContacts />
          </FadeIn>
        </div>

        <FadeIn className="mt-20">
          <h2 className="font-display text-3xl text-navy">Tarifs de cotisation</h2>
          <p className="mt-3 text-muted">Choisissez la formule adaptée à votre engagement.</p>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {membership.tiers.map((tier, i) => (
            <FadeIn key={tier.id} delay={i * 0.08}>
              <Card
                className={
                  tier.highlight
                    ? "relative h-full overflow-hidden border-accent/30 bg-gradient-to-br from-white via-white to-accent/10"
                    : "h-full"
                }
              >
                {tier.highlight && (
                  <div className="absolute right-4 top-4">
                    <Badge variant="amber">Recommandé</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <p className="mt-4 font-display text-5xl text-navy">
                    {formatEuro(tier.price)}
                    <span className="ml-1 text-base font-sans text-muted">/ an</span>
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {tier.reducedLabel} :{" "}
                    <span className="font-semibold text-navy">
                      {formatEuro(tier.reducedPrice)} / an
                    </span>
                  </p>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16">
          <Card className="overflow-hidden bg-navy p-0 text-white hover:scale-[1.01] hover:border-accent/40">
            <CardHeader className="p-8 md:p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20 text-accent">
                <KeyRound className="h-5 w-5" />
              </div>
              <CardTitle className="mt-4 text-2xl text-white sm:text-3xl">
                Inscription formelle
              </CardTitle>
              <CardDescription className="mt-3 text-white/65">
                Complétez le formulaire web d&apos;adhésion avec le code d&apos;accès :
              </CardDescription>
              <p className="mt-4 inline-flex rounded-xl bg-white/10 px-4 py-2 font-mono text-lg tracking-[0.2em] text-accent">
                {membership.accessCode}
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8 md:px-10 md:pb-10">
              <Button asChild variant="amber" size="lg">
                <Link
                  href={membership.formalRegistrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ouvrir le formulaire
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </FadeIn>
      </section>
    </>
  );
}
