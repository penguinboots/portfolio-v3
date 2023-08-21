import Image from "next/image";

import { cn } from "@/lib/utils";
import { titleFont } from "@/lib/fonts";
import { Project } from "@/data/projects";

import Card from "./Card";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { BiSolidPointer } from "react-icons/bi";

interface FeatureCardProps {
  project: Project;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ project }) => {
  const stack = project.stack.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return (
    <Card>
      <div>
        <div className="relative bg-slate-500 h-48 md:h-64 overflow-hidden">
          <Link href={`/projects/${project.ref}`}>
            <Image
              alt={project.title}
              src={`/projects/previews/${project.ref}.gif`}
              fill
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className="flex flex-col justify-between p-8 bg-slate-300 h-48 md:h-64">
          <div>
            <div className="flex justify-between items-center py-2">
              <h1 className={cn("text-xl", titleFont.className)}>
                {project.title}
              </h1>
              <div className="flex">
                {project.live && (
                  <a href={project.live} target="_blank">
                    <BiSolidPointer className="h-8 w-8" />
                  </a>
                )}
                <a href={project.repo} target="_blank">
                  <AiFillGithub className="h-8 w-8" />
                </a>
              </div>
            </div>
            <p>{project.description}</p>
          </div>
          <ul className="flex flex-wrap gap-2">{stack}</ul>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
