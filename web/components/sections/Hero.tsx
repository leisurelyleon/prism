export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: "radial-gradient(40rem 40rem at 70% 20%, var(--color-accent), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">Design System</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-text sm:text-6xl">
          A living style guide that themes itself in real time.
        </h1>
        <p className="mt-5 max-w-xl text-base text-text-muted sm:text-lg">
          Every color, type ramp, and component on this page is driven by one set of design
          tokens. Switch the theme and watch it all transition at once.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          
            href="#palette"
            className="inline-flex items-center justify-center rounded bg-accent px-4 py-2 text-sm font-medium text-accent-contrast transition-all hover:opacity-90 active:scale-95"
          >
            Explore the palette
          </a>
          
            href="#components"
            className="inline-flex items-center justify-center rounded bg-surface-2 px-4 py-2 text-sm font-medium text-text transition-all hover:bg-border active:scale-95"
          >
            View components
          </a>
        </div>
      </div>
    </section>
  );
}
