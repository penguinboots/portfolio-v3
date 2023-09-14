import { ClipboardList, FileCode, Home, Laugh, LucideIcon, Sticker, Wrench } from "lucide-react";

export type Route = {
  label: string;
  icon: LucideIcon;
  description: string;
  href: string;
};

const routes: { [key: string]: Route } = {
  "/home": {
    label: "Home",
    icon: Home,
    description: "",
    href: "/home",
  },
  // "/about": {
  //   label: "About",
  //   icon: Laugh,
  //   description: "all about me!",
  //   href: "/about",
  // },
  "/projects": {
    label: "Projects",
    icon: FileCode,
    description: "things I've made",
    href: "/projects",
  },
  "/experience": {
    label: "Experience",
    icon: ClipboardList,
    description: "what I've been up to",
    href: "/experience",
  },
  "/skills": {
    label: "Skills",
    icon: Wrench,
    description: "stuff I've worked with",
    href: "/skills",
  },
  "/contact": {
    label: "Contact",
    icon: Sticker,
    description: "shoot me a line",
    href: "/contact",
  },
};

export default routes;
