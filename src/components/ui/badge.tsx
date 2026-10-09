import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-[#0F172A]/10 bg-[#0F172A]/5 text-[#0F172A]",
        amber: "border-[#D4AF37]/40 bg-[#D4AF37]/15 text-[#0F172A]",
        success: "border-emerald-500/20 bg-emerald-500/10 text-emerald-700",
        outline: "border-white/25 bg-white/10 text-white backdrop-blur-md",
        glass: "border-[#0F172A]/10 bg-white/90 text-[#0F172A] shadow-sm backdrop-blur-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
