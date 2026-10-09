import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Cultur@Braine ASBL — Soignies et formulaire de message.",
};

export default function ContactPage() {
  const { association } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="Échange"
        title="Contact"
        description="Une question sur l'ASBL, les projets ou l'adhésion ? Écrivez-nous."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeIn className="space-y-6">
            <div>
              <Badge variant="amber">Coordonnées</Badge>
              <h2 className="mt-4 font-display text-3xl text-navy">Nous trouver</h2>
            </div>

            <Card className="hover:scale-100">
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Adresse</CardTitle>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {association.address.street}
                    <br />
                    {association.address.postalCode} {association.address.city}
                  </p>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover:scale-100">
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Email</CardTitle>
                  <a
                    href={`mailto:${association.email}`}
                    className="mt-2 block text-sm text-navy transition hover:text-accent"
                  >
                    {association.email}
                  </a>
                </div>
              </CardHeader>
            </Card>

            {/* Map placeholder moderne */}
            <div className="relative overflow-hidden rounded-3xl border border-navy/8 bg-glacier">
              <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 p-6 text-center">
                <MapPin className="h-8 w-8 text-accent/70" />
                <p className="font-display text-lg text-navy">Soignies, Belgique</p>
                <p className="text-sm text-muted">{association.address.full}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted/70">
                  Carte interactive — bientôt
                </p>
              </div>
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
                aria-hidden
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="hover:scale-100 p-2 md:p-4">
              <CardHeader>
                <CardTitle className="text-2xl">Nous écrire</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
