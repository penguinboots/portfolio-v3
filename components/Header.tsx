import { LucideIcon } from "lucide-react";
import { titleFont } from "@/lib/fonts";
import Navbar from "./Navbar";

interface HeaderProps {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const Header = ({ title, desc, icon: Icon }: HeaderProps) => {
  return (
    <div className="bg-slate-500 h-24 flex items-center justify-between p-4">
      <div className="flex space-x-4">
        <Icon className="w-10 h-10" />
        <div>
          <h1 className={titleFont.className}>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
      <div className="md:hidden">
        <Navbar />
      </div>
    </div>
  );
};
