"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

export default function Components() {
  const [value, setValue] = useState("");

  return (
    <section id="components" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">Components</h2>
      <p className="mt-2 max-w-xl text-text-muted">
        A small gallery of themeable primitives. Each reads the same tokens, so switching theme or
        accent restyles them instantly.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Buttons">
          <div className="flex flex-wrap gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </Card>

        <Card title="Input">
          <Input
            placeholder="Type something…"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <p className="mt-2 text-xs text-text-muted">
            {value ? `${value.length} characters` : "Focus to see the accent border."}
          </p>
        </Card>

        <Card title="Badges & states">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-contrast">
              Active
            </span>
            <span className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs font-medium text-text-muted">
              Muted
            </span>
            <Button disabled>Disabled</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
