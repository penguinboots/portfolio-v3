import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <div className="flex h-full">
      <div className="bg-slate-100 h-full flex items-center justify-center">
        <Link href="/projects">
          <ChevronLeft className="w-12 h-12" />
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectPage;
