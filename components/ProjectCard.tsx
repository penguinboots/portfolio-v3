import { cn } from "@/lib/utils";
import Card from "./Card";
import { titleFont } from "@/lib/fonts";

const ProjectCard = () => {
  return (
    <Card>
      <div className="w-full h-48 flex items-center justify-center">
        <div className="">
          <h1 className={cn("text-xl", titleFont.className)}>Project Title</h1>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
