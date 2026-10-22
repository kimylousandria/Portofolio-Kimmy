import Image from "next/image";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { getLeadershipAndTeachingCount } from "@/data/experience";
import { Reveal } from "@/components/Reveal";

export function About() {
  const leadershipAndTeachingCount = getLeadershipAndTeachingCount();
  const gpaNumber = site.gpa.split("/")[0];

  const stats = [
    { value: `${gpaNumber} GPA`, sublabel: `Scale ${site.gpa}` },
    {
      value: `${projects.length} Projects`,
      sublabel: "Web, AI, Desktop, AR & Community",
    },
    {
      value: `${leadershipAndTeachingCount} Leadership & Teaching Roles`,
      sublabel: "HIMTI & BINUS University",
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl px-6 py-24 sm:py-32 border-t border-border"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3">
              01 / Profile
            </p>
            <h2
              id="about-heading"
              className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-text mb-8"
            >
              About
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-text/90">
              {site.about}
            </p>
          </Reveal>

          {/* Computed Stat Strip */}
          <Reveal delay={0.15}>
            <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-xl border border-border bg-wood-card p-5"
                >
                  <dt className="font-serif text-xl sm:text-2xl font-bold text-accent">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted">{stat.sublabel}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Secondary Casual Portrait */}
        <div className="lg:col-span-5">
          <Reveal delay={0.2}>
            <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={site.portraits.casual.src}
                  alt={site.portraits.casual.alt}
                  fill
                  sizes="(max-width: 1024px) 80vw, 380px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}