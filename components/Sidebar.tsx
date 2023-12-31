"use client";
import { usePathname } from "next/navigation";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import routes from "@/lib/routes";
import type { Route } from "../lib/routes";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

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
    <div className="from-sidebar-grad flex h-full flex-col items-center justify-evenly bg-sidebar bg-gradient-to-t">
      <div className="relative flex h-48 min-h-[192px] w-48 min-w-[192px] items-center justify-center overflow-hidden drop-shadow-md">
        <Link href="/">
          <Image src="/badge2.png" alt="logo" fill priority sizes="20vw" />
        </Link>
      </div>
      <div className="w-2/3 flex-col space-y-4 p-4">
        {routeArray.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              `
              hover:text-sidebar-text-hover group flex w-full cursor-pointer justify-start rounded-lg
              p-2 text-sm font-medium
              transition-all hover:bg-white/10
              sm:p-3 md:p-4`,
              pathname.includes(route.href)
                ? "bg-white/10 text-sidebar-text"
                : "text-sidebar-text",
            )}
          >
            <route.icon className="mr-3 h-5 w-5" />
            {route.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-4">
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
          className="rounded-full bg-base text-header-text hover:bg-header"
        >
          <a
            href="https://flowcv.com/resume/7vgjugqk7r"
            target="_blank"
            className="flex items-center justify-center gap-1"
          >
            Resume <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
