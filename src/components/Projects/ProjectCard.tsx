import React, { useState } from 'react';
import { ExternalLink, Github, BarChart2, Star } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { ImageZoom } from '@/components/Common/ImageZoom';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  thumbnail: string;
  images: string[];
  category: string;
  featured: boolean;
  tech: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  highlights: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card className="w-full max-w-2xl hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
        <CardHeader className="space-y-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between relative">
            {project.featured && (
              <Badge className="absolute -top-1 right-0 bg-yellow-500/90 text-yellow-900 dark:bg-yellow-300 dark:text-yellow-800 backdrop-blur-sm">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
            <div className="flex-1">
              <h3
                onClick={() => setIsDialogOpen(true)} // Open dialog when the title is clicked
                className="text-2xl font-bold pr-24 text-gray-900 dark:text-gray-100 cursor-pointer hover:underline"
              >
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{project.shortDescription}</p>
            </div>
            <ImageZoom src={project.thumbnail} alt={project.title} className="w-full sm:w-24 h-auto sm:h-24 rounded-lg object-cover mt-4 sm:mt-0 sm:ml-4 flex-shrink-0"></ImageZoom>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center">
          <div className="flex gap-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-500"
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-500"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-green-600 hover:text-green-800 dark:text-green-300 dark:hover:text-green-500"
              >
                <BarChart2 className="w-4 h-4" />
                Demo
              </a>
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Dialog for Project Details */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl mx-auto p-6 space-y-6" aria-describedby="project-dialog-description">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">{project.title}</DialogTitle>
          </DialogHeader>

          {/* Scrollable Content */}
          <div className="space-y-4 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-800">
            {/* Long Description */}
            <p className="text-gray-700 dark:text-gray-300">{project.longDescription}</p>

            {/* Highlights */}
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Key Highlights</h4>
              <ul className="list-disc pl-5 space-y-1">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <div className="bg-blue-50 dark:bg-blue-800 p-4 rounded-lg">
                <p className="italic text-gray-700 dark:text-gray-300">&quot;{project.testimonial.text}&quot;</p>
                <div className="mt-2 text-sm">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{project.testimonial.author}</span>
                  <span className="text-gray-500 dark:text-gray-400"> - {project.testimonial.position}</span>
                </div>
              </div>
            )}

            {/* Media */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="relative w-full pt-[56.25%]">
                  <ImageZoom
                    className='absolute inset-0 rounded-lg object-cover w-full h-full'
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
