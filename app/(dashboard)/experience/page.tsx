import ExperienceCard from "@/components/ExperienceCard";
import { lighthouse, ubc } from "@/data/experience";

const ExperiencePage = () => {
  let education = [lighthouse, ubc];
  let eduCards = education.map((exp) => (
    <ExperienceCard key={exp.title} exp={exp} />
  ));

  return (
    <div>
      <div className="p-8 space-y-6">{eduCards}</div>
    </div>
  );
};

export default ExperiencePage;
