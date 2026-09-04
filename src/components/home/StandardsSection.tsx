import { ExternalLink } from "lucide-react";
import { w3cAivs } from "@/content/leadership";
import { standardsByStack, standardsIntro } from "@/content/standards";

export function StandardsSection() {
  const groups = standardsByStack();

  return (
    <section id="standards" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-strong">
            {standardsIntro.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {standardsIntro.heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted text-pretty">
            {standardsIntro.supporting}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">{standardsIntro.disclaimer}</p>
        </div>

        <div className="mt-12 space-y-10">
          {groups.map((group) => (
            <div key={group.stack}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-strong">
                  {group.stack}
                </h3>
                <p className="text-sm text-muted">{group.label}</p>
              </div>

              <ul className="mt-4 divide-y divide-border border-t border-border">
                {group.drafts.map((draft) => (
                  <li key={draft.draftStem} className="grid gap-3 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-8">
                    <p className="font-mono text-sm font-semibold tracking-tight text-foreground">
                      {draft.acronym}
                    </p>
                    <div>
                      <p className="text-[0.98rem] leading-relaxed text-foreground/90 text-pretty">
                        {draft.plainEnglish}
                      </p>
                      <p className="mt-2 text-sm text-muted text-pretty">{draft.title}</p>
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                        <a
                          href={draft.datatrackerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-foreground underline-offset-4 hover:underline"
                        >
                          Datatracker
                          <span className="sr-only"> (opens in a new tab)</span>
                          <ExternalLink size={13} aria-hidden="true" />
                        </a>
                        {draft.repoUrl ? (
                          <a
                            href={draft.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-muted underline-offset-4 hover:text-foreground hover:underline"
                          >
                            Spec repo
                            <span className="sr-only"> (opens in a new tab)</span>
                            <ExternalLink size={13} aria-hidden="true" />
                          </a>
                        ) : null}
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
          className="mt-14 scroll-mt-16 rounded-lg border border-border bg-background-raised/60 p-6 sm:p-8"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-strong">
            W3C Community Group
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
            {w3cAivs.summary.heading}
          </h3>
          <p className="mt-1 text-sm text-muted">
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
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
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
