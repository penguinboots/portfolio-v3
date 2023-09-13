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
  let eduCards = education.map((exp, i) => (
    <motion.div
      initial={{ opacity: 0.5, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (0.5 / education.length) * i }}
      key={exp.title}
      className=""
    >
      <ExperienceCard exp={exp} />
    </motion.div>
  ));

  let workCards = work.map((exp, i) => (
    <motion.div
      initial={{ opacity: 0.5, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (0.5 / work.length) * i }}
      key={exp.title}
    >
      <ExperienceCard exp={exp} />
    </motion.div>
  ));

  let sectionTitle =
    "w-full lg:w-5/6 text-bold text-2xl mt-6 mb-2 px-2 md:px-0 md:mt-8";

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.75 }}
      className="flex w-full flex-col items-center sm:pb-10 md:px-12"
    >
      <h1 className={sectionTitle}>Education</h1>
      {education.map((exp, i) => (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 * i }}
          key={exp.title}
          className="flex w-full flex-col items-center py-2"
        >
          <ExperienceCard exp={exp} />
        </motion.div>
      ))}
      <h1 className={sectionTitle}>Employment</h1>
      {work.map((exp, i) => (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 * i }}
          key={exp.title}
          className="flex w-full flex-col items-center py-2"
        >
          <ExperienceCard exp={exp} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ExperiencePage;
