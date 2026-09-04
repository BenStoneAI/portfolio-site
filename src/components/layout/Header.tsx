import Link from "next/link";
import { nav } from "@/content/site";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-[0.08em]"
        >
          BEN STONE
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const isExternal = "external" in item && item.external;
              const linkClass =
                "rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground";
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
                className="ml-1 rounded-md border border-border-strong px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-subtle"
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
