import { education } from "@/data/education";
import { Reveal } from "@/components/Reveal";

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mx-auto max-w-5xl px-6 py-24 sm:py-32 border-t border-border"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3">
          06 / Academic Foundation
        </p>
        <h2
          id="education-heading"
          className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-text mb-12"
        >
          Education
        </h2>
      </Reveal>

      <div className="space-y-6">
        {education.map((item, idx) => (
          <Reveal key={item.institution} delay={0.1 * idx}>
            <div className="rounded-2xl border border-border bg-wood-card p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-text">
                    {item.institution}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-accent mt-1">
                    {item.degree}
                    {item.location ? ` — ${item.location}` : ""}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {item.gpa && (
                    <span className="rounded-full border border-accent/40 bg-surface-2 px-3 py-1 text-xs font-semibold text-accent">
                      GPA {item.gpa}
                    </span>
                  )}
                  <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                    {item.date}
                  </span>
                </div>
              </div>

              {item.coursework && item.coursework.length > 0 && (
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-text/90"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}