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
        "absolute w-full bg-sidebar md:bg-header text-sidebar-text md:text-header-text flex flex-col transition-all duration-500 overflow-hidden",
        isOpen ? "h-screen" : "h-24"
      )}
    >
      <div className="flex">
        <div
          className={cn(
            "flex items-center h-24 p-6 transition-all duration-500 gap-2",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        >
          <Icon className="w-12 h-12" />
          <div>
            <h1 className={cn("text-xl pt-1", titleFont.className)}>
              {routes[pathname].label}
            </h1>
            <h2 className={cn("text-sm", titleFont.className)}>
              {routes[pathname].description}
            </h2>
          </div>
        </div>
        <div className="md:hidden w-full h-full absolute right-0 top-0">
          <div className="flex items-center justify-end">
            <div className="p-6 transition-all duration-300 text-sidebar-text">
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ ease: "linear", duration: 0.5 }}
              className="w-full flex flex-col items-center sm:pb-10 md:px-12 z-30"
            >
              {routeArray.map((route) => (
                <Link
                  href={route.href}
                  key={route.href}
                  className={cn(
                    `
                  text-xl flex justify-center p-4 w-2/3
                  font-medium cursor-pointer
                  hover:text-sidebar-text-hover hover:bg-white/10
                  rounded-lg transition-all`,
                    pathname.includes(route.href)
                      ? "text-sidebar-text bg-white/10"
                      : "text-sidebar-text"
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
