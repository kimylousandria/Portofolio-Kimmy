"use client";

import { useState } from "react";
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | ProjectCategory
  >("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-6 py-24 sm:py-32 border-t border-border"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3">
          04 / Engineering Portfolio
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2
              id="projects-heading"
              className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-text"
            >
              Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted">
              Select any case study to inspect its architecture, problem space,
              and outcomes.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2"
          >
            {projectCategories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={active}
                  className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                    active
                      ? "bg-accent text-bg font-semibold"
                      : "border border-border bg-surface text-muted hover:border-accent/50 hover:text-text"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, idx) => (
          <Reveal
            key={project.slug}
            delay={0.06 * idx}
            className={
              selectedCategory === "All" && idx === 0
                ? "md:col-span-2 lg:col-span-2"
                : ""
            }
          >
            <ProjectCard
              project={project}
              featured={selectedCategory === "All" && idx === 0}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}