"use client";
import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="relative flex h-full flex-col">
      <div
        className={cn(
          `
        z-30
        hidden
        h-full 
        border-r-[3px]
        border-solid
        drop-shadow-[2px_0_10px_rgba(0,0,0,0.25)] 
        transition-all 
        md:fixed
        md:inset-y-0 md:flex
        md:w-72
        md:flex-col lg:w-96`,
          pathname === "/home" ? "border-header" : "border-card-light",
        )}
      >
        <Sidebar />
      </div>
      <main className="h-full w-full md:pl-72 lg:pl-96">
        <div className="fixed right-0 top-0 z-20 w-full drop-shadow-[0_2px_5px_rgba(156,84,107,0.25)] md:relative">
          <Header />
        </div>
        <div
          className={cn(
            "h-full",
            pathname === "/home" || pathname.lastIndexOf("/") !== 0
              ? "pt-0"
              : "pt-24",
          )}
        >
          <AnimatePresence>{children}</AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
