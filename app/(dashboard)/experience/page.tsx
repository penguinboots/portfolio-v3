import ExperienceCard from "@/components/ExperienceCard";
import SectionCard from "@/components/SectionCard";
import {
  apple,
  catch122,
  lighthouse,
  minami,
  murphy,
  ubc,
} from "@/data/experience";

const ExperiencePage = () => {
  let education = [lighthouse, ubc];
  let eduCards = education.map((exp) => (
    <ExperienceCard key={exp.title} exp={exp} />
  ));

  let work = [apple, catch122, minami, murphy];
  let workCards = work.map((exp) => (
    <ExperienceCard key={exp.title} exp={exp} />
  ));

  let sectionTitle =
    "w-full lg:w-5/6 text-bold text-2xl mt-6 mb-2 px-2 md:px-0 md:mt-8";
  let cardSection = "flex flex-col items-center w-full space-y-3";

  return (
    <div className="w-full flex flex-col items-center sm:pb-10 md:px-12">
      <h1 className={sectionTitle}>Education</h1>
      <div className={cardSection}>{eduCards}</div>
      <h1 className={sectionTitle}>Employment</h1>
      <div className={cardSection}>{workCards}</div>
    </div>
  );
};

export default ExperiencePage;
