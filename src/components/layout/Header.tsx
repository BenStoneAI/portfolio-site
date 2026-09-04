import Link from "next/link";
import { nav } from "@/content/site";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-xs font-bold tracking-[0.18em] text-foreground transition-all hover:text-accent"
        >
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-radar-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="font-display tracking-[0.06em] text-sm">BEN STONE</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1.5">
            {nav.map((item) => {
              const isExternal = "external" in item && item.external;
              const linkClass =
                "rounded-lg px-3.5 py-2 text-xs font-medium tracking-wide text-muted transition-all hover:text-foreground hover:bg-subtle/80";
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
                className="ml-3 inline-flex items-center rounded-lg border border-accent/40 bg-accent-soft/30 px-3.5 py-1.5 text-xs font-semibold text-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all hover:border-accent hover:bg-accent hover:text-accent-contrast hover:shadow-[0_0_20px_-3px_var(--accent-glow)]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
