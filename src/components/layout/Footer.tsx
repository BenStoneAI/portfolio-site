import Link from "next/link";
import { footerCopy, links, site } from "@/content/site";
import { resumeRequestHref } from "@/content/links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border/80 bg-subtle/30">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground text-balance">{footerCopy.prompt}</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted text-pretty">
              {footerCopy.contactNote}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {links.email ? (
                <a
                  href={`mailto:${links.email}`}
                  className="inline-flex items-center rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background shadow-[0_0_15px_-3px_var(--color-accent-glow)] transition-all hover:bg-foreground/90"
                >
                  Email Ben
                </a>
              ) : null}
              {links.linkedin ? (
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-border-strong/90 bg-background-raised/70 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent hover:bg-subtle/80 hover:text-accent-strong"
                >
                  LinkedIn
                </a>
              ) : null}
            </div>
          </div>

          <nav aria-label="Footer" className="sm:justify-self-end">
            <ul className="flex flex-col gap-2.5 text-sm text-muted sm:items-end">
              <li>
                <Link href="/" className="transition-colors hover:text-accent-strong font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-accent-strong font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#work" className="transition-colors hover:text-accent-strong font-medium">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#standards" className="transition-colors hover:text-accent-strong font-medium">
                  Standards
                </Link>
              </li>
              <li>
                <a href={resumeRequestHref} className="transition-colors hover:text-accent-strong font-medium">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border/80 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px]">
            © {year} {site.name}. Built with Next.js.
          </p>
          <p className="max-w-xl text-pretty">{footerCopy.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
