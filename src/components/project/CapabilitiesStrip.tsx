export function CapabilitiesStrip({ capabilities }: { capabilities: string[] }) {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">Capabilities</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {capabilities.map((c) => (
          <li
            key={c}
            className="rounded-full border border-border px-3 py-1 text-xs text-foreground/90"
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
