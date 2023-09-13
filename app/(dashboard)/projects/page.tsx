"use client";

import { motion } from "framer-motion";

import FeatureCard from "@/components/FeatureCard";
import ProjectCard from "@/components/ProjectCard";

import {
  portfoliov1,
  portfoliov2,
  mimikyu,
  shortly,
  jungle,
  scheduler,
  bytes,
  tweeter,
  messenger,
  genius,
} from "@/data/projects";

const features = [mimikyu, messenger, genius];
const projects = [
  bytes,
  shortly,
  portfoliov2,
  portfoliov1,
  jungle,
  scheduler,
  tweeter,
];

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.75 }}
      className="flex w-full flex-col items-center"
    >
      <ul className="grid w-full grid-cols-1 gap-4 p-4 sm:max-w-md lg:max-w-none lg:grid-cols-2 2xl:grid-cols-3">
        {features.map((feature, i) => (
          <motion.li
            initial={{ opacity: 0.5, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 / features.length * i }}
            key={feature.title}
            className="list-none"
          >
            <FeatureCard project={feature} />
          </motion.li>
        ))}
        <li className="hidden bg-slate-100 lg:flex xl:hidden">IMAGE HERE</li>
      </ul>
      <ul className="grid w-full list-none grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, i) => (
          <motion.li
            initial={{ opacity: 0.5, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 / projects.length * i }}
            key={project.title}
          >
            <ProjectCard project={project} />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProjectsPage;
