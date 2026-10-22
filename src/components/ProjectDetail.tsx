import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Quote,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { ImageGallery } from "@/components/ImageGallery";
import { Reveal } from "@/components/Reveal";

type ProjectDetailProps = {
  project: Project;
  prev: Project | null;
  next: Project | null;
};

export function ProjectDetail({ project, prev, next }: ProjectDetailProps) {
  return (
    <article className="mx-auto max-w-5xl px-6 pt-12 pb-24 sm:pt-16">
      {/* 1. Back link + Breadcrumb */}
      <Reveal>
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-muted mb-10"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-medium text-accent hover:text-accent-deep transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </Link>
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-text transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/#projects"
                className="hover:text-text transition-colors"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-text font-medium">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* 2. Title, subtitle, date, role chips */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full border border-accent/40 bg-surface-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              {project.category}
            </span>
            <span className="text-xs sm:text-sm text-muted">
              • {project.date}
            </span>
            {project.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text"
              >
                {role}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-text mb-3">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted">{project.subtitle}</p>

          {project.extraNote && (
            <p className="mt-3 text-xs sm:text-sm text-accent">
              {project.extraNote}
            </p>
          )}
        </header>
      </Reveal>

      {/* 3. Metrics Row (e.g. HeartSense Accuracy & Recall + Disclaimer) */}
      {project.metrics && project.metrics.length > 0 && (
        <Reveal delay={0.1} className="mb-10">
          <div className="rounded-2xl border border-border bg-wood-card p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {metric.label}
                  </p>
                  <p className="font-serif text-4xl sm:text-5xl font-bold text-accent mt-1">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
            {project.disclaimer && (
              <p className="mt-4 pt-4 border-t border-border text-xs text-muted italic">
                {project.disclaimer}
              </p>
            )}
          </div>
        </Reveal>
      )}

      {/* 4. Image Gallery + Lightbox */}
      <Reveal delay={0.15} className="mb-14">
        <ImageGallery title={project.title} images={project.images} />
      </Reveal>

      {/* 5. Two-Column Problem | Solution */}
      <Reveal delay={0.2} className="mb-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <section
            aria-labelledby="problem-heading"
            className="rounded-2xl border border-border bg-wood-card p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-2">
              Context
            </p>
            <h2
              id="problem-heading"
              className="font-serif text-2xl font-bold text-text mb-4"
            >
              The Problem
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-text/90">
              {project.problem}
            </p>
          </section>

          <section
            aria-labelledby="solution-heading"
            className="rounded-2xl border border-border bg-wood-card p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-2">
              Architecture
            </p>
            <h2
              id="solution-heading"
              className="font-serif text-2xl font-bold text-text mb-4"
            >
              The Solution
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-text/90">
              {project.solution}
            </p>
          </section>
        </div>
      </Reveal>

      {/* 6. Impact Bullets */}
      <Reveal delay={0.25} className="mb-14">
        <section
          aria-labelledby="impact-heading"
          className="rounded-2xl border border-border bg-wood-card p-6 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-2">
            Deliverables & Results
          </p>
          <h2
            id="impact-heading"
            className="font-serif text-2xl sm:text-3xl font-bold text-text mb-6"
          >
            Impact
          </h2>
          <ul className="space-y-4">
            {project.impact.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-text/90"
              >
                <CheckCircle2
                  className="h-5 w-5 text-accent shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* 7. Key Learning Pull-Quote Block */}
      <Reveal delay={0.3} className="mb-14">
        <blockquote className="relative overflow-hidden rounded-2xl border border-accent/35 bg-surface-2/70 p-6 sm:p-10">
          <Quote
            className="h-8 w-8 text-accent/40 mb-4"
            aria-hidden="true"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-2">
            Key Learning
          </p>
          <p className="font-serif text-lg sm:text-xl leading-relaxed text-text">
            “{project.keyLearning}”
          </p>
        </blockquote>
      </Reveal>

      {/* 8. Tech Stack Grouped by Layer */}
      <Reveal delay={0.35} className="mb-14">
        <section aria-labelledby="tech-stack-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-2">
            Implementation
          </p>
          <h2
            id="tech-stack-heading"
            className="font-serif text-2xl sm:text-3xl font-bold text-text mb-6"
          >
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {project.stack.map((group) => (
              <div
                key={group.layer}
                className="rounded-xl border border-border bg-wood-card p-5"
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                  {group.layer}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 9. Optional Live Site Button (rendered only when liveUrl exists and is confirmed) */}
      {project.liveUrl && project.liveUrlConfirmed && (
        <Reveal delay={0.4} className="mb-14">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg hover:bg-accent-deep transition-colors"
          >
            Visit Live Site
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      )}

      {/* 10. Previous / Next Project Navigation */}
      <Reveal delay={0.45}>
        <nav
          aria-label="Adjacent projects"
          className="grid grid-cols-1 gap-4 border-t border-border pt-10 sm:grid-cols-2"
        >
          {prev && (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-5 hover:border-accent transition-colors"
            >
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted group-hover:text-accent">
                <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                Previous Project
              </span>
              <span className="mt-2 font-serif text-xl font-semibold text-text">
                {prev.title}
              </span>
            </Link>
          )}

          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-5 text-left sm:text-right hover:border-accent transition-colors"
            >
              <span className="inline-flex items-center sm:justify-end gap-1.5 text-xs uppercase tracking-wider text-muted group-hover:text-accent">
                Next Project
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="mt-2 font-serif text-xl font-semibold text-text">
                {next.title}
              </span>
            </Link>
          )}
        </nav>
      </Reveal>
    </article>
  );
}