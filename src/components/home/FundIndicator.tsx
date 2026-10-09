"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { formatEuro, siteConfig } from "@/data/siteConfig";

export function FundIndicator() {
  const { amountRaised, goal, label } = siteConfig.fundraising;
  const percent = Math.min(100, Math.round((amountRaised / goal) * 100));
  const message = label.replace("{amount}", formatEuro(amountRaised));

  return (
    <section className="relative overflow-hidden bg-navy-glow py-16 md:py-20">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <div className="glass-dark rounded-3xl p-8 md:p-10">
            <div className="grid items-end gap-8 md:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D97706]">
                  Collecte de fonds
                </p>
                <p className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
                  {message}
                </p>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60">
                  Chaque contribution accélère l&apos;acquisition du{" "}
                  {siteConfig.projects.station.title} et les futurs travaux pour
                  ouvrir un lieu vivant pour la communauté.
                </p>
                <div className="mt-6">
                  <div className="mb-3 flex justify-between text-sm">
                    <span className="text-white/50">Objectif {formatEuro(goal)}</span>
                    <span className="font-medium text-[#D97706]">{percent}%</span>
                  </div>
                  <Progress value={percent} />
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 md:items-end">
                <p className="font-display text-4xl text-white md:text-5xl">
                  {formatEuro(amountRaised)}
                </p>
                <Button asChild variant="amber" size="lg">
                  <Link href="/faire-un-don">Contribuer maintenant</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
