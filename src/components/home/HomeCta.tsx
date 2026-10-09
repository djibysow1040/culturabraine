import { Button } from "@/components/ui/Button";

export function HomeCta() {
  return (
    <section className="relative overflow-hidden bg-glacier">
      <div
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 text-center md:px-8 md:py-24">
        <h2 className="font-display text-3xl text-navy sm:text-4xl">
          Rejoignez le mouvement
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
          Que ce soit par un don ou en devenant membre, chaque geste compte pour
          transformer le 135 rue de la Station en un lieu vivant.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/faire-un-don" variant="gold">
            Faire un don
          </Button>
          <Button href="/devenir-membre" variant="primary">
            Devenir membre
          </Button>
        </div>
      </div>
    </section>
  );
}
