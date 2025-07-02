import { ProjectCard } from '@/components/Projects/ProjectCard';
import { projects } from '@/data/projects';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useState, useEffect } from 'react';

export default function ProjectsPage() {
  // Create a list of unique categories for tabs
  const uniqueCategories = ['all', ...new Set(projects.map(project => project.category))];
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Sort and filter projects based on active category
  useEffect(() => {
    // First sort by featured status
    const sorted = [...projects].sort((a, b) => {
      if (a.featured && !b.featured) return -1; 
      if (!a.featured && b.featured) return 1;  
      return 0; 
    });
    
    // Then filter by category if not "all"
    const filtered = activeCategory === 'all'
      ? sorted
      : sorted.filter(project => project.category === activeCategory);
    
    setFilteredProjects(filtered);
  }, [activeCategory]);
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Terminal Style Heading */}
      <div className="w-full mb-8 mt-5 px-4">
        <h2 className="text-4xl font-mono font-extrabold text-gray-900 dark:text-green-500 bg-gray-100 dark:bg-gray-950 border-l-4 border-gray-900 dark:border-green-500 dark:glow-text p-3 rounded-r-md shadow-md backdrop-blur-sm">
          <span className="text-gray-500 dark:text-green-400 mr-2">$</span>
          Projects
          <span className="inline-block w-3 h-5 ml-2 bg-gray-900 dark:bg-green-500 animate-pulse"></span>
        </h2>
      </div>
      
      {/* Category Tabs */}
      <Tabs 
        defaultValue="all" 
        className="w-full mb-6"
        onValueChange={setActiveCategory}
      >
        <TabsList className="w-full flex justify-center bg-gray-100/90 dark:bg-gray-950/90 backdrop-blur-sm rounded-md p-1.5 border border-gray-200 dark:border-gray-700 shadow-inner">
          {uniqueCategories.map(category => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="capitalize font-mono text-sm px-5 py-2 text-gray-700 dark:text-gray-300 
                data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 
                data-[state=active]:text-gray-900 dark:data-[state=active]:text-green-400
                data-[state=active]:border-b-2 dark:data-[state=active]:border-green-500
                data-[state=active]:shadow-md transition-all duration-200 w-fit"
            >
              {category === 'all' ? 'All Projects' : category}
            </TabsTrigger>
          ))}
        </TabsList>        {/* Tab Content */}
        {uniqueCategories.map(category => (
          <TabsContent key={category} value={category} className="w-full px-4">
            <div className="grid p-4 md:p-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-gray-50/50 dark:bg-gray-950/70 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                  <div className="text-gray-500 dark:text-green-400 font-mono mb-2">
                    $ No projects found in category: {category}
                  </div>
                  <div className="text-sm text-gray-400 dark:text-green-500/70 animate-pulse">
                    _
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
