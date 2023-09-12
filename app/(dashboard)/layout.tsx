"use client";
import { Header } from "@/components/Header";
import Navbar from "@/components/HamMenu";
import Sidebar from "@/components/Sidebar";
import { usePathname } from "next/navigation";
import routes from "@/lib/routes";
import { AnimatePresence } from "framer-motion";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

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
      <div className="absolute top-0 left-0 w-full z-20">
        <Header
          title={routes[pathname].label}
          desc={routes[pathname].description}
          icon={routes[pathname].icon}
        />
      </div>
      <main className="md:pl-72 lg:pl-96 h-full w-full pt-24">
        <AnimatePresence>{children}</AnimatePresence>
      </main>
    </div>
  );
};

export default DashboardLayout;
