"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { getServerSnapshot, getSnapshot, setTheme, subscribe } from "@/lib/theme-store";

export function ThemeToggle() {
  // undefined until the client has read localStorage/matchMedia, so
  // the button never renders a theme-specific icon that could differ
  // from what the server rendered.
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong/80 bg-background-raised/80 text-muted shadow-xs transition-all hover:border-accent hover:text-accent-strong hover:shadow-[0_0_12px_-2px_var(--color-accent-glow)]"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun size={15} aria-hidden="true" /> : <Moon size={15} aria-hidden="true" />}
    </button>
  );
}
