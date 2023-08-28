"use client";
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
  const stack = project.stack.map((item) => {
    return (
      <li key={item} className="text-sm w-6 h-6">
        <DevIcon name={item} />
      </li>
    );
  });
  return (
    <div className="relative w-full rounded-xl overflow-hidden h-48 flex flex-col items-center justify-center bg-sidebar">
      <Image
        alt={project.title}
        src={`/projects/previews/${project.ref}.gif`}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div
        className="z-20 opacity-0 hover:opacity-100 transition-opacity h-full w-full bg-card-althover/95 
        flex flex-col items-center justify-center"
      >
        <h1 className={cn("text-xl text-center px-2", titleFont.className)}>
          {project.title}
        </h1>
        <p className="text-xs text-center py-1 px-6">{project.description}</p>
        <ProjectLinks project={project} />
        <ul className="flex flex-wrap space-x-2 mt-6">{stack}</ul>
      </div>
    </div>
  );
};

export default ProjectCard;
