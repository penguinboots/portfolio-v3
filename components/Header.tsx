import { LucideIcon } from "lucide-react";
import { bodyFont, titleFont } from "@/lib/fonts";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const Header = ({ title, desc, icon: Icon }: HeaderProps) => {
  return (
    <div className="bg-header text-header-text h-24 flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <Icon className="w-12 h-12" />
        <div>
          <h1 className={cn("text-xl pt-1", titleFont.className)}>{title}</h1>
          <h2 className={cn("text-sm", titleFont.className)}>{desc}</h2>
        </div>
      </div>
      <div className="md:hidden">
        <Navbar />
      </div>
    </div>
  );
};
