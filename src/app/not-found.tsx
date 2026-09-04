import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start px-6 py-24 sm:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-strong">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        This route wasn&apos;t mapped.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted text-pretty">
        The page you were looking for doesn&apos;t exist, or the link is out of date. Here are a couple of
        places that definitely do exist.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Back to Home
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
        <Link
          href="/#work"
          className="inline-flex items-center rounded-md border border-border-strong px-4 py-2.5 text-sm font-medium transition-colors hover:bg-subtle"
        >
          View Selected Systems
        </Link>
      </div>
    </div>
  );
}
