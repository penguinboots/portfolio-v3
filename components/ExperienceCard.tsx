import { Experience } from "@/data/experience";

interface ExperienceCardProps {
  exp: Experience;
}

const ExperienceCard = ({ exp }: ExperienceCardProps) => {
  let bulletList = exp.bullets.map((bullet) => <li key={bullet}>{bullet}</li>);

  return (
    <div className="relative w-full rounded-xl overflow-hidden flex flex-col bg-slate-100 p-6">
      <exp.icon className="w-6 h-6 mb-1" />
      <div className="flex flex-col mb-2">
        <p className="text-sm">{exp.date.toUpperCase()}</p>
        <h1 className="font-bold text-xl">{exp.title}</h1>
        <h2 className="text-sm">{exp.subtitle.toUpperCase()}</h2>
      </div>
      <div>{exp.desc}</div>
      <ul className="list-disc list-inside pl-2">{bulletList}</ul>
    </div>
  );
};

export default ExperienceCard;
