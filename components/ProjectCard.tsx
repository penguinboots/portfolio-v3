"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { titleFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { Project } from "@/data/projects";

import DevIcon from "./DevIcon";
import ProjectLinks from "./ProjectLinks";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const stack = project.stack.map((item) => {
    return (
      <li key={item} className="h-6 w-6 text-sm">
        <DevIcon name={item} />
      </li>
    );
  });
  return (
    <div
      className="relative flex h-48 w-full flex-col items-center justify-center
                overflow-hidden rounded-xl bg-sidebar drop-shadow-lg
                transition-all md:hover:scale-[1.02]"
    >
      <Image
        alt={project.title}
        src={`/projects/previews/${project.ref}.gif`}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div
        className="z-10 flex h-full w-full flex-col items-center 
        justify-center bg-card-bghover/95 opacity-0 hover:opacity-100"
      >
        <h1 className={cn("px-2 text-center text-xl", titleFont.className)}>
          {project.title}
        </h1>
        <p className="px-6 py-1 text-center text-xs">{project.description}</p>
        <ProjectLinks project={project} />
        <ul className="mt-6 flex flex-wrap space-x-2">{stack}</ul>
      </div>
    </div>
  );
};

export default ProjectCard;
