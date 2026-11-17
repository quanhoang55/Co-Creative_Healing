import type { ReactNode } from "react";
import type { PhotoRatio } from "../data/site";
import { CloverMark, PhotoPlaceholder } from "./Brand";
import { DualCtas } from "./Chrome";

export function PageHero({
  eyebrow,
  title,
  tagline,
  copy,
  photo = false,
  photoDescription,
  ratio = "portrait",
  tone = "sage",
  note,
  children,
}: {
  eyebrow: string;
  title: string;
  tagline?: string;
  copy: string;
  photo?: boolean;
  photoDescription?: string;
  ratio?: PhotoRatio;
  tone?: "sage" | "jute" | "cream";
  note?: string;
  children?: ReactNode;
}) {
  return (
    <section className={`page-hero ${photo ? "" : "page-hero--solo"}`}>
      <div className="wrap page-hero-grid">
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {tagline && <p className="tagline">{tagline}</p>}
          <span className="rule" aria-hidden="true" />
          <p className="lede">{copy}</p>
          {note && <p className="hero-note">{note}</p>}
          {children ?? <DualCtas />}
        </div>
        {photo && photoDescription && (
          <div className="page-hero-media">
            <PhotoPlaceholder
              description={photoDescription}
              ratio={ratio}
              tone={tone}
            />
          </div>
        )}
        {!photo && <CloverMark className="hero-watermark" title="" />}
      </div>
    </section>
  );
}
