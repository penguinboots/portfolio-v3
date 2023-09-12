"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";
import { cn } from "@/lib/utils";
import routes from "@/lib/routes";
import type { Route } from "../lib/routes";
import { titleFont } from "@/lib/fonts";

import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

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
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  let Icon = routes[pathname].icon;

  return (
    <div
      className={cn(
        "absolute flex w-full flex-col overflow-hidden bg-sidebar text-sidebar-text transition-all duration-500 md:bg-header md:text-header-text",
        isOpen ? "h-screen" : "h-24",
      )}
    >
      <div className="flex">
        <div
          className={cn(
            "flex h-24 items-center gap-2 p-6 transition-all duration-500",
            isOpen ? "opacity-0" : "opacity-100",
          )}
        >
          <Icon className="h-12 w-12" />
          <div>
            <h1 className={cn("pt-1 text-xl", titleFont.className)}>
              {routes[pathname].label}
            </h1>
            <h2 className={cn("text-sm", titleFont.className)}>
              {routes[pathname].description}
            </h2>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-full md:hidden">
          <div className="flex items-center justify-end">
            <div className="p-6 text-sidebar-text transition-all duration-300">
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col justify-between">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ ease: "linear", duration: 0.5 }}
              className="z-30 flex w-full flex-col items-center sm:pb-10 md:px-12"
            >
              {routeArray.map((route) => (
                <Link
                  href={route.href}
                  key={route.href}
                  className={cn(
                    `
                  hover:text-sidebar-text-hover flex w-2/3 cursor-pointer justify-center
                  rounded-lg p-4
                  text-xl font-medium
                  transition-all hover:bg-white/10`,
                    pathname.includes(route.href)
                      ? "bg-white/10 text-sidebar-text"
                      : "text-sidebar-text",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              <div className="flex flex-col items-center gap-4 p-6">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
