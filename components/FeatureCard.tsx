"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { titleFont } from "@/lib/fonts";
import { Project } from "@/data/projects";

import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { BiSolidPointer } from "react-icons/bi";
import DevIcon from "./DevIcon";

interface FeatureCardProps {
  project: Project;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ project }) => {
  const stack = project.stack.map((item) => {
    return (
      <li key={item} className="text-lg w-7 h-7">
        <DevIcon name={item} />
      </li>
    );
  });

  return (
    <div className="rounded-xl overflow-hidden">
      <div className="relative bg-slate-400 h-48 md:h-64 overflow-hidden">
        <Link href={`/projects/${project.ref}`} className="h-full">
          <Image
            alt={project.title}
            src={`/projects/previews/${project.ref}.gif`}
            fill
            style={{ objectFit: "cover" }}
            className="hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between p-6 h-48 bg-slate-300 md:h-64">
        <div>
          <div className="flex justify-between items-center py-2">
            <Link href={`/projects/${project.ref}`}>
              <h1
                className={cn(
                  "text-xl  hover:text-slate-600",
                  titleFont.className
                )}
              >
                {project.title}
              </h1>
            </Link>
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
          </div>
          <p>{project.description}</p>
        </div>
        <ul className="flex flex-wrap gap-2">{stack}</ul>
      </div>
    </div>
  );
};

export default FeatureCard;
