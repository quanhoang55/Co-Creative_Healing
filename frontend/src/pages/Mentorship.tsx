import { useState } from "react";
import { photos, videos } from "../data/site";
import { Heading, Section, SectionHead } from "../components/Brand";
import { StackedHero } from "../components/PageHero";
import { Closing, Newsletter } from "../components/Chrome";
import { InterestForm } from "../components/Forms";

export function Mentorship() {
  const [resumeNote, setResumeNote] = useState(false);

  return (
    <>
      <StackedHero
        eyebrow="Mentorship"
        title="Keep learning, together."
        tagline="For the hands that want to understand more."
        copy="Teaching has always been part of Stephanie's path. She shares the techniques that changed her practice — not as a formula, but as a way of listening more deeply."
        photo={photos.teaching}
        ratio="portrait"
        tone="sage"
        note="No classes are currently scheduled on the calendar."
      />

      <Section>
        <div className="editorial-split">
          <Heading
            eyebrow="The teaching philosophy"
            title="Technique is a way of paying attention."
          />
          <div className="editorial-split-body">
            <p>
              Stephanie has taught bodyworkers across decades and continents. Her
              classes are practical, generous, and grounded in the belief that
              good technique begins with sensing: where is the tissue asking for
              contact, where is the breath, and where is the practitioner rushing
              past what is already happening?
            </p>
            <p>
              You will leave with new tools, but more importantly, with a sharper
              relationship to your own hands and nervous system.
            </p>
            <div className="notice-card">
              <span className="notice-dot" aria-hidden="true" />
              <p className="eyebrow">On the calendar</p>
              <h3>Nothing scheduled right now.</h3>
              <p>
                New classes and mentorship circles are taking shape. Join the
                interest list and you'll hear first when dates are announced.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="jute-section classes-section">
        <SectionHead
          eyebrow="Past continuing education"
          title="Classes that are already in the world."
          lead="These offerings were built for working practitioners and curious bodyworkers. Recordings and future dates are being gathered."
        />
        <div className="class-syllabus">
          <article className="class-entry">
            <span className="class-number">01</span>
            <div>
              <p className="class-meta">NCBTMB-certified continuing education</p>
              <h3>The Magic of Side Lying Massage</h3>
            </div>
            <p className="class-desc">
              A whole-body approach in the side-lying position, with attention to
              the neck, shoulders, arms, hips, IT band, and legs. Particularly
              useful for clients who cannot lie comfortably on their stomach or
              back.
            </p>
          </article>
          <article className="class-entry">
            <span className="class-number">02</span>
            <div>
              <p className="class-meta">Global techniques · Esalen-inspired</p>
              <h3>Around the Table, Around the World</h3>
            </div>
            <p className="class-desc">
              Massage techniques inspired by travels and study across Thailand,
              India, Peru, Mexico, and Europe. Long strokes, rocking, and presence
              woven into a practice that feels like your own.
            </p>
          </article>
        </div>

        <div className="resume-row">
          <button
            className="button outline"
            type="button"
            onClick={() => setResumeNote((value) => !value)}
            aria-expanded={resumeNote}
          >
            Training resume PDF
          </button>
          <div className="resume-note" aria-live="polite">
            {resumeNote ? (
              <p>
                The training resume PDF is being finalized for launch.{" "}
                <span>Check back soon, or join the interest list below.</span>
              </p>
            ) : (
              <p>Historical credentials and class history, at a glance.</p>
            )}
          </div>
        </div>
      </Section>

      <Section className="videos-section">
        <SectionHead
          eyebrow="Video library"
          title="A few things you can practice at home."
          lead="Short, practical demonstrations from Stephanie's teaching library. Watch here, or open each one on YouTube."
        />
        <div className="videos">
          {videos.map(([id, title], index) => (
            <article className="video-card" key={id}>
              <div className="video-embed">
                <iframe
                  loading="lazy"
                  title={title}
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="video-caption">
                <span className="video-index">0{index + 1}</span>
                <h3>{title}</h3>
                <a
                  href={`https://www.youtube.com/watch?v=${id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="sage-section">
        <div className="split split--form">
          <div>
            <Heading
              eyebrow="Mentorship interest list"
              title="Tell me what you want to learn next."
              lead="There are no classes on the calendar yet. Your note helps shape what comes next — and puts you first in line when it does."
            />
            <div className="interest-note">
              <p>
                Continuing education, hands-on practice, and a growing library
                of demonstrations — shared at a pace that leaves room to
                integrate.
              </p>
            </div>
            <Newsletter tone="sage" />
          </div>
          <InterestForm />
        </div>
      </Section>

      <Closing
        title="Learn in a way that stays with you."
        copy="If you want to deepen your hands, your listening, or your confidence, start with a note about where you are."
      />
    </>
  );
}
