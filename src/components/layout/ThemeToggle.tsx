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
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
    </button>
  );
}
