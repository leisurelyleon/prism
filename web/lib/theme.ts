export type ThemeMode = "light" | "dark" | "system";

export const THEME_STORAGE_KEY = "prism-theme";
export const ACCENT_STORAGE_KEY = "prism-accent";

/** Resolve "system" to the OS preference; pass explicit modes through. */
export function resolveTheme(mode: ThemeMode): "light" | "dark" {
  if (mode === "system") {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return mode;
}

export function applyTheme(mode: ThemeMode): void {
  document.documentElement.dataset.theme = resolveTheme(mode);
}

export function loadThemeMode(): ThemeMode {
  if (typeof window === "undefined") return "system";
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") return stored;
  return "system";
}

export function saveThemeMode(mode: ThemeMode): void {
  window.localStorage.setItem(THEME_STORAGE_KEY, mode);
}

/** Apply + persist a custom accent (pass null to clear it). */
export function setAccent(accent: string | null): void {
  const root = document.documentElement;
  if (accent) {
    root.style.setProperty("--color-accent", accent);
    window.localStorage.setItem(ACCENT_STORAGE_KEY, accent);
  } else {
    root.style.removeProperty("--color-accent");
    window.localStorage.removeItem(ACCENT_STORAGE_KEY);
  }
}
