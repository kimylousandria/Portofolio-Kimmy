"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Download, ArrowDownRight } from "lucide-react";
import { site } from "@/data/site";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "18%"]
  );
  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1.05, 1.05] : [1.05, 1.14]
  );

  const nameWords = site.name.toUpperCase().split(" ");

  return (
    <section
      ref={ref}
      aria-label="Introduction"
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden pt-16 pb-20 px-6"
    >
      {/* Heavily darkened (>=85%) & blurred parallax background layer */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY, scale: bgScale }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <Image
          src={site.portraits.heroBg.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover blur-xl opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/90 via-bg/85 to-bg" />
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* Mobile portrait (above name) */}
        <div className="flex justify-center lg:hidden">
          <div className="relative h-36 w-28 overflow-hidden rounded-t-full border border-accent/40 bg-surface shadow-2xl">
            <Image
              src={site.portraits.formal.src}
              alt={site.portraits.formal.alt}
              fill
              priority
              sizes="112px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Left / Center Text Column */}
        <div className="lg:col-span-8 text-center lg:text-left">
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-sm uppercase tracking-[0.22em] text-accent font-medium mb-3"
          >
            {site.role}
          </motion.p>

          <h1
            className="font-serif font-bold tracking-tight text-text leading-[0.94] mb-5"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
          >
            {nameWords.map((word, idx) => (
              <motion.span
                key={word}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.95,
                  delay: prefersReducedMotion ? 0 : 0.12 * idx,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: prefersReducedMotion ? 0 : 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif italic text-lg sm:text-xl md:text-2xl text-text/90 mb-6"
          >
            “{site.tagline}”
          </motion.p>

          {/* Minimalist offerings row separated by thin bronze dividers */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: prefersReducedMotion ? 0 : 0.52,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 text-xs sm:text-sm tracking-wide text-muted mb-8"
          >
            {site.offerings.map((offering, index) => (
              <span key={offering} className="inline-flex items-center">
                <span>{offering}</span>
                {index < site.offerings.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="mx-3 h-3.5 w-px bg-accent/40"
                  />
                )}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: prefersReducedMotion ? 0 : 0.64,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg shadow-lg hover:bg-accent-deep transition-colors"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-6 py-3 text-sm font-medium text-text hover:border-accent hover:text-accent transition-colors"
            >
              View Projects
              <ArrowDownRight className="h-4 w-4 text-accent" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* Desktop Portrait in Arched Frame */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          // PENAMBAHAN UTAMA: lg:translate-x-12 dan xl:translate-x-20
          className="hidden lg:flex lg:col-span-4 justify-end lg:translate-x-12 xl:translate-x-15"
        >
          <div className="relative h-[440px] w-[320px] overflow-hidden rounded-t-full border border-accent/40 bg-surface p-2 shadow-2xl">
            <div className="relative h-full w-full overflow-hidden rounded-t-full">
              <Image
                src={site.portraits.formal.src}
                alt={site.portraits.formal.alt}
                fill
                priority
                sizes="320px"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator positioned above the bottom contact bar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
        </span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-accent to-transparent"
        />
      </div>
    </section>
  );
}