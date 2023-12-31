"use client";
import { motion } from "framer-motion";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProjectPage = () => {
  const pathname = usePathname();
  const projectRef = pathname.substring(pathname.lastIndexOf("/"));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="flex h-auto bg-card-bghover px-4"
    >
      {/* DESKTOP BACK */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="fixed hidden h-full items-center md:flex"
      >
        <Link href="/projects">
          <div className="flex items-center justify-center rounded-3xl bg-base px-1 py-4 text-card transition-all hover:bg-header">
            <ChevronLeft className="h-12 w-12" />
          </div>
        </Link>
      </motion.div>
      {/* MOBILE BACK */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed bottom-4 left-4 z-30 flex md:hidden"
      >
        <Link href="/projects">
          <div className="rounded-full bg-base p-2 text-card">
            <ChevronLeft className="h-12 w-12" />
          </div>
        </Link>
      </motion.div>
      {/* MARKDOWN */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        className="flex w-full flex-col items-center"
      >
        <div className="md:w-3/4 md:py-12 lg:w-2/3">
          <MarkdownRenderer filePath={`${projectRef}.md`} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPage;
