"use client";

import {
  Eye,
  Handshake,
  Heart,
  Palette,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/data/siteConfig";

const icons: Record<string, LucideIcon> = {
  Sparkles,
  Palette,
  Eye,
  Users,
  Handshake,
  Heart,
};

export function BentoWho() {
  const values = siteConfig.values;

  return (
    <section className="relative overflow-hidden bg-snow py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn className="max-w-2xl">
          <Badge variant="amber">Qui nous sommes</Badge>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-navy sm:text-4xl md:text-5xl">
            Une ASBL ancrée dans la foi et la culture
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {siteConfig.association.mission}
          </p>
        </FadeIn>

        <div className="mt-12 grid auto-rows-[minmax(140px,auto)] gap-4 md:grid-cols-6">
          {/* Large feature */}
          <FadeIn className="md:col-span-3 md:row-span-2">
            <Card className="flex h-full flex-col justify-between bg-navy p-0 text-white hover:scale-[1.01] hover:border-accent/40">
              <CardHeader className="p-7 md:p-8">
                <Badge variant="outline" className="w-fit">
                  Notre mission
                </Badge>
                <CardTitle className="mt-4 text-2xl text-white md:text-3xl">
                  Cultuel &amp; Culturel — une double vocation
                </CardTitle>
                <CardDescription className="mt-3 text-white/65">
                  Nous construisons un lieu vivant à Braine-le-Comte : espace de
                  spiritualité, de rencontre et de partage culturel.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-7 pt-0 md:p-8 md:pt-0">
                <Button asChild variant="amber">
                  <Link href="/qui-sommes-nous">Découvrir l&apos;ASBL</Link>
                </Button>
              </CardContent>
            </Card>
          </FadeIn>

          {values.map((value, i) => {
            const Icon = icons[value.icon] ?? Sparkles;
            const span =
              i === 0 || i === 1
                ? "md:col-span-3"
                : i === 2 || i === 3
                  ? "md:col-span-2"
                  : "md:col-span-2";

            return (
              <FadeIn key={value.id} delay={0.05 * (i + 1)} className={span}>
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
  );
}
