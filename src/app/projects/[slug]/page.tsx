import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  projects,
  getProjectBySlug,
  getAdjacentProjects,
} from "@/data/projects";
import { site } from "@/data/site";
import { ProjectDetail } from "@/components/ProjectDetail";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const ogImage =
    project.images.length > 0
      ? project.images[0].src
      : site.portraits.formal.src;

  return {
    title: project.title,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} | ${site.name}`,
      description: project.subtitle,
      images: [
        {
          url: ogImage,
          alt:
            project.images.length > 0
              ? project.images[0].alt
              : `${project.title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${site.name}`,
      description: project.subtitle,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(project.slug);

  return <ProjectDetail project={project} prev={prev} next={next} />;
}