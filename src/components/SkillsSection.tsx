import { skills } from "@/data/skills";
import { Reveal } from "@/components/Reveal";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-6xl px-6 py-24 sm:py-32 border-t border-border"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3">
          05 / Capabilities
        </p>
        <h2
          id="skills-heading"
          className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-text mb-12"
        >
          Skills & Interests
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, idx) => (
          <Reveal key={group.category} delay={0.07 * idx}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-wood-card p-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-accent mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs sm:text-sm font-medium text-text"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}