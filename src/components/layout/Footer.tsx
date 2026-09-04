import Link from "next/link";
import { footerCopy, links, site } from "@/content/site";
import { resumeRequestHref } from "@/content/links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border/80 bg-background-raised/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground text-balance">{footerCopy.prompt}</h2>
            <p className="mt-3.5 max-w-md text-sm leading-relaxed text-muted text-pretty">
              {footerCopy.contactNote}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {links.email ? (
                <a
                  href={`mailto:${links.email}`}
                  className="btn-metallic inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold tracking-tight text-background cursor-pointer"
                >
                  Email Ben
                </a>
              ) : null}
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
            </div>
          </div>

          <nav aria-label="Footer" className="sm:justify-self-end">
            <ul className="flex flex-col gap-3 text-sm text-muted sm:items-end">
              <li>
                <Link href="/" className="transition-colors hover:text-accent font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-accent font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#work" className="transition-colors hover:text-accent font-medium">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#standards" className="transition-colors hover:text-accent font-medium">
                  Standards
                </Link>
              </li>
              <li>
                <a href={resumeRequestHref} className="transition-colors hover:text-accent font-medium">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border/80 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-wide">
            © {year} {site.name}. Built with Next.js.
          </p>
          <p className="max-w-xl text-pretty text-muted/80">{footerCopy.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
