import FeatureCard from "@/components/FeatureCard";
import ProjectCard from "@/components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div>
      <div>FEATURED</div>
      <div className="p-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
      <div>ALL</div>
      <div className="p-4 gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsPage;
