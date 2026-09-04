import { ExternalLink } from "lucide-react";
import { w3cAivs } from "@/content/leadership";
import { standardsByStack, standardsIntro } from "@/content/standards";

export function StandardsSection() {
  const groups = standardsByStack();

  return (
    <section id="standards" className="scroll-mt-20 border-t border-border/80 bg-background/50">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft/40 px-3.5 py-1 text-xs shimmer-pill">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
              {standardsIntro.eyebrow}
            </p>
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {standardsIntro.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
            {standardsIntro.supporting}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted/80 text-pretty">{standardsIntro.disclaimer}</p>
        </div>

        <div className="mt-16 space-y-14">
          {groups.map((group) => (
            <div key={group.stack}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent-soft/50 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                  {group.stack}
                </span>
                <p className="text-sm font-medium text-muted">{group.label}</p>
              </div>

              <ul className="mt-6 divide-y divide-border/60 border-t border-border/80">
                {group.drafts.map((draft) => (
                  <li
                    key={draft.draftStem}
                    className="group grid gap-4 py-6 sm:grid-cols-[9.5rem_1fr] sm:gap-8 transition-all hover:bg-background-raised/40 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-xl"
                  >
                    <div>
                      <p className="font-mono text-base font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                        {draft.acronym}
                      </p>
                    </div>
                    <div>
                      <p className="text-[1.02rem] font-normal leading-relaxed text-foreground/95 text-pretty">
                        {draft.plainEnglish}
                      </p>
                      <p className="mt-2 text-sm text-muted text-pretty">{draft.title}</p>
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                        <a
                          href={draft.datatrackerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent underline-offset-4 hover:underline"
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
          className="glass-card-specular mt-16 scroll-mt-20 rounded-3xl border border-accent/40 p-8 sm:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden"
        >
          {/* Subtle ambient corner light */}
          <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

          <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent-soft/60 px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-radar-ping" aria-hidden="true" />
            W3C Community Group
          </span>
          <h3 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {w3cAivs.summary.heading}
          </h3>
          <p className="mt-2 text-sm font-medium text-muted">
            {w3cAivs.fullName} · {w3cAivs.role} with {w3cAivs.coChairs.filter((n) => n !== "Ben Stone").join(", ")}
          </p>
          <div className="mt-6 space-y-3.5">
            {w3cAivs.summary.paragraphs.map((p) => (
              <p key={p} className="text-[1.05rem] leading-relaxed text-foreground/90 text-pretty">
                {p}
              </p>
            ))}
          </div>
          <a
            href={w3cAivs.groupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-border-strong bg-background px-5 py-2.5 font-mono text-xs font-bold text-foreground shadow-sm transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_15px_-3px_var(--accent-glow)]"
          >
            Official W3C group page
            <span className="sr-only"> (opens in a new tab)</span>
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
