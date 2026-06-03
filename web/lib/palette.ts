export interface Swatch {
  name: string;
  hex: string;
}

/** Convert HSL (h in degrees, s/l in 0–100) to a #rrggbb hex string. */
function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const color = l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/** Generate a 5-stop tonal ramp from a base hue (light → dark). */
export function generatePalette(baseHue: number): Swatch[] {
  const stops = [
    { name: "50", s: 70, l: 95 },
    { name: "200", s: 75, l: 80 },
    { name: "400", s: 80, l: 62 },
    { name: "600", s: 78, l: 48 },
    { name: "800", s: 70, l: 32 },
  ];
  return stops.map((stop) => ({ name: stop.name, hex: hslToHex(baseHue, stop.s, stop.l) }));
}

/** A spread of harmonious accent suggestions around the hue wheel. */
export function accentSuggestions(): string[] {
  return [210, 260, 330, 12, 150, 45].map((h) => hslToHex(h, 75, 58));
}
