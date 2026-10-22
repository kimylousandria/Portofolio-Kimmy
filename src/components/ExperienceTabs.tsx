"use client";

import { useState, useRef, type KeyboardEvent } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  experience,
  experienceCategories,
  type ExperienceCategory,
} from "@/data/experience";
import { Reveal } from "@/components/Reveal";

export function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState<ExperienceCategory>("Leadership");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  const filteredItems = experience.filter(
    (item) => item.category === activeTab
  );

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const nextIndex =
      event.key === "ArrowRight"
        ? (index + 1) % experienceCategories.length
        : (index - 1 + experienceCategories.length) %
          experienceCategories.length;
    setActiveTab(experienceCategories[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-5xl px-6 py-24 sm:py-32 border-t border-border"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3">
          03 / Track Record
        </p>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
          <h2
            id="experience-heading"
            className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-text"
          >
            Experience
          </h2>

          {/* Accessible Tablist */}
          <div
            role="tablist"
            aria-label="Experience Categories"
            className="inline-flex flex-wrap gap-2 rounded-full border border-border bg-surface p-1.5"
          >
            {experienceCategories.map((category, idx) => {
              const isSelected = activeTab === category;
              return (
                <button
                  key={category}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  role="tab"
                  id={`tab-${idx}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${idx}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveTab(category)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`relative rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                    isSelected
                      ? "text-bg font-semibold"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="experience-tab-pill"
                      transition={{
                        duration: prefersReducedMotion ? 0 : 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0 rounded-full bg-accent"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Vertical Timeline */}
      <div
        role="tabpanel"
        id={`panel-${experienceCategories.indexOf(activeTab)}`}
        aria-labelledby={`tab-${experienceCategories.indexOf(activeTab)}`}
        className="relative border-l border-border pl-6 sm:pl-10 space-y-10"
      >
        {filteredItems.map((item, idx) => (
          <motion.article
            key={item.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: prefersReducedMotion ? 0 : idx * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative rounded-2xl border border-border bg-wood-card p-6 sm:p-8"
          >
            {/* Bronze timeline node */}
            <span
              aria-hidden="true"
              className="absolute -left-[31px] sm:-left-[47px] top-8 h-3 w-3 rounded-full border-2 border-accent bg-bg"
            />

            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between mb-4">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-text">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-accent">
                  {item.organization}
                </p>
              </div>
              <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted shrink-0">
                {item.date}
              </span>
            </div>

            <ul className="space-y-2.5 text-sm sm:text-base text-text/90 list-disc pl-5 marker:text-accent">
              {item.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>

            {item.projectLink && (
              <div className="mt-5 pt-4 border-t border-border">
                <Link
                  href={item.projectLink.href}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent hover:text-accent-deep transition-colors"
                >
                  {item.projectLink.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}