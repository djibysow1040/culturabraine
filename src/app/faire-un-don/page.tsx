import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { CopyIbanButton } from "@/components/don/CopyIbanButton";
import { PageHeader } from "@/components/layout/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatEuro, siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Faire un don",
  description:
    "Soutenez l'acquisition et la rénovation du 135 rue de la Station. IBAN et BIC pour un virement sécurisé.",
};

export default function FaireUnDonPage() {
  const { bank, fundraising, projects } = siteConfig;
  const toiture = projects.station.photos.find((p) => p.id === "toiture-exterieure");
  const combles = projects.station.photos.find((p) => p.id === "combles");

  return (
    <>
      <PageHeader
        eyebrow="Solidarité"
        title="Faire un don"
        description="Merci de soutenir l'acquisition en cours du 135 rue de la Station et les futurs travaux de toiture et de rénovation intérieure."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <Badge variant="amber">Impact direct</Badge>
            <h2 className="mt-4 font-display text-3xl text-navy">
              Votre geste fait avancer le chantier
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Chaque don contribue à l&apos;acquisition en cours du{" "}
              <strong className="font-medium text-navy">{projects.station.title}</strong>{" "}
              et aux futurs travaux de toiture et de rénovation intérieure.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Déjà{" "}
              <strong className="font-medium text-navy">
                {formatEuro(fundraising.amountRaised)}
              </strong>{" "}
              mobilisés. Merci pour votre confiance.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {toiture && (
                <figure className="overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/3]">
                    <Image src={toiture.src} alt={toiture.alt} fill className="object-cover" sizes="40vw" />
                  </div>
                  <figcaption className="mt-2 text-sm text-muted">{toiture.caption}</figcaption>
                </figure>
              )}
              {combles && (
                <figure className="overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/3]">
                    <Image src={combles.src} alt={combles.alt} fill className="object-cover" sizes="40vw" />
                  </div>
                  <figcaption className="mt-2 text-sm text-muted">{combles.caption}</figcaption>
                </figure>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="hover:scale-100 border-accent/20 bg-gradient-to-br from-white to-accent/5 shadow-xl shadow-navy/5">
              <CardHeader>
                <div className="flex items-center gap-2 text-accent">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-xs font-medium uppercase tracking-[0.16em]">
                    Virement sécurisé
                  </span>
                </div>
                <CardTitle className="mt-3 text-2xl">Carte de don</CardTitle>
                <CardDescription>{bank.accountName}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">IBAN</p>
                  <p className="mt-2 font-mono text-xl tracking-wide text-navy sm:text-2xl">
                    {bank.iban}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">BIC</p>
                  <p className="mt-2 font-mono text-lg text-navy">{bank.bic}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted">Communication</p>
                  <p className="mt-2 text-sm text-navy">{bank.communication}</p>
                </div>
                <CopyIbanButton iban={bank.iban} />
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
