import { cn } from "@/lib/utils";
import Card from "./Card";
import { titleFont } from "@/lib/fonts";

const FeatureCard = () => {
  return (
    <Card>
      <div>
        <div className="w-full bg-slate-500 h-48 md:h-64">Image</div>
        <div className="w-full p-6 bg-slate-200 h-48 md:h-64">
          <h1 className={cn("text-xl", titleFont.className)}>Project Title</h1>
          <p>Project Description</p>
          <div>Stack</div>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
