import ExperienceCard from "@/components/ExperienceCard";
import SectionCard from "@/components/SectionCard";
import { lighthouse, ubc } from "@/data/experience";

const ExperiencePage = () => {
  let education = [lighthouse, ubc];
  let eduCards = education.map((exp) => (
    <ExperienceCard key={exp.title} exp={exp} />
  ));

  return (
    <div className="w-full flex items-center justify-center sm:py-8">
      <SectionCard colour="slate-300">
        <div className="space-y-6">{eduCards}</div>
      </SectionCard>
    </div>
  );
};

export default ExperiencePage;
