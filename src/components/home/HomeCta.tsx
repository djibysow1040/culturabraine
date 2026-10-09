import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";

export function HomeCta() {
  return (
    <section className="relative overflow-hidden bg-glacier/50 py-20 md:py-24">
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <FadeIn>
          <h2 className="font-display text-3xl font-medium text-navy sm:text-4xl">
            Rejoignez le mouvement
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Que ce soit par un don ou en devenant membre, chaque geste compte pour
            faire aboutir l&apos;acquisition du 135 rue de la Station et en faire
            un lieu vivant.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button asChild variant="amber" size="lg" className="w-full sm:w-auto">
              <Link href="/faire-un-don">Faire un don</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/devenir-membre">Devenir membre</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
