/**
 * W3C / community leadership facts — wording kept conservative and official.
 * Do not claim W3C Recommendation status, standards-track approval, or endorsement.
 */

export const w3cAivs = {
  acronym: "AIVS",
  groupShortName: "aivs",
  fullName: "Agentic Integrity Verification Specification Community Group",
  /** Accurate official role wording from W3C groups Leadership. */
  role: "Co-Chair",
  coChairs: ["Erik Newton", "Ben Stone"],
  groupUrl: "https://www.w3.org/groups/cg/aivs/",
  communityUrl: "https://www.w3.org/community/aivs/",
  callForParticipationUrl:
    "https://www.w3.org/community/aivs/2026/04/05/call-for-participation-in-agentic-integrity-verification-specification-community-group/",
  summary: {
    heading: "W3C AIVS Community Group",
    paragraphs: [
      "I authored and proposed the Agentic Integrity Verification Specification (AIVS) work that led to the W3C AIVS Community Group.",
      "The Community Group has formed. I serve as Co-Chair alongside Erik Newton.",
      "W3C Community Group hosting does not imply W3C endorsement of the group's activities, and AIVS is not a W3C Recommendation.",
    ],
  },
} as const;

export const leadership = {
  w3cAivs,
} as const;
