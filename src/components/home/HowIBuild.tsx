import { howIBuild } from "@/content/site";

export function HowIBuild() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-strong">How I Build</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {howIBuild.heading}
          </h2>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {howIBuild.steps.map((step) => (
            <li key={step.number} className="border-t border-border pt-4">
              <span className="font-mono text-sm text-muted">{step.number}</span>
              <h3 className="mt-1.5 text-base font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted text-pretty">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
