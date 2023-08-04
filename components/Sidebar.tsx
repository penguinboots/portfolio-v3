"use client";
import { ClipboardList, FileCode, Home, Sticker, Wrench } from "lucide-react";
import { usePathname } from "next/navigation";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/home",
  },
  {
    label: "Experience",
    icon: ClipboardList,
    href: "/experience",
  },
  {
    label: "Projects",
    icon: FileCode,
    href: "/projects",
  },
  {
    label: "Tools",
    icon: Wrench,
    href: "/tools",
  },
  {
    label: "Contact",
    icon: Sticker,
    href: "/contact",
  },
];

const socials = [
  {
    label: "LinkedIn",
    icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/sabrina-y-wang/",
  },
  {
    label: "Github",
    icon: AiFillGithub,
    href: "https://github.com/penguinboots",
  },
  {
    label: "Email",
    icon: AiOutlineMail,
    href: "mailto: sabrina.ynw@gmail.com",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center justify-evenly h-full">
      <div className="bg-white/10 w-36 h-36 rounded-full self-center flex items-center justify-center">
        <h1>LOGO</h1>
      </div>
      <div className="space-y-4 p-4 flex-col w-2/3">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              `
              text-sm group flex p-3 w-full
              justify-start font-medium cursor-pointer
              hover:text-white hover:bg-white/10
              rounded-lg transition`,
              pathname === route.href
                ? "text-white bg-white/10"
                : "text-secondary-foreground"
            )}
          >
            <route.icon className="h-5 w-5 mr-3" />
            {route.label}
          </Link>
        ))}
      </div>
      <div className="space-y-4 flex flex-col items-center">
        <div className="flex space-x-4">
          {socials.map((social) => (
            <a href={social.href} key={social.href} target="_blank">
              <social.icon className="h-7 w-7 text-secondary-foreground" />
            </a>
          ))}
        </div>
        <Button variant="secondary">Resume</Button>
      </div>
    </div>
  );
};

export default Sidebar;
