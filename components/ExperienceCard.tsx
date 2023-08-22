import { Experience } from "@/data/experience";

interface ExperienceCardProps {
  exp: Experience;
}

const ExperienceCard = ({ exp }: ExperienceCardProps) => {
  let bulletList = exp.bullets.map((bullet) => <li key={bullet}>{bullet}</li>);

  return (
    <div className="relative w-full rounded-xl overflow-hidden flex flex-col bg-slate-100 p-6">
      <exp.icon className="w-6 h-6 mb-1" />
      <div className="flex flex-col">
        <p className="text-sm">{exp.date.toUpperCase()}</p>
        <h1 className="font-bold text-xl">{exp.title}</h1>
        <h2 className="text-md">{exp.subtitle}</h2>
      </div>
      <div></div>
      <div>
        <ul className="list-disc list-inside pl-2">{bulletList}</ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
