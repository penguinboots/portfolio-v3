"use client";

import { motion } from "framer-motion";

import SectionCard from "@/components/SectionCard";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="w-full flex items-center justify-center sm:py-8"
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
