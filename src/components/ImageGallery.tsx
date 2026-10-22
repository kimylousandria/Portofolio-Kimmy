"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";
import { Lightbox } from "@/components/Lightbox";

type ImageGalleryProps = {
  title: string;
  images: { src: string; alt: string }[];
};

export function ImageGallery({ title, images }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (images.length === 0) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface">
        <SafeImage
          src=""
          alt={`${title} placeholder cover`}
          fallbackTitle={title}
          fallbackSubtitle="Screenshots coming soon"
        />
      </div>
    );
  }

  const activeImage = images[activeIndex] || images[0];

  return (
    <div className="space-y-4">
      {/* Main Fixed-Aspect Frame with object-contain */}
      <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Open ${activeImage.alt} in fullscreen lightbox`}
          className="relative h-full w-full cursor-zoom-in text-left"
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority={activeIndex === 0}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-contain p-2 sm:p-4 transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-bg/85 px-3 py-1.5 text-xs font-medium text-accent backdrop-blur-md">
            <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
            Expand
          </span>
        </button>
      </div>

      {/* Caption */}
      <p className="text-xs sm:text-sm text-muted text-center">
        {activeImage.alt}
      </p>

      {/* Thumbnail Rail */}
      {images.length > 1 && (
        <div
          role="tablist"
          aria-label={`${title} screenshots`}
          className="flex items-center gap-3 overflow-x-auto pb-2"
        >
          {images.map((img, index) => {
            const isSelected = index === activeIndex;
            return (
              <button
                key={img.src}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`View screenshot ${index + 1}: ${img.alt}`}
                onClick={() => setActiveIndex(index)}
                className={`relative h-16 w-28 sm:h-20 sm:w-36 shrink-0 overflow-hidden rounded-lg border transition-all ${
                  isSelected
                    ? "border-accent ring-2 ring-accent/40 opacity-100"
                    : "border-border opacity-55 hover:opacity-90"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}

      {lightboxOpen && (
        <Lightbox
          images={images}
          activeIndex={activeIndex}
          onClose={() => setLightboxOpen(false)}
          onChangeIndex={setActiveIndex}
        />
      )}
    </div>
  );
}