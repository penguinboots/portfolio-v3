'use client'

import {
  SiJavascript,
  SiTypescript,
  SiRuby,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiJquery,
  SiTailwindcss,
  SiRubyonrails,
  SiPostgresql,
  SiGit,
  SiPrisma,
  SiMocha,
  SiChai,
  SiStorybook,
  SiJest,
  SiCypress,
  SiVercel,
  SiAdobephotoshop,
  SiVite,
  SiStripe,
  SiMongodb
} from "react-icons/si";
import { FaJava, FaSass } from "react-icons/fa";
import Image from "next/image";
import { devIcons } from "@/public/icons";
import { useState } from "react";

interface DevIconProps {
  name: string;
}

const DevIcon: React.FC<DevIconProps> = ({ name }) => {
  const [hover, setHover] = useState(false);

  let wh = "w-full h-full"
  let icon;
  let displayName;
  switch (name) {
    case "javascript":
      icon = <SiJavascript className={wh} />;
      displayName = "";
      break;
    case "typescript":
      icon = <SiTypescript className={wh} />;
      displayName = "";
      break;
    case "ruby":
      icon =  <SiRuby className={wh} />;
      displayName = "";
      break;
    case "java":
      icon = <FaJava className={wh} />;
      displayName = "";
      break;
    case "html":
      icon = <SiHtml5 className={wh} />;
      displayName = "";
      break;
    case "css":
      icon = <SiCss3 className={wh} />;
      displayName = "";
      break;
    case "node":
      icon = <SiNodedotjs className={wh} />;
      displayName = "";
      break;
    case "react":
      icon = <SiReact className={wh}/>;
      displayName = "";
      break;
    case "next":
      icon = <SiNextdotjs className={wh} />;
      displayName = "";
      break;
    case "express":
      icon = <SiExpress className={wh} />;
      displayName = "";
      break;
    case "jquery":
      icon = <SiJquery className={wh} />;
      displayName = "";
      break;
    case "sass":
      icon = <FaSass className={wh} />;
      displayName = "";
      break;
    case "tailwind":
      icon = <SiTailwindcss className={wh} />;
      displayName = "";
      break;
    case "rails":
      icon = <SiRubyonrails className={wh} />;
      displayName = "";
      break;
    case "postgres":
      icon = <SiPostgresql className={wh} />;
      displayName = "";
      break;
    case "git":
      icon = <SiGit className={wh} />;
      displayName = "";
      break;
    case "prisma":
      icon = <SiPrisma className={wh} />;
      displayName = "";
      break;
    case "mocha":
      icon = <SiMocha className={wh} />;
      displayName = "";
      break;
    case "chai":
      icon = <SiChai className={wh} />;
      displayName = "";
      break;
    case "storybook":
      icon = <SiStorybook className={wh} />;
      displayName = "";
      break;
    case "jest":
      icon = <SiJest className={wh} />;
      displayName = "";
      break;
    case "cypress":
      icon = <SiCypress className={wh} />;
      displayName = "";
      break;
    case "rspec":
      icon = <></>;
      displayName = "";
      break;
    case "vercel":
      icon = <SiVercel className={wh} />;
      displayName = "";
      break;
    case "photoshop":
      icon = <SiAdobephotoshop className={wh} />;
      displayName = "";
      break;
    case "vite":
      icon = <SiVite className={wh} />;
      displayName = "";
      break;
    case "shadcn":
      icon = (
        <Image
          priority
          height={50}
          width={50}
          src={devIcons.shadcn}
          alt="shadcn"
        />
      );
      displayName = "";
      break;
    case "stripe":
      icon = <SiStripe className={wh} />;
      displayName = "";
      break;
    case "mongodb":
      icon = <SiMongodb className={wh} />;
      displayName = "";
  }
  return (
  <div className="text-slate-700">
    {icon}
    {hover && <div></div>}
    </div>);
};

export default DevIcon;
