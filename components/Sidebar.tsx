"use client";
import { usePathname } from "next/navigation";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { PiFlowerLotusDuotone } from "react-icons/pi";


import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import routes from "@/lib/routes";
import type { Route } from "../lib/routes";
import { ExternalLink } from "lucide-react";

const routeArray: Route[] = Object.values(routes);
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
    <div className="flex flex-col items-center justify-evenly h-full bg-sidebar">
      <div className="bg-card border-base border-4 w-40 h-40 rounded-full self-center flex items-center justify-center">
        <PiFlowerLotusDuotone className="w-28 h-28 text-base"/>
      </div>
      <div className="space-y-4 p-4 flex-col w-2/3">
        {routeArray.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              `
              text-sm group flex p-2 sm:p-3 md:p-4 w-full
              justify-start font-medium cursor-pointer
              hover:text-sidebar-text-hover hover:bg-white/10
              rounded-lg transition-all`,
              pathname.includes(route.href)
                ? "text-sidebar-text bg-white/10"
                : "text-sidebar-text"
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
              <social.icon className="h-8 w-8 text-base hover:text-header" />
            </a>
          ))}
        </div>
        <Button
          asChild
          variant="secondary"
          className="bg-base hover:bg-header text-header-text rounded-full"
        >
          <a
            href="https://flowcv.com/resume/7vgjugqk7r"
            target="_blank"
            className="flex gap-1 items-center justify-center"
          >
            Resume <ExternalLink className="w-3 h-3" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
