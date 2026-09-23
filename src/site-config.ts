import { defineSiteConfig } from "astro-theme-university/types";
import { withBase } from "astro-theme-university/url";
import { slopBranding } from "astro-theme-slop";
import { courseMeta } from "./course-config";

// The underlying collection and URL remain `sessions`. This course teaches a
// hands-on craft, so the weekly meeting is a workbench, not a seminar: the
// room where the forging actually happens, under supervision and critique.
export const sessionLabels = {
  singular: "Studio",
  plural: "Studios",
} as const;

export const graphCollections = ["sessions", "assessments", "lectures", "people"];

export const courseApiCollections = [
  ...graphCollections.map((key) => ({ key })),
  { key: "policies", dir: "pages/policies" },
];

export const siteConfig = defineSiteConfig({
  ...slopBranding,
  name: "Slop University",

  links: [
    { text: "Lectures", href: "/lectures/" },
    { text: sessionLabels.plural, href: "/sessions/" },
    { text: "Assessment", href: "/assessments/" },
    { text: "People", href: "/people/" },
    { text: "Policies", href: "/policies/" },
  ],

  licence: "CC-BY-NC-SA-4.0",
  socialImage: "/src/assets/images/card.png",
  socialImageAlt: `A preview card for ${courseMeta.code}: ${courseMeta.title}`,

  legalLinks: [
    { text: "Source", href: "https://github.com/comp4020-agentic-coding-studio/comp4020-riff6-baishi-3" },
    { text: "Colophon", href: withBase("/the-tell/") },
  ],
});
