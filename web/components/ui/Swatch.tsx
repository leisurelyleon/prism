"use client";

import { useState } from "react";

export default function Swatch({ name, hex }: { name: string; hex: string }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    void navigator.clipboard.writeText(hex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group flex flex-col overflow-hidden rounded border border-border text-left transition-transform hover:-translate-y-1"
      title={`Copy ${hex}`}
    >
      <span className="h-16 w-full" style={{ backgroundColor: hex }} />
      <span className="flex items-center justify-between gap-2 bg-surface px-2 py-1.5">
        <span className="font-mono text-xs text-text">{name}</span>
        <span className="font-mono text-xs text-text-muted">{copied ? "copied" : hex}</span>
      </span>
    </button>
  );
}
