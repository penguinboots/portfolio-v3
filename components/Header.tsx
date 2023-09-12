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

  let Icon;
  let home = pathname === "/home";
  let pView = pathname.includes("/projects/");

  if (!pView) {
    Icon = routes[pathname].icon;
  }
  return (
    <>
      {/* HAMBURGER ICON */}
      <div className="absolute right-0 top-0 z-20 h-24 w-full md:hidden">
        <div className="flex items-center justify-end">
          <div
            className={cn(
              "p-6 text-sidebar-text transition-all duration-300",
              [home && !isOpen ? "text-sidebar" : "", pView && "hidden"]
            )}
          >
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
      </div>
      {/* HEADER BODY */}
      <div
        className={cn(
          `absolute flex w-full flex-col overflow-hidden border-b-[3px] border-solid
          border-card bg-sidebar text-sidebar-text transition-all
          duration-500 md:border-none md:bg-header md:text-header-text bg-gradient-to-b from-sidebar-grad md:from-header-grad`,
          [
            isOpen ? "h-screen" : "h-24 ",
            (home || pView) && !isOpen ? "h-0 border-none" : "",
          ],
        )}
      >
        {/* PATH ICON & TITLE */}
        <div>
          <div
            className={cn(
              "flex h-24 items-center gap-2 p-6 transition-all duration-500",
              isOpen ? "opacity-0" : "opacity-100",
            )}
          >
            <AnimatePresence>
              {!home && !pView && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-2"
                >
                  {Icon && <Icon className="h-12 w-12" />}
                  <div>
                    <h1 className={cn("pt-1 text-xl", titleFont.className)}>
                      {routes[pathname].label}
                    </h1>
                    <h2 className={cn("text-sm", titleFont.className)}>
                      {routes[pathname].description}
                    </h2>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* NAV ITEMS */}
        <div className="flex h-full flex-col justify-between">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="z-30 flex w-full flex-col items-center sm:pb-10 md:px-12"
              >
                {/* LINKS */}
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
                {/* SOCIALS */}
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
    </>
  );
};
