"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxProps = {
  images: { src: string; alt: string }[];
  activeIndex: number;
  onClose: () => void;
  onChangeIndex: (newIndex: number) => void;
};

export function Lightbox({
  images,
  activeIndex,
  onClose,
  onChangeIndex,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handlePrev = () => {
    onChangeIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onChangeIndex((activeIndex + 1) % images.length);
  };

  useEffect(() => {
    closeButtonRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) handlePrev();
      else handleNext();
    }
    setTouchStartX(null);
  };

  const current = images[activeIndex];
  if (!current) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Project screenshot lightbox"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg/95 backdrop-blur-xl p-4 sm:p-8"
    >
      {/* Top Bar */}
      <div className="flex w-full max-w-6xl items-center justify-between mb-4">
        <p className="text-xs sm:text-sm text-muted">
          Image {activeIndex + 1} of {images.length} —{" "}
          <span className="text-text">{current.alt}</span>
        </p>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="rounded-full border border-border bg-surface p-2.5 text-text hover:border-accent hover:text-accent transition-colors"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Main Image Frame */}
      <div className="relative flex-1 w-full max-w-6xl flex items-center justify-center overflow-hidden rounded-xl border border-border bg-surface/60">
        <div className="relative h-[70vh] w-full">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="95vw"
            className="object-contain p-2 sm:p-4"
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-bg/85 p-3 text-text hover:border-accent hover:text-accent transition-colors"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-bg/85 p-3 text-text hover:border-accent hover:text-accent transition-colors"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}