import mimikyuImg from "@/public/projects/previews/mimikyu.png";
import bytesImg from "@/public/projects/previews/bytes.png";
import jungleImg from "@/public/projects/previews/jungle.png";
import schedulerImg from "@/public/projects/previews/scheduler.png";
import shortlyImg from "@/public/projects/previews/shortly.png";
import messengerImg from "@/public/projects/previews/messenger.png";

export interface Project {
  title: string;
  image: string;
  description: string;
  live: string | null;
  repo: string;
  stack: string[];
}

const genius: Project = {
  title: "Lil Genius",
  image: messengerImg,
  description:
    "A full-stack, SaaS AI platform with a free and paid tier. AI tools include chat, image, video, music, and code generation leveraging APIs from OpenAI and Replicate.",
  live: "https://lil-genius.vercel.app/",
  repo: "https://github.com/penguinboots/lil-genius",
  stack: [
    "react",
    "next",
    "typescript",
    "tailwind",
    "shadcn/ui",
    "prisma",
    "stripe",
  ],
};

const messenger: Project = {
  title: "Lil Messenger Clone",
  image: messengerImg,
  description:
    "Full-stack, real-time Messenger clone with read-receipts, group chats, and more.",
  live: "https://lil-messenger-clone.vercel.app/",
  repo: "https://github.com/penguinboots/lil-messenger-clone",
  stack: ["react", "next", "typescript", "tailwind", "prisma", "mongodb"],
};

const portfolio: Project = {
  title: "Portfolio Website",
  image: "",
  description: "This website!",
  live: null,
  repo: "https://github.com/penguinboots/penguin-portfolio",
  stack: ["react", "sass", "vite"],
};

const mimikyu: Project = {
  title: "Mimikyu's Day Off",
  image: mimikyuImg,
  description:
    "Capstone Project: A pokemon-themed roguelite game. Art and design by me.",
  live: "https://mimikyus-day-off.vercel.app",
  repo: "https://github.com/penguinboots/poke-rogue",
  stack: ["react", "next", "node", "sass", "prisma", "vercel"],
};

const shortly: Project = {
  title: "Shortly",
  image: shortlyImg,
  description:
    "URL Shortener using shrtco.de API. Views for desktop, tablet, and mobile.",
  live: "https://shortly-url-shortener-five.vercel.app",
  repo: "https://github.com/penguinboots/url-shortener",
  stack: ["react", "sass", "vite", "vercel"],
};

const jungle: Project = {
  title: "Jungle",
  image: jungleImg,
  description:
    "A mini e-commerce app. Adding features to an existing codebase.",
  live: "",
  repo: "https://github.com/penguinboots/jungle-rails",
  stack: ["ruby", "rails", "bootstrap", "rspec"],
};

const scheduler: Project = {
  title: "Interview Scheduler",
  image: schedulerImg,
  description: "Single-page React application to schedule interviews.",
  live: null,
  repo: "https://github.com/penguinboots/scheduler",
  stack: ["react", "storybook", "jest", "cypress"],
};

const bytes: Project = {
  title: "Bytes Restaurant",
  image: bytesImg,
  description:
    "Midterm Group Project: A full-stack food-pickup app with Twilio integration.",
  live: null,
  repo: "https://github.com/penguinboots/bytes-restaurant",
  stack: ["ejs", "express", "node", "sass", "postgresql", "jquery"],
};

const tweeter: Project = {
  title: "Tweeter",
  image: "",
  description: "A simple, single-page Twitter clone.",
  live: null,
  repo: "https://github.com/penguinboots/tweeter",
  stack: ["jquery", "ajax", "express"],
};

export {
  portfolio,
  mimikyu,
  shortly,
  jungle,
  scheduler,
  bytes,
  tweeter,
  messenger,
  genius,
};
