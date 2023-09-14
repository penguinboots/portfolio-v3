"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { titleFont } from "@/lib/fonts";
import { devIcons } from "@/public/icons";
import { languages, frameworks, systems, testing, other } from "@/data/skills";

import SectionCard from "@/components/SectionCard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Skill {
  img: keyof typeof devIcons;
  name: string;
}

const createSkillList = (skills: Skill[]) => {
  return skills.map((skill) => (
    <TooltipProvider key={skill.name}>
      <Tooltip>
        <TooltipTrigger asChild>
          <li key={skill.name} className="flex flex-col items-center">
            <Image
              priority
              height={50}
              width={50}
              src={devIcons[skill.img]}
              alt={skill.name}
            />
          </li>
        </TooltipTrigger>
        <TooltipContent>
          <p>{skill.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ));
};

const languagesList = createSkillList(languages);
const frameworksList = createSkillList(frameworks);
const systemsList = createSkillList(systems);
const testingList = createSkillList(testing);
const otherList = createSkillList(other);

const skillList = "flex flex-col items-center gap-2";
const skillHeading = cn("text-xl text-center", titleFont.className);
const skillItem = "flex gap-4 flex-wrap justify-center";

const SkillsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.75 }}
      className="flex w-full justify-center my-12"
    >
      <SectionCard>
        <div className="space-y-12 p-2">
          <div className={skillList}>
            <h2 className={skillHeading}>Languages</h2>
            <ul className={skillItem}>{languagesList}</ul>
          </div>
          <div className={skillList}>
            <h2 className={skillHeading}>Frameworks & Libraries</h2>
            <ul className={skillItem}>{frameworksList}</ul>
          </div>
          <div className={skillList}>
            <h2 className={skillHeading}>Systems & Databases</h2>
            <ul className={skillItem}>{systemsList}</ul>
          </div>
          <div className={skillList}>
            <h2 className={skillHeading}>Testing</h2>
            <ul className={skillItem}>{testingList}</ul>
          </div>
          <div className={skillList}>
            <h2 className={skillHeading}>Other</h2>
            <ul className={skillItem}>{otherList}</ul>
          </div>
        </div>
      </SectionCard>
    </motion.div>
  );
};

export default SkillsPage;
