/**
 * Public identity links. Only publish values that are known and verified.
 * LinkedIn and personal email stay omitted until Ben provides them — never invent.
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
  // email: TBD — do not invent
  // linkedin: TBD — do not invent
  // resumePdf: TBD until public/resume.pdf is added
};

/** In-page target for resume / contact honesty copy when no PDF is published. */
export const resumeRequestHref = "/about#resume";
