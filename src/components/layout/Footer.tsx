import Link from "next/link";
import { footerCopy, links, site } from "@/content/site";
import { resumeRequestHref } from "@/content/links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-balance">{footerCopy.prompt}</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted text-pretty">
              {footerCopy.contactNote}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {links.email ? (
                <a
                  href={`mailto:${links.email}`}
                  className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Email Ben
                </a>
              ) : null}
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
            </div>
          </div>

          <nav aria-label="Footer" className="sm:justify-self-end">
            <ul className="flex flex-col gap-2 text-sm text-muted sm:items-end">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#work" className="hover:text-foreground">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#standards" className="hover:text-foreground">
                  Standards
                </Link>
              </li>
              <li>
                <a href={resumeRequestHref} className="hover:text-foreground">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Built with Next.js.
          </p>
          <p>{footerCopy.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
