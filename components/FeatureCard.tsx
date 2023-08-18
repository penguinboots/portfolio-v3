import Image from "next/image";

import { cn } from "@/lib/utils";
import { titleFont } from "@/lib/fonts";
import { Project } from "@/data/projects";

import Card from "./Card";
import Link from "next/link";

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
        <div className="p-6 bg-slate-200 h-48 md:h-64">
          <h1 className={cn("text-xl", titleFont.className)}>
            {project.title}
          </h1>
          <p>{project.description}</p>
          <ul className="flex gap-2">{stack}</ul>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
