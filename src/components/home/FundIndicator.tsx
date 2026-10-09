import { formatEuro, siteData } from "@/data/siteData";

export function FundIndicator() {
  const { amountRaised, goal, label } = siteData.fundraising;
  const percent = Math.min(100, Math.round((amountRaised / goal) * 100));
  const message = label.replace("{amount}", formatEuro(amountRaised));

  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid items-end gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Cagnotte solidaire
            </p>
            <p className="mt-4 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
              {message}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
              Chaque contribution accélère la rénovation du{" "}
              {siteData.projects.station.title} et l&apos;ouverture d&apos;un
              lieu vivant pour la communauté.
            </p>
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-4 text-sm">
              <span className="text-white/60">Objectif {formatEuro(goal)}</span>
              <span className="font-medium text-gold">{percent}%</span>
            </div>
            <div
              className="mt-3 h-2 overflow-hidden bg-white/10"
              role="progressbar"
              aria-valuenow={amountRaised}
              aria-valuemin={0}
              aria-valuemax={goal}
              aria-label="Progression de la cagnotte"
            >
              <div
                className="animate-fill-bar h-full bg-gold"
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="mt-3 text-right font-display text-2xl text-white">
              {formatEuro(amountRaised)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
