import { FileText } from "lucide-react";

/**
 * Renders nothing when a project has no work samples yet — an empty
 * download section, or one pointing at a file that doesn't exist, is
 * exactly the kind of broken link this site is built to avoid. Once
 * a project's `workSamples` array in src/content/projects.ts is
 * populated (and the matching file exists under /public), this
 * renders automatically — no component changes needed.
 */
export function WorkSamples({ samples }: { samples?: { label: string; href: string }[] }) {
  if (!samples || samples.length === 0) return null;

  return (
    <div className="mx-auto max-w-4xl px-6 pb-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">Supporting Material</p>
      <ul className="mt-3 flex flex-col gap-2">
        {samples.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-subtle"
            >
              <FileText size={14} aria-hidden="true" className="text-muted" />
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
