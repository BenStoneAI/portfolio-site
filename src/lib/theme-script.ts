/**
 * Runs before hydration (inlined in <head>) so the stored/system
 * theme applies before first paint — no flash of the wrong theme.
 * Kept as a plain string so it can be inlined without becoming a
 * separate blocking request.
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark" ? stored : null;
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  } catch (e) {}
})();
`;
