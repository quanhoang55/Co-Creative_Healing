import type { ReactNode } from "react";
import type { Photo as PhotoData, PhotoRatio } from "../data/site";
import { CloverMark, Photo } from "./Brand";
import { DualCtas } from "./Chrome";

type HeroCopy = {
  eyebrow: string;
  title: string;
  tagline?: string;
  copy: string;
  note?: string;
  children?: ReactNode;
};

type PhotoHero = HeroCopy & {
  photo: PhotoData;
  ratio?: PhotoRatio;
  tone?: "sage" | "jute" | "cream";
};

type Fact = { label: string; value: string };

function HeroFacts({
  facts,
  className = "",
}: {
  facts: Fact[];
  className?: string;
}) {
  return (
    <dl className={`hero-facts ${className}`}>
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Home: the original split opening, kept as the homepage's signature. */
export function PageHero({
  eyebrow,
  title,
  tagline,
  copy,
  photo,
  ratio = "portrait",
  tone = "sage",
  note,
  children,
}: {
  eyebrow: string;
  title: string;
  tagline?: string;
  copy: string;
  photo?: PhotoData;
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
        {photo && (
          <div className="page-hero-media">
            <Photo photo={photo} ratio={ratio} tone={tone} priority />
          </div>
        )}
        {!photo && <CloverMark className="hero-watermark" title="" />}
      </div>
    </section>
  );
}

/** Sessions: a centered editorial opening with a facts ledger beneath. */
export function CenteredHero({
  eyebrow,
  title,
  tagline,
  copy,
  note,
  facts,
  children,
}: HeroCopy & { facts?: Fact[] }) {
  return (
    <section className="page-hero page-hero--centered">
      <div className="wrap">
        <div className="hero-center">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {tagline && <p className="tagline">{tagline}</p>}
          <span className="rule" aria-hidden="true" />
          <p className="lede">{copy}</p>
          {children ?? <DualCtas className="ctas--center" />}
          {note && <p className="hero-note hero-note--center">{note}</p>}
        </div>
        {facts && <HeroFacts facts={facts} />}
      </div>
    </section>
  );
}

/** Home & Life Transitions: title, a wide threshold image, then a quiet copy row. */
export function BannerHero({
  eyebrow,
  title,
  copy,
  note,
  photo,
  ratio = "wide",
  tone = "jute",
  children,
}: PhotoHero) {
  return (
    <section className="page-hero page-hero--banner">
      <div className="wrap">
        <div className="banner-title">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="banner-media">
          <Photo photo={photo} ratio={ratio} tone={tone} priority />
        </div>
        <div className="banner-copy">
          <div>
            <p className="lede">{copy}</p>
            {note && <p className="hero-note">{note}</p>}
          </div>
          {children ?? <DualCtas />}
        </div>
      </div>
    </section>
  );
}

/** Collective: a deep sage statement band built around the number 100. */
export function StatementHero({
  eyebrow,
  title,
  tagline,
  copy,
  note,
  numeral,
  numeralLabel,
  children,
}: HeroCopy & { numeral: string; numeralLabel: string }) {
  return (
    <section className="page-hero page-hero--statement">
      <div className="wrap statement-grid">
        <div className="statement-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {tagline && <p className="tagline">{tagline}</p>}
          <span className="rule" aria-hidden="true" />
          <p className="lede">{copy}</p>
          {children ?? <DualCtas />}
          {note && <p className="hero-note">{note}</p>}
        </div>
        <div className="statement-number" aria-hidden="true">
          <CloverMark className="statement-mark" title="" />
          <span className="statement-numeral">{numeral}</span>
          <span className="statement-label">{numeralLabel}</span>
        </div>
      </div>
    </section>
  );
}

/** About: a portrait-led profile with a credentials ledger. */
export function MirrorHero({
  eyebrow,
  title,
  tagline,
  copy,
  note,
  photo,
  ratio = "portrait",
  tone = "sage",
  facts,
  children,
}: PhotoHero & { facts?: Fact[] }) {
  return (
    <section className="page-hero page-hero--mirror">
      <div className="wrap">
        <div className="mirror-grid">
          <div className="mirror-media">
            <Photo photo={photo} ratio={ratio} tone={tone} priority />
          </div>
          <div className="mirror-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            {tagline && <p className="tagline">{tagline}</p>}
            <span className="rule" aria-hidden="true" />
            <p className="lede">{copy}</p>
            {children ?? <DualCtas />}
            {note && <p className="hero-note">{note}</p>}
          </div>
        </div>
        {facts && <HeroFacts facts={facts} className="hero-facts--mirror" />}
      </div>
    </section>
  );
}

/** Mentorship: a full-width title with a smaller portrait tucked alongside the copy. */
export function StackedHero({
  eyebrow,
  title,
  tagline,
  copy,
  note,
  photo,
  ratio = "portrait",
  tone = "sage",
  children,
}: PhotoHero) {
  return (
    <section className="page-hero page-hero--stacked">
      <div className="wrap">
        <div className="stacked-title">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="stacked-grid">
          <div className="stacked-copy">
            {tagline && <p className="tagline">{tagline}</p>}
            <span className="rule" aria-hidden="true" />
            <p className="lede">{copy}</p>
            {children ?? <DualCtas />}
            {note && <p className="hero-note">{note}</p>}
          </div>
          <div className="stacked-media">
            <Photo photo={photo} ratio={ratio} tone={tone} priority />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Contact: a compact, utility-first opening that gets out of the form's way. */
export function CompactHero({
  eyebrow,
  title,
  copy,
  note,
  children,
}: HeroCopy) {
  return (
    <section className="page-hero page-hero--compact">
      <div className="wrap compact-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="compact-copy">
          <p className="lede">{copy}</p>
          {children ?? <DualCtas />}
          {note && <p className="hero-note">{note}</p>}
        </div>
      </div>
    </section>
  );
}
