import type { ReactNode } from "react";

export default function Card({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded border border-border bg-surface p-5 shadow-token transition-colors">
      {title && <h3 className="mb-3 text-sm font-semibold text-text">{title}</h3>}
      <div className="text-sm text-text-muted">{children}</div>
    </div>
  );
}
