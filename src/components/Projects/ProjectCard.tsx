import React, { useState } from 'react';
import { ExternalLink, Github, BarChart2, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
  onSelect?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-full max-w-2xl hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between relative">
        {project.featured && (
                  <Badge className="absolute -top-1 right-0 bg-yellow-500/90 backdrop-blur-sm">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <h3 className="text-2xl font-bold pr-24">{project.title}</h3>
              </div>
            </div>
            <p className="text-muted-foreground mt-2">{project.shortDescription}</p>
          </div>
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-24 h-24 rounded-lg object-cover ml-4 flex-shrink-0"
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
              {tech}
            </Badge>
          ))}
        </div>

        {isExpanded && (
          <>
            <p className="text-gray-600">{project.longDescription}</p>

            <div className="space-y-2">
              <h4 className="font-semibold">Key Highlights</h4>
              <ul className="list-disc pl-5 space-y-1">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="text-gray-600">{highlight}</li>
                ))}
              </ul>
            </div>

            {project.testimonial && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="italic text-gray-700">"{project.testimonial.text}"</p>
                <div className="mt-2 text-sm">
                  <span className="font-semibold">{project.testimonial.author}</span>
                  <span className="text-gray-500"> - {project.testimonial.position}</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="relative pt-[75%]">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="absolute inset-0 rounded-lg object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div className="flex gap-2">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
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
              className="flex items-center gap-1 text-gray-600 hover:text-gray-800"
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
              className="flex items-center gap-1 text-green-600 hover:text-green-800"
            >
              <BarChart2 className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show More
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </CardFooter>
    </Card>
  );
};
