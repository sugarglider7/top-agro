import type { Locale } from "@/lib/i18n";
import type { Photo } from "@/lib/images";

/**
 * Art-directed picture: mobile variant below 640px, unified warm grade,
 * explicit dimensions to avoid layout shift.
 */
export function Pic({
  photo,
  locale,
  className = "",
  imgClassName = "",
  sizes = "100vw",
  priority = false,
  fill = false,
}: {
  photo: Photo;
  locale: Locale;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Absolutely fill the nearest positioned ancestor. */
  fill?: boolean;
}) {
  return (
    <div
      className={`photo-warm ${fill ? "absolute inset-0" : "relative"} ${className}`}
    >
      <picture>
        {photo.mobileSrc && (
          <source media="(max-width: 640px)" srcSet={photo.mobileSrc} />
        )}
        <img
          src={photo.src}
          alt={photo.alt[locale]}
          width={photo.width}
          height={photo.height}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : undefined}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </picture>
    </div>
  );
}

/** Authentic legacy-site asset, always presented as archive material. */
export function ArchiveImage({
  src,
  width,
  height,
  alt,
  caption,
  className = "",
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="photo-archive border border-ink/15 bg-bone-100 p-2 shadow-[0_10px_30px_-18px_rgba(28,26,18,0.5)] sm:p-3">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="w-full"
          style={{ imageRendering: "auto" }}
        />
      </div>
      {caption && (
        <figcaption className="eyebrow !text-[0.6rem] !tracking-[0.16em] mt-3 text-ink/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
