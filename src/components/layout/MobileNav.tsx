"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const panelId = "mobile-nav-panel";

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        className="cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong/80 bg-background-raised/80 text-foreground transition-colors hover:border-accent"
      >
        {open ? <X size={17} aria-hidden="true" /> : <Menu size={17} aria-hidden="true" />}
      </button>

      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-x-0 top-[57px] z-40 border-b border-border bg-background/95 glass-panel px-6 py-6 shadow-xl animate-fade-up"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-1.5">
              {nav.map((item, i) => {
                const isExternal = "external" in item && item.external;
                const linkClass = "block rounded-lg px-4 py-3 text-base font-semibold text-foreground hover:bg-subtle/80 hover:text-accent-strong transition-colors";
                return (
                  <li key={item.href}>
                    {isExternal ? (
                      <a
                        ref={i === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className={linkClass}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        ref={i === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={linkClass}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
              <li>
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 block rounded-lg border border-border-strong/90 bg-background-raised px-4 py-3 text-center text-base font-semibold text-foreground shadow-xs transition-all hover:border-accent hover:text-accent-strong"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
