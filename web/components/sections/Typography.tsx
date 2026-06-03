const SCALE = [
  { label: "Display", className: "text-5xl font-bold tracking-tight", sample: "The quick brown fox" },
  { label: "Heading 1", className: "text-3xl font-bold tracking-tight", sample: "The quick brown fox" },
  { label: "Heading 2", className: "text-2xl font-semibold", sample: "The quick brown fox" },
  { label: "Body Large", className: "text-lg", sample: "The quick brown fox jumps over the lazy dog." },
  { label: "Body", className: "text-base", sample: "The quick brown fox jumps over the lazy dog." },
  { label: "Caption", className: "text-sm text-text-muted", sample: "The quick brown fox jumps over the lazy dog." },
  { label: "Mono", className: "font-mono text-sm", sample: "const tokens = useTheme();" },
];

export default function Typography() {
  return (
    <section id="type" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">Typography</h2>
        <p className="mt-2 max-w-xl text-text-muted">
          A consistent type scale in Inter, with JetBrains Mono for code. Every ramp uses the same
          tokens, so it stays legible in any theme.
        </p>
        <div className="mt-8 space-y-5">
          {SCALE.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 border-b border-border pb-5 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <span className="w-28 shrink-0 font-mono text-xs uppercase tracking-widest text-text-muted">
                {row.label}
              </span>
              <span className={`text-text ${row.className}`}>{row.sample}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
