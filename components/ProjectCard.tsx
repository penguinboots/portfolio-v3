"use client";
import Image from "next/image";
import { titleFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import Card from "./Card";
import { Project } from "@/data/projects";

import { AiFillGithub } from "react-icons/ai";
import { BiSolidPointer } from "react-icons/bi";
import DevIcon from "./DevIcon";

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
    <Card>
      <div className="relative w-full min-h-min h-48 flex flex-col items-center justify-center">
        <Image
          alt={project.title}
          src={`/projects/previews/${project.ref}.gif`}
          fill
          style={{ objectFit: "cover" }}
        />
        <div
          className="z-20 opacity-0 hover:opacity-100 transition-opacity h-full w-full bg-white/95 
        flex flex-col items-center justify-center"
        >
          <h1 className={cn("text-xl text-center px-2", titleFont.className)}>
            {project.title}
          </h1>
          <p className="text-xs text-center py-1 px-6">{project.description}</p>
          <div className="flex">
            {project.live && (
              <a href={project.live} target="_blank">
                <BiSolidPointer className="h-8 w-8 hover:text-slate-600" />
              </a>
            )}
            <a href={project.repo} target="_blank">
              <AiFillGithub className="h-8 w-8 hover:text-slate-600" />
            </a>
          </div>
          <ul className="flex flex-wrap space-x-2 mt-6">{stack}</ul>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
