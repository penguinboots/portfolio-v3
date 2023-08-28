import { GraduationCap, LucideIcon, Sandwich } from "lucide-react";
import { BiCake } from "react-icons/bi";
import { SiApple } from "react-icons/si";
import { GoLaw } from "react-icons/go";

export interface Experience {
  title: string;
  note: string;
  subtitle: string;
  date: string;
  desc: string;
  bullets: string[];
  icon: LucideIcon;
}

export const lighthouse: Experience = {
  title: "Lighthouse Labs",
  note: "",
  subtitle: "Diploma - Web Development",
  date: "June 2023",
  desc: `I took the part-time flex bootcamp during my final year at UBC. At Lighthouse,
        I was able to learn alongside fellow students with diverse backgrounds and unique
        viewpoints. The bootcamp's immersive environment fostered my adaptability, problem-solving
        skills, and keen attention to detail. I graduated with a renewed passion for coding and
        the practical skills to thrive in the ever-evolving landscape of tech.`,
  bullets: [
    "Javascript, Node.js, ReactJS, Ruby on Rails, and more",
    "Automated testing - Mocha & Chai, Storybook, Cypress",
    "Databases and data modeling - SQL, PostgreSQL",
  ],
  icon: GraduationCap,
};

export const ubc: Experience = {
  title: "The University of British Columbia",
  note: "graduated with distinction",
  subtitle: "Bachelor of Arts - Psychology",
  date: "May 2023",
  desc: `After some time away from university, I returned to finish my undergraduate degree majoring in psychology.
        I delved into the complexities of human behaviour, developing a deep understanding of empathy cultural sensitivity,
        and ethical reasoning. My time at UBC equipped me with a diverse toolkit of transferrable skills that I'm eager to
        apply to a range of professional opportunities.`,
  bullets: [
    "Written and verbal communication",
    "Critical thinking, research skills, data analysis",
    "Time management",
  ],
  icon: GraduationCap,
};

export const apple: Experience = {
  title: "Specialist",
  note: "",
  subtitle: "Apple",
  date: "August 2021 - December 2021",
  desc: "",
  bullets: ["test", "test", "test"],
  icon: SiApple,
};

export const catch122: Experience = {
  title: "Expeditor",
  note: "",
  subtitle: "Catch122 Bistro",
  date: "February 2020 - August 2021",
  desc: "",
  bullets: ["test", "test", "test"],
  icon: Sandwich,
};

export const sangra: Experience = {
  title: "Legal Administrative Assistant",
  note: "",
  subtitle: "Sangra Moller LLP",
  date: "September 2019 - December 2019",
  desc: "",
  bullets: ["test", "test", "test"],
  icon: GoLaw,
};

export const murphy: Experience = {
  title: "Legal Administrative Assistant",
  note: "",
  subtitle: "Murphy & Company LLP",
  date: "June 2019 - September 2019",
  desc: "",
  bullets: ["test", "test", "test"],
  icon: GoLaw,
};

export const minami: Experience = {
  title: "Pastry Cook",
  note: "",
  subtitle: "Minami Restaurant",
  date: "March 2018 - November 2019",
  desc: "",
  bullets: ["test", "test", "test"],
  icon: BiCake,
};
