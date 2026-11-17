import { photos } from "../data/site";
import { CloverMark, Photo, Section, SectionHead } from "../components/Brand";
import { StatementHero } from "../components/PageHero";
import { Closing, DualCtas, Newsletter } from "../components/Chrome";
import { ApplicationForm } from "../components/Forms";

export function Collective() {
  return (
    <>
      <StatementHero
        eyebrow="The Ojai Hundred Healer Collective"
        title="Care for the people who care for everyone else."
        tagline="100 complimentary sessions. One healer at a time."
        copy="The people who hold space for others are often the last to receive it. This collective is a standing invitation to be the one on the table for a change."
        note="Applications are read personally · Upper Ojai, California"
        numeral="100"
        numeralLabel="complimentary sessions"
      />

      <section className="stat-strip" aria-label="Collective at a glance">
        <div className="wrap stat-grid">
          <div>
            <span>100</span>
            <p>complimentary sessions</p>
          </div>
          <div>
            <span>01</span>
            <p>short conversation to begin</p>
          </div>
          <div>
            <span>∞</span>
            <p>respect for the work you already do</p>
          </div>
        </div>
      </section>

      <Section>
        <div className="split split--story story-flip">
          <div>
            <p className="eyebrow">Why I'm doing this</p>
            <h2>The pond is big enough.</h2>
            <p>
              Healing bodywork has been Stephanie's calling since 1998. Her years
              in holistic real estate, her time at Esalen Institute, and her
              travels kept teaching her the same lesson: healers do better when
              they learn alongside one another.
            </p>
            <p>
              She fell in love with Ojai as a kind of Japanese koi pond — a place
              where many big fish can collaborate and thrive rather than compete
              for the same small patch of water.
            </p>
            <p className="inline-quote">
              “There is room for your gift, and room for mine.”
            </p>
            <p className="micro-note">
              Cohort size, eligibility, selection, and timing are being confirmed
              with Stephanie before the collective opens.
            </p>
          </div>
          <Photo
            photo={photos.movement}
            ratio="portrait"
            tone="sage"
          />
        </div>
      </Section>

      <Section className="sage-section">
        <SectionHead
          eyebrow="How it works"
          title="Three steps, no performance required."
          lead="This is not a grant application or a networking pitch. It is a simple way of making sure the sessions land with the people who need them."
        />
        <div className="steps steps--large">
          <div>
            <span className="step-number">01</span>
            <h3>Apply</h3>
            <p>
              Share a little about your practice, where you are, and what draws
              you to the collective.
            </p>
          </div>
          <div>
            <span className="step-number">02</span>
            <h3>A conversation</h3>
            <p>
              We talk briefly to see whether this is a good match and what kind of
              session would serve you.
            </p>
          </div>
          <div>
            <span className="step-number">03</span>
            <h3>Your sessions</h3>
            <p>
              You come in, receive, and have space to be the one who is cared for.
              No reciprocity required.
            </p>
          </div>
        </div>
      </Section>

      <Section className="jute-section voices">
        <SectionHead
          eyebrow="Voices from the collective"
          title="The interviews will live here."
          lead="As practitioners receive their sessions, we'll record short conversations about their work, their communities, and what it felt like to be on the receiving end."
        />
        <div className="video-slots">
          {[1, 2, 3].map((number) => (
            <div className="video-slot" key={number}>
              <div className="video-frame">
                <span className="play" aria-hidden="true">
                  ▶
                </span>
                <CloverMark className="video-mark" title="" />
              </div>
              <p className="video-label">Practitioner interview 0{number}</p>
              <p className="video-note">To be recorded</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="apply-grid">
          <ApplicationForm />
          <aside className="apply-aside">
            <p className="eyebrow">Stay close</p>
            <h2>Not ready to apply?</h2>
            <p>
              Join the newsletter for collective news, interviews, podcasts, and
              seasonal offerings. You can also start with a conversation about
              your own care.
            </p>
            <Newsletter />
            <DualCtas className="ctas--stacked" />
          </aside>
        </div>
      </Section>

      <Closing
        title="There is room for your healing, too."
        copy="You spend your days tending other people. This is a place to be tended."
      />
    </>
  );
}
