"use client";

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
  SiMongodb,
} from "react-icons/si";
import { FaJava, FaSass } from "react-icons/fa";
import { devIcons } from "@/public/icons";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


interface DevIconProps {
  name: string;
}

const DevIcon: React.FC<DevIconProps> = ({ name }) => {
  let wh = "w-full h-full";
  let icon;
  let displayName;
  switch (name) {
    case "javascript":
      icon = <SiJavascript className={wh} />;
      displayName = "JavaScript";
      break;
    case "typescript":
      icon = <SiTypescript className={wh} />;
      displayName = "TypeScript";
      break;
    case "ruby":
      icon = <SiRuby className={wh} />;
      displayName = "Ruby";
      break;
    case "java":
      icon = <FaJava className={wh} />;
      displayName = "Java";
      break;
    case "html":
      icon = <SiHtml5 className={wh} />;
      displayName = "HTML5";
      break;
    case "css":
      icon = <SiCss3 className={wh} />;
      displayName = "CSS3";
      break;
    case "node":
      icon = <SiNodedotjs className={wh} />;
      displayName = "NodeJS";
      break;
    case "react":
      icon = <SiReact className={wh} />;
      displayName = "ReactJS";
      break;
    case "next":
      icon = <SiNextdotjs className={wh} />;
      displayName = "NextJS";
      break;
    case "express":
      icon = <SiExpress className={wh} />;
      displayName = "Express";
      break;
    case "jquery":
      icon = <SiJquery className={wh} />;
      displayName = "jQuery";
      break;
    case "sass":
      icon = <FaSass className={wh} />;
      displayName = "Sass";
      break;
    case "tailwind":
      icon = <SiTailwindcss className={wh} />;
      displayName = "Tailwind";
      break;
    case "rails":
      icon = <SiRubyonrails className={wh} />;
      displayName = "Rails";
      break;
    case "postgres":
      icon = <SiPostgresql className={wh} />;
      displayName = "PostgreSQL";
      break;
    case "git":
      icon = <SiGit className={wh} />;
      displayName = "Git";
      break;
    case "prisma":
      icon = <SiPrisma className={wh} />;
      displayName = "Prisma";
      break;
    case "mocha":
      icon = <SiMocha className={wh} />;
      displayName = "Mocha";
      break;
    case "chai":
      icon = <SiChai className={wh} />;
      displayName = "Chai";
      break;
    case "storybook":
      icon = <SiStorybook className={wh} />;
      displayName = "Storybook";
      break;
    case "jest":
      icon = <SiJest className={wh} />;
      displayName = "Jest";
      break;
    case "cypress":
      icon = <SiCypress className={wh} />;
      displayName = "Cypress";
      break;
    case "rspec":
      icon = <></>;
      displayName = "RSpec";
      break;
    case "vercel":
      icon = <SiVercel className={wh} />;
      displayName = "Vercel";
      break;
    case "photoshop":
      icon = <SiAdobephotoshop className={wh} />;
      displayName = "Photoshop";
      break;
    case "vite":
      icon = <SiVite className={wh} />;
      displayName = "Vite";
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
      displayName = "shadcn/ui";
      break;
    case "stripe":
      icon = <SiStripe className={wh} />;
      displayName = "Stripe";
      break;
    case "mongodb":
      icon = <SiMongodb className={wh} />;
      displayName = "MongoDB";
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="text-slate-700">{icon}</div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{displayName}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DevIcon;
