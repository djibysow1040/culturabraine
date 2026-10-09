import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectGallery } from "@/components/home/ProjectGallery";
import { RenovationList } from "@/components/home/RenovationList";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatEuro, siteConfig } from "@/data/siteConfig";

export function ProjectFocus() {
  const { station, hangar } = siteConfig.projects;

  return (
    <section className="bg-glacier/60 py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <FadeIn className="max-w-2xl">
          <Badge variant="amber">Chantiers &amp; projets</Badge>
          <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-navy sm:text-4xl md:text-5xl">
            {station.title}
          </h2>
          <p className="mt-2 text-sm text-muted">
            {station.location} · En cours d&apos;acquisition ·{" "}
            {formatEuro(station.purchasePrice)} envisagés
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {station.summary}
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn>
            <ProjectGallery photos={station.photos} />
          </FadeIn>
          <FadeIn delay={0.1}>
            <RenovationList steps={siteConfig.renovationSteps} />
          </FadeIn>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-2">
          <FadeIn>
            <Card className="h-full hover:scale-[1.01]">
              <CardHeader className="p-5 sm:p-6">
                <Badge variant="amber" className="w-fit">
                  {station.statusLabel}
                </Badge>
                <CardTitle className="mt-3 flex items-center gap-2 text-lg sm:text-xl">
                  <Building2 className="h-5 w-5 shrink-0 text-[#D4AF37]" />
                  {station.title}
                </CardTitle>
                <CardDescription>
                  Soutenez l&apos;acquisition et les futurs travaux : toiture,
                  structure et rénovation intérieure.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 pt-0 sm:p-6 sm:pt-0">
                <Button asChild variant="amber" className="w-full sm:w-auto">
                  <Link href="/faire-un-don">Soutenir le projet</Link>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Card className="h-full border-dashed hover:scale-[1.01]">
              <CardHeader className="p-5 sm:p-6">
                <Badge variant="default" className="w-fit">
                  {hangar.statusLabel}
                </Badge>
                <CardTitle className="mt-3 text-lg sm:text-xl">{hangar.title}</CardTitle>
                <CardDescription>
                  {hangar.summary} Situation : {hangar.location}.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 pt-0 sm:p-6 sm:pt-0">
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="/projets">
                    Voir les projets
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
