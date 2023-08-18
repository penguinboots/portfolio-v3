"use client";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <div className="flex h-full">
      <div className="hidden md:flex bg-slate-100 h-full items-center justify-center">
        <Link href="/projects">
          <ChevronLeft className="w-12 h-12" />
        </Link>
      </div>
      <div className="bg-slate-300 h-full w-full">
        <div className="remove-all">
          <MarkdownRenderer filePath="test.md" />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
