import { Link } from "react-router-dom";
import { photos, privacy, waysToWork } from "../data/site";
import { CloverMark, Heading, PhotoPlaceholder, Section, SectionHead } from "../components/Brand";
import { PageHero } from "../components/PageHero";
import { Closing } from "../components/Chrome";

export function Home() {
  return (
    <>
      <PageHero
        eyebrow="Co-Creative Healing"
        title="All of you is welcome."
        tagline="Come whole. Create together. Leave expanded."
        copy="You are already whole. Together, we create the space for you to leave as a more expanded version of yourself."
        photo
        photoDescription={photos.hero}
        note={privacy}
      />

      <Section className="philosophy">
        <div className="philosophy-inner">
          <CloverMark className="philosophy-mark" />
          <Heading
            align="center"
            eyebrow="The philosophy"
            title="Whole on our own. Something new together."
            lead="I am not here to fix you. I am here to listen with you — to the wisdom your body already carries, and to what becomes possible when two people bring their full experience into the same room."
          />
          <div className="pillars">
            <div>
              <span className="pillar-number">01</span>
              <h3>Already whole</h3>
              <p>
                Nothing is missing. The work is remembering the path back to
                what has always been yours.
              </p>
            </div>
            <div>
              <span className="pillar-number">02</span>
              <h3>Co-created</h3>
              <p>
                Your life experience and mine meet. Together we find a wisdom
                neither of us holds alone.
              </p>
            </div>
            <div>
              <span className="pillar-number">03</span>
              <h3>Expanded</h3>
              <p>
                You may leave as a version of yourself you did not yet know was
                possible.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="ways">
        <SectionHead
          eyebrow="Ways to work together"
          title="Find the doorway that fits."
          lead="Sessions, home transitions, mentorship, and a collective for fellow healers. However you arrive, we begin with a conversation about what you actually need."
        />
        <div className="cards">
          {waysToWork.map((item, index) => (
            <Link className="card" key={item.to} to={item.to}>
              <PhotoPlaceholder
                description={photos[item.photo]}
                ratio="landscape"
                tone={index % 2 === 0 ? "sage" : "jute"}
              />
              <div className="card-body">
                <span className="card-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span className="card-link">
                  Explore <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="feature">
        <div className="wrap feature-inner">
          <div>
            <p className="eyebrow">The Ojai Hundred Healer Collective</p>
            <h2>
              100 complimentary sessions for the people who care for everyone
              else.
            </h2>
            <Link className="feature-link" to="/collective">
              Click through for more info <span aria-hidden="true">→</span>
            </Link>
          </div>
          <CloverMark className="feature-mark" title="" />
        </div>
      </section>

      <Section className="jute-section clover-story">
        <div className="split split--story">
          <div>
            <p className="eyebrow">Why a four-leaf clover?</p>
            <h2>A mutation worth keeping.</h2>
            <p>
              As a sensitive kid on the playground, Stephanie searched the grass
              for four-leaf clovers and gave them away. Each one was a small
              bridge to another person — a way of noticing what did not fit the
              pattern and loving it anyway.
            </p>
            <p>
              Years later she made a <em>Believe</em> collage for Dr. Andrew
              Weil. Words from that collage still guide the work:{" "}
              <span className="inline-quote">
                “Once you believe, you begin to see.”
              </span>
            </p>
            <p className="micro-note">
              The clover is a reminder that what makes you different is the gift.
            </p>
          </div>
          <PhotoPlaceholder description={photos.clover} tone="cream" ratio="square" />
        </div>
      </Section>

      <Section className="testimonial">
        <div className="testimonial-inner">
          <CloverMark className="testimonial-mark" title="" />
          <p className="eyebrow">In clients' words</p>
          <blockquote>“Unlike any healing or bodywork session.”</blockquote>
          <p className="testimonial-cite">A theme across client feedback</p>
          <p className="testimonial-note">
            Full client testimonials are shared only with explicit permission.
            This space is reserved for an approved quote.
          </p>
        </div>
      </Section>

      <Closing />
    </>
  );
}
