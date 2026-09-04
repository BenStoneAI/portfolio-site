/**
 * Public identity links. Only publish values that are known and verified.
 */

export type PublicLinks = {
  github: string;
  /** Omit from UI while undefined. */
  email?: string;
  /** Omit from UI while undefined. */
  linkedin?: string;
  /**
   * Resume PDF path if the file exists under /public.
   * When absent, UI should use an honest “on request” CTA — never a 404 PDF link.
   */
  resumePdf?: string;
};

export const links: PublicLinks = {
  github: "https://github.com/BenStoneAI",
  email: "benstone2038@gmail.com",
  linkedin: "https://www.linkedin.com/in/benjamin-stone-lehi/",
  resumePdf: "/resume.pdf",
};

/** Prefer the published PDF; fall back to the About resume section. */
export const resumeRequestHref = links.resumePdf ?? "/about#resume";
