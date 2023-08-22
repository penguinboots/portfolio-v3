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
  desc: "",
  bullets: ["test", "test", "test"],
  icon: GraduationCap,
};

export const ubc: Experience = {
  title: "The University of British Columbia",
  note: "graduated with distinction",
  subtitle: "Bachelor of Arts - Psychology",
  date: "May 2023",
  desc: "",
  bullets: ["test", "test", "test"],
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
  icon: Sandwich
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
