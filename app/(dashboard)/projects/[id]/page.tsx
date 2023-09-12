"use client";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProjectPage = () => {
  const pathname = usePathname();
  const projectRef = pathname.substring(pathname.lastIndexOf("/"));

  return (
    <div className="flex h-auto bg-white px-4">
      <div className="fixed hidden h-full items-center md:flex">
        <Link href="/projects">
          <div className="flex items-center justify-center rounded-2xl bg-slate-200 px-1 py-4">
            <ChevronLeft className="h-12 w-12" />
          </div>
        </Link>
      </div>
      <div className="fixed bottom-4 left-4 flex md:hidden">
        <Link href="/projects">
          <div className="rounded-full bg-slate-200 p-2">
            <ChevronLeft className="h-12 w-12" />
          </div>
        </Link>
      </div>
      <div className="flex w-full flex-col items-center">
        <div className="md:w-3/4 md:py-12 lg:w-2/3">
          <MarkdownRenderer filePath={`${projectRef}.md`} />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
