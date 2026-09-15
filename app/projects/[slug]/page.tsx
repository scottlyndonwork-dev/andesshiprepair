import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { projects, getProjectBySlug } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="pt-28 pb-20 sm:pt-32 sm:pb-28">
      <Container>
        <Badge tone="blue" className="mb-4">
          {project.service}
        </Badge>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
          {project.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-steel">
          <span>{project.vesselType}</span>
          <span>·</span>
          <span>{project.location}</span>
        </div>

        <PlaceholderVisual
          icon="Ship"
          tone="navy"
          className="mt-10 aspect-[21/9] rounded-md"
          label={project.title}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
          <p className="text-base leading-relaxed text-steel">{project.description}</p>
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-steel uppercase">Scope</h2>
            <ul className="mt-4 space-y-2">
              {project.scope.map((item) => (
                <li key={item} className="text-sm text-text-dark">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
