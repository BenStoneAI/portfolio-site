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
    <article>
      <header className="mx-auto max-w-3xl px-6 pt-14 pb-4 sm:pt-20">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-strong">About</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Working philosophy</h1>
      </header>

      <div className="mx-auto max-w-3xl px-6 pb-14">
        <div className="space-y-5">
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
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {links.resumePdf ? "Download resume" : "Resume on request"}
          </a>
          {links.linkedin ? (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border-strong px-4 py-2 text-sm font-medium transition-colors hover:bg-subtle"
            >
              LinkedIn
            </a>
          ) : null}
          {links.email ? (
            <a
              href={`mailto:${links.email}`}
              className="rounded-md border border-border-strong px-4 py-2 text-sm font-medium transition-colors hover:bg-subtle"
            >
              Email Ben
            </a>
          ) : null}
        </div>
      </div>

      <Bridge />
      <Principles />

      <section id="resume" className="scroll-mt-16 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-strong">
            {aboutCopy.resume.heading}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Download
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-foreground/90 text-pretty">
            {aboutCopy.resume.body}
          </p>
          <a
            href={aboutCopy.resume.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-md border border-border-strong px-4 py-2 text-sm font-medium transition-colors hover:bg-subtle"
          >
            {aboutCopy.resume.ctaLabel}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14 sm:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-strong">Technology</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          What I actually work with.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {technology.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                {group.category}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-foreground/90 text-pretty">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
