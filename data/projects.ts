export interface Project {
  title: string;
  ref: string;
  description: string;
  live: string | null;
  repo: string;
  stack: string[];
}

const genius: Project = {
  title: "Lil Genius",
  ref: "genius",
  description:
    "A full-stack, SaaS AI platform with a free and paid tier. AI tools include chat, ref, video, music, and code generation leveraging APIs from OpenAI and Replicate.",
  live: "https://lil-genius.vercel.app/",
  repo: "https://github.com/penguinboots/lil-genius",
  stack: [
    "typescript",
    "react",
    "next",
    "tailwind",
    "shadcn",
    "prisma",
    "stripe",
    "vercel"
  ],
};

const messenger: Project = {
  title: "Lil Messenger Clone",
  ref: "messenger",
  description:
    "Full-stack, real-time Messenger clone with read-receipts, group chats, and more.",
  live: "https://lil-messenger-clone.vercel.app/",
  repo: "https://github.com/penguinboots/lil-messenger-clone",
  stack: ["typescript", "react", "next", "tailwind", "prisma", "mongodb", "vercel"],
};

const portfoliov2: Project = {
  title: "Portfolio Website v2",
  ref: "portfoliov2",
  description: "The second iteration of my personal website.",
  live: "https://penguin-portfolio-v2.vercel.app/",
  repo: "https://github.com/penguinboots/portfolio-v2",
  stack: ["react", "sass", "vite", "vercel"],
};

const portfoliov1: Project = {
  title: "Portfolio Website v1",
  ref: "portfoliov1",
  description: "The first iteration of my personal website.",
  live: "https://penguin-portfolio.vercel.app/",
  repo: "https://github.com/penguinboots/penguin-portfolio",
  stack: ["react", "sass", "vite", "vercel"],
};

const mimikyu: Project = {
  title: "Mimikyu's Day Off",
  ref: "mimikyu",
  description:
    "Capstone Project: A pokemon-themed roguelite game. Art and design by me.",
  live: "https://mimikyus-day-off.vercel.app",
  repo: "https://github.com/penguinboots/poke-rogue",
  stack: ["javascript", "react", "next", "node", "sass", "prisma", "vercel"],
};

const shortly: Project = {
  title: "Shortly",
  ref: "shortly",
  description:
    "URL Shortener using shrtco.de API. Views for desktop, tablet, and mobile.",
  live: "https://shortly-url-shortener-five.vercel.app",
  repo: "https://github.com/penguinboots/url-shortener",
  stack: ["react", "sass", "vite", "vercel"],
};

const jungle: Project = {
  title: "Jungle",
  ref: "jungle",
  description:
    "A mini e-commerce app. Adding features to an existing codebase.",
  live: "",
  repo: "https://github.com/penguinboots/jungle-rails",
  stack: ["ruby", "rails", "bootstrap", "rspec"],
};

const scheduler: Project = {
  title: "Interview Scheduler",
  ref: "scheduler",
  description: "Single-page React application to schedule interviews.",
  live: null,
  repo: "https://github.com/penguinboots/scheduler",
  stack: ["react", "storybook", "jest", "cypress"],
};

const bytes: Project = {
  title: "Bytes Restaurant",
  ref: "bytes",
  description:
    "Midterm Group Project: A full-stack food-pickup app with Twilio integration.",
  live: null,
  repo: "https://github.com/penguinboots/bytes-restaurant",
  stack: ["ejs", "express", "node", "sass", "postgresql", "jquery"],
};

const tweeter: Project = {
  title: "Tweeter",
  ref: "tweeter",
  description: "A simple, single-page Twitter clone.",
  live: null,
  repo: "https://github.com/penguinboots/tweeter",
  stack: ["jquery", "ajax", "express"],
};

export {
  portfoliov2,
  portfoliov1,
  mimikyu,
  shortly,
  jungle,
  scheduler,
  bytes,
  tweeter,
  messenger,
  genius,
};
