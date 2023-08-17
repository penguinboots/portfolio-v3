import { cn } from "@/lib/utils";
import Card from "./Card";
import { titleFont } from "@/lib/fonts";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = () => {
  return (
    <Card>
      <div className="w-full h-48 flex flex-col items-center justify-center">
        <h1 className={cn("text-xl", titleFont.className)}>Project Title</h1>
        <div>
          <AiFillGithub className="h-8 w-8" />
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
