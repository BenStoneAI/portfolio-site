import Link from "next/link";
import { nav } from "@/content/site";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 glass-panel transition-colors">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] text-foreground transition-colors hover:text-accent-strong"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-subtle" aria-hidden="true" />
          <span>BEN STONE</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const isExternal = "external" in item && item.external;
              const linkClass =
                "rounded-md px-3 py-1.5 text-xs font-medium tracking-wide text-muted transition-all hover:text-foreground hover:bg-subtle/80";
              return (
                <li key={item.href}>
                  {isExternal ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
            <li>
              <Link
                href="/#contact"
                className="ml-2 inline-flex items-center rounded-md border border-border-strong/80 bg-background-raised px-3 py-1.5 text-xs font-medium text-foreground shadow-sm transition-all hover:border-accent hover:bg-subtle hover:text-accent-strong"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
