import type { ReactNode } from "react";
import type { PhotoRatio } from "../data/site";

/**
 * Four hearts meeting at their points: two terracotta, two sage,
 * with a single earth-ink stem. Drawn on a 200 × 220 field so the
 * mark keeps generous breathing room at every size.
 */
export function CloverMark({
  className = "",
  title = "Co-Creative Healing four-leaf clover mark",
}: {
  className?: string;
  title?: string;
}) {
  const heart =
    "M0 -38C-18 -56 -40 -44 -30 -26C-24 -15 -8 -6 0 0C8 -6 24 -15 30 -26C40 -44 18 -56 0 -38Z";
  const decorative = title.length === 0;
  return (
    <svg
      className={className}
      viewBox="0 0 200 220"
      role={decorative ? "presentation" : "img"}
      aria-label={decorative ? undefined : title}
      aria-hidden={decorative ? true : undefined}
      focusable="false"
    >
      <path
        className="mark-stem"
        d="M1 6C5 38 7 62 20 78"
        fill="none"
        stroke="#4A3F36"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <g transform="translate(100 92) scale(1.32)">
        <path fill="#A35F45" d={heart} />
        <path fill="#8FA176" d={heart} transform="rotate(90)" />
        <path fill="#A35F45" d={heart} transform="rotate(180)" />
        <path fill="#8FA176" d={heart} transform="rotate(270)" />
      </g>
    </svg>
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
