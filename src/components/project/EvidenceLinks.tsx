import { ExternalLink } from "lucide-react";
import type { Project } from "@/content/projects";

export function EvidenceLinks({ links }: { links?: Project["evidenceLinks"] }) {
  if (!links?.length) return null;

  return (
    <section className="mx-auto max-w-4xl px-6 pb-10">
      <ul className="flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-6 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-foreground underline-offset-4 hover:underline"
            >
              {link.label}
              <span className="sr-only"> (opens in a new tab)</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
