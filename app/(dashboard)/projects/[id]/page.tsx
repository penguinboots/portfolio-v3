"use client";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <div className="flex h-full px-4">
      <div className="flex fixed bottom-4 left-4 md:hidden z-20">
        <Link href="/projects">
          <div className="p-2 rounded-full bg-slate-200">
            <ChevronLeft className="w-12 h-12" />
          </div>
        </Link>
      </div>
      <div className="hidden md:flex self-center fixed">
        <Link href="/projects">
          <div className="bg-slate-200 py-4 px-1 rounded-2xl flex items-center justify-center">
            <ChevronLeft className="w-12 h-12" />
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <div className="md:w-3/4 lg:w-2/3 md:py-12">
          <MarkdownRenderer filePath="genius.md" />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
