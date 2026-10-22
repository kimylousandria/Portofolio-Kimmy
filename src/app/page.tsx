import { site } from "@/data/site";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { LifeProject } from "@/components/LifeProject";
import { ExperienceTabs } from "@/components/ExperienceTabs";
import { ProjectsGrid } from "@/components/ProjectGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  const sameAs = [site.github.url, site.linkedin.url].filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.about,
    email: `mailto:${site.email}`,
    telephone: site.phoneTel,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Bina Nusantara University (BINUS)",
    },
    sameAs,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-bg/75 backdrop-blur-md">
        <nav
          aria-label="Primary Navigation"
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        >
          <a
            href="#"
            className="font-serif text-lg font-semibold tracking-tight text-text hover:text-accent transition-colors"
          >
            KYL<span className="text-accent">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted">
            <li>
              <a href="#about" className="hover:text-accent transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#life-project"
                className="hover:text-accent transition-colors"
              >
                Life Project
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-accent transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-accent transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-accent transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-accent transition-colors"
              >
                Education
              </a>
            </li>
          </ul>
          <a
            href={site.cv}
            download
            className="rounded-full border border-border bg-surface-2/80 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent hover:border-accent hover:bg-accent hover:text-bg transition-colors"
          >
            Download CV
          </a>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <LifeProject />
        <ExperienceTabs />
        <ProjectsGrid />
        <SkillsSection />
        <EducationSection />
      </main>

      <footer className="border-t border-border bg-surface/60 py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-text mb-6">
              “{site.closingLine}”
            </p>
            <p className="text-sm text-muted mb-8">
              {site.name} — {site.role}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
              <a
                href={`mailto:${site.email}`}
                className="hover:text-accent transition-colors"
              >
                {site.email}
              </a>
              <span className="text-border" aria-hidden="true">
                |
              </span>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                WhatsApp ({site.phoneDisplay})
              </a>
              <span className="text-border" aria-hidden="true">
                |
              </span>
              <a
                href={site.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                GitHub (@{site.github.label})
              </a>
              {site.linkedin.url && (
                <>
                  <span className="text-border" aria-hidden="true">
                    |
                  </span>
                  <a
                    href={site.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </footer>
    </>
  );
}