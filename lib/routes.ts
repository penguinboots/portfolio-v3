import { ClipboardList, FileCode, Home, LucideIcon, Sticker, Wrench } from "lucide-react";

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
  "/experience": {
    label: "Experience",
    icon: ClipboardList,
    description: "/placeholder text here",
    href: "/experience",
  },
  "/projects": {
    label: "Projects",
    icon: FileCode,
    description: "/placeholder text here",
    href: "/projects",
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
