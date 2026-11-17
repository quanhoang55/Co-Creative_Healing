import { photos } from "../data/site";
import { CloverMark, Heading, PhotoPlaceholder, Section, SectionHead } from "../components/Brand";
import { PageHero } from "../components/PageHero";
import { Closing } from "../components/Chrome";

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Stephanie Shrum"
        title="A life shaped by curiosity."
        tagline="Bodyworker & healing facilitator."
        copy="It is with humility and reverence that I do this work. I have been shaped by hands-on care, long study, travel, New Orleans, renovation dust, and the quiet of Ojai."
        photo
        photoDescription={photos.portrait}
        ratio="portrait"
        tone="sage"
        note="Upper Ojai, California · exact location shared once your session is confirmed."
      />

      <Section>
        <SectionHead
          eyebrow="The path here"
          title="The long way to the table."
          lead="I did not set out to become a bodyworker. I set out to understand people. The path kept bringing me back to touch."
        />

        <div className="chapters">
          <article className="chapter">
            <span className="chapter-number">01</span>
            <div>
              <h3>A whisper from my fourteen-year-old self</h3>
              <p>
                The first time I remember really listening with my hands, I was
                fourteen. A family friend had chronic neck pain, and something in
                me knew where to be. I followed it. She looked at me afterward and
                said, “You could do that for a living.” I tucked the words away
                like a clover in a pocket.
              </p>
              <p>
                Touch was already a language in my family. It was how we helped,
                how we sat with someone, how we said the things that did not have
                words yet.
              </p>
            </div>
          </article>

          <article className="chapter">
            <span className="chapter-number">02</span>
            <div>
              <h3>A quarter-life evaluation</h3>
              <p>
                I studied at Tulane University, then worked sixty-hour weeks at
                Hyatt Corporation. On paper it looked like a path. Inside, I was
                keeping a quiet appointment with a different life.
              </p>
              <p>
                I became a day spa manager and went to massage school at night.
                It was the first time in years that my days and my insides matched.
              </p>
            </div>
          </article>

          <article className="chapter">
            <span className="chapter-number">03</span>
            <div>
              <h3>A world of learning</h3>
              <p>
                Shiatsu in 1992. Blue Cliff School in 1998. More than two thousand
                hours of study across Thailand, India, Peru, Mexico, and Europe,
                plus the Process Work Institute and Esalen Institute.
              </p>
              <p>
                The through-line was never a technique. It was learning to listen
                in more languages — to tissue, breath, story, and the intelligence
                that moves underneath all three.
              </p>
            </div>
          </article>
        </div>
      </Section>

      <Section className="jute-section new-orleans">
        <div className="split split--story">
          <PhotoPlaceholder description={photos.camel} ratio="portrait" tone="cream" />
          <div>
            <p className="eyebrow">Chapter 04 · New Orleans</p>
            <h2>Trying on who I wasn't — and keeping what fit.</h2>
            <p>
              New Orleans taught me that the sacred and the playful do not have to
              live in separate rooms. I costumed. I officiated weddings as an
              ordained minister. I helped orchestrate a French Quarter
              bachelorette scavenger hunt and then a spiritual wedding ceremony in
              the same weekend.
            </p>
            <p>
              I also tried on versions of myself that were not mine to keep. That
              was part of the education too. Quirkiness became less of a risk and
              more of a birthright — for me, and now for the people who come to my
              table.
            </p>
            <p className="inline-quote">
              “The sacred and the playful belong in the same life.”
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="chapters chapters--continuation">
          <article className="chapter">
            <span className="chapter-number">05</span>
            <div>
              <h3>Helper, heal thyself</h3>
              <p>
                In 2008 I began deep emotional healing work of my own, including
                intensive group work. It changed how I understand the body, the
                nervous system, and the courage it takes to let someone witness
                you.
              </p>
              <p>
                I do not ask clients to go anywhere I have not been willing to go
                myself. That is the ground the work stands on.
              </p>
            </div>
          </article>

          <article className="chapter">
            <span className="chapter-number">06</span>
            <div>
              <h3>Transformation, in a different form</h3>
              <p>
                Between 2017 and 2018 I renovated homes as a general contractor. I
                learned how a house is held together, and how a space holds the
                people inside it. In 2020 I began a holistic real estate practice.
              </p>
              <p>
                That work led naturally into senior transitions, home clearings,
                and blessing spaces at thresholds, and eventually back to
                full-time healing in Ojai. The table, the house, and the life in
                between finally became one practice.
              </p>
            </div>
          </article>
        </div>
      </Section>

      <Section className="life-section">
        <div className="split split--story">
          <div>
            <p className="eyebrow">Chapter 07 · Beyond the session</p>
            <h2>A full life is part of the medicine.</h2>
            <p>
              I have traveled to five continents, speak fluent French, and get by
              in traveler's Spanish. I am a foodie, a walker, and a devoted
              noticer of small things.
            </p>
            <p>
              My husband is an oil painter. Our studios sit side by side, and we
              walk our white Schnoodle, Max, up Sisar Road to the river. That
              rhythm — art, water, neighborhood, quiet — is not separate from my
              work. It is what fills the well I offer from.
            </p>
            <p className="micro-note">
              The two studios, and a walk with Max, will be photographed for this
              page in December 2026.
            </p>
          </div>
          <PhotoPlaceholder description={photos.max} ratio="portrait" tone="jute" />
        </div>
      </Section>

      <Section className="sage-section credentials-section">
        <div className="split split--wide">
          <div>
            <Heading eyebrow="Credentials & licensing" title="Study, practice, and continuing care.">
              <p>
                Bodywork is a licensed and regulated practice. Stephanie's
                historical credentials are listed here, and current California
                licensing details are available on request while this site is in
                preparation.
              </p>
            </Heading>
            <dl className="credential-list">
              <div>
                <dt>Oregon</dt>
                <dd>LMT #14049</dd>
              </div>
              <div>
                <dt>Louisiana</dt>
                <dd>CE provider #LAP100</dd>
              </div>
              <div>
                <dt>NCBTMB</dt>
                <dd>CE provider #425441-00</dd>
              </div>
              <div>
                <dt>California</dt>
                <dd>Licensing details shared on request</dd>
              </div>
            </dl>
            <p className="micro-note">
              This demo site is not a booking platform and does not verify
              licensure. Credential wording is pending Stephanie's final review.
            </p>
          </div>
          <PhotoPlaceholder
            description={photos.studios}
            ratio="portrait"
            tone="cream"
          />
        </div>
      </Section>

      <Section className="about-quote">
        <CloverMark className="about-quote-mark" title="" />
        <blockquote>
          “What makes you different is not a flaw in the pattern. It is the gift
          the pattern could not make without you.”
        </blockquote>
        <p>— Stephanie</p>
      </Section>

      <Closing
        title="Come as you are. That is the whole invitation."
        copy="If you have read this far, something here may be for you. The next step can be as simple as a short conversation."
      />
    </>
  );
}
