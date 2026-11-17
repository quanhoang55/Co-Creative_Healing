import type { ReactNode } from "react";
import type { Photo as PhotoData, PhotoRatio } from "../data/site";

/**
 * The four-leaf clover mark: two terracotta leaves, two sage leaves,
 * and an earth-ink stem. Assets are pre-trimmed with a transparent
 * background so the mark sits cleanly on cream and colored bands.
 */
export function CloverMark({
  className = "",
  title = "Co-Creative Healing four-leaf clover mark",
}: {
  className?: string;
  title?: string;
}) {
  const decorative = title.length === 0;
  return (
    <img
      className={className}
      src="/logo.png"
      alt={decorative ? "" : title}
      aria-hidden={decorative ? true : undefined}
      decoding="async"
    />
  );
}

export function Photo({
  photo,
  ratio = "landscape",
  tone = "sage",
  priority = false,
}: {
  photo: PhotoData;
  ratio?: PhotoRatio;
  tone?: "sage" | "jute" | "cream";
  priority?: boolean;
}) {
  return (
    <figure className={`photo photo--${ratio} photo--${tone}`}>
      <div className="photo-frame">
        <img
          src={photo.src}
          alt={photo.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          style={photo.focus ? { objectPosition: photo.focus } : undefined}
        />
      </div>
      <figcaption>
        <span className="photo-caption-text">{photo.description}</span>
      </figcaption>
    </figure>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function Heading({
  eyebrow,
  title,
  lead,
  children,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`heading heading--${align} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {lead && <p className="heading-lead">{lead}</p>}
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  aside,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  aside?: ReactNode;
}) {
  return (
    <div className="section-head">
      <Heading eyebrow={eyebrow} title={title} />
      <div className="section-head-aside">
        {lead && <p>{lead}</p>}
        {aside}
      </div>
    </div>
  );
}
