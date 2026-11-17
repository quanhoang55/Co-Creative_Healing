import { useState } from "react";
import { faqs, modalities, photos } from "../data/site";
import { Heading, Photo, Section, SectionHead } from "../components/Brand";
import { CenteredHero } from "../components/PageHero";
import { Closing } from "../components/Chrome";

function Accordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="accordion">
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div className={`accordion-item ${isOpen ? "is-open" : ""}`} key={faq.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="accordion-number">0{index + 1}</span>
                <span>{faq.question}</span>
                <span className="accordion-icon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              aria-hidden={!isOpen}
              className="accordion-panel"
            >
              <div>
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Sessions() {
  return (
    <>
      <CenteredHero
        eyebrow="Sessions"
        title="A session that meets you where you are."
        copy="Every session is co-created. It might happen on the table, on a floor mat, or sitting together in conversation first. We follow what your body is ready to do."
        note="Upper Ojai, California · exact location shared once your session is confirmed."
        facts={[
          { label: "Length", value: "2 hrs or 1 hr 15 min" },
          { label: "Investment", value: "$85–$250 · sliding scale" },
          { label: "Setting", value: "In person · Upper Ojai" },
        ]}
      />

      <Section>
        <SectionHead
          eyebrow="The approach"
          title="Not a protocol. A conversation."
          lead="I work with the whole of you: tissue, breath, nervous system, story, and spirit. Sometimes that looks like deep bodywork; sometimes it looks like slowing down enough to hear what has been waiting."
        />
        <div className="modality-grid">
          {modalities.map((modality, index) => (
            <div className="modality" key={modality}>
              <span>0{index + 1}</span>
              <p>{modality}</p>
            </div>
          ))}
        </div>
        <div className="three photo-row">
          <Photo photo={photos.table} ratio="landscape" />
          <Photo photo={photos.mat} ratio="landscape" tone="jute" />
          <Photo
            photo={photos.conversation}
            ratio="landscape"
            tone="cream"
          />
        </div>
      </Section>

      <Section className="sage-section">
        <div className="split split--wide">
          <Heading eyebrow="How I work" title="Invite, don't force.">
            <p>
              I listen in dialogue with your tissues and your consciousness.
              Change is invited, not pushed, so it has room to become integrated
              rather than temporary. This is a trauma-informed space, and you are
              always in charge of the pace.
            </p>
          </Heading>
          <Heading eyebrow="Who this is for" title="Curious people, fellow healers.">
            <p>
              This work tends to suit open-minded adventurers and people who care
              for others. If you are looking for a practitioner to “just dig in”
              with maximum pressure for the whole session, I am probably not the
              right fit — and I would rather tell you that honestly.
            </p>
          </Heading>
        </div>

        <aside className="promise">
          <div className="promise-mark" aria-hidden="true">
            ✦
          </div>
          <div>
            <p className="eyebrow">The mutual match promise</p>
            <h3>You are always in choice.</h3>
            <p>
              If a session does not feel like a match, say so at any point. We
              will stop there, and you will not owe anything for that session.
              Healing should never require you to override yourself.
            </p>
          </div>
        </aside>
      </Section>

      <Section className="pricing-section">
        <SectionHead
          eyebrow="Time & investment"
          title="Room to choose your tide."
          lead="Both sessions are offered on a sliding scale. Choose the number that is honest for your life right now, and we will work generously within the time we have."
        />
        <div className="price-menu">
          <article className="price-row">
            <span className="pricing-index">01</span>
            <div className="price-row-body">
              <h3>Full session</h3>
              <p>
                Set aside a generous two hours, with about ninety minutes of
                hands-on work. Best when you want to slow down and address the
                whole picture.
              </p>
              <p className="pricing-detail">2 hours · ~90 min hands-on</p>
            </div>
            <p className="price">$165–$250</p>
          </article>
          <article className="price-row">
            <span className="pricing-index">02</span>
            <div className="price-row-body">
              <h3>Half session</h3>
              <p>
                Set aside about an hour and fifteen minutes, with roughly
                forty-five minutes of hands-on work. Best for a specific, acute
                issue.
              </p>
              <p className="pricing-detail">1 hr 15 min · ~45 min hands-on</p>
            </div>
            <p className="price">$85–$125</p>
          </article>
          <aside className="price-note">
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <div>
              <p className="tides">
                Money is like the tides: sometimes high, sometimes low.
              </p>
              <p>
                If your tide is low, choose the lower end of the range. There is
                no application, no proof required, and no conversation needed to
                justify it.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="faq-section" id="faq">
        <div className="faq-layout">
          <div className="faq-intro">
            <Heading eyebrow="Questions" title="Before you arrive." />
            <p>
              Still deciding? A short conversation is often the easiest next
              step. You can also ask anything that is not answered here.
            </p>
            <p className="micro-note">
              Cancellation terms are being confirmed before launch.
            </p>
          </div>
          <Accordion />
        </div>
      </Section>

      <Closing
        title="Let's find the pace that fits."
        copy="Whether this is your first session or your hundredth, you get to arrive exactly as you are today."
      />
    </>
  );
}
