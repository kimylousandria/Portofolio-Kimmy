import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { SafeImage } from "@/components/SafeImage";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const coverImage = project.images[0];
  const flatTech = project.stack.flatMap((s) => s.items).slice(0, 3);
  const primaryRole = project.roles[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-wood-card transition-all duration-500 hover:border-accent/60 hover:shadow-[0_0_35px_-10px_rgba(198,156,109,0.25)] ${
        featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-surface">
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
          <SafeImage
            src={coverImage?.src}
            alt={coverImage?.alt || `${project.title} cover`}
            fallbackTitle={project.title}
            fallbackSubtitle="Screenshots coming soon"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            }
            className="object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/75 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="rounded-full border border-border bg-bg/85 backdrop-blur-md px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
            {project.category}
          </span>
        </div>

        <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg/80 text-accent opacity-80 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-accent group-hover:text-bg group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between gap-2 text-xs text-muted mb-2">
            <span className="rounded-md bg-surface-2 px-2.5 py-0.5 font-medium text-text/90 border border-border">
              {primaryRole}
            </span>
            <span>{project.date}</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-text group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm text-muted">
            {project.subtitle}
          </p>
        </div>

        {/* 3 Tech Chips */}
        <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-border">
          {flatTech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}