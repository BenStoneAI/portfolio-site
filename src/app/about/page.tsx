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
      <header className="mx-auto max-w-3xl px-6 pt-20 pb-8 sm:pt-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft/40 px-3.5 py-1 text-xs shimmer-pill">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">About</p>
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Working philosophy
        </h1>
      </header>

      <div className="mx-auto max-w-3xl px-6 pb-20">
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

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={links.resumePdf ?? "#resume"}
            {...(links.resumePdf
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="btn-metallic inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold tracking-tight text-background cursor-pointer"
          >
            {links.resumePdf ? "Download resume" : "Resume on request"}
          </a>
          {links.linkedin ? (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-border-strong bg-background-raised/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-accent hover:bg-subtle/80 hover:text-accent"
            >
              LinkedIn
            </a>
          ) : null}
          {links.email ? (
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center rounded-xl border border-border-strong bg-background-raised/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-accent hover:bg-subtle/80 hover:text-accent"
            >
              Email Ben
            </a>
          ) : null}
        </div>
      </div>

      <Bridge />
      <Principles />

      <section id="resume" className="scroll-mt-20 border-t border-border/80 bg-background-raised/20">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft/40 px-3.5 py-1 text-xs shimmer-pill">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
              {aboutCopy.resume.heading}
            </p>
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Download
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-foreground/90 text-pretty">
            {aboutCopy.resume.body}
          </p>
          <a
            href={aboutCopy.resume.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl border border-accent/40 bg-accent-soft/40 px-6 py-3 text-sm font-bold font-mono text-accent shadow-[0_0_20px_-4px_var(--accent-glow)] transition-all hover:border-accent hover:bg-accent hover:text-accent-contrast"
          >
            {aboutCopy.resume.ctaLabel}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft/40 px-3.5 py-1 text-xs shimmer-pill">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Technology</p>
        </div>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          What I actually work with.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {technology.map((group) => (
            <div
              key={group.category}
              className="glass-card-specular glass-card-hover rounded-2xl border border-border/80 p-6"
            >
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                {group.category}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90 text-pretty font-medium">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
