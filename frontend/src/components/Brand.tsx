import type { ReactNode } from "react";
import type { PhotoRatio } from "../data/site";

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
      width={417}
      height={510}
      alt={decorative ? "" : title}
      aria-hidden={decorative ? true : undefined}
      decoding="async"
    />
  );
}

export function PhotoPlaceholder({
  description,
  ratio = "landscape",
  tone = "sage",
}: {
  description: string;
  ratio?: PhotoRatio;
  tone?: "sage" | "jute" | "cream";
}) {
  return (
    <figure className={`photo photo--${ratio} photo--${tone}`}>
      <div className="photo-frame">
        <CloverMark className="photo-mark" title="Photo placeholder" />
        <span className="photo-stamp">Photoshoot space</span>
      </div>
      <figcaption>
        <span className="photo-caption-label">Photo space</span>
        <span className="photo-caption-text">{description}</span>
        <em>December 2026 · to be photographed</em>
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
