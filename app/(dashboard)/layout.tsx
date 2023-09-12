"use client";
import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { AnimatePresence } from "framer-motion";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-full flex-col">
      <div
        className="
        hidden
        h-full
        md:fixed 
        md:inset-y-0
        md:flex
        md:w-72 
        md:flex-col 
        lg:w-96"
      >
        <Sidebar />
      </div>
      <main className="h-full w-full md:pl-72 lg:pl-96">
        <div className="absolute right-0 top-0 z-20 w-full md:relative">
          <Header />
        </div>
        <div className="pt-24 h-full">
          <AnimatePresence>{children}</AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
