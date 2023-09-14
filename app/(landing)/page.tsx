"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Landing() {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const handleAnim = () => {
    if (!clicked) {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 2000);
    }
  };

  const handleClick = () => {
    setTimeout(() => {
      router.push("/home");
    }, 1700);
  };

  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center p-10">
        <div className="relative flex w-full items-center justify-center">
          <Link href="/" onClick={handleClick} className="z-20">
            <Button
              className="hover:bg-header-grad rounded-2xl bg-header p-6 text-2xl text-card"
              onClick={handleAnim}
            >
              {`System.out.println("hello world");`}
            </Button>
          </Link>
          {clicked && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0, scale: [1, 15] }}
              exit={{ opacity: 0 }}
              transition={{ ease: "linear", duration: 1.5 }}
              className="absolute z-10 h-24 w-24 rounded-full bg-white/20"
            />
          )}
          {clicked && (
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: -120, opacity: [0.8, 0], scale: [1, 7] }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              className="absolute text-header"
            >
              hello
            </motion.div>
          )}
          {clicked && (
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 120, opacity: [0.8, 0], scale: [1, 7] }}
              transition={{ ease: "easeOut", duration: 1.5 }}
              className="absolute text-header"
            >
              world
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
