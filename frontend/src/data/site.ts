export type PhotoRatio = "wide" | "landscape" | "portrait" | "square";
export type Photo = {
  src: string;
  description: string;
  alt: string;
  focus?: string;
};
export type Faq = { question: string; answer: string };

export const privacy =
  "Upper Ojai, California. Exact location shared once your session is confirmed.";

export const nav = [
  ["Home", "/"],
  ["Sessions", "/sessions"],
  ["Home & Life Transitions", "/transitions"],
  ["Ojai Hundred Healer Collective", "/collective"],
  ["Mentorship", "/mentorship"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export const photos = {
  hero: {
    src: "/images/session-table-side.jpg",
    description: "Hands-on bodywork in soft daylight.",
    alt: "A bodyworker sits beside a client resting on a treatment table.",
  },
  table: {
    src: "/images/bodywork-hands.jpg",
    description: "A slow, listening touch at the table.",
    alt: "A therapist's hands rest on a client's arm during a massage.",
  },
  mat: {
    src: "/images/meditation-grass.jpg",
    description: "Two people sitting together, eyes closed.",
    alt: "Two people sit cross-legged on a grassy lawn with eyes closed.",
  },
  conversation: {
    src: "/images/conversation-armchairs.jpg",
    description: "A conversation in a sunlit sitting room.",
    alt: "Two women talk in armchairs beside a bright window.",
  },
  clover: {
    src: "/images/forest-light.jpg",
    description: "Light through the trees.",
    alt: "Sunbeams filter through a canopy of green leaves.",
  },
  transition: {
    src: "/images/garden-window.jpg",
    description: "A quiet threshold, held with care.",
    alt: "A woman in a sun hat smiles beside a white garden window.",
  },
  threshold: {
    src: "/images/meditation-grass.jpg",
    description: "A pause before the next chapter.",
    alt: "Two people sit cross-legged on a grassy lawn with eyes closed.",
  },
  keepsake: {
    src: "/images/bodywork-table.jpg",
    description: "Hands resting where they are needed.",
    alt: "A therapist leans over a client on a massage table.",
  },
  movement: {
    src: "/images/outdoor-circle.jpg",
    description: "A community gathered outdoors.",
    alt: "A small group sits together on rocks beneath an open sky.",
    focus: "50% 45%",
  },
  portrait: {
    src: "/images/portrait-smile.jpg",
    description: "A warm, unguarded moment.",
    alt: "A smiling woman in a lilac shirt stands beside a floor lamp.",
    focus: "68% 50%",
  },
  camel: {
    src: "/images/outdoor-circle.jpg",
    description: "A community gathered outdoors.",
    alt: "A small group sits together on rocks beneath an open sky.",
    focus: "50% 45%",
  },
  max: {
    src: "/images/forest-light.jpg",
    description: "Light on the way to the river.",
    alt: "Sunbeams filter through a canopy of green leaves.",
    focus: "50% 55%",
  },
  studios: {
    src: "/images/studio-conversation.jpg",
    description: "A studio made for conversation.",
    alt: "Two women talk in a studio with clothing racks and plants.",
    focus: "58% 50%",
  },
  teaching: {
    src: "/images/meditation-class.jpg",
    description: "Learning together in a bright room.",
    alt: "A small group sits on mats during a guided class.",
    focus: "62% 50%",
  },
} satisfies Record<string, Photo>;

export const waysToWork = [
  {
    title: "Sessions",
    copy: "Intuitive, co-created bodywork and energy work, shaped around what your body asks for.",
    to: "/sessions",
    photo: "table",
  },
  {
    title: "Home & Life Transitions",
    copy: "House blessings, clearings, and gentle support through the transitions of where and how we live.",
    to: "/transitions",
    photo: "transition",
  },
  {
    title: "Ojai Hundred Healer Collective",
    copy: "100 complimentary sessions for the people who care for everyone else.",
    to: "/collective",
    photo: "movement",
  },
  {
    title: "Mentorship",
    copy: "Continuing education, a growing video library, and a place to register your interest.",
    to: "/mentorship",
    photo: "teaching",
  },
] as const;

export const modalities = [
  "Thai massage",
  "Deep tissue",
  "Myofascial release",
  "Structural & Esalen-inspired work",
  "Energy work",
  "Grounded coaching",
  "Spiritual guidance",
] as const;

export const faqs: readonly Faq[] = [
  {
    question: "How does booking work, and why is the address shared later?",
    answer:
      "Start with a short phone conversation or a written request. If the work feels like a match, I confirm your session and share arrival details and the exact location then. The studio is a private home space, so the address and map stay private until we have confirmed.",
  },
  {
    question: "How long is a session, and how does the sliding scale work?",
    answer:
      "A full session asks you to set aside a generous two hours, with roughly ninety minutes of hands-on work. A half session asks for about an hour and fifteen minutes, with roughly forty-five minutes of hands-on work. Both are offered on a sliding scale, and you choose where you land within the range when you book.",
  },
  {
    question: "Which technique should I choose?",
    answer:
      "You do not need to choose. We shape the session around what you share, what your body communicates, and what is needed that day. Sometimes that is table work, sometimes mat work, and sometimes a conversation first.",
  },
  {
    question: "What about draping and clothing?",
    answer:
      "Draping is always used. You may stay partly or fully clothed, and loose, stretchy clothing is best for mat work. You are welcome to ask for whatever helps you feel at ease.",
  },
  {
    question: "Why do you sometimes make sounds during a session?",
    answer:
      "You may hear sighs, groans, hums, or gentle encouragement. They are part of how I listen and respond to what is moving in your body. Sound is never required of you, and you are always welcome to stay quiet.",
  },
  {
    question: "What are “energy burps”?",
    answer:
      "They are part of my energy-clearing process: a release that moves through the body and often comes out as a burp, a sigh, or a shiver. They are different from digestive burps, and they are nothing to manage or apologize for.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellation notice and missed-appointment terms are being confirmed before launch. If you need to change a time, please reach out as early as you can and we will find our way from there.",
  },
];

export const videos = [
  ["M7Llf7xhcfA", "Back massage at home, using body rocking"],
  ["1VApbmx4Xko", "Seated hamstring massage at home"],
  ["VbIWbdpPLc8", "The Magic of Side Lying Massage: neck, shoulders and arms"],
  ["G7nkkZnwekg", "The Magic of Side Lying Massage: hips, IT band and legs"],
  ["amsgCLTT8a0", "Esalen-inspired long strokes"],
] as const;

export const chapterTitles = [
  "A whisper from my fourteen-year-old self",
  "A quarter-life evaluation",
  "A world of learning",
  "New Orleans, and trying on who I wasn’t",
  "Helper, heal thyself",
  "Transformation, in a different form",
  "Beyond the session",
] as const;
