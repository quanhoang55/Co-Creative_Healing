import {
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { Link, NavLink } from "react-router-dom";
import { nav, privacy } from "../data/site";
import { CloverMark } from "./Brand";
import { RequestForm } from "./Forms";
import { OverlayContext } from "./OverlayContext";

const currentYear = new Date().getFullYear();

export function DualCtas({ className = "" }: { className?: string }) {
  const actions = useContext(OverlayContext);
  return (
    <div className={`ctas ${className}`}>
      <button className="button outline" type="button" onClick={actions.talk}>
        Let's talk first
      </button>
      <button className="button primary" type="button" onClick={actions.booking}>
        Request a session
      </button>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const actions = useContext(OverlayContext);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav wrap">
        <Link className="brand" to="/" aria-label="Co-Creative Healing home">
          <CloverMark className="brand-mark" title="" />
          <span className="brand-word">
            Co-Creative
            <em>Healing</em>
          </span>
        </Link>

        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="site-nav"
          type="button"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-bars" aria-hidden="true">
            <i />
            <i />
          </span>
          {open ? "Close" : "Menu"}
        </button>

        <nav id="site-nav" className={`site-nav ${open ? "is-open" : ""}`}>
          {nav.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <p className="menu-tagline">
            Come whole. Create together.
            <br />
            <em>Leave expanded.</em>
          </p>
          <div className="nav-actions">
            <button className="button outline" type="button" onClick={actions.talk}>
              Let's talk first
            </button>
            <button
              className="button primary"
              type="button"
              onClick={actions.booking}
            >
              Request a session
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export function Newsletter({ tone = "cream" }: { tone?: "cream" | "sage" }) {
  const uid = useId();
  const [done, setDone] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDone(true);
  };

  return (
    <form className={`newsletter newsletter--${tone}`} onSubmit={submit}>
      {done ? (
        <p className="newsletter-done" role="status">
          <span aria-hidden="true">✦</span> Thank you. You are on the list.
        </p>
      ) : (
        <>
          <p className="eyebrow">Newsletter</p>
          <p className="newsletter-copy">
            Seasonal offerings, mentorship news, community gatherings, and new
            Ojai Hundred interviews and podcasts.
          </p>
          <div className="newsletter-row">
            <label className="sr-only" htmlFor={`${uid}-email`}>
              Your email address
            </label>
            <input
              id={`${uid}-email`}
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="Your email address"
            />
            <button className="button primary" type="submit">
              Join the list
            </button>
          </div>
        </>
      )}
    </form>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <CloverMark className="footer-mark" />
          <p className="footer-tag">
            Come whole. Create together.
            <br />
            <em>Leave expanded.</em>
          </p>
          <p className="footer-place">{privacy}</p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          {nav.map(([label, to]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="footer-news">
          <Newsletter />
          <div className="social-links">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
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
      </div>

      <div className="wrap footer-bottom">
        <span>© {currentYear} Co-Creative Healing · Upper Ojai, California</span>
        <span>No street address is published. Location confirmed personally.</span>
      </div>
    </footer>
  );
}

type Overlay = { kind: "closed" } | { kind: "talk" } | { kind: "booking" };

export function ContactOverlay({
  overlay,
  onClose,
  onSwitch,
}: {
  overlay: Overlay;
  onClose: () => void;
  onSwitch: (kind: "talk" | "booking") => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (overlay.kind === "closed") return;

    returnFocus.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      const first =
        dialogRef.current?.querySelector<HTMLElement>("input, select, textarea") ??
        dialogRef.current?.querySelector<HTMLElement>(
          "button, a[href]",
        );
      first?.focus();
    }, 60);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusables = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.offsetParent !== null);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      returnFocus.current?.focus();
    };
  }, [overlay.kind, onClose]);

  if (overlay.kind === "closed") return null;
  const booking = overlay.kind === "booking";

  return (
    <div
      className="overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        ref={dialogRef}
      >
        <button className="dialog-close" aria-label="Close" onClick={onClose}>
          <span aria-hidden="true">×</span>
        </button>

        {booking ? (
          <>
            <p className="eyebrow">Request a session</p>
            <h2 id="dialog-title">A little space for you.</h2>
            <p className="dialog-intro">
              Share what brings you here. Stephanie will reply personally to see
              whether the work is a match, then share arrival details.
            </p>
            <RequestForm compact />
          </>
        ) : (
          <>
            <p className="eyebrow">Let's talk first</p>
            <h2 id="dialog-title">Start with a conversation.</h2>
            <p className="dialog-intro">
              A free, brief voice-to-voice call helps us both see whether this
              work feels like the right match. No intake, no pressure.
            </p>
            <div className="talk-card">
              <span className="talk-icon" aria-hidden="true">
                ☏
              </span>
              <div>
                <p className="talk-label">Call or text Stephanie</p>
                <a className="talk-phone" href="tel:+18005550199">
                  (800) 555-0199
                </a>
                <p className="form-note">
                  Demo number for this prototype · final number to confirm.
                </p>
              </div>
            </div>
            <div className="dialog-actions">
              <a className="button primary" href="tel:+18005550199">
                Call Stephanie
              </a>
              <button
                className="button outline"
                type="button"
                onClick={() => onSwitch("booking")}
              >
                Request a session instead
              </button>
            </div>
            <p className="micro-note">
              Upper Ojai, California · exact location shared once your session is
              confirmed.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export function Closing({
  title = "Ready to come as you are?",
  copy = "No script to follow. Bring your questions, your curiosity, and the parts of you that are still deciding.",
  eyebrow = "Co-Creative Healing",
}: {
  title?: string;
  copy?: string;
  eyebrow?: string;
}) {
  return (
    <section className="closing">
      <div className="wrap closing-inner">
        <CloverMark className="closing-mark" title="" />
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="closing-copy">{copy}</p>
        <DualCtas />
        <p className="closing-place">{privacy}</p>
      </div>
    </section>
  );
}

export function MobileCtaBar() {
  const actions = useContext(OverlayContext);
  return (
    <div className="mobile-ctas" aria-label="Contact actions">
      <button className="button outline" type="button" onClick={actions.talk}>
        Let's talk first
      </button>
      <button className="button primary" type="button" onClick={actions.booking}>
        Request a session
      </button>
    </div>
  );
}
