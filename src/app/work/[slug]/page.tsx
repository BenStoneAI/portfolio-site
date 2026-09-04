import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CapabilitiesStrip } from "@/components/project/CapabilitiesStrip";
import { CaseStudySection } from "@/components/project/CaseStudySection";
import { EvidenceLinks } from "@/components/project/EvidenceLinks";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectNav } from "@/components/project/ProjectNav";
import { WorkSamples } from "@/components/project/WorkSamples";
import { getAdjacentProjects, getProject, projects } from "@/content/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} — ${project.subtitle}`;
  const description = project.oneLiner;

  return {
    title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title,
      description,
      url: `/work/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article>
      <ProjectHero project={project} />
      <CapabilitiesStrip capabilities={project.capabilities} />
      <div className="divide-y divide-border border-t border-border">
        {project.sections.map((section) => (
          <CaseStudySection key={section.id} section={section} />
        ))}
      </div>
      <EvidenceLinks links={project.evidenceLinks} />
      <WorkSamples samples={project.workSamples} />
      <ProjectNav prev={prev} next={next} />
    </article>
  );
}
