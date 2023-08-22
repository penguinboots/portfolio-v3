import { GraduationCap, LucideIcon } from "lucide-react";

export interface Experience {
  title: string;
  note: string;
  subtitle: string;
  completed: string;
  desc: string;
  bullets: string[];
  icon: LucideIcon;
  type: string;
}

const lighthouse: Experience = {
  title: "Lighthouse Labs",
  note: "",
  subtitle: "Diploma - Web Development",
  completed: "June 2023",
  desc: "",
  bullets: ["test", "test", "test"],
  icon: GraduationCap,
  type: "Education",
};

const ubc: Experience = {
  title: "The University of British Columbia",
  note: "graduated with distinction",
  subtitle: "Bachelor of Arts - Psychology",
  completed: "May 2023",
  desc: "",
  bullets: ["test", "test", "test"],
  icon: GraduationCap,
  type: "Education",
};


export { lighthouse, ubc };
