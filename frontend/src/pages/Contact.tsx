import { useContext } from "react";
import { privacy } from "../data/site";
import { CloverMark, Heading, Section } from "../components/Brand";
import { CompactHero } from "../components/PageHero";
import { Newsletter } from "../components/Chrome";
import { RequestForm } from "../components/Forms";
import { OverlayContext } from "../components/OverlayContext";

export function Contact() {
  const actions = useContext(OverlayContext);

  return (
    <>
      <CompactHero
        eyebrow="Connect & request a session"
        title="Start where you are."
        copy="Every session begins with a conversation. Choose a short call first, or send a note about what brings you here. There is no script to follow."
        note={`${privacy} No street address is published and no map is embedded.`}
      />

      <Section className="contact-section contact-desk">
        <div className="contact-grid">
          <article className="talk-panel">
            <CloverMark className="talk-panel-mark" title="" />
            <p className="eyebrow">Let's talk first</p>
            <h2>A short conversation, no pressure.</h2>
            <p>
              A free, brief voice-to-voice call is often the easiest way to see
              whether we are a match. Bring your questions, your hesitation, or
              just a sense that something needs to change.
            </p>
            <ul className="talk-list">
              <li>About ten minutes</li>
              <li>No intake required</li>
              <li>You can decide afterward</li>
            </ul>
            <div className="talk-actions">
              <button
                className="button primary"
                type="button"
                onClick={actions.talk}
              >
                Let's talk first
              </button>
              <a className="text-link" href="tel:+18005550199">
                Or call (800) 555-0199
              </a>
            </div>
            <p className="micro-note">
              Demo phone number · final contact details to confirm before launch.
            </p>
          </article>

          <article className="request-panel" id="request">
            <p className="eyebrow">Request a session</p>
            <h2>Make room for yourself.</h2>
            <p className="request-intro">
              Send a short intake and a preferred time. This is a request, not a
              confirmed booking — Stephanie replies personally to see whether the
              work is a match.
            </p>
            <RequestForm />
          </article>
        </div>
      </Section>

      <Section className="sage-section privacy-section">
        <div className="privacy-card">
          <span className="privacy-mark" aria-hidden="true">
            ✦
          </span>
          <div>
            <p className="eyebrow">Location & privacy</p>
            <h2>Upper Ojai, California.</h2>
            <p>
              Exact location shared once your session is confirmed. The studio is
              a private home space. To protect the privacy of the household and
              the people who visit, no street address, map, or identifying
            exterior photo appears on this site.
            </p>
          </div>
        </div>
      </Section>

      <Section className="community-section">
        <div className="community-grid">
          <div>
            <Heading eyebrow="Stay in touch" title="Seasonal notes, not noise.">
              <p>
                Occasional news about offerings, mentorship, community gatherings,
                and the Ojai Hundred interviews and podcasts. No weekly inbox
                filling.
              </p>
            </Heading>
            <div className="social-links social-links--large">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                Facebook <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="community-news">
            <Newsletter />
          </div>
        </div>
      </Section>
    </>
  );
}
