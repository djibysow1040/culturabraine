type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <header className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            {description}
          </p>
        )}
        <div className="mt-6 h-px w-16 bg-gold" aria-hidden />
      </div>
    </header>
  );
}
