import FeatureCard from "@/components/FeatureCard";
import ProjectCard from "@/components/ProjectCard";

import {
  portfolio,
  mimikyu,
  shortly,
  jungle,
  scheduler,
  bytes,
  tweeter,
  messenger,
  genius
} from "@/data/projects";

const features = [mimikyu, messenger, genius]

const ProjectsPage = () => {
  return (
    <div className="w-full flex flex-col items-center bg-slate-300">
      <div className="w-full p-4 gap-4 grid grid-cols-1 sm:max-w-md lg:max-w-none lg:grid-cols-2 2xl:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} project={feature}/>
        ))}
        <div className="bg-slate-100 hidden lg:flex xl:hidden">IMAGE HERE</div>
      </div>
      <div className="w-full p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsPage;
