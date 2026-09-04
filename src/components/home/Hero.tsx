import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { heroCopy } from "@/content/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
          {heroCopy.eyebrow}
        </p>
      </div>

      <h1 className="mt-6 max-w-4xl text-[2.75rem] font-semibold leading-[1.04] tracking-tight text-balance sm:text-6xl md:text-7xl">
        {heroCopy.heading}
      </h1>

      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/90 text-pretty sm:text-xl">
        {heroCopy.supporting}
      </p>

      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted text-pretty">
        {heroCopy.secondary}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href={heroCopy.primaryCta.href}
          className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {heroCopy.primaryCta.label}
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
        <Link
          href={heroCopy.secondaryCta.href}
          className="inline-flex items-center rounded-md border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:bg-subtle"
        >
          {heroCopy.secondaryCta.label}
        </Link>
        <a
          href={heroCopy.tertiaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          {heroCopy.tertiaryCta.label} <ArrowRight size={13} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
