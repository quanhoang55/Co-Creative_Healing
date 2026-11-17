import { photos } from "../data/site";
import { CloverMark, Heading, PhotoPlaceholder, Section, SectionHead } from "../components/Brand";
import { PageHero } from "../components/PageHero";
import { Closing } from "../components/Chrome";

export function Transitions() {
  return (
    <>
      <PageHero
        eyebrow="Home & Life Transitions"
        title="Homes hold our lives."
        copy="Over the years I've learned to hold space for people not only on the table, but through the big transitions of where and how they live. A home carries memory. So does a lifetime of belongings."
        photo
        photoDescription={photos.transition}
        ratio="portrait"
        tone="jute"
        note="Offered in Upper Ojai and surrounding communities · exact location shared once your session is confirmed."
      />

      <Section>
        <SectionHead
          eyebrow="Three ways I can help"
          title="Support for the spaces between chapters."
          lead="Some transitions are practical, some are ceremonial, and most are both. We begin by listening to what this change means for you, then shape the support around it."
        />

        <div className="offerings">
          <article className="offering">
            <div className="offering-copy">
              <span className="offering-index">01</span>
              <Heading
                eyebrow="House blessings & clearings"
                title="A threshold you can feel."
              >
                <p>
                  After Stephanie cleared and blessed her renovated home, more
                  than thirty-five people came through the open house in two
                  hours — in a rural community where a handful is typical.
                </p>
                <p>
                  A house blessing or clearing can mark a new beginning, release
                  what a space has been holding, and help a home feel like yours.
                  It can be quiet and simple, or include ritual, sound, sage, and
                  candlelight.
                </p>
              </Heading>
            </div>
            <PhotoPlaceholder
              description={photos.transition}
              ratio="portrait"
              tone="sage"
            />
          </article>

          <article className="offering offering--reverse">
            <div className="offering-copy">
              <span className="offering-index">02</span>
              <Heading
                eyebrow="Senior transitions"
                title="A life review, held gently."
              >
                <p>
                  Leaving a long-loved home is not only logistics. Every drawer
                  and photograph carries a chapter. Stephanie walks alongside
                  seniors and their families as they choose what to keep, what to
                  pass on, and what to let go.
                </p>
                <p>
                  The work is practical and deeply human: pacing the process,
                  honoring belongings, and helping the next chosen home feel less
                  like a destination and more like a continuation.
                </p>
              </Heading>
            </div>
            <PhotoPlaceholder
              description={photos.keepsake}
              ratio="portrait"
              tone="cream"
            />
          </article>

          <article className="offering-quiet">
            <CloverMark className="offering-mark" title="" />
            <div>
              <span className="offering-index">03</span>
              <Heading
                eyebrow="End-of-life companioning"
                title="An emerging path, tended with care."
              >
                <p>
                  Stephanie is growing into end-of-life companioning gracefully,
                  as life and spirit guide her. This offering is a quiet presence:
                  company in the questions, space for what wants to be said, and
                  support for the people who are saying goodbye.
                </p>
                <p>
                  If this is what you are looking for, please reach out for a
                  conversation. We will move at the pace that honors you and your
                  family.
                </p>
              </Heading>
            </div>
          </article>
        </div>
      </Section>

      <Section className="sage-section">
        <SectionHead
          eyebrow="How it begins"
          title="No ceremony is one-size-fits-all."
          lead="The shape comes from your home, your history, and what you hope to feel when we are finished."
        />
        <div className="steps">
          <div>
            <span className="step-number">01</span>
            <h3>A conversation</h3>
            <p>
              We talk through the transition, the space, and what kind of support
              would genuinely help.
            </p>
          </div>
          <div>
            <span className="step-number">02</span>
            <h3>Time in the space</h3>
            <p>
              I visit, listen to the home, and we decide together what the ritual
              or process will hold.
            </p>
          </div>
          <div>
            <span className="step-number">03</span>
            <h3>A gentle next step</h3>
            <p>
              You receive a clear plan, a grounded presence, and room to change
              your mind as we go.
            </p>
          </div>
        </div>
      </Section>

      <Section className="transitions-note">
        <div className="split split--wide">
          <Heading eyebrow="A note on privacy" title="Your home stays yours.">
            <p>
              No street address, map, or identifying photo of your home is shared
              publicly. Arrival details are confirmed personally, and photos of a
              space are only used with your explicit permission.
            </p>
          </Heading>
          <Heading eyebrow="A note on fit" title="Practical help, without taking over.">
            <p>
              You remain the decision-maker in your home and in your family. I
              bring hands, attention, and experience — not a checklist of how your
              transition should look.
            </p>
          </Heading>
        </div>
      </Section>

      <Closing
        title="A home change deserves care."
        copy="If you are standing at a threshold, you do not have to cross it alone. Start with a short conversation about what is changing."
      />
    </>
  );
}
