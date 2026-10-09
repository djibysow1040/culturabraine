"use client";

import { Check } from "lucide-react";
import type { RenovationStep } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

type Props = {
  steps: readonly RenovationStep[];
};

/** Liste simple des travaux — sans ordre ni timeline */
export function RenovationList({ steps }: Props) {
  return (
    <div className="rounded-2xl border border-navy/8 bg-white p-4 shadow-sm sm:rounded-3xl sm:p-7 md:p-8">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#D4AF37] sm:text-xs">
          Travaux prévus
        </p>
        <h3 className="mt-2 font-display text-lg text-navy sm:text-2xl">
          Travaux de rénovation
        </h3>
        <p className="mt-1.5 text-sm text-muted">
          Travaux à prévoir dans le cadre du projet.
        </p>
      </div>

      <ul className="mt-4 divide-y divide-navy/8 border-t border-navy/8 sm:mt-6">
        {steps.map((step) => (
          <li key={step.id} className="flex items-start gap-3 py-3 sm:gap-4 sm:py-4">
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border",
                step.done
                  ? "border-[#D4AF37] bg-[#D4AF37] text-[#0F172A]"
                  : "border-navy/20 bg-glacier",
              )}
              aria-hidden
            >
              {step.done && <Check className="h-3 w-3" strokeWidth={3} />}
            </span>
            <span
              className={cn(
                "text-sm leading-snug sm:text-[15px]",
                step.done
                  ? "text-muted line-through decoration-navy/20"
                  : "text-navy",
              )}
            >
              {step.label}
            </span>
            <span className="sr-only">
              {step.done ? "Terminé" : "À faire"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
