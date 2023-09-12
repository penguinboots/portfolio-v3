"use client";
import { motion } from "framer-motion";

import ExperienceCard from "@/components/ExperienceCard";
import {
  apple,
  catch122,
  lighthouse,
  minami,
  murphy,
  ubc,
} from "@/data/experience";

const education = [lighthouse, ubc];
const work = [apple, catch122, minami, murphy];

const ExperiencePage = () => {
  let eduCards = education.map((exp) => (
    <ExperienceCard key={exp.title} exp={exp} />
  ));

  let workCards = work.map((exp) => (
    <ExperienceCard key={exp.title} exp={exp} />
  ));

  let sectionTitle =
    "w-full lg:w-5/6 text-bold text-2xl mt-6 mb-2 px-2 md:px-0 md:mt-8";
  let cardSection = "flex flex-col items-center w-full space-y-3";

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.75 }}
      className="flex w-full flex-col items-center sm:pb-10 md:px-12"
    >
      <h1 className={sectionTitle}>Education</h1>
      <div className={cardSection}>{eduCards}</div>
      <h1 className={sectionTitle}>Employment</h1>
      <div className={cardSection}>{workCards}</div>
    </motion.div>
  );
};

export default ExperiencePage;
