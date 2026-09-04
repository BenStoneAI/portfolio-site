import type { Metadata } from "next";
import { Bridge } from "@/components/about/Bridge";
import { Principles } from "@/components/about/Principles";
import { aboutCopy, links, technology } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ben Stone — AI Automation & Agentic Systems Leader. Background in operations and hands-on AI implementation across agentic commerce, verification, and enterprise AI operations.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Ben Stone",
    description:
      "Ben Stone — AI Automation & Agentic Systems Leader. Operations background and hands-on agentic systems work.",
    url: "/about",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <article className="relative">
      <header className="mx-auto max-w-3xl px-6 pt-16 pb-6 sm:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/30 px-3 py-0.5 text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-strong font-medium">About</p>
        </div>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Working philosophy
        </h1>
      </header>

      <div className="mx-auto max-w-3xl px-6 pb-16">
        <div className="space-y-6">
          {aboutCopy.intro.map((paragraph, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-xl font-medium leading-relaxed text-foreground text-pretty"
                  : "text-[1.05rem] leading-relaxed text-foreground/90 text-pretty"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={links.resumePdf ?? "#resume"}
            {...(links.resumePdf
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background shadow-[0_0_15px_-3px_var(--color-accent-glow)] transition-all hover:bg-foreground/90"
          >
            {links.resumePdf ? "Download resume" : "Resume on request"}
          </a>
          {links.linkedin ? (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-border-strong/90 bg-background-raised/70 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-subtle/80"
            >
              LinkedIn
            </a>
          ) : null}
          {links.email ? (
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center rounded-lg border border-border-strong/90 bg-background-raised/70 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-subtle/80"
            >
              Email Ben
            </a>
          ) : null}
        </div>
      </div>

      <Bridge />
      <Principles />

      <section id="resume" className="scroll-mt-16 border-t border-border/80 bg-subtle/20">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/30 px-3 py-0.5 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-strong font-medium">
              {aboutCopy.resume.heading}
            </p>
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Download
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-foreground/90 text-pretty">
            {aboutCopy.resume.body}
          </p>
          <a
            href={aboutCopy.resume.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-lg border border-border-strong/90 bg-background-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-xs transition-all hover:border-accent hover:bg-subtle/80 hover:text-accent-strong"
          >
            {aboutCopy.resume.ctaLabel}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft/30 px-3 py-0.5 text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-strong font-medium">Technology</p>
        </div>
        <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          What I actually work with.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {technology.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-border/80 bg-background-raised/60 p-5 shadow-xs transition-all hover:border-accent/40"
            >
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-strong">
                {group.category}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90 text-pretty">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
