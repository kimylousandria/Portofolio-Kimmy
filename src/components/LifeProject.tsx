import { lifeProject } from "@/data/lifeProject";
import { Reveal } from "@/components/Reveal";
import { SafeImage } from "@/components/SafeImage";

export function LifeProject() {
  return (
    <section
      id="life-project"
      aria-labelledby="life-project-heading"
      className="mx-auto max-w-6xl px-6 py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-3xl text-center mb-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3">
            02 / Philosophy
          </p>
          <h2
            id="life-project-heading"
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-text mb-8"
          >
            {lifeProject.heading}
          </h2>
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-text/90">
            {lifeProject.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Bento Photo Mosaic */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {lifeProject.mosaic.map((item, idx) => {
          const isWide = item.span === "wide";
          return (
            <Reveal
              key={item.caption}
              delay={0.08 * idx}
              className={isWide ? "sm:col-span-2 lg:col-span-2" : "col-span-1"}
            >
              <figure className="group relative h-72 sm:h-80 w-full overflow-hidden rounded-2xl border border-border bg-surface">
                <div className="h-full w-full transition-transform duration-1000 ease-out group-hover:scale-105">
                  <SafeImage
                    src={item.src}
                    alt={item.alt}
                    fallbackTitle={item.caption}
                    fallbackSubtitle="Archive Moment"
                    sizes={
                      isWide
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                    className="object-cover"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/25 to-transparent transition-opacity duration-500"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-6">
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.22em] text-accent">
                      Milestone
                    </span>
                    <span className="font-serif text-xl font-semibold text-text">
                      {item.caption}
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}