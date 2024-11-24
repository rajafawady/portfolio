import { ProjectCard } from '@/components/Projects/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1; // `a` comes before `b` if `a` is featured and `b` is not
    if (!a.featured && b.featured) return 1;  // `b` comes before `a` if `b` is featured and `a` is not
    return 0; // No change in order if both have the same `featured` status
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {sortedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} onSelect={(selectedProject) => console.log('Selected Project:', selectedProject)} />
      ))}
    </div>
  );
}
