"use client";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex md:hidden bg-slate-100 h-12 w-full">
        <Link href="/projects">
          <ChevronLeft className="w-12 h-12" />
        </Link>
      </div>
      <div className="hidden md:flex fixed bg-slate-100 h-full items-center justify-center">
        <Link href="/projects">
          <ChevronLeft className="w-12 h-12" />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <div className="md:w-3/4 lg:w-2/3 md:py-12">
          <MarkdownRenderer filePath="test.md" />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
