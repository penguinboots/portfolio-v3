import FeatureCard from "@/components/FeatureCard";
import ProjectCard from "@/components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full p-4 gap-4 grid grid-cols-1 sm:max-w-md lg:max-w-none lg:grid-cols-2 2xl:grid-cols-3">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
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
