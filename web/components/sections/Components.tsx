"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

type Choice = "primary" | "secondary" | "ghost";
type BadgeKey = "active" | "muted";

export default function Components() {
  const [value, setValue] = useState("");
  const [choice, setChoice] = useState<Choice>("primary");
  const [badges, setBadges] = useState<Record<BadgeKey, boolean>>({ active: true, muted: false });

  function toggleBadge(key: BadgeKey) {
    setBadges((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <section id="components" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">Components</h2>
      <p className="mt-2 max-w-xl text-text-muted">
        A small gallery of themeable primitives. Each reads the same tokens, so switching theme or
        accent restyles them instantly &mdash; and they respond to you in real time.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Buttons">
          <div className="flex flex-wrap gap-2">
            <Button active={choice === "primary"} onClick={() => setChoice("primary")}>Primary</Button>
            <Button variant="secondary" active={choice === "secondary"} onClick={() => setChoice("secondary")}>Secondary</Button>
            <Button variant="ghost" active={choice === "ghost"} onClick={() => setChoice("ghost")}>Ghost</Button>
          </div>
          <p className="mt-3 text-xs text-text-muted">
            Selected: <span className="font-mono text-accent">{choice}</span>
          </p>
        </Card>

        <Card title="Input">
          <Input
            placeholder="Type something…"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <p className="mt-2 text-xs text-text-muted">
            {value ? (
              <>You typed: <span className="font-mono text-text">{value}</span> ({value.length} chars)</>
            ) : (
              "Focus and type — your text echoes here live."
            )}
          </p>
        </Card>

        <Card title="Badges & states">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => toggleBadge("active")}
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${badges.active ? "bg-accent text-accent-contrast" : "bg-surface-2 text-text-muted"}`}
            >
              Active
            </button>
            <button
              type="button"
              onClick={() => toggleBadge("muted")}
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${badges.muted ? "bg-accent text-accent-contrast" : "bg-surface-2 text-text-muted"}`}
            >
              Muted
            </button>
            <Button disabled>Disabled</Button>
          </div>
          <p className="mt-3 text-xs text-text-muted">Tap the badges to toggle their state.</p>
        </Card>
      </div>
    </section>
  );
}
