"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { coverFont } from "@/lib/fonts";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="h-full text-sidebar bg-card">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 50 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="h-full w-2/3 flex flex-col justify-center pl-12 space-y-4"
      >
        <h1
          className={cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-bold",
            coverFont.className
          )}
        >
          Hello there,
          <br />
          I&apos;m Sabrina.
        </h1>
        <p className="text-sm sm:text-xl">
          Developer, artist, and maker of weird things.
        </p>
        <Link href="/about">
          <Button className="w-48 font-bold bg-base text-header-text hover:bg-header">
            GET TO KNOW ME
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HomePage;
