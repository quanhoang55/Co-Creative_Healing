import { Link } from "react-router-dom";
import { nav } from "../data/site";
import { CloverMark } from "../components/Brand";
import { DualCtas } from "../components/Chrome";

export function NotFound() {
  return (
    <section className="not-found">
      <div className="wrap not-found-inner">
        <CloverMark className="not-found-mark" title="" />
        <p className="eyebrow">404 · A path not planted</p>
        <h1>This page is not in the field.</h1>
        <p className="lede">
          The address may have changed, or the link may have been gathered by
          mistake. Here is the way back.
        </p>
        <nav className="not-found-links" aria-label="Site pages">
          {nav.map(([label, to]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </nav>
        <DualCtas />
      </div>
    </section>
  );
}
