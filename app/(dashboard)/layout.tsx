"use client";
import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";
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
        md:inset-y-0
        z-50"
      >
        <Sidebar />
      </div>
      <main className="md:pl-72 lg:pl-96 h-full w-full z-10">
        {pathname !== "/home" && pathname.indexOf("/", 1) === -1 && (
          <Header
            title={routes[pathname].label}
            desc={routes[pathname].description}
            icon={routes[pathname].icon}
          />
        )}
        {pathname === "/home" && (
          <div className="absolute right-0 top-0 md:hidden p-4">
            <Navbar />
          </div>
        )}
        <AnimatePresence>{children}</AnimatePresence>
      </main>
    </div>
  );
};

export default DashboardLayout;
