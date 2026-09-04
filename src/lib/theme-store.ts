/**
 * Tiny external store for the light/dark toggle, read via
 * useSyncExternalStore. This avoids setting state from inside a
 * useEffect body (a pattern that trades a clean hydration-safe read
 * for cascading-render risk) — the recommended way to subscribe a
 * component to state that lives outside React, like localStorage.
 */

export type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function readStored(): Theme | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem("theme");
  return stored === "light" || stored === "dark" ? stored : null;
}

function readSystem(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function subscribe(onStoreChange: () => void): () => void {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

export function getSnapshot(): Theme {
  return readStored() ?? readSystem();
}

/** Server and first client render agree on `undefined` so the toggle icon never mismatches during hydration. */
export function getServerSnapshot(): Theme | undefined {
  return undefined;
}

export function setTheme(theme: Theme) {
  window.localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  for (const listener of listeners) listener();
}
