import { ProjectCard } from '@/components/Projects/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1; 
    if (!a.featured && b.featured) return 1;  
    return 0; 
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {sortedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
