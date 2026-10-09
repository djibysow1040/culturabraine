import type { Metadata } from "next";
import {
  Eye,
  Handshake,
  Heart,
  Palette,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { PageHeader } from "@/components/layout/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "Découvrez la vision cultuelle et culturelle de Cultur@Braine ASBL.",
};

const icons: Record<string, LucideIcon> = {
  Sparkles,
  Palette,
  Eye,
  Users,
  Handshake,
  Heart,
};

export default function QuiSommesNousPage() {
  const { association, values } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="L'association"
        title="Qui sommes-nous"
        description="Une ASBL belge qui unit vocation cultuelle et culturelle au service d'une communauté solidaire."
      />

      <section className="relative overflow-hidden bg-snow py-16 md:py-24">
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-6">
            <FadeIn className="md:col-span-4">
              <Card className="h-full bg-navy p-0 text-white hover:scale-[1.01]">
                <CardHeader className="p-8">
                  <Badge variant="outline" className="w-fit">
                    Notre vision
                  </Badge>
                  <CardTitle className="mt-4 text-3xl text-white">
                    Cultuel &amp; Culturel
                  </CardTitle>
                  <CardDescription className="mt-4 text-base text-white/65">
                    {association.name} porte une double mission. Nous souhaitons
                    offrir un lieu où la foi, le partage et les expressions
                    culturelles se rencontrent, à Braine-le-Comte et dans la
                    région. L&apos;acquisition en cours du{" "}
                    {siteConfig.projects.station.title} incarne cette ambition.
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>

            <FadeIn delay={0.08} className="md:col-span-2">
              <Card className="flex h-full flex-col justify-center bg-gradient-to-br from-accent/15 to-white p-0 hover:scale-[1.01]">
                <CardHeader className="p-8">
                  <p className="font-display text-xl leading-snug text-navy">
                    « {association.mission} »
                  </p>
                  <p className="mt-4 text-sm text-muted">— {association.legalName}</p>
                </CardHeader>
              </Card>
            </FadeIn>

            {values.map((value, i) => {
              const Icon = icons[value.icon] ?? Sparkles;
              return (
                <FadeIn key={value.id} delay={0.04 * i} className="md:col-span-2">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                      <CardDescription>{value.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
