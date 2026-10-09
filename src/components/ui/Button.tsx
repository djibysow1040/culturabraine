import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706]/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#0F172A] text-white shadow-sm hover:bg-[#1E293B] hover:shadow-md hover:-translate-y-0.5",
        amber:
          "bg-[#D97706] text-white shadow-md hover:bg-[#B45309] hover:shadow-lg hover:-translate-y-0.5",
        outline:
          "border border-[#0F172A]/20 bg-white text-[#0F172A] hover:border-[#D97706]/50 hover:bg-[#F1F5F9]",
        ghost: "text-[#0F172A] hover:bg-[#0F172A]/5",
        secondary:
          "border border-white/40 bg-transparent text-white hover:border-[#D97706] hover:text-[#D97706]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
