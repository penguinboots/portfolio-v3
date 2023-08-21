import FeatureCard from "@/components/FeatureCard";
import ProjectCard from "@/components/ProjectCard";

import {
  portfoliov1,
  portfoliov2,
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
const projects = [
  bytes,
  shortly,
  portfoliov2,
  portfoliov1,
  jungle,
  scheduler,
  tweeter,
];

const ProjectsPage = () => {
  return (
    <div className="w-full flex flex-col items-center bg-slate-300">
      <div className="w-full p-4 gap-4 grid grid-cols-1 sm:max-w-md lg:max-w-none lg:grid-cols-2 2xl:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} project={feature}/>
        ))}
        <div className="bg-slate-100 hidden lg:flex xl:hidden">IMAGE HERE</div>
      </div>
      <div className="w-full p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
