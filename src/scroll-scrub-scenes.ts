/**
 * Scene data for the Raptor Labs scroll journey.
 *
 * One continuous 15s film, cut into four back-to-back segments so each chapter
 * of copy owns a stretch of the same take. Cuts are frame-adjacent, so the
 * journey reads as one unbroken move. Every poster is the first frame of the
 * encoded clip beside it. Keep this array a module constant.
 */
import { createElement } from "react";

import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";
import { HeroActions } from "@/components/site/hero-actions";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#a855f7",
  background: "#050506",
  ink: "#f2f3f5",
  muted: "#a3a8b0",
};

const world = (n: string) => ({
  clip: `/assets/world/scene-${n}.mp4`,
  mobileClip: `/assets/world/scene-${n}-mobile.mp4`,
  mobilePoster: `/assets/world/scene-${n}-mobile-poster.png`,
  poster: `/assets/world/scene-${n}-poster.png`,
});

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    ...world("01"),
    actions: createElement(HeroActions),
    body: "Raptor Labs is an AI and engineering consultancy. We work inside your business, on your own data and systems, to build AI that saves time and grows revenue.",
    id: "top",
    label: "Intro",
    scroll: 1.3,
    title: "Engineers who ship AI, embedded with your team.",
  },
  {
    ...world("02"),
    align: "right",
    body: "The person who scopes the work is the person who builds it, inside your tools and next to the people who own the process.",
    id: "why",
    label: "Why us",
    scroll: 1.2,
    tags: ["We work where you work", "Humans stay in the loop", "No handoffs"],
    title: "Senior engineers, not slideware.",
  },
  {
    ...world("03"),
    body: "We find where the hours go, then rebuild that work so AI does most of it and your team reviews the parts that matter.",
    id: "assemble",
    label: "Method",
    scroll: 1.2,
    title: "Scattered work, assembled into systems.",
  },
  {
    ...world("04"),
    align: "right",
    body: "Code, workflows, prompts and docs stay in your environment. No lock-in, no platform fees, no black boxes.",
    id: "own",
    label: "Ownership",
    scroll: 1.3,
    title: "Yours to keep, from day one.",
  },
];
