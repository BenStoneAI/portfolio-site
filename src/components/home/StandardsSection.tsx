import { ExternalLink } from "lucide-react";
import { w3cAivs } from "@/content/leadership";
import { standardsByStack, standardsIntro } from "@/content/standards";

export function StandardsSection() {
  const groups = standardsByStack();

  return (
    <section id="standards" className="scroll-mt-16 border-t border-border/80 bg-subtle/20">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/30 px-3 py-0.5 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-strong font-medium">
              {standardsIntro.eyebrow}
            </p>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            {standardsIntro.heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted text-pretty">
            {standardsIntro.supporting}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted/90 text-pretty">{standardsIntro.disclaimer}</p>
        </div>

        <div className="mt-12 space-y-12">
          {groups.map((group) => (
            <div key={group.stack}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent-soft/40 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-strong">
                  {group.stack}
                </span>
                <p className="text-sm font-medium text-muted">{group.label}</p>
              </div>

              <ul className="mt-4 divide-y divide-border/80 border-t border-border/80">
                {group.drafts.map((draft) => (
                  <li
                    key={draft.draftStem}
                    className="group grid gap-3 py-5 sm:grid-cols-[8.5rem_1fr] sm:gap-8 transition-colors hover:bg-subtle/40 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-lg"
                  >
                    <div>
                      <p className="font-mono text-sm font-bold tracking-tight text-foreground group-hover:text-accent-strong transition-colors">
                        {draft.acronym}
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.98rem] font-normal leading-relaxed text-foreground/90 text-pretty">
                        {draft.plainEnglish}
                      </p>
                      <p className="mt-2 text-sm text-muted text-pretty">{draft.title}</p>
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                        <a
                          href={draft.datatrackerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent-strong underline-offset-4 hover:underline"
                        >
                          Datatracker
                          <span className="sr-only"> (opens in a new tab)</span>
                          <ExternalLink size={12} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          id="w3c-aivs"
          className="mt-14 scroll-mt-16 rounded-2xl border border-accent/40 bg-background-raised/80 p-6 sm:p-8 shadow-[0_0_30px_-8px_var(--color-accent-glow)] backdrop-blur-sm"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft/60 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-strong">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-subtle" aria-hidden="true" />
            W3C Community Group
          </span>
          <h3 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">
            {w3cAivs.summary.heading}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-muted">
            {w3cAivs.fullName} · {w3cAivs.role} with {w3cAivs.coChairs.filter((n) => n !== "Ben Stone").join(", ")}
          </p>
          <div className="mt-5 space-y-3">
            {w3cAivs.summary.paragraphs.map((p) => (
              <p key={p} className="text-[1.02rem] leading-relaxed text-foreground/90 text-pretty">
                {p}
              </p>
            ))}
          </div>
          <a
            href={w3cAivs.groupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 rounded-lg border border-border-strong/90 bg-background px-4 py-2 text-sm font-semibold text-foreground shadow-xs transition-all hover:border-accent hover:text-accent-strong hover:shadow-sm"
          >
            Official W3C group page
            <span className="sr-only"> (opens in a new tab)</span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
