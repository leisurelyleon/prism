const TOKENS = [
  { token: "--color-bg", role: "Page background" },
  { token: "--color-surface", role: "Raised surface" },
  { token: "--color-surface-2", role: "Higher surface / hover" },
  { token: "--color-border", role: "Borders & dividers" },
  { token: "--color-text", role: "Primary text" },
  { token: "--color-text-muted", role: "Secondary text" },
  { token: "--color-accent", role: "Brand accent" },
  { token: "--color-accent-contrast", role: "Text on accent" },
];

export default function Tokens() {
  return (
    <section id="tokens" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">Design tokens</h2>
        <p className="mt-2 max-w-xl text-text-muted">
          The single source of truth. Each token is a CSS custom property every component reads —
          change it once, and the whole system follows.
        </p>
        <div className="mt-8 overflow-x-auto rounded border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface-2 text-text-muted">
              <tr>
                <th className="px-4 py-2 font-medium">Token</th>
                <th className="px-4 py-2 font-medium">Role</th>
                <th className="px-4 py-2 font-medium">Value</th>
              </tr>
            </thead>
            <tbody>
              {TOKENS.map((t) => (
                <tr key={t.token} className="border-t border-border">
                  <td className="px-4 py-2 font-mono text-xs text-text">{t.token}</td>
                  <td className="px-4 py-2 text-text-muted">{t.role}</td>
                  <td className="px-4 py-2">
                    <span
                      className="inline-block h-4 w-4 rounded border border-border align-middle"
                      style={{ backgroundColor: `var(${t.token})` }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
