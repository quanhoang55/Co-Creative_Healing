import { useCallback, useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  ContactOverlay,
  Footer,
  Header,
  MobileCtaBar,
} from "./components/Chrome";
import { OverlayContext } from "./components/OverlayContext";
import { Home } from "./pages/Home";
import { Sessions } from "./pages/Sessions";
import { Transitions } from "./pages/Transitions";
import { Collective } from "./pages/Collective";
import { Mentorship } from "./pages/Mentorship";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

type Overlay = { kind: "closed" } | { kind: "talk" } | { kind: "booking" };

type OverlayAction =
  | { type: "close" }
  | { type: "talk" }
  | { type: "booking" }
  | { type: "switch"; kind: "talk" | "booking" };

function overlayReducer(_: Overlay, action: OverlayAction): Overlay {
  switch (action.type) {
    case "close":
      return { kind: "closed" };
    case "talk":
      return { kind: "talk" };
    case "booking":
      return { kind: "booking" };
    case "switch":
      return { kind: action.kind };
  }
}

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Co-Creative Healing | Intuitive Bodywork in Upper Ojai, California",
    description:
      "Intuitive, co-created bodywork and energy work with Stephanie Shrum in Upper Ojai, California. Come whole. Create together. Leave expanded.",
  },
  "/sessions": {
    title: "Sessions | Intuitive Bodywork & Energy Work | Co-Creative Healing",
    description:
      "Co-created bodywork sessions blending Thai massage, deep tissue, myofascial release, Esalen-inspired work, energy work, and grounded coaching in Upper Ojai, California.",
  },
  "/transitions": {
    title: "Home & Life Transitions | House Blessings & Senior Support | Upper Ojai",
    description:
      "House blessings, clearings, senior transitions, and end-of-life companioning with Stephanie Shrum in Upper Ojai, California.",
  },
  "/collective": {
    title: "Ojai Hundred Healer Collective | 100 Complimentary Sessions",
    description:
      "The Ojai Hundred Healer Collective offers 100 complimentary healing sessions to the practitioners and caregivers who hold space for everyone else.",
  },
  "/mentorship": {
    title: "Mentorship & Continuing Education | Co-Creative Healing",
    description:
      "Bodywork mentorship, NCBTMB-certified continuing education, and a growing video library with Stephanie Shrum. Join the interest list for new classes.",
  },
  "/about": {
    title: "About Stephanie Shrum | Bodyworker in Upper Ojai, California",
    description:
      "The story behind Co-Creative Healing: decades of bodywork study, travel, New Orleans, home renovation, and grounded presence in Upper Ojai.",
  },
  "/contact": {
    title: "Connect & Request a Session | Co-Creative Healing",
    description:
      "Start with a short phone conversation or request a bodywork session with Stephanie Shrum in Upper Ojai, California. The exact location is shared after your session is confirmed.",
  },
};

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const meta = pageMeta[pathname] ?? {
      title: "Page not found | Co-Creative Healing",
      description:
        "Co-Creative Healing with Stephanie Shrum in Upper Ojai, California.",
    };
    document.title = meta.title;
    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = meta.description;
  }, [pathname]);

  return null;
}

function Site() {
  const [overlay, dispatch] = useReducer(overlayReducer, { kind: "closed" });
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch({ type: "close" });
  }, [pathname]);

  const close = useCallback(() => dispatch({ type: "close" }), []);
  const talk = useCallback(() => dispatch({ type: "talk" }), []);
  const booking = useCallback(() => dispatch({ type: "booking" }), []);
  const switchOverlay = useCallback(
    (kind: "talk" | "booking") => dispatch({ type: "switch", kind }),
    [],
  );

  return (
    <OverlayContext.Provider value={{ talk, booking }}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <RouteEffects />
      <Header key={pathname} />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/transitions" element={<Transitions />} />
          <Route path="/collective" element={<Collective />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileCtaBar />
      <ContactOverlay
        overlay={overlay}
        onClose={close}
        onSwitch={switchOverlay}
      />
    </OverlayContext.Provider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}
