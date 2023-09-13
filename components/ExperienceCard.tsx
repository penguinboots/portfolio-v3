import { Experience } from "@/data/experience";

interface ExperienceCardProps {
  exp: Experience;
}

const ExperienceCard = ({ exp }: ExperienceCardProps) => {
  let bulletList = exp.bullets.map((bullet) => <li key={bullet}>{bullet}</li>);

  return (
    <div
      className="flex w-full flex-col space-y-2 overflow-hidden border-l-8 border-sidebar
                bg-gradient-to-tl from-card to-card-bghover p-8 text-card-text drop-shadow-lg
                sm:rounded-2xl lg:w-5/6"
    >
      <div className="flex flex-col">
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-sidebar">
          <exp.icon className="h-6 w-6 text-card" />
        </div>
        <p className="text-sm">{exp.date.toUpperCase()}</p>
        <h1 className="text-xl font-bold">{exp.title}</h1>
        <h2 className="text-sm">{exp.subtitle.toUpperCase()}</h2>
      </div>
      {exp.desc && <div className="">{exp.desc}</div>}
      <ul className="list-inside list-disc pl-2">{bulletList}</ul>
    </div>
  );
};

export default ExperienceCard;
