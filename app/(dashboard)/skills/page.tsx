import { devIcons } from "@/public/icons";
import Image from "next/image";
import { languages, frameworks, systems, testing, other } from "@/data/skills";
import { cn } from "@/lib/utils";
import { titleFont } from "@/lib/fonts";
import SectionCard from "@/components/SectionCard";

interface Skill {
  img: keyof typeof devIcons;
  name: string;
}

const createSkillList = (skills: Skill[]) => {
  return skills.map((skill) => (
    <li key={skill.name} className="flex flex-col items-center">
        <Image
          priority
          height={50}
          width={50}
          src={devIcons[skill.img]}
          alt={skill.name}
        />
      <p className="text-xs p-2">{skill.name}</p>
    </li>
  ));
};

const languagesList = createSkillList(languages);
const frameworksList = createSkillList(frameworks);
const systemsList = createSkillList(systems);
const testingList = createSkillList(testing);
const otherList = createSkillList(other);

const skillList = "flex flex-col items-center gap-2";
const skillHeading = cn("text-xl text-center", titleFont.className);
const skillItem = "flex gap-4 flex-wrap justify-center";

const SkillsPage = () => {
  return (
    <div className="w-full flex items-center justify-center sm:py-8">
      <SectionCard colour="slate-300">
        <div className="space-y-6 p-2">
          <div className={skillList}>
            <h2 className={skillHeading}>Languages</h2>
            <ul className={skillItem}>{languagesList}</ul>
          </div>
          <div className={skillList}>
            <h2 className={skillHeading}>Frameworks & Libraries</h2>
            <ul className={skillItem}>{frameworksList}</ul>
          </div>
          <div className={skillList}>
            <h2 className={skillHeading}>Systems & Databases</h2>
            <ul className={skillItem}>{systemsList}</ul>
          </div>
          <div className={skillList}>
            <h2 className={skillHeading}>Testing</h2>
            <ul className={skillItem}>{testingList}</ul>
          </div>
          <div className={skillList}>
            <h2 className={skillHeading}>Other</h2>
            <ul className={skillItem}>{otherList}</ul>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

export default SkillsPage;
