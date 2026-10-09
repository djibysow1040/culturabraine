import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "gold";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-soft shadow-sm hover:shadow-md",
  secondary:
    "bg-transparent text-white border border-white/40 hover:border-gold hover:text-gold",
  ghost:
    "bg-transparent text-navy border border-navy/20 hover:border-gold hover:text-navy",
  gold:
    "bg-gold text-navy hover:bg-gold-soft shadow-sm hover:shadow-md",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    variant = "primary",
    className = "",
  } = props;

  const classes = [
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    variants[variant],
    className,
  ].join(" ");

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={classes}
        target={props.target}
        rel={props.rel}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
    >
      {children}
    </button>
  );
}
