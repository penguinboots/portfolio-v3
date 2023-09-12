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
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col items-center"
    >
      <div className="grid w-full grid-cols-1 gap-4 p-4 sm:max-w-md lg:max-w-none lg:grid-cols-2 2xl:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} project={feature} />
        ))}
        <div className="hidden bg-slate-100 lg:flex xl:hidden">IMAGE HERE</div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
