"use client";

import { useEffect, useState } from "react";
import { applyTheme, loadThemeMode, saveThemeMode, type ThemeMode } from "@/lib/theme";

const MODES: { value: ThemeMode; label: string; icon: string }[] = [
  { value: "light", label: "Light", icon: "☀" },
  { value: "dark", label: "Dark", icon: "☾" },
  { value: "system", label: "System", icon: "◐" },
];

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMode(loadThemeMode());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(mode);
    saveThemeMode(mode);
    if (mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mode, mounted]);

  return (
    <div
      className="inline-flex rounded border border-border bg-surface p-0.5"
      role="group"
      aria-label="Theme"
    >
      {MODES.map((m) => (
        <button
          key={m.value}
          type="button"
          onClick={() => setMode(m.value)}
          aria-pressed={mounted && mode === m.value}
          title={m.label}
          className={`flex h-7 w-7 items-center justify-center rounded text-sm transition-colors ${
            mounted && mode === m.value
              ? "bg-accent text-accent-contrast"
              : "text-text-muted hover:text-text"
          }`}
        >
          <span aria-hidden="true">{m.icon}</span>
        </button>
      ))}
    </div>
  );
}
