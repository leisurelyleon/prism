"use client";

import { useActiveSection } from "@/lib/useActiveSection";
import ThemeToggle from "@/components/ThemeToggle";

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "palette", label: "Palette" },
  { id: "type", label: "Type" },
  { id: "components", label: "Components" },
  { id: "tokens", label: "Tokens" },
];
const IDS = LINKS.map((l) => l.id);

export default function Nav() {
  const active = useActiveSection(IDS);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border backdrop-blur-md"
      style={{ backgroundColor: "var(--nav-bg)" }}
    >
      <nav className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 sm:px-6">
        <a href="#hero" className="shrink-0 font-mono text-lg font-bold tracking-tight text-text">prism</a>
        <ul className="flex flex-1 items-center gap-1 overflow-x-auto">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={`block whitespace-nowrap rounded px-3 py-1.5 text-sm transition-colors ${active === link.id ? "bg-surface-2 text-text" : "text-text-muted hover:text-text"}`}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
