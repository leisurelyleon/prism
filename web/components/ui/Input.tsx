import type { InputHTMLAttributes } from "react";

export default function Input({ className = "", ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded border border-border bg-bg px-3 py-2 text-sm text-text transition-colors placeholder:text-text-muted focus:border-accent focus:outline-none ${className}`}
      {...rest}
    />
  );
}
