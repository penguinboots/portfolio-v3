import { devIcons } from "@/public/icons";

interface Skill {
  name: string;
  img: keyof typeof devIcons;
}

const languages: Skill[] = [
  { name: "JavaScript", img: "js" },
  { name: "TypeScript", img: "ts" },
  { name: "Ruby", img: "ruby" },
  { name: "Java", img: "java" },
  { name: "HTML", img: "html" },
  { name: "CSS", img: "css" },
];

const frameworks: Skill[] = [
  { name: "Node", img: "node" },
  { name: "React", img: "react" },
  { name: "Next", img: "next" },
  { name: "Express", img: "express" },
  { name: "JQuery", img: "jquery" },
  { name: "Sass", img: "sass" },
  { name: "Tailwind", img: "tw" },
  {name: "Framer Motion", img: "framer"},
  { name: "Rails", img: "rails" },
];

const systems: Skill[] = [
  { name: "PostgreSQL", img: "postgresql" },
  { name: "Git", img: "git" },
  { name: "Prisma", img: "prisma" },
];

const testing: Skill[] = [
  { name: "Mocha", img: "mocha" },
  { name: "Chai", img: "chai" },
  { name: "Storybook", img: "storybook" },
  { name: "Jest", img: "jest" },
  { name: "Cypress", img: "cypress" },
  { name: "RSpec", img: "rspec" },
];

const other: Skill[] = [
  { name: "Vercel", img: "vercel" },
  { name: "Photoshop", img: "ps" },
];

export { languages, frameworks, systems, testing, other };
