"use client";

import { motion } from "framer-motion";

import SectionCard from "@/components/SectionCard";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.75 }}
      className="flex w-full items-center justify-center sm:py-8"
    >
      <SectionCard>
        <h1>Placeholder placeholder</h1>
        <p>
          placeholder placeholder placeholder placeholder placeholder
          placeholder placeholder placeholder placeholder placeholder
        </p>
      </SectionCard>
    </motion.div>
  );
};

export default AboutPage;
