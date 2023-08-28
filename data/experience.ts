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
  date: "Graduated June 2023",
  desc: `I took the part-time flex bootcamp during my final year at UBC. At Lighthouse,
        I was able to learn alongside fellow students coming from a variety of backgrounds.
        The bootcamp's immersive environment fostered my adaptability, problem-solving
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
  date: "Graduated May 2023",
  desc: `After some time away from university, I returned to finish my undergraduate degree majoring in psychology.
        I delved into the complexities of human behaviour, also developing a deep understanding of empathy, cultural sensitivity,
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
  date: "August 2021 - December 2021 [Part-time]",
  desc: "",
  bullets: [
    "Delivered excellent customer service in a fast-paced environment",
    "Effectively evaluated customer needs and positioned complete, customized solutions",
  ],
  icon: SiApple,
};

export const catch122: Experience = {
  title: "Expeditor",
  note: "",
  subtitle: "Catch122 Bistro",
  date: "February 2020 - August 2021 [Part-time]",
  desc: "",
  bullets: [
    "Facilitated effective communication between the back of house and front of house",
  ],
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
  title: "Receptionist & Legal Administrative Assistant",
  note: "",
  subtitle: "Murphy & Company LLP",
  date: "June 2019 - September 2019",
  desc: "",
  bullets: [
    "Performed annual corporate maintenance and minute book updates",
    "Drafted and revised various legal documents",
    "Miscellaneous administrative duties",
  ],
  icon: GoLaw,
};

export const minami: Experience = {
  title: "Pastry Cook",
  note: "",
  subtitle: "Minami Restaurant",
  date: "March 2018 - November 2019",
  desc: "",
  bullets: [
    "Collaboratively created new and unique desserts for seasonal menus",
    "Worked independently on specialized preparations of various recipes, upholding food safety and sanitation protocols",
    "Maintained daily par levels and vendor orders",
  ],
  icon: BiCake,
};
