import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { heroCopy } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      {/* Ambient background atmosphere */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent-soft/40 px-3.5 py-1 text-xs backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-subtle" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-strong font-medium">
            {heroCopy.eyebrow}
          </p>
        </div>

        <h1 className="mt-7 max-w-4xl text-[2.75rem] font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-[4.75rem]">
          {heroCopy.heading}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/90 text-pretty sm:text-xl font-normal">
          {heroCopy.supporting}
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted text-pretty">
          {heroCopy.secondary}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href={heroCopy.primaryCta.href}
            className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background shadow-[0_0_20px_-3px_var(--color-accent-glow)] transition-all hover:bg-foreground/90 hover:shadow-[0_0_30px_0px_var(--color-accent-glow)]"
          >
            {heroCopy.primaryCta.label}
            <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href={heroCopy.secondaryCta.href}
            className="inline-flex items-center rounded-lg border border-border-strong/90 bg-background-raised/70 px-5 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-accent hover:bg-subtle/80"
          >
            {heroCopy.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
