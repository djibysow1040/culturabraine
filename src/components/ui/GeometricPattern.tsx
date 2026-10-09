import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  opacity?: number;
};

/** Motif étoiles — réservé au header des pages internes */
export function GeometricPattern({ className, opacity = 0.05 }: Props) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern id="header-stars" width="72" height="72" patternUnits="userSpaceOnUse">
          <path
            d="M36 10 L40 26 L56 26 L43 36 L48 52 L36 42 L24 52 L29 36 L16 26 L32 26 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
            opacity={opacity * 10}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#header-stars)" />
    </svg>
  );
}
