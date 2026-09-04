import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { heroCopy } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Genesis Solar Aura + Blueprint Grid Mask */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 hero-solar-aura opacity-90"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-blueprint-grid opacity-30 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_15%,#000_50%,transparent_95%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        {/* Terminal Instrument Eyebrow */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-accent-soft/50 px-4 py-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] backdrop-blur-md shimmer-pill">
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-radar-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
            {heroCopy.eyebrow}
          </p>
        </div>

        {/* Space Grotesk Architectural Heading */}
        <h1 className="mt-8 max-w-4xl text-[3rem] font-bold leading-[0.98] tracking-[-0.04em] text-balance sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          {heroCopy.heading}
        </h1>

        {/* Supporting Copy with crisp optical contrast */}
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground/95 text-pretty font-normal">
          {heroCopy.supporting}
        </p>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted text-pretty">
          {heroCopy.secondary}
        </p>

        {/* Luxury Aerospace Action Buttons */}
        <div className="mt-12 flex flex-wrap items-center gap-5">
          <Link
            href={heroCopy.primaryCta.href}
            className="group btn-metallic inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-bold tracking-tight text-background cursor-pointer"
          >
            <span>{heroCopy.primaryCta.label}</span>
            <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1 text-accent" />
          </Link>
          <Link
            href={heroCopy.secondaryCta.href}
            className="inline-flex items-center rounded-xl border border-border-strong bg-background-raised/50 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-all hover:border-accent hover:bg-subtle/80 hover:text-accent-strong"
          >
            {heroCopy.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
