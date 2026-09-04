import { aboutCopy } from "@/content/site";

export function Principles() {
  return (
    <section className="border-t border-border bg-subtle/40">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-strong">
          Operating Principles
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          How I decide what to build, and how to build it.
        </h2>

        <dl className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {aboutCopy.principles.map((principle) => (
            <div key={principle.title} className="border-t border-border pt-4">
              <dt className="text-base font-semibold text-balance">{principle.title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted text-pretty">{principle.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
