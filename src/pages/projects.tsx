import { ProjectCard } from '@/components/Projects/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1; 
    if (!a.featured && b.featured) return 1;  
    return 0; 
  });

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Terminal Style Heading */}
      <h2 className="text-4xl font-mono font-extrabold text-gray-900 dark:text-green-500 bg-transparent border-b-2 border-gray-900 dark:border-green-500 dark:glow-text mb-8 p-2 mt-5">
        Projects
      </h2>
      <div className="grid p-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
