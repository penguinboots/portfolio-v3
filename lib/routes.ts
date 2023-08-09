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
    description: "/placeholder text here",
    href: "/home",
  },
  "/about": {
    label: "About",
    icon: Laugh,
    description: "/placeholder text here",
    href: "/about",
  },
  "/projects": {
    label: "Projects",
    icon: FileCode,
    description: "/placeholder text here",
    href: "/projects",
  },
  "/experience": {
    label: "Experience",
    icon: ClipboardList,
    description: "/placeholder text here",
    href: "/experience",
  },
  "/skills": {
    label: "Skills",
    icon: Wrench,
    description: "/placeholder text here",
    href: "/skills",
  },
  "/contact": {
    label: "Contact",
    icon: Sticker,
    description: "/placeholder text here",
    href: "/contact",
  },
};

export default routes;
