"use client";
import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { AnimatePresence } from "framer-motion";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative flex flex-col">
      <div
        className="
        hidden
        h-full
        md:flex 
        md:w-72
        lg:w-96
        md:flex-col 
        md:fixed 
        md:inset-y-0"
      >
        <Sidebar />
      </div>
      <main className="md:pl-72 lg:pl-96 h-full w-full pt-24 md:pt-0">
        <div className="absolute md:relative top-0 right-0 w-full z-20">
          <Header />
        </div>
        <AnimatePresence>{children}</AnimatePresence>
      </main>
    </div>
  );
};

export default DashboardLayout;
