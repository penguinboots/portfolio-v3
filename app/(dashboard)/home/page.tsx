"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { coverFont } from "@/lib/fonts";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="h-full bg-card text-sidebar">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 50 }}
        transition={{ ease: "easeOut", duration: 0.75 }}
        className="flex h-full w-2/3 flex-col justify-center space-y-4 pl-12"
      >
        <h1
          className={cn(
            "space-y-5 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl",
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

        <Button className="w-48 bg-base font-bold text-header-text hover:bg-header">
          <Link href="/about" className="w-auto">
            GET TO KNOW ME
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default HomePage;
