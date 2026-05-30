import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/demos/construction-engineering/ProjectDetailPage";
import {
  constructionProjects,
  getProjectBySlug,
} from "@/lib/data/construction-engineering/projects";

export function generateStaticParams() {
  return constructionProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then((p) => {
    const project = getProjectBySlug(p.slug);
    if (!project) return { title: "Project Not Found" };
    return {
      title: `${project.name} — TerraBuild Engineering`,
      description: project.description,
    };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <ProjectDetailPage project={project} />;
}
