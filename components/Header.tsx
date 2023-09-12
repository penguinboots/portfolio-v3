"use client";
import { LucideIcon } from "lucide-react";
import { titleFont } from "@/lib/fonts";
import HamMenu from "./HamMenu";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const Header = ({ title, desc, icon: Icon }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "bg-header text-header-text flex flex-col transition-all duration-500 overflow-hidden",
        isOpen ? "h-screen" : "h-24"
      )}
    >
      <div className="flex">
        <div className="flex items-center h-24 p-6">
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
            exit={{ opacity: 0, x: 50 }}
            transition={{ ease: "linear", duration: 0.5 }}
            className="w-full flex flex-col items-center sm:pb-10 md:px-12"
          >
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
