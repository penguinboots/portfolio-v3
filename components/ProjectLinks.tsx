import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Project } from "@/data/projects";
import { AiFillGithub } from "react-icons/ai";
import { BiSolidPointer } from "react-icons/bi";

interface ProjectLinksProps {
  project: Project;
}

const ProjectLinks = ({ project }: ProjectLinksProps) => {
  return (
    <div className="flex">
      {project.live && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href={project.live} target="_blank">
                <BiSolidPointer className="h-8 w-8 text-card-text transition-all hover:text-card-hover" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Live Site</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={project.repo} target="_blank">
              <AiFillGithub className="h-8 w-8 text-card-text transition-all hover:text-card-hover" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Repository</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ProjectLinks;
