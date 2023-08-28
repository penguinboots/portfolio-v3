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
  "/about": {
    label: "About",
    icon: Laugh,
    description: "",
    href: "/about",
  },
  "/projects": {
    label: "Projects",
    icon: FileCode,
    description: "things I've made",
    href: "/projects",
  },
  "/experience": {
    label: "Experience",
    icon: ClipboardList,
    description: "my not-so-entire history of at least a few years",
    href: "/experience",
  },
  "/skills": {
    label: "Skills",
    icon: Wrench,
    description: "tools in the toolbox",
    href: "/skills",
  },
  "/contact": {
    label: "Contact",
    icon: Sticker,
    description: "give me a ring ring ring ring",
    href: "/contact",
  },
};

export default routes;
