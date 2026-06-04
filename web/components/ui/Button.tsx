import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  active?: boolean;
  children: ReactNode;
}

const VARIANTS: Record<Variant, string> = {
  primary: "bg-accent text-accent-contrast hover:opacity-90",
  secondary: "bg-surface-2 text-text hover:bg-border",
  ghost: "bg-transparent text-text-muted hover:text-text hover:bg-surface",
};

export default function Button({
  variant = "primary",
  active = false,
  children,
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  const ring = active ? "ring-2 ring-accent ring-offset-2 ring-offset-surface" : "";
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${VARIANTS[variant]} ${ring} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
