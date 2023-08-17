import { devIcons } from "@/public/icons";
import Image from "next/image";
import { languages, frameworks, systems, testing, other } from "@/lib/skills";

interface Skill {
  img: keyof typeof devIcons;
  name: string;
}

const createSkillList = (skills: Skill[]) => {
  return skills.map((skill) => (
    <li key={skill.name}>
      <Image
        priority
        height={50}
        width={50}
        src={devIcons[skill.img]}
        alt={skill.name}
      />
    </li>
  ));
};

const languagesList = createSkillList(languages);
const frameworksList = createSkillList(frameworks);
const systemsList = createSkillList(systems);
const testingList = createSkillList(testing);
const otherList = createSkillList(other);

const SkillsPage = () => {
  return (
    <div>
      <h3>Languages</h3>
      <ul className="flex">{languagesList}</ul>
      <h3>Frameworks & Libraries</h3>
      <ul className="flex">{frameworksList}</ul>
      <h3>Systems & Databases</h3>
      <ul className="flex">{systemsList}</ul>
      <h3>Testing</h3>
      <ul className="flex">{testingList}</ul>
      <h3>Other</h3>
      <ul className="flex">{otherList}</ul>
    </div>
  );
};

export default SkillsPage;
