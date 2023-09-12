"use client";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProjectPage = () => {
  const pathname = usePathname();
  const projectRef = pathname.substring(pathname.lastIndexOf("/"));

  return (
    <div className="flex h-auto px-4 bg-white">
      <div className="hidden md:flex fixed h-full items-center">
        <Link href="/projects">
          <div className="bg-slate-200 py-4 px-1 rounded-2xl flex items-center justify-center">
            <ChevronLeft className="w-12 h-12" />
          </div>
        </Link>
      </div>
      <div className="flex fixed bottom-4 left-4 md:hidden">
        <Link href="/projects">
          <div className="p-2 rounded-full bg-slate-200">
            <ChevronLeft className="w-12 h-12" />
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="md:w-3/4 lg:w-2/3 md:py-12">
          <MarkdownRenderer filePath={`${projectRef}.md`} />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
