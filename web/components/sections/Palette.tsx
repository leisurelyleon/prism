"use client";

import { useMemo, useState } from "react";
import { generatePalette, accentSuggestions } from "@/lib/palette";
import { setAccent } from "@/lib/theme";
import Swatch from "@/components/ui/Swatch";

export default function Palette() {
  const [hue, setHue] = useState(255);
  const swatches = useMemo(() => generatePalette(hue), [hue]);
  const suggestions = useMemo(() => accentSuggestions(), []);

  return (
    <section id="palette" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">Palette generator</h2>
      <p className="mt-2 max-w-xl text-text-muted">
        Drag the hue to generate a harmonious tonal ramp. Click any swatch to copy its hex, or
        pick an accent to recolor the entire page live.
      </p>

      <div className="mt-8">
        <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-text-muted">
          Base hue — {Math.round(hue)}&deg;
        </label>
        <input
          type="range"
          min={0}
          max={360}
          value={hue}
          onChange={(e) => setHue(Number(e.target.value))}
          aria-label="Base hue"
          className="h-2 w-full max-w-md cursor-pointer appearance-none rounded-full"
          style={{
            background:
              "linear-gradient(to right, hsl(0 80% 60%), hsl(60 80% 60%), hsl(120 80% 60%), hsl(180 80% 60%), hsl(240 80% 60%), hsl(300 80% 60%), hsl(360 80% 60%))",
          }}
        />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {swatches.map((s) => (
          <Swatch key={s.name} name={s.name} hex={s.hex} />
        ))}
      </div>

      <div className="mt-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-text-muted">
          Set page accent
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {suggestions.map((hex) => (
            <button
              key={hex}
              type="button"
              onClick={() => setAccent(hex)}
              className="h-8 w-8 rounded-full border border-border transition-transform hover:scale-110"
              style={{ backgroundColor: hex }}
              aria-label={`Use ${hex} as accent`}
              title={`Use ${hex} as accent`}
            />
          ))}
          <button
            type="button"
            onClick={() => setAccent(null)}
            className="rounded border border-border px-3 py-1.5 text-xs text-text-muted transition-colors hover:text-text"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
