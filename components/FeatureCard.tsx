"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { titleFont } from "@/lib/fonts";
import { Project } from "@/data/projects";

import Link from "next/link";

import DevIcon from "./DevIcon";
import ProjectLinks from "./ProjectLinks";

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
    <div className="relative rounded-xl overflow-hidden">
      <div className="bg-slate-800 h-48 md:h-64 overflow-hidden">
        <Link href={`/projects/${project.ref}`}>
          <div className="relative h-full w-full">
            <Image
              alt={project.title}
              src={`/projects/previews/${project.ref}.gif`}
              fill
              style={{ objectFit: "cover" }}
              className="hover:opacity-80 transition-opacity"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-between p-6 bg-slate-300 md:h-64">
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
            <ProjectLinks project={project} />
          </div>
          <p>{project.description}</p>
        </div>
        <ul className="flex flex-wrap gap-2 pt-6">{stack}</ul>
      </div>
    </div>
  );
};

export default FeatureCard;
