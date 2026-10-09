import { FadeIn } from "@/components/motion/FadeIn";
import { GeometricPattern } from "@/components/ui/GeometricPattern";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <header className="relative overflow-hidden bg-navy-glow text-white">
      <GeometricPattern className="text-white" opacity={0.04} />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <FadeIn>
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#D4AF37]">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
              {description}
            </p>
          )}
          <div className="mt-6 h-0.5 w-16 rounded-full bg-[#D4AF37]" aria-hidden />
        </FadeIn>
      </div>
    </header>
  );
}
