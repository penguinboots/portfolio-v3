import { devIcons } from "@/public/icons";
import Image from "next/image";

const languagesArray = ["js", "ts", "ruby", "java", "html", "css"];
const frameworksArray = [
  "node",
  "react",
  "next",
  "express",
  "jquery",
  "sass",
  "tw",
  "rails",
];
const systemsArray = ["postgresql", "git", "prisma"];
const testingArray = ["mocha", "chai", "storybook", "jest", "cypress", "rspec"];
const otherArray = ["vercel", "ps"];

const makeList = (languages: string[]) => {
  let list: React.ReactNode[] = [];
  languages.forEach((language) => {
    const iconKey = language as keyof typeof devIcons;
    list.push(
      <li key={language}>
        <Image width="50" src={devIcons[iconKey]} alt={language} />
      </li>
    );
  });
  return list;
};

const languages = makeList(languagesArray);
const frameworks = makeList(frameworksArray);
const systems = makeList(systemsArray);
const testing = makeList(testingArray);
const other = makeList(otherArray);

const SkillsPage = () => {
  return (
    <div>
      <h3>Languages</h3>
      <ul className="flex">{languages}</ul>
      <h3>Frameworks & Libraries</h3>
      <ul className="flex">{frameworks}</ul>
      <h3>Systems & Databases</h3>
      <ul className="flex">{systems}</ul>
      <h3>Testing</h3>
      <ul className="flex">{testing}</ul>
      <h3>Other</h3>
      <ul className="flex">{other}</ul>
    </div>
  );
};

export default SkillsPage;
