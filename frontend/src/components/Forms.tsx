import { useId, useState, type FormEvent } from "react";

function Confirmation({
  title,
  copy,
  onReset,
}: {
  title: string;
  copy: string;
  onReset: () => void;
}) {
  return (
    <div className="form-confirmation" role="status">
      <span className="confirmation-mark" aria-hidden="true">
        ✦
      </span>
      <h3>{title}</h3>
      <p>{copy}</p>
      <button type="button" className="text-link" onClick={onReset}>
        Send another note
      </button>
    </div>
  );
}

export function RequestForm({ compact = false }: { compact?: boolean }) {
  const uid = useId();
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <Confirmation
        title="Thank you for reaching out."
        copy="I'll be in touch soon to see if we're a match."
        onReset={() => setSent(false)}
      />
    );
  }

  return (
    <form className={`form ${compact ? "form--compact" : ""}`} onSubmit={submit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor={`${uid}-name`}>Name</label>
          <input id={`${uid}-name`} name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor={`${uid}-email`}>Email</label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor={`${uid}-phone`}>Phone (optional)</label>
          <input id={`${uid}-phone`} name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor={`${uid}-interest`}>What are you drawn to?</label>
          <select id={`${uid}-interest`} name="interest" defaultValue="unsure">
            <option value="unsure">Not sure yet</option>
            <option value="full">Full session</option>
            <option value="half">Half session</option>
            <option value="transitions">Home & life transitions</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor={`${uid}-time`}>A time that tends to work</label>
        <select id={`${uid}-time`} name="time" defaultValue="flexible">
          <option value="flexible">I'm flexible</option>
          <option value="weekday-morning">Weekday morning</option>
          <option value="weekday-afternoon">Weekday afternoon</option>
          <option value="weekend">Weekend</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor={`${uid}-note`}>
          What brings you here, and what are you curious about?
        </label>
        <textarea id={`${uid}-note`} name="note" rows={4} required />
      </div>

      <div className="form-actions">
        <button className="button primary" type="submit">
          Send request
        </button>
        <p className="form-note">
          A request is not a booking. We confirm the match first, then share
          arrival details. This demo does not send or store data.
        </p>
      </div>
    </form>
  );
}

export function InterestForm() {
  const uid = useId();
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <Confirmation
        title="You're on the interest list."
        copy="I'll be in touch when the next mentorship offering takes shape."
        onReset={() => setSent(false)}
      />
    );
  }

  return (
    <form
      className="form form--panel"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <p className="eyebrow">Interest list</p>
      <h3>Add your name to the list.</h3>
      <div className="field">
        <label htmlFor={`${uid}-name`}>Name</label>
        <input id={`${uid}-name`} name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor={`${uid}-email`}>Email</label>
        <input
          id={`${uid}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="field">
        <label htmlFor={`${uid}-learn`}>What you'd love to learn</label>
        <textarea id={`${uid}-learn`} name="learn" rows={3} required />
      </div>
      <button className="button primary" type="submit">
        Join the interest list
      </button>
      <p className="form-note">
        No classes are scheduled yet. You'll hear first when one is.
      </p>
    </form>
  );
}

export function ApplicationForm() {
  const uid = useId();
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <Confirmation
        title="Your application is with me."
        copy="I read every note personally and will be in touch about a conversation."
        onReset={() => setSent(false)}
      />
    );
  }

  return (
    <form
      className="form form--panel"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <p className="eyebrow">Collective application</p>
      <h3>Apply to the Ojai Hundred.</h3>
      <div className="field-row">
        <div className="field">
          <label htmlFor={`${uid}-name`}>Name</label>
          <input id={`${uid}-name`} name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor={`${uid}-email`}>Email</label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor={`${uid}-location`}>Location</label>
          <input
            id={`${uid}-location`}
            name="location"
            autoComplete="address-level2"
            required
          />
        </div>
        <div className="field">
          <label htmlFor={`${uid}-practice`}>Your healing practice</label>
          <input id={`${uid}-practice`} name="practice" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor={`${uid}-why`}>What draws you to the collective?</label>
        <textarea id={`${uid}-why`} name="why" rows={4} required />
      </div>
      <label className="checkbox">
        <input type="checkbox" name="interview" />
        <span>I'm open to sharing an interview about my practice.</span>
      </label>
      <button className="button primary" type="submit">
        Send application
      </button>
      <p className="form-note">
        Eligibility, cohort size, and timing are being finalized with Stephanie.
        This demo form does not send or store data.
      </p>
    </form>
  );
}
