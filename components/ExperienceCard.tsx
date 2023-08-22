import { Experience } from "@/data/experience";

interface ExperienceCardProps {
  exp: Experience;
}

const ExperienceCard = ({ exp }: ExperienceCardProps) => {
  
  let bulletList = exp.bullets.map((bullet) => (<li key={bullet}>{bullet}</li>))

  return (
    <div className="relative w-full rounded-xl overflow-hidden flex flex-col bg-slate-100 p-6">
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-xl">{exp.title}</h1>
        {exp.note && <p className="text-sm pt-1">{exp.note.toUpperCase()}</p>}
      </div>
      <div>
        <h2>{exp.completed}</h2>
        <h2 className="text-md">{exp.subtitle}</h2>
      </div>
      <div>
        <ul className="list-disc list-inside pl-2">{bulletList}</ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
