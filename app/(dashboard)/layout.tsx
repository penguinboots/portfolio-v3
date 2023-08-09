"use client";
import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import {
  ClipboardList,
  FileCode,
  Home,
  LucideIcon,
  Sticker,
  Wrench,
} from "lucide-react";
import { usePathname } from "next/navigation";

type Route = {
  label: string;
  icon: LucideIcon;
  description: string;
};

const routes: { [key: string]: Route } = {
  "/home": {
    label: "Home",
    icon: Home,
    description: "/placeholder text here",
  },
  "/experience": {
    label: "Experience",
    icon: ClipboardList,
    description: "/placeholder text here",
  },
  "/projects": {
    label: "Projects",
    icon: FileCode,
    description: "/placeholder text here",
  },
  "/tools": {
    label: "Tools",
    icon: Wrench,
    description: "/placeholder text here",
  },
  "/contact": {
    label: "Contact",
    icon: Sticker,
    description: "/placeholder text here",
  },
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="h-full relative">
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
        bg-slate-700
        z-50"
      >
        <Sidebar />
      </div>
      <div className="md:hidden">
        <Navbar />
      </div>
      <main className="md:pl-72 lg:pl-96 h-full w-full fixed z-10">
        {pathname !== "/home" && (
          <Header
            title={routes[pathname].label}
            desc={routes[pathname].description}
            icon={routes[pathname].icon}
          />
        )}
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
