import Image from "next/image";

type SafeImageProps = {
  src?: string;
  alt: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function SafeImage({
  src,
  alt,
  fallbackTitle,
  fallbackSubtitle = "Screenshots coming soon",
  fill = true,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
  priority = false,
  className = "object-cover",
}: SafeImageProps) {
  const hasValidSrc = Boolean(src && src.trim().length > 0);

  if (!hasValidSrc) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-surface-2 via-surface to-bg p-6 text-center border border-border"
      >
        <div className="mb-2 h-px w-10 bg-accent/50" aria-hidden="true" />
        <p className="font-serif text-lg font-semibold text-text">
          {fallbackTitle || alt}
        </p>
        {fallbackSubtitle && (
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
            {fallbackSubtitle}
          </p>
        )}
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src!}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src!}
      alt={alt}
      width={width || 1200}
      height={height || 800}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}