"use client";
import { LucideIcon } from "lucide-react";
import { titleFont } from "@/lib/fonts";
import HamMenu from "./HamMenu";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import routes from "@/lib/routes";
import type { Route } from "../lib/routes";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  let title = routes[pathname].label;
  let desc = routes[pathname].description;
  let Icon = routes[pathname].icon;

  return (
    <div
      className={cn(
        "bg-header text-header-text flex flex-col transition-all duration-500 overflow-hidden",
        isOpen ? "h-screen" : "h-24"
      )}
    >
      <div className="flex">
        <div
          className={cn(
            "flex items-center h-24 p-6 transition-all duration-500",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        >
          <Icon className="w-12 h-12" />
          <div>
            <h1 className={cn("text-xl pt-1", titleFont.className)}>{title}</h1>
            <h2 className={cn("text-sm", titleFont.className)}>{desc}</h2>
          </div>
        </div>
        <div className="md:hidden w-full h-full absolute right-0 top-0">
          <HamMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ ease: "linear", duration: 0.5 }}
            className="w-full flex flex-col items-center sm:pb-10 md:px-12 z-30"
          >
            {routeArray.map((route) => (
              <Link
                href={route.href}
                key={route.href}
                className={cn(
                  `
                  text-xl flex justify-center p-6 w-2/3
                  font-medium cursor-pointer
                  hover:text-sidebar-text-hover hover:bg-white/10
                  rounded-lg transition-all`,
                  pathname.includes(route.href)
                    ? "text-sidebar-text bg-white/10"
                    : "text-sidebar-text"
                )}
                onClick={() => setIsOpen(false)}
              >
                <route.icon className="h-6 w-6 mr-1" />
                {route.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
